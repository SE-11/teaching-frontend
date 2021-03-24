const generateRandomAvatar = () => {
    let randNum = Math.floor(Math.random() * 1000);
    let avatar = "http://images.nowcoder.com/head/"+ randNum + "m.png";
    return avatar;
}

export function registDataSOrT(values) {
    // 若为学生
    // exp:
    // {
    //     "studentName": "cdmins",
    //     "password": "123123",
    //     "email": "hcc@qq.com",
    //     "studentNum": "123",
    //     "phone": "1237228",
    //     "avatar": "4567890",
    //     "college": "MIT",
    //     "university": "MIT"
    // }
    let retData;
    let avatar = generateRandomAvatar();
    if(values.identity === "student") {
        retData = {
            "type": "student",
            data: {
                "studentName": values.name,
                "password": values.password,
                "email": "",
                "studentNum": "",
                "phone": values.phone,
                "avatar": avatar,
                "college": "",
                "university": values.university,
            }
        }
    } else {
        retData = {
            type: "teacher",
            data: {
                "teacherName": values.name,
                "password": values.password,
                "email": "",
                "phone": values.phone,
                "avatar": avatar,
                "university": values.university,
            }
        }
    }
    return retData;
}