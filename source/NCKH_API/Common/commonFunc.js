const dateformat = require('dateformat')

var commonfunc = {

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },

    async genID(per) {
        var len = 6
        var id = ''

        if (per == 1) { // Gen ID dự án: DA000001
            id = 'DA'
            for (var i = 0; i < len; i++) {
                id = id + this.getRandomInt(9)
            }
        }
        return id
    },

    checkDate(ngay_cong_bo) {
        // ngay:  YYYY-MM-DD
        let ts = Date.now();
        let date_ob = new Date(ngay_cong_bo);
        let date_now = new Date(ts)

        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();

        // DD-MM-YYYY format
        // console.log(date + "-" + month + "-" + year)
        console.log(date_now > date_ob)
        var check = date_now > date_ob

        // IS_CONG_BO: 1 => now > ngay cong bo : đã mở bán gói thầu => true
        //             0 => now < ngay cong bo : chưa mở bán gói thầu => false

        return check
    },

    formatDateYYYY_MM_DD(date_in){
        //date in: 17/03/2021
        // date out: 2021-03-17
        // date_in = '17/03/2021'
        day = date_in.substr(0,2)
        month = date_in.substr(3,2)
        year = date_in.substr(6,4)

        var out = year + "-" + month + "-" + day

        return out
    },

    formatDateToDB(date_in){
        //date in: 17/03/2021
        // date out: 03-17-021
        // date_in = '17/03/2021'
        day = date_in.substr(0,2)
        month = date_in.substr(3,2)
        year = date_in.substr(6,4)

        var out = month + "/" + day + "/" + year

        return out
    }
}


module.exports = commonfunc