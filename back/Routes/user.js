const route = require('express').Router()
const db = require('../db')

route.post('/', (req, res) => {
    const {username, password} = req.body;
    if (username && password){
        try {
            db.promise().query(`INSERT INTO USERS VALUES('${username}', '${password}')`);
            res.status(201).send({msg: 'Пользователь создан'})
        }catch (e) {
            console.log(e)
        }
    }
})

route.get('/:username', async (req, res) => {
    const params = req.params.username.split('.')
    const result = await db.promise().query(`SELECT * FROM USERS WHERE username = '${params[0]}' AND password = '${params[1]}'`)
    res.json(result)
})

module.exports = route
