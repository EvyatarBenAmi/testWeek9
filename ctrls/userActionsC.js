import { readJson, write } from "../utils/funcFs.js"


export const buyTickets = async (req, res) => {
    try {
        const dataevent = await readJson("./DB/events.json")
        const { username, eventName, quantity } = req.body
        const choice = dataevent.find(event => event.eventName === eventName)
        if (choice) {
            if (Number(choice.ticketsAvailable) >= quantity) {
                dataevent.forEach(event => {
                    if (event.eventName === eventName) {
                        event.ticketsAvailable -= quantity
                    }
                });
                await write("./DB/events.json", dataevent)
                const dataReceipts = await readJson("./DB/receipts.json")
                dataReceipts.push({
                    username,
                    eventName,
                    "ticketsBought": quantity
                })
                await write("./DB/receipts.json", dataReceipts)
                return res.send({
                    "message": "Tickets purchased successfully"
                })
            } else { return res.send(`Error: Not enough tickets`) }
        } else { return res.send(`Error: eventName not found`) }
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const purchaseSummaryByName = async (req, res) => {
    try {
        const data = await readJson("./DB/receipts.json")
        const receiptsByUsername = data.filter(receipt => receipt.username === req.params.username)
        const totalTickets = 0
        receiptsByUsername.forEach(ticket=> totalTickets += ticket.ticketsBought )
        res.send(` `)
    } catch (error) {
        res.send(`Error: `, error)
    }
}