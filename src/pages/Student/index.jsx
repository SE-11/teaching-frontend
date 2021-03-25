import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';

export default function Student(props) {
    const studentId = props.match.params.id;
    const url = 'http://localhost:8080/student/' + studentId;
    const [studentInfo, setStudentInfo] = useState("");
    useEffect(() => {
        axios.get(url)
             .then((rsp) => {
                 console.log("studentInfo");
                 console.log(rsp);
                 setStudentInfo(rsp.data);
                 console.log(studentInfo);
             })
             .catch((err) => {
                 message.error(err);
             });
    }, []);
    return (
        <div>
            <NavBar studentInfo={studentInfo} />
        </div>
    )
}
