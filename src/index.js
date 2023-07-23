import app from "./app.js";
import config from "../config.js";

app.listen(3000, () =>{
    console.log(config.app_name+" Started on Port 3000")
})