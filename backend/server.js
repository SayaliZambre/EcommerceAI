const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")


process.on("unhandleRejection",err =>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    process.exit(1);

});
// const dotenv = require("dotenv");
// dotenv.config();

dotenv.config({ path: "backend/config/config.env" });
connectDatabase()


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

process.on("unhandleRejection",err =>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);

    server.close(()=>{
        process.exist(1);
    });

});