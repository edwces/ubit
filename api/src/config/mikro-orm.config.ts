import { Options } from "@mikro-orm/core";
import { environment } from "./environment";

export const mikroORMConfig = {
  type: "postgresql",
  clientUrl: environment.DB_URL,
  debug: environment.DB_DEBUG,
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  migrations: {
    path: "dist/db/migrations",
    pathTs: "src/db/migrations",
  },
  seeder: {
    pathTs: "src/db/seeder",
    path: "dist/db/seeder",
  },
} as Options;
