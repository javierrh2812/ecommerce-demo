import json
import urllib.parse as up
import requests as r

from bs4 import BeautifulSoup
from utils.text import slugify

class SuperPet:

    def __init__(self):
        self.base_url = 'https://www.superpet.pe'
        self.current_id = None

    def extrac_from_div(self, content):

        soup = BeautifulSoup(content, 'html.parser')

        # Encuentra todos los divs con la clase "product-tile"
        product_tiles = soup.find_all('div', class_='product')

        products = []

        for tile in product_tiles:
            # Extrae el data-pid, data-url, data-cat
            pid = tile.get('data-pid')
            data_url = tile.get('data-url')
            url = tile.find('a').get('href')

            prod_div = tile.find('div', class_='product-tile')
            category = prod_div.get('data-cat')

            img_element = tile.find('img', class_='tile-image')
            img_src = img_element.get('src')
            img_alt = img_element.get('alt')

            # Determina si el producto tiene variantes
            has_variants = pid.endswith('_m') if pid else False

            product_info = {
                'id': pid,
                'data-url': data_url,
                'url': up.urljoin(self.base_url, url),
                'category': category,
                'variants': has_variants,
                'img_src': img_src,
                'img_alt': img_alt
            }

            products.append(product_info)

        return products

    def extract_data(self, method, path=None, data=None):
        if method == 'get':
            url = up.urljoin(self.base_url, "otras-mascotas")
            res = r.get(url)
            products = self.extrac_from_div(res.content)
        else:
            url = up.urljoin(
                self.base_url,
                "on/demandware.store/Sites-SuperPet-Site/es_PE/CQRecomm-Start"
            )
            res = r.post(url, data=data)
            products = self.extrac_from_div(res.content)

        return products

    def extract_detail_data(self, id_, variants, type_):
        new_data = {}
        relative_path = f"on/demandware.store/Sites-SuperPet-Site/es_PE/Product-Variation?pid={id_}"
        url = up.urljoin(self.base_url, relative_path)
        res = r.get(url)
        data = json.loads(res.content)
        self.current_id = id_

        # Mapping JSON data to the Product type structure
        product = data['product']
        new_data = {
            'id': product['id'],
            'type': type_,
            'handle': slugify(product['productName']),
            'availableForSale': product['available'],
            'title': product['productName'],
            'description': product['shortDescription'],
            'descriptionHtml': product['shortDescription'],
            'options': self.extract_options(product['variationAttributes']),
            'featuredImage': self.extract_image(product['images']['large'][0]),
            'variants': self.extract_variants(product['variationAttributes'], product['price']),
            'images': [self.extract_image(img) for img in product['images']['large']],
            'seo': {
                "title": product['productName'],
                "description": product['shortDescription']
            },
            'tags': [],
            'updatedAt': '2024-08.03',
        }

        if variants:
            new_data['priceRange'] = {
                'maxVariantPrice': self.extract_money(product['price']['max']['sales']),
                'minVariantPrice': self.extract_money(product['price']['min']['sales']),
            }
        else:
            new_data['priceRange'] = {
                'maxVariantPrice': self.extract_money(product['price']['sales']),
                'minVariantPrice': self.extract_money(product['price']['sales']),
            }

        return new_data

    def extract_money(self, sales_data):
        if sales_data:
            return {
                'amount': str(sales_data['value']),
                'currencyCode': sales_data['currency'],
            }
        return {
            'amount': "0.00",
            'currencyCode': "UNKNOWN",
        }

    def extract_image(self, image_data):
        # Dummy width and height as they are not provided in the example JSON
        return {
            'url': up.urljoin(self.base_url, image_data['url']),
            'altText': image_data.get('alt', ''),
            'width': 0,  # Placeholder: Adjust if actual dimensions are available
            'height': 0,  # Placeholder: Adjust if actual dimensions are available
        }

    def extract_options(self, attributes):
        options = []

        if attributes is None:
            return []

        for attr in attributes:
            options.append({
                'id': attr['id'],
                'name': attr['displayName'],
                'values': [val['displayValue'] for val in attr['values']]
            })
        return options

    def extract_variants(self, attributes, price):
        variants = []

        if attributes is None:
            return []

        try:
            for attr in attributes:
                for val in attr['values']:
                    variants.append({
                        'id': val['id'],
                        'title': val['displayValue'],
                        'availableForSale': val.get('selectable', False),
                        'selectedOptions': [
                            {
                                'name': attr['displayName'],
                                'value': val['value']
                            }
                        ],
                        'price': self.extract_money(price['min']['sales'])  # Assume using min price for simplicity
                    })
        except:
            print(self.current_id)
            print(price)
        return variants