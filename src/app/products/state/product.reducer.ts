import { createAction, createReducer, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { Product } from '../product';

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

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
