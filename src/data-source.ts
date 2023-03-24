import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import { User } from "./entities/user.entity";
import {createUser1679513697279} from "./migrations/1679513697279-createUser";

const DataSourceConfig = (): DataSourceOptions => {
  // const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  // const migrationsPath: string = path.join(__dirname, "./migrations/**.{ts,js}");
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exist");
  }

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory",
      synchronize: true,
      entities: [User],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [createUser1679513697279],
    entities: [User],
  };
};

const AppDataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
