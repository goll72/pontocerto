import { varchar, pgTable } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
    id: varchar({ length: 64 }).primaryKey(),
});
