import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Order', table => {
    table.increments('id').primary();

    table.string('description', 150).notNullable();

    table.integer('quantity').notNullable();

    table.decimal('total').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Order');
}
