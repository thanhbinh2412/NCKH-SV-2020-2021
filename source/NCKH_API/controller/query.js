const { pool } = require('../database/database')
const sql = require('mssql')
const commonData = require('../Common/commonData')
const commonFunc = require('../Common/commonFunc')
const { query } = require('express')


const req = {
    async query(query) {
        const db = await pool
        const dt = await db.request()
            .query(query)

            return dt
    }
}

module.exports = req