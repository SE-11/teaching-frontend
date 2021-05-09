import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import Content from './components/Content';

export default function Student(props) {
    const studentId = window.localStorage.getItem('studentId');
    const [studentInfo, setStudentInfo] = useState("");

    const url = `http://localhost:8080/student/${studentId}`;
    useEffect(() => {
        axios.get(url)
             .then((rsp) => {
                 setStudentInfo(rsp.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);
    return (
        <div>
            <NavBar studentInfo={studentInfo} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Content id={studentId} />
            </div>
        </div>
    )
}
