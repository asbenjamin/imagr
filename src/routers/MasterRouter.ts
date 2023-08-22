// src/routers/MasterRouter.ts
import { Router } from "express";
import readImageRouter from "./actions/readImage";

class MasterRouter {
  private _router = Router();
  private _readImageRouter = readImageRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use("/read-image", this._readImageRouter);
  }
}

export = new MasterRouter().router;
