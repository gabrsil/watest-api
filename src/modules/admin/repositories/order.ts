import { Injectable } from '@nestjs/common';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';
import { Page, Transaction } from 'objection';

@Injectable()
export class OrderRepository {
  public async list(
    params: IPaginationParams,
    transaction?: Transaction
    ): Promise<Page<Order>> {    let query = Order.query(transaction)
    .select('*')
    .page(params.page, params.pageSize);

    if(params.orderBy){
      query = query.orderBy(params.orderBy, params.orderDirection);
    }

    return query;
  }

  public async insert(model: Omit<IOrder, 'id'>, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(model);
  }
}