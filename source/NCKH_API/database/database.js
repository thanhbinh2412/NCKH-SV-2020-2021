const sql = require('mssql')
const commonData = require('../Common/commonData')


const pool = new sql.ConnectionPool(commonData.configDB)
.connect()
.then(pool => {
    console.log('Ket noi Thanh Cong')
    return pool
})
.catch(err => {
    console.log('loi:', err);
})

module.exports = {
    sql, pool
}