const { pool } = require('../database/database')
const commonData = require('../Common/commonData')
const commonFunc = require('../Common/commonFunc')
const req = require('./query')


const moiThau = {
    // req: DD/MM/YYYY
    // to DB: MM/DD/YYYY
    // to Date: YYYY-MM-DD
    // Thêm mới gói thầu
    async createPack(tenGoiThau, maDinhDanh, ngayCongBo, ngayDongThau) {

        try {

            let maDuAn = await commonFunc.genID(1)
            let tmp = null
            console.log(maDuAn);
            let timeCheck = commonFunc.formatDateYYYY_MM_DD(ngayCongBo)
            console.log('ngay cong bo: ', ngayCongBo);
            console.log('ngay cong bo: ', timeCheck);
            if (commonFunc.checkDate(timeCheck)) {
                tmp = 1
            } else {
                tmp = 0
            }
            let NgayCongBo = commonFunc.formatDateToDB(ngayCongBo)
            let NgayDongThau = commonFunc.formatDateToDB(ngayDongThau)
            let query = `
            INSERT INTO DU_AN_XAY_DUNG
                VALUES(
                    '${maDuAn}', 
                    N'${tenGoiThau}', 
                    '${maDinhDanh}', 
                    '${NgayCongBo}', 
                    '${NgayDongThau}', 
                    ${tmp})`
            const db = await pool
            const dt = await db.request()
                .query(query)
            console.log(dt);
            tmp = null
            return dt

        } catch (err) {

        }



    },

    // danh sách các gói thầu 
    async listPack(maDuAn) {
        try {
            let query = `
        DECLARE @ma_du_an varchar(50)
        SET @ma_du_an = '${maDuAn}'
        SELECT a.*, b.TEN_TO_CHUC
	        FROM DU_AN_XAY_DUNG AS a
	            INNER JOIN NGUOI_DUNG AS b
			    ON a.MA_DINH_DANH = b.MA_DINH_DANH
	    WHERE MA_DU_AN = CASE WHEN @ma_du_an IS NULL THEN MA_DU_AN WHEN @ma_du_an = '' THEN MA_DU_AN ELSE @ma_du_an END
        `
            const db = await pool
            const dt = await db.request()
                .query(query)

            const tmpArr = []
            for (var i = 0; i < dt.recordset.length; i++) {
                var tmp = await this.listPick(dt.recordset[i].MA_DU_AN)

                var tmp1 = dt.recordset[i]
                tmp1["DANG_KI"] = tmp
                tmpArr.push(tmp1)
            }

            // var tmp = await this.listPick()
            // console.log(tmp);

            // var tmp1 = dt.recordset[0]
            // tmp1["DANG_KI"] = tmp
            // console.log(tmp1);



            return tmpArr
        } catch (error) {

        }


    },


    // danh sách đăng kí gói thầu
    async listPick(maDuAn) {
        try {
            let query = `
            SELECT a.*, c.TEN_TO_CHUC, b.TEN_GOI_THAU
            FROM DANH_SACH_DAU_THAU AS a
                INNER JOIN DU_AN_XAY_DUNG AS b
                    ON a.MA_DU_AN = b.MA_DU_AN
                INNER JOIN NGUOI_DUNG AS c
                    ON a.MA_DINH_DANH = c.MA_DINH_DANH
            WHERE a.MA_DU_AN = '${maDuAn}'`

            var dt = await req.query(query)

            return dt.recordset
        } catch (error) {

        }
    },

    async listMoiThau() {
        try {
            let query = `select a.TEN_CA_NHAN, a.TEN_TO_CHUC, a.MA_DINH_DANH from NGUOI_DUNG AS a where ROLE = 0`

            var dt = await req.query(query)

            return dt.recordset
        } catch (error) {
            
        }
    }
}

module.exports = moiThau