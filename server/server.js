require("dotenv").config(); // подключаем файл конфигурации

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4444; // достаём и присваиваем порт из файла конфигурации
const app = express(); // создаём серверное приложение

app.get("/", (req, res) => {
   res.status(200).json("Start server!");
});

const start = async () => {
   try {
      app.listen(PORT, () => {
         // запуск приложения
         console.log(`SERVER STARTED ON PORT = ${PORT} !`);
      });
   } catch (error) {
      console.log(error);
   }
};

start();
