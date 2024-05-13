// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection FAILED !!! ", err);
});

/*

(async () => {
  try {
    await Mongoose.connect(`process.env.MONGODB_URI/${DB_NAME}`);

    app.on("error", (err) => {
      console.log("Error: " + err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`lostening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: " + error);
  }
})();
*/
