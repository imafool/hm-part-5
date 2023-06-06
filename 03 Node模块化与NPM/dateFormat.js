// 定义格式化时间的方法
function dateFormat(dateStr) {
    const date = new Date(dateStr);

    const fullYear = date.getFullYear();
    const month = fillZero(date.getMonth() + 1);
    const day = fillZero(date.getDay());

    const hours = fillZero(date.getHours());
    const minutes = fillZero(date.getMinutes());
    const seconds = fillZero(date.getSeconds());

    return `${fullYear}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

// 补零操作
function fillZero(num){
    return num < 9 ? '0' + num : num
}

// 导出
module.exports = {
    dateFormat
}