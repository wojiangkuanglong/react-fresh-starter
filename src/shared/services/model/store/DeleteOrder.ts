export type DeleteOrderPathParams = {
  /**
   * @description ID of the order that needs to be deleted
   * @minLength 1
   * @type integer, int64
   */
  orderId: number;
};

/**
 * @description Invalid ID supplied
 */
export type DeleteOrder400 = unknown;

/**
 * @description Order not found
 */
export type DeleteOrder404 = unknown;

export type DeleteOrderMutationResponse = unknown;

export type DeleteOrderMutation = {
  Response: any;
  PathParams: DeleteOrderPathParams;
  Errors: DeleteOrder400 | DeleteOrder404;
};
