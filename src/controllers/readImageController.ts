import { Request, Response } from "express";
import Tesseract from "tesseract.js";

export async function readImage(req: Request, res: Response) {
  console.log("API Clear");

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const imageBuffer = req.file.buffer;

    const {
      data: { text },
    } = await Tesseract.recognize(imageBuffer, "eng", {
      logger: (m) => console.log(m),
    });

    console.log(text)
    return res.json({ text });
  } catch (error) {
    console.error("Error during text extraction:", error);
    return res.status(500).json({ error: "Error during text extraction" });
  }

  // TODO
  // upload image onto temporary
  // process image using image to text library
  // return processed data to some data structure
}
