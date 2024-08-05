import { Cart, Collection, Menu, Page, Product } from 'lib/types';
import products from '../../app/products.json';
import { COLLECTIONS, FOOTER_PAGES, PAGES } from 'lib/constants'

export const CART: Cart = {
  id: 'cartid',
  checkoutUrl: 'https://api.whatsapp.com/send?phone=51941392823&text=Hola, vengo de mascotamigo.com',
  cost: {
    subtotalAmount: { amount: '0', currencyCode: 'USD' },
    totalAmount: { amount: '0', currencyCode: 'USD' },
    totalTaxAmount: { amount: '0', currencyCode: 'USD' }
  },
  lines: [],
  totalQuantity: 0
};
export async function createCart(): Promise<Cart> {
  return CART;
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  return CART;
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  return CART;
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  return CART;
}

export async function getCart(cartId: string | undefined): Promise<Cart | undefined> {
  // if (!cartId) {
  //   return undefined;
  // }
  return CART;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  return COLLECTIONS.find((val) => val.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  if (collection === 'hidden-homepage-carousel') {
    var shuffled = products.sort(function(){ return 0.5 - Math.random() });
    var selected = shuffled.slice(0,4);
    return selected
  } else if (collection === 'hidden-homepage-featured-items') {
    return products.slice(0, 3);
  } else {
    return products.filter((val) => val.tags.includes(collection))
  }
}

export async function getCollections(): Promise<Collection[]> {
  return COLLECTIONS
}

export async function getMenu(handle: 'frontend-header' | 'frontend-footer'): Promise<Menu[]> {
  const menus = {
    'frontend-header': [
      {
        title: 'Perros',
        path: '/search/dogs'
      },
      {
        title: 'Gatos',
        path: '/search/cats'
      },
      {
        title: 'Otros amigos',
        path: '/search/others'
      }
    ],
    'frontend-footer': FOOTER_PAGES
  };

  return menus[handle] ?? [];
}

export async function getPage(handle: string): Promise<Page | undefined> {
  return PAGES.find((val) => val.handle === handle)
}

export async function getPages(): Promise<Page[]> {
  return [
    {
      id: '1',
      title: 'string',
      handle: 'string',
      body: 'string',
      bodySummary: 'string',
      seo: {
        title: 'string',
        description: 'string'
      },
      createdAt: '2024-04-12',
      updatedAt: '2024-04-12'
    },
    {
      id: '2',
      title: 'string',
      handle: 'string',
      body: 'string',
      bodySummary: 'string',
      seo: {
        title: 'string',
        description: 'string'
      },
      createdAt: '2024-04-12',
      updatedAt: '2024-04-12'
    }
  ];
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return products.find((product) => product.handle === handle);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  // Step 1: Find the product by its ID
  const currentProduct = products.find((p: Product) => p.id === productId);
  if (!currentProduct) {
    throw new Error(`Product with ID ${productId} not found`);
  }

  // Step 2: Get the tags of the found product
  const productTags = currentProduct.tags;

  // Step 3: Filter products that share at least one tag
  const recommendedProducts = products.filter((p: Product) => {
    // Exclude the original product from the recommendations
    if (p.id === productId) return false;

    // Check for shared tags
    return p.tags.some(tag => productTags.includes(tag));
  });

  return recommendedProducts.slice(0,5)
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  return products.filter((val) => val.title.toLowerCase().includes(query as string));
}
