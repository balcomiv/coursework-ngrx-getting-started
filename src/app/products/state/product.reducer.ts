import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { Product } from '../product';
import * as ProductActions from './product.actions';

export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null, //  Fix Me - Course isn't doing strict checks...
  products: [],
};

//  Not exported, so it can only be used inside of this module
const getProductFeatureState = createFeatureSelector<ProductState>('products');

//  Exported to be used anywhere
export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  (state) => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

/*
  //  Composing Selectors
  //  Rule: When building selectors, define one for each bit of state that is accessed from the store
  export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId =>
      state.products.find(p => p.id === currentProductId))
  )

*/

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(
    ProductActions.setCurrentProduct,
    (state, action): ProductState => ({
      ...state,
      currentProduct: action.product,
    })
  ),
  on(
    ProductActions.clearCurrentProduct,
    (state): ProductState => ({
      ...state,
      currentProduct: null,
    })
  ),
  on(
    ProductActions.initializeCurrentProduct,
    (state): ProductState => ({
      ...state,
      currentProduct: {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      },
    })
  )
);
