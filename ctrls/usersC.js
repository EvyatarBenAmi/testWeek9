import { readJson, write } from "../utils/funcFs.js"


export const creatUser = async (req, res) => {
    try {
        const data = await readJson("./DB/users.json")
        const { username, password } = req.body
        const choice = data.find(value => value.username === username)
        if (choice) {
            return res.send(`Username unlawful`)
        } else {
            data.push({
                username,
                password
            })
            await write("./DB/users.json", data)
            res.send({
                "message": "User registered successfully"
            })
        }
    } catch (error) {
        res.send(`Error: `, error)
    }
};