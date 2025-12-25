import express from "express"
import {buyTickets,purchaseSummaryByName} from "../ctrls/userActionsC.js"
import { validateUser } from "../middlewares/validates.js"


const router = express.Router();


router.post("/tickets/buy", validateUser, buyTickets)
router.get("/:username/summary", purchaseSummaryByName)



export default router