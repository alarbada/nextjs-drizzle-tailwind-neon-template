import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow(),
});
