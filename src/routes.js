const express = require("express");
const routes = express.Router();

const userController = require("./controllers/userController");
const elasticSearchController = require("./controllers/elasticSearchController");

routes
  .get("/", (req, res) => {
    res.end("Desafio Global Tecnologia.");
  })

  .get("/helth-check", elasticSearchController.index)

  .get("/users", userController.index)
  .post("/users", userController.create)
  .put("/users/:id", userController.update)
  .delete("/users/:id", userController.delete);

module.exports = routes;
