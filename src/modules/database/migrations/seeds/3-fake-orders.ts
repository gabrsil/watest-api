import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<void> {
  if (!IS_DEV) return;

  const users = await knex
    .count()
    .from('Order')
    .first();

  if (Number(users.count) !== 1) return;

  for (let x = 0; x < 100; x++) {
    const description = faker.commerce.productName();
    const quantity = faker.random.number(10);
    const total = faker.random.number(200)

    const order: Omit<IOrder, 'id'> = {
      description,
      quantity,
      total,
    };

    await knex.insert(order).into('Order');
  }
}
