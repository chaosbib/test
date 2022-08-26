import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { UserController } from "./controllers/user.controller";

class App {

  public express: express.Application;
  public userController: UserController;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.userController = new UserController();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  private routes(): void {

    // this.express.get('/api/users', (req, res) => {
    //   this.userController.getUsers().then(data => res.json(data));
    // });
    
    // this.express.post('/api/user', (req, res) => {
    //   console.log(req.body);
    //   this.userController.createUser(req.body).then(data => res.json(data));
    // });

    // Authentication

    this.express.post('/api/login', (req, res) => {
      if (req.headers.authorization) this.userController.login(req.headers.authorization).then(data => res.json(data));
    })

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });
  }
}

export default new App().express;