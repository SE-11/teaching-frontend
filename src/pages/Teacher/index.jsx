import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Content from './components/Content';
import NavBar from './components/NavBar';

export default function Teacher() {
    const teacherId = window.localStorage.getItem("teacherId");
    const [teacherInfo, setTeacherInfo] = useState("");

    const url = `http://localhost:8080/teacher/${teacherId}`;
    useEffect(() => {
        axios.get(url)
             .then((rsp) => {
                 //console.log(rsp.data);
                 setTeacherInfo(rsp.data);
                 //console.log(teacherInfo);
             })
             .catch((err) => {
                 console.error(err);
                 message.error("用户信息获取失败");
             });
    }, []);
    return (
        <div>
            <NavBar teacherInfo={teacherInfo} />
            <div className="teacher-page-content" style={{ display: "flex", justifyContent: "center" }}>
                <Content id={teacherId} />
            </div>
        </div>
    )
}
