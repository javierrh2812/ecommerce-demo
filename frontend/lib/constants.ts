import { Collection } from 'lib/types';

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

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
