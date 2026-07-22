import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contactRoutes.js";
import sequelize from "./dbConnection/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.use("/api/contact", contactRouter);
app.use("/api/register", userRoutes);
app.use("/api/user", userRoutes);

sequelize.sync()
.then(() => {
    console.log("Database synchronized.");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});