import { PORT } from "./config/config";

const app = express();

const server = app.listen(PORT, async () => {
    console.log("Listening on port: ", PORT);
    await initializeServer();
});