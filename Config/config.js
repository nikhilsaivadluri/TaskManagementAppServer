const dotenv = require("dotenv");
dotenv.config();

module.exports={
    DATABASE_PASSWORD:process.env.DATABASE_PASSWORD ?? "taskManagement2023",
    DATABASE_USERNAME:process.env.DATABASE_USERNAME ?? "nikhilsaiv",
    JWT_SECRET:process.env.JWT_SECRET ?? "taskMangamentFvauc265",
 }
