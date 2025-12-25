import express from "express"
import {creatEvent} from "../ctrls/eventC.js"
import { validateUser } from "../middlewares/validates.js"


const router = express.Router();


router.post("/", validateUser, creatEvent)



export default router