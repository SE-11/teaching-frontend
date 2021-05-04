import moment from "moment"

// 生成cover
const generateCover = () => {
    let max = 32;
    let min = 10;
    // randomNum -> [min, max]
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    let cover = `https://assets.ketangpai.com/theme/min/${randomNum}.jpg`;
    return cover;
}

export function courseJSON(values) {
    
    let startTime = moment(values.term[0]._d).format('YYYY-MM');
    let endTime = moment(values.term[1]._d).format('YYYY-MM');
    let cover = generateCover();
    console.log(`cover is ${cover}`)
    // 邀请码后端根据课程 id 生成
    let data = {
        "courseName": values.courseName,
        "teacherId": values.teacherId,
        "invitationCode": "",
        "courseStartTime": startTime,
        "courseEndTime": endTime,
        "courseCover": cover,
    }
    return data;
}