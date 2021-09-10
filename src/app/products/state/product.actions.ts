import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

//#region Toggle Product
export const toggleProductCode = createAction('[Product] Toggle Product code');
//#endregion

//#region Current Product
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>() //  metadata defining the structure of the returned data
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);
//#endregion

//#region Load Product
export const loadProduct = createAction('[Product] Load');

export const loadProductSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductFailure = createAction(
  '[Product] Load Failure',
  props<{ error: string }>()
);

//#endregion
