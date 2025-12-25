import express from "express"
import {creatUser} from "../ctrls/usersC.js"
import { validateUser } from "../middlewares/validates.js"


const router = express.Router();


router.post("/register", validateUser, creatUser)



export default router