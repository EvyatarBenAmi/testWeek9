import express from "express"
import routerUser from "./routes/usersR.js"
import routerCreateEvent from "./routes/eventR.js"
import routerUserActions from "./routes/userActionsR.js"

const app = express()
const port = 3000
app.use(express.json())



app.use("/user", routerUser)
app.use("/creator/events", routerCreateEvent)
app.use("/users", routerUserActions)



app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})