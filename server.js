import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname)); 
app.listen(PORT, () => console.log("Server start on port " + PORT));
