import type { Order } from '../Order.ts';

/**
 * @description successful operation
 */
export type PlaceOrder200 = Order;

/**
 * @description Invalid Order
 */
export type PlaceOrder400 = unknown;

/**
 * @description order placed for purchasing the pet
 */
export type PlaceOrderMutationRequest = Order;

export type PlaceOrderMutationResponse = PlaceOrder200;

export type PlaceOrderMutation = {
  Response: PlaceOrder200;
  Request: PlaceOrderMutationRequest;
  Errors: PlaceOrder400;
};
