import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running!");
});
