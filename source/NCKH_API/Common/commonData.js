var commonData = {
    //server
    configDB: {
        server: '103.130.215.232',
        user: 'sa',
        password: 'sa!123456',
        database: 'NCKH',
        port: 1433
    },

    //local
    // configDB: {
    //     server: 'THANHBINH\\SQLEXPRESS',
    //     user: 'sa',
    //     password: '123',
    //     database: 'NCKH',
    //     port: 1433
    // },

    //err db res 
    code: {
      success: 0,
      err: 1,
      pendding: 2  
    },

    message: {
        connectDBSuccess: 'Connect DB Thanh Cong',
        success: 'Thanh Cong',
        error: 'Loi',
        fileSuccess: 'Upload File Thsnh Cong',
        fileError: 'File Khong Ton Tai'
    }

    
}

module.exports = commonData