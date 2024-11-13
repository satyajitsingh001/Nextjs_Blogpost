import mongoose from "mongoose";

const ConnectDb = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/Blog")
    .then((data) => {
      console.log(`database connected to: ${data.connection.host}`);
    })
    .catch((error) => {
      console.log("database connetion faild", error);
    });
};

module.exports = ConnectDb;
