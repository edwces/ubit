import { environment } from "./config";
import { app } from "./app";

app.listen(environment.PORT, () => {
  console.log(`Running on http://localhost:${environment.PORT}`);
});
