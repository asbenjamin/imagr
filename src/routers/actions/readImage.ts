import { Router } from "express";
import { readImage } from "../../controllers/readImageController";
import multer from "multer";

let storage = multer.memoryStorage();
let upload = multer({ storage });

class readImageRouter {
  private _router = Router();
  private _controller = readImage;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.post("/", upload.single("image"), this._controller);
  }
}

export default new readImageRouter().router;
