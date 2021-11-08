import { IOrder } from 'modules/database/interfaces/order';

import { OrderRepository } from '../repositories/order';
import { OrderService } from './order';

describe('Admin/OrderService', () => {

  let orderRepository: OrderRepository;
  let service: OrderService;

  const order: Omit<IOrder, 'id'> = {
    description: 'description',
    quantity: 1,
    total: 50.99
  };

  beforeEach(async () => {
    orderRepository = new OrderRepository();

    service = new OrderService(orderRepository);
  });

  it('should create a order', async () => {
    jest.spyOn(orderRepository, 'insert').mockImplementationOnce(order => Promise.resolve({ ...order } as any));

    const result = await service.create(order);

    expect(result).not.toBeFalsy();
    expect(result).toEqual(order);
  });

})