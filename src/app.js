import express from "express";
import productsRoutes from "../src/routes/products.routes";
import authRoutes from "./routes/auth.routes";
import createRoles from "./libs/initialSetup";
import cors from 'cors';

const app = express();

// Ejecutar la función para crear roles por defecto
createRoles();

// Configurar CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Si necesitas enviar cookies o encabezados de autorización
  optionsSuccessStatus: 204 // Algunos navegadores (Chrome) tratan 204 no modificados como un éxito
};

// Usar CORS con las opciones definidas
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API new new");
});

// Rutas de la API
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);

export default app;
