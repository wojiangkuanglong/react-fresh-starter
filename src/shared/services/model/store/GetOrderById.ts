import type { Order } from '../Order.ts';

export type GetOrderByIdPathParams = {
  /**
   * @description ID of pet that needs to be fetched
   * @minLength 1
   * @maxLength 10
   * @type integer, int64
   */
  orderId: number;
};

/**
 * @description successful operation
 */
export type GetOrderById200 = Order;

/**
 * @description Invalid ID supplied
 */
export type GetOrderById400 = unknown;

/**
 * @description Order not found
 */
export type GetOrderById404 = unknown;

export type GetOrderByIdQueryResponse = GetOrderById200;

export type GetOrderByIdQuery = {
  Response: GetOrderById200;
  PathParams: GetOrderByIdPathParams;
  Errors: GetOrderById400 | GetOrderById404;
};
