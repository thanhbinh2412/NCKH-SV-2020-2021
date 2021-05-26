var express = require('express');
var router = express.Router()
const commonFunc = require('../Common/commonFunc')
const commonData = require('../Common/commonData')
var sql = require('../controller/moithauController')
const dateformat = require('dateformat')

const themMoiGoiThau = router.post('/moi_thau/them_moi_goi_thau', async (req, res) => {
    // maDuAn, tenGoiThau, maDinhDanh, ngayCongBo, ngayDongThau
    dt = await sql.createPack(req.body.TEN_GOI_THAU, req.body.MA_DINH_DANH, req.body.NGAY_CONG_BO, req.body.NGAY_DONG_THAU)
    var dt_res = {
        code: commonData.code.success,
        message: commonData.message.success,
        data: []
    }
    if(dt.rowsAffected[0] != 0){
        dt_res = {
            code: commonData.code.success,
            message: commonData.message.success,
            data: []
        }
    }else{
        dt_res = {
            code: commonData.code.err,
            message: commonData.message.error,
            data: []
        }
    }
    res.json(dt_res)
})

const danhSachGoiThau = router.post('/moi_thau/danh_sach_goi_thau', async (req, res) => {
    dt = await sql.listPack(req.body.MA_DU_AN)
    var dt_res = {
        code: commonData.code.success,
        message: commonData.message.success,
        data: []
    }
    if (dt.length != 0) {
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
})

const danhSachMoiThau = router.post('/moi_thau/danh_sach_moi_thau', async (req, res) => {
    dt = await sql.listMoiThau()

    var dt_res = {
        code: commonData.code.success,
        message: commonData.message.success,
        data: []
    }
    if (dt.length != 0) {
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
})

module.exports = router