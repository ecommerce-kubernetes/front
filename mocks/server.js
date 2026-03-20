const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const productRouter = require("./routes/product-service");
const userRouter = require("./routes/user-service");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use("/product-service", productRouter);

server.listen(8000, () => {
  console.log("mock API 게이트웨이 실행");
})