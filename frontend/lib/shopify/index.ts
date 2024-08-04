import { Cart, Collection, Menu, Page, Product } from 'lib/types';
import products from '../../app/products.json';

export const CART: Cart = {
  id: 'cartid',
  checkoutUrl: 'checkouturl',
  cost: {
    subtotalAmount: { amount: '0', currencyCode: '$' },
    totalAmount: { amount: '0', currencyCode: '$' },
    totalTaxAmount: { amount: '0', currencyCode: '$' }
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
  console.log({cartId, CART})
  return CART;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  return undefined;
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
  }
  return products
}

export async function getCollections(): Promise<any[]> {
  return [];
}

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === 'next-js-frontend-header-menu') {
    return [
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
    ];
  } else if (handle === 'next-js-frontend-footer-menu') {
    return [
      {
        title: 'About',
        path: '/about'
      }
    ];
  } else {
    return [];
  }
}

export async function getPage(handle: string): Promise<Page> {
  return {
    id: 'about',
    title: 'About',
    handle: 'about',
    body: 'body',
    bodySummary: 'bodySummary',
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  };
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
  return PRODUCTS[0];
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  return [
    {
      id: '2',
      handle: 'proplan-adult-sensitive-adulto-sensible-alimento-seco-perro',
      availableForSale: true,
      title: 'Proplan Adult Sensitive Adulto Sensible Alimento Seco Perro',
      description: 'Alimento seco para perros con piel sensible',
      descriptionHtml: 'Alimento seco para perros con piel sensible ',
      options: [
        {
          id: 'Peso',
          name: 'Peso',
          values: ['3Kg', '15Kg']
        }
      ],
      priceRange: {
        maxVariantPrice: {
          amount: '424.90',
          currencyCode: 'USD'
        },
        minVariantPrice: {
          amount: '115.90',
          currencyCode: 'USD'
        }
      },
      featuredImage: {
        url: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dw5e79ad54/images/-proplan-adulto-sensitive-3kg.jpg',
        width: 1,
        height: 1,
        altText: 'altetxt'
      },
      variants: [],
      images: [],
      seo: {
        title: 'xd',
        description: 'xdescription'
      },
      tags: ['tag1', 'tag2'],
      updatedAt: ''
    }
  ];
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    handle: 'proplan-adult-complete-razas-medianas-alimento-seco-perro',
    title: 'Proplan Adult Complete Razas Medianas Alimento Seco Perro',
    description:
      'Alimento Super Premium para perros adultos desde los 12 meses hasta los 7 años. Con carne fresca de pollo como ingrediente principal y desarrollado con la energía que los perros de raza pequeña necesitan para mantenerse sanos y activos. Junto con una combinación equilibrada de vitaminas y minerales para una piel y pelaje saludable.',
    images: [
      {
        url: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dwddf261d9/images/-proplan-adulto-complete-3kg.jpg',
        altText: 'imagen alt',
        width: 1,
        height: 1
      }
    ],
    availableForSale: true,
    descriptionHtml: 'Alimento Super Premium para perros adultos desde los 12 meses hasta los 7 años. Con carne fresca de pollo como ingrediente principal y desarrollado con la energía que los perros de raza pequeña necesitan para mantenerse sanos y activos. Junto con una combinación equilibrada de vitaminas y minerales para una piel y pelaje saludable.',
    priceRange: {
      maxVariantPrice: {
        amount: '395.90',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '106.90',
        currencyCode: 'USD'
      }
    },
    options: [
      {
        id: "string",
        name: "Peso",
        values: [
          "3Kg", "15Kg"
        ],
      }
    ],
    featuredImage: {
      url: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dwddf261d9/images/-proplan-adulto-complete-3kg.jpg',
      altText: 'imagen alt',
      width: 1,
      height: 1
    },
    variants: [
      {
        id: "3Kg",
        title: "3Kg",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Peso",
            value: "3Kg",
          }
        ],
        price: {
          amount: '106.90',
          currencyCode: 'USD'
        },
      },
      {
        id: "15Kg",
        title: "15Kg",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Peso",
            value: "15Kg",
          }
        ],
        price: {
          amount: '395.90',
          currencyCode: 'USD'
        },
      }
    ],
    seo: {
      title: '',
      description: ''
    },
    tags: [],
    updatedAt: ''
  }
];

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  return PRODUCTS;
}
