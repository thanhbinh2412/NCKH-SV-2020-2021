var express = require('express')
var router = express.Router()
const commonData = require('../Common/commonData')

//config cho up get file
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const imgF = multer({
    dest: 'assets/' // tạo thư mục cho các file lưu vào đó
})
//end config 


const upFile = router.post('/file/up_file', imgF.single('file'), async (req, res) => {
    const xuLyFile = req.file || {}
    let tenGoc = xuLyFile.originalname || ''

    tenGoc = tenGoc.trim().replace(/ /g, '-')

    const fullPathToServer = xuLyFile.path

    const newPath = `${fullPathToServer}-${tenGoc}`
    fs.renameSync(fullPathToServer, newPath)

    res.send({
        code: 0,
        message: commonData.message.fileSuccess,
        tenFile: newPath
    })
})

const getFile = router.get('/file/get_file/:filename', (req, res) => {
    const filename = req.params.filename

    if (!filename) {
        return res.send({
            code: 1,
            message: commonData.message.fileError
        })
    }

    res.sendFile(
        path.resolve(`./assets/${filename}`)
    )
})

module.exports = router