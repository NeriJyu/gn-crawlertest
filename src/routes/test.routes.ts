import { Router } from "express";
import TestController from "../controllers/test.controller";

const testRouter = Router();
const testController = new TestController();

testRouter.get("/", async (req, res) => {
  try {
    const test = await testController.findTest();

    res.send(test);
  } catch (err) {
    res.send(err);
  }
});

export default testRouter;
