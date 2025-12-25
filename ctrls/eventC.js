import { readJson, write } from "../utils/funcFs.js"


export const creatEvent = async (req, res) => {
    try {
        const data = await readJson("./DB/events.json")
        const { eventName, ticketsForSale, username } = req.body
        const newEvent = {
            eventName,
            "ticketsAvailable": ticketsForSale,
            "createdBy": username,
        }
        data.push(newEvent)
        await write("./DB/events.json", data)
        res.send({
            "message": "Event created successfully"
        })
    } catch (error) {
        res.send(`Error: `, error)
    }
};