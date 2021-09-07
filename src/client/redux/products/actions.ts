export enum ProductsActionCreatorTypes {
  fetchProducts = 'FETCH_PRODUCTS',
  setProducts = 'SET_PRODUCTS',
}

export type FetchProducts = {
  type: string;
};

export type SetProducts = {
  type: ProductsActionCreatorTypes;
  payload: any;
};

export const fetchProducts = (): FetchProducts => ({
  type: ProductsActionCreatorTypes.fetchProducts,
});

export const setProducts = (payload: any): SetProducts => ({
  type: ProductsActionCreatorTypes.setProducts,
  payload,
});
