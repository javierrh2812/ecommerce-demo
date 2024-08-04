import json
from services.superpet import SuperPet

def main():
    sp = SuperPet()
    products = []

    with open('data/dogs.json') as dog_file:
        dogs_data = json.load(dog_file)

    with open('data/cats.json') as cat_file:
        cats_data = json.load(cat_file)

    with open('data/others.json') as other_file:
        others_data = json.load(other_file)

    for dog_data in dogs_data:
        product = sp.extract_detail_data(id_=dog_data.get('id'), variants=dog_data.get('variants'), type_='dogs')
        products.append(product)

    for cat_data in cats_data:
        product = sp.extract_detail_data(id_=cat_data.get('id'), variants=cat_data.get('variants'), type_='cats')
        products.append(product)

    for others_data in others_data:
        product = sp.extract_detail_data(id_=others_data.get('id'), variants=others_data.get('variants'), type_='others')
        products.append(product)

    with open("data/products.json", 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=2)

if __name__ == '__main__':
    main()