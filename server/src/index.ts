import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

import authRoutes from "./auth";

const app = express();

app.use(express.json());
app.use(cors());

const router = express.Router();

app.use("/api", router);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
