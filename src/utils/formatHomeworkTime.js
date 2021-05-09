import moment from "moment";

export function formatTime(data) {    
    let startTime = moment(data[0]._d).format('YYYY-MM-DD HH:mm');
    let endTime = moment(data[1]._d).format('YYYY-MM-DD HH:mm');
    return [startTime, endTime]
}