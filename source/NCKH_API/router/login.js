var express = require('express');
const commonData = require('../Common/commonData');
var router = express.Router()
const sql = require('../controller/loginController')

const login = router.post("/login", async (req, res) => {
    dt = await sql.login(req.body.NAME, req.body.PASSWORD)
    
    var dt_res = {
        code: commonData.code.success,
        message: commonData.message.success,
        data: []
    }
    if(dt.length != 0){
        dt_res = {
            code: commonData.code.success,
            message: commonData.message.success,
            data: dt

        }
    }else{
        dt_res = {
            code: commonData.code.err,
            message: commonData.message.error,
            data: []
        }
    }

    res.json(dt_res)
});

module.exports = login