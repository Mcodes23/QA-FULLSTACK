import express from "express";
import cors from "cors";
import eventRoutes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", eventRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Event API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
