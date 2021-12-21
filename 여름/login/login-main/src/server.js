import "./db";
import "./models/video";
import express, { Router } from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import vidieoRouter from "./routers/videoRouter";


const PORT = 8000;

const app = express()
// 여기서부터 코드작성가능 express application이 생성되고 난 후!
const logger = morgan("dev")

// view engine을 pug로 바꿔서 html작성을 편하게 하기
app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(logger)
app.use(express.urlencoded({extended: true}));

// 라우터 만들기!



//  use 다음에 get 순서 중요 !! use가 뒤에있으면 작동하지 않음 
//  use는 어떤 url에서든 항상 작동함!!
// app.get("/",여긴 함수자리!!)

app.use("/", rootRouter);
app.use("/videos", vidieoRouter);
app.use("/users", userRouter);
// 여기까지!
export default app;


