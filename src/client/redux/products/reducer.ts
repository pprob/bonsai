import {ProductState} from './types';
import {SetProducts, ProductsActionCreatorTypes} from './actions';
const initialState: ProductState = {
  loading: false,
  products: [],
};

type ActionTypes = SetProducts;

const productsReducer = (
  state = initialState,
  action: ActionTypes,
): ProductState => {
  switch (action.type) {
    case ProductsActionCreatorTypes.setProducts:
      return state;

    default:
      return state;
  }
};

export default productsReducer;
