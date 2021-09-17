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
  currentProductId: number | boolean; // Id to avoid having 2 copies of the same data (Product && Products[])
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null, //  Fix Me - Course isn't doing strict checks...
  products: [],
  error: '',
};

//  Not exported, so it can only be used inside of this module
const getProductFeatureState = createFeatureSelector<ProductState>('products');

//  Exported to be used anywhere
export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  (state) => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    //  New Product
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      };
    } else {
      //  Get product by id from state (or null [no product selected])
      return currentProductId
        ? state.products.find((product) => product.id === currentProductId)
        : null;
    }
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.error
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
      currentProductId: action.currentProductId,
    })
  ),
  on(
    ProductActions.clearCurrentProduct,
    (state): ProductState => ({
      ...state,
      currentProductId: null,
    })
  ),
  on(
    ProductActions.initializeCurrentProduct,
    (state): ProductState => ({
      ...state,
      currentProductId: 0, //  Because the current product selector will now init new product if id === 0. TODO: Unit Test
    })
  ),
  on(
    ProductActions.loadProductSuccess,
    (state, action): ProductState => ({
      ...state,
      products: action.products,
      error: '',
    })
  ),
  on(
    ProductActions.loadProductFailure,
    (state, action): ProductState => ({
      ...state,
      products: [],
      error: action.error,
    })
  )
);
