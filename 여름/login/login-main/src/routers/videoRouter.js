import express from "express";
import { getUpload,getEdit, watch, postEdit, postUpload } from "../controllers/videoController";

const vidieoRouter = express.Router();

// :id때문에 순서가 중요해짐!!!! => 하지만 애초에 id는 숫자로만 받아들이게 만든다면?? => 순서무시가능~
vidieoRouter.get("/:id([0-9a-f]{24})", watch);
vidieoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
vidieoRouter.route("/upload").get(getUpload).post(postUpload);

export default vidieoRouter;