import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const leads = sqliteTable('leads', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  stack: text('stack'),
  problem: text('problem').notNull(),
  language: text('language').notNull().default('en'),
  createdAt: text('created_at').notNull(),
});
