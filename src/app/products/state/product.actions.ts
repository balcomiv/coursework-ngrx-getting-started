import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

//#region Toggle Product
export const toggleProductCode = createAction('[Product] Toggle Product code');
//#endregion

//#region Current Product
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  // Props:
  // Metadata defining the structure of the returned data.
  // Don't need null because we call 'clear current product' action to clear
  props<{ currentProductId: number }>()
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
