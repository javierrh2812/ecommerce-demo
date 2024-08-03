import { Cart, Collection, Menu, Page, Product } from 'lib/types';

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
  return [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];
}

export async function getCollections(): Promise<any[]> {
  return [];
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
    'frontend-footer': [
      {
        title: 'About',
        path: '/about'
      }
    ]
  };

  return menus[handle] ?? [];
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
  return PRODUCTS.find((product) => product.handle === handle) || PRODUCTS[0];
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const recomendations = [...PRODUCTS].reverse();
  return recomendations;
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
    descriptionHtml:
      'Alimento Super Premium para perros adultos desde los 12 meses hasta los 7 años. Con carne fresca de pollo como ingrediente principal y desarrollado con la energía que los perros de raza pequeña necesitan para mantenerse sanos y activos. Junto con una combinación equilibrada de vitaminas y minerales para una piel y pelaje saludable.',
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
        id: 'string',
        name: 'Peso',
        values: ['3Kg', '15Kg']
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
        id: '3Kg',
        title: '3Kg',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Peso',
            value: '3Kg'
          }
        ],
        price: {
          amount: '106.90',
          currencyCode: 'USD'
        }
      },
      {
        id: '15Kg',
        title: '15Kg',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Peso',
            value: '15Kg'
          }
        ],
        price: {
          amount: '395.90',
          currencyCode: 'USD'
        }
      }
    ],
    seo: {
      title: '',
      description: ''
    },
    tags: [],
    updatedAt: ''
  },
  {
    id: '2',
    handle: 'mio-cane-super-premium-piel-sensible-alimento-seco-perro',
    title: 'Mio Cane Super Premium Piel Sensible Alimento Seco Perro',
    description: 'Alimento seco para medicado para perros con piel sensible',
    images: [
      {
        url: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dwb16b341b/images/-mio-cane-piel-sensible.jpg',
        altText: 'imagen alt',
        width: 1,
        height: 1
      }, 
      {
        url: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dw91fd527e/images/racion-sp-adps.jpg',
        altText: '',
        width: 300,
        height: 300
      }
    ],
    availableForSale: true,
    descriptionHtml: `Formulado especialmente para perros con problemas de alergias o intolerancia a otros alimentos. Se utiliza el huevo como principal fuente de proteínas y el arroz como fuente de carbohidratos.

    La albúmina del huevo es una proteína con alto valor nutricional, fácil de asimilar y que no genera alergias.
    Los carbohidratos del arroz son fáciles de digerir evitando los problemas estomacales.
    No contiene pescado, maíz o trigo los cuales pueden ser fuentes de alergias.
    La protección está reforzada con la incorporación de MOS (mananoligosacáridos) los cuales protegen el tracto digestivo del perro y contribuyen con la eliminación de alergias o estrés estomacal.
    Contiene niveles superiores de zinc y vitamina C los cuales estimulan las defensas del perro protegiéndolo contra todo tipo de estrés.
    El selenio, la biotina y los ácidos grasos omega 3 y 6 protegen y reparan la piel manteniéndola brillante y saludable.
    Consulta este y otros productos similares en Alimento Seco para Perro`,
    priceRange: {
      maxVariantPrice: {
        amount: '240.90',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '86.90',
        currencyCode: 'USD'
      }
    },
    options: [
      {
        id: 'string',
        name: 'Peso',
        values: ['4Kg', '15Kg']
      }
    ],
    featuredImage: {
      url: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dwb16b341b/images/-mio-cane-piel-sensible.jpg',
      altText: 'imagen alt',
      width: 1,
      height: 1
    },
    variants: [
      {
        id: '4Kg',
        title: '4Kg',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Peso',
            value: '4Kg'
          }
        ],
        price: {
          amount: '86.90',
          currencyCode: 'USD'
        }
      },
      {
        id: '15Kg',
        title: '15Kg',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Peso',
            value: '15Kg'
          }
        ],
        price: {
          amount: '240.90',
          currencyCode: 'USD'
        }
      }
    ],
    seo: {
      title: '',
      description: ''
    },
    tags: [],
    updatedAt: ''
  },
  {
    id: '3',
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
