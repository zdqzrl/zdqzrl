/**
 * 获取当前时间 格式：yyyy-MM-dd HH:MM:SS
 */
function getCurrentTime() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(date.getHours());//时
    var minute = zeroFill(date.getMinutes());//分
    var second = zeroFill(date.getSeconds());//秒

    //当前时间
    var curTime = date.getFullYear() + "/" + month + "/" + day
        + " " + hour + ":" + minute + ":" + second;

    return curTime;
}

function getBackTime() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(getBackHour());//时
    var minute = zeroFill(date.getMinutes());//分
    var second = zeroFill(date.getSeconds());//秒

    //当前时间
    var curt = date.getFullYear() + "/" + month + "/" + day
        + " " + hour + ":" + minute + ":" + second;

    return curt;
}

function getBackHour() {
    var date = new Date();
    var hour = date.getHours() + 6;
    if (hour < 24) {
        return hour;
    } else {
        var t = hour % 23;
        return t;
    }
}


function getOutTime() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(getOutHour());//时
    var minute = zeroFill(date.getMinutes());//分
    var second = zeroFill(date.getSeconds());//秒

    //当前时间
    var time = date.getFullYear() + "/" + month + "/" + day
        + " " + hour + ":" + minute + ":" + second;

    return time;
}

function getOutHour() {
    var date = new Date();
    var hour = date.getHours();
    switch (hour) {
        case 1:
            return hour - 1;
            break;
        case 2:
            return hour - 1;
            break;
        case 3:
            return hour - 2;
            break;
        default:
            return hour - 3;
    }

}

/**
 * 补零
 */
function zeroFill(i) {
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}



