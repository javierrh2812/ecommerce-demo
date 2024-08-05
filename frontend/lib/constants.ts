import { Collection, Menu, Page } from 'lib/types';

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const COLLECTIONS: Collection[] = [
  {
    path: 'dogs',
    handle: 'dogs',
    title: 'Perros',
    description: 'Productos para perros',
    seo: {
      title: 'Perros',
      description: 'Productos para perros'
    },
    updatedAt: ''
  },
  {
    path: 'cats',
    handle: 'cats',
    title: 'Gatos',
    description: 'Productos para gatos',
    seo: {
      title: 'Gatos',
      description: 'Productos para gatos'
    },
    updatedAt: ''
  },
  {
    path: 'others',
    handle: 'others',
    title: 'Otras Mascotas',
    description: 'Productos para otras mascotas',
    seo: {
      title: 'Otras Mascotas',
      description: 'Productos para otras mascotas'
    },
    updatedAt: ''
  }
];

export const FOOTER_PAGES: Menu[] = [
  {
    title: 'Inicio',
    path: '/'
  },
  {
    title: 'Sobre Nosotros',
    path: '/about'
  },
  {
    title: 'Términos y Condiciones',
    path: '/terms-and-conditions'
  },
  {
    title: 'Políticas de Privacidad',
    path: '/privacy-policy'
  }
]

export const PAGES: Page[] = [
  {
    id: '1',
    title: 'Sobre Nosotros',
    handle: 'about',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus. Integer orci tellus, faucibus accumsan commodo vel, imperdiet ac odio. Suspendisse nec interdum urna. Phasellus nec commodo mi. Aliquam a dolor ante. Cras ornare dictum enim quis varius. Nulla porttitor mi ornare rhoncus iaculis. Duis neque dolor, vehicula eget nisi at, molestie congue leo. Vestibulum facilisis urna ac est placerat, a auctor nibh lacinia. Vivamus ut erat sed dui gravida placerat. Sed mollis mauris at elementum ultricies.

      Vestibulum sodales at nulla vel auctor. Nulla ornare pharetra justo, at consequat sapien finibus vitae. Nulla rutrum, justo at aliquet dapibus, enim tellus laoreet ante, eget hendrerit nibh ex nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel luctus risus. Aenean ac orci sodales, consectetur nisl sit amet, ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar placerat suscipit. Cras eget interdum turpis. Praesent vel molestie quam, viverra interdum dolor. 
    `,
    bodySummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.',
    seo: {
      title: 'Sobre Nosotros',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.'
    },
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  },
  {
    id: '2',
    title: 'Términos y condiciones',
    handle: 'terms-and-conditions',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus. Integer orci tellus, faucibus accumsan commodo vel, imperdiet ac odio. Suspendisse nec interdum urna. Phasellus nec commodo mi. Aliquam a dolor ante. Cras ornare dictum enim quis varius. Nulla porttitor mi ornare rhoncus iaculis. Duis neque dolor, vehicula eget nisi at, molestie congue leo. Vestibulum facilisis urna ac est placerat, a auctor nibh lacinia. Vivamus ut erat sed dui gravida placerat. Sed mollis mauris at elementum ultricies.

      Vestibulum sodales at nulla vel auctor. Nulla ornare pharetra justo, at consequat sapien finibus vitae. Nulla rutrum, justo at aliquet dapibus, enim tellus laoreet ante, eget hendrerit nibh ex nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel luctus risus. Aenean ac orci sodales, consectetur nisl sit amet, ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar placerat suscipit. Cras eget interdum turpis. Praesent vel molestie quam, viverra interdum dolor. 
    `,
    bodySummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.',
    seo: {
      title: 'Términos y condiciones',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.'
    },
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  },
  {
    id: '3',
    title: 'Políticas de Privacidad',
    handle: 'privacy-policy',
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus. Integer orci tellus, faucibus accumsan commodo vel, imperdiet ac odio. Suspendisse nec interdum urna. Phasellus nec commodo mi. Aliquam a dolor ante. Cras ornare dictum enim quis varius. Nulla porttitor mi ornare rhoncus iaculis. Duis neque dolor, vehicula eget nisi at, molestie congue leo. Vestibulum facilisis urna ac est placerat, a auctor nibh lacinia. Vivamus ut erat sed dui gravida placerat. Sed mollis mauris at elementum ultricies.

      Vestibulum sodales at nulla vel auctor. Nulla ornare pharetra justo, at consequat sapien finibus vitae. Nulla rutrum, justo at aliquet dapibus, enim tellus laoreet ante, eget hendrerit nibh ex nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel luctus risus. Aenean ac orci sodales, consectetur nisl sit amet, ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar placerat suscipit. Cras eget interdum turpis. Praesent vel molestie quam, viverra interdum dolor. 
    `,
    bodySummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.',
    seo: {
      title: 'Políticas de Privacidad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.'
    },
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  },
]

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
