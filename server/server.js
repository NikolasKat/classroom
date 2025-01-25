require("dotenv").config(); // подключаем файл конфигурации

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index");
const errorMiddleware = require("./middleware/error-middleware");

const PORT = process.env.PORT || 4444; // достаём и присваиваем порт из файла конфигурации
const app = express(); // создаём серверное приложение

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
   try {
      await mongoose.connect(process.env.DB_URL);
      app.listen(PORT, () => {
         console.log(`SERVER STARTED ON PORT = ${PORT} !`);
      });
   } catch (error) {
      console.log(error);
   }
};

start();
