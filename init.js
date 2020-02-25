import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./model/video";
import "./model/comment";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
