import mongoose from "mongoose";

async function dataBase(){
try {
  await mongoose.connect(process.env.DB_STRING);
  console.log("🚀connected succcessfully");
} catch (error) {
  console.log("error while connecting to mongo db :",error.message);
  process.exit(1);
}
}


export default dataBase;
