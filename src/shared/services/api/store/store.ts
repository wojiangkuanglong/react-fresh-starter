/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { deleteOrder } from './deleteOrder.ts';
import { getInventory } from './getInventory.ts';
import { getOrderById } from './getOrderById.ts';
import { placeOrder } from './placeOrder.ts';

export function store() {
  return { getInventory, placeOrder, getOrderById, deleteOrder };
}
