import { CartProductPreferences } from './cartProductPreferencesInterface';
// import interface: product because the cart interface is going to have products
import { Products } from './productInterface';
export interface Cart{
  id: number;
 product: Products;
 preferences?: CartProductPreferences;
 productQuantity: number;
}




