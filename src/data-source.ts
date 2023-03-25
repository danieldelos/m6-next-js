import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contacts.entity";
import {createUser1679513697279} from "./migrations/1679513697279-createUser";
import { createContact1679753229578 } from "./migrations/1679753229578-createContact";

const DataSourceConfig = (): DataSourceOptions => {
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
      entities: [User, Contact],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [createUser1679513697279, createContact1679753229578],
    entities: [User, Contact],
  };
};

const AppDataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
