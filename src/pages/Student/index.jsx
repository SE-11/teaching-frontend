import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';

export default function Student(props) {
    const studentId = window.localStorage.getItem('studentId');
    const url = `http://localhost:8080/student/${studentId}`;
    const [studentInfo, setStudentInfo] = useState("");
    useEffect(() => {
        axios.get(url)
             .then((rsp) => {
                 setStudentInfo(rsp.data);
             })
             .catch((err) => {
                 console.error(err);
                //  message.error(err);
             });
    }, []);
    return (
        <div>
            <NavBar studentInfo={studentInfo} />
        </div>
    )
}
