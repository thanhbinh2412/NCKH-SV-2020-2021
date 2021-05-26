const { pool } = require('../database/database')
const sql = require('mssql')
const commonData = require('../Common/commonData')
const login = {
    async login(name, pass) {
        try {
            let query = `select * from NGUOI_DUNG where TEN_DANG_NHAP = '${name}' and MAT_KHAU = '${pass}'`
            const db = await pool
            const dt = await db.request()
            .query(query)
            return dt.recordset
            
        } catch (err) {

        }
        
    }

    
}

module.exports = login