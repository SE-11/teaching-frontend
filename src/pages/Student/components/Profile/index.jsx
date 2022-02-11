import { Button, Image, message } from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router';
import "./index.css";
function Profile(props) {
    // /teacher/profile/{id}
    const studentId = props.match.params.id;
    const localStuId = window.localStorage.getItem("studentId");
    const [studentInfo, setStudentInfo] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8080/student/${studentId}`)
             .then((rsp) => {
                 console.log(rsp.data)
                 setStudentInfo(rsp.data);
                 message.success("student info fetch success!");
             })
             .catch((error) => {
                 console.log(error);
             });
    }, [studentId])

    return (
        <>
            <div className="student-card">  
                <div className="ProfileHeader-userCover">
                    { 
                      studentInfo.cover === null ? 
                      <div className="UserCover-colorBlock"></div> : 
                      <Image 
                            src={studentInfo.cover}
                            alt="用户封面"
                      />
                    }
                </div>
                <div className="ProfileHeader-wrapper">
                    <div className="ProfileHeader-main">
                        <div className="UserAvatar">
                            <Image
                                src={studentInfo.avatar}
                                alt="用户头像"
                                width="160px"
                            />
                        </div>
                        <div className="ProfileHeader-content">
                            <div className="ProfileHeader-contentHead">
                                <h1 className="ProfileHeader-title">
                                    <span className="ProfileHeader-name">{studentInfo.studentName}</span>
                                    <span className="ProfileHeader-headline">{studentInfo.description}</span>
                                </h1>
                                { localStuId === studentId ? <Button type="primary" ghost>编辑个人资料</Button> : <></> }
                            </div>
                            <div className="ProfileHeader-contentBody">
                                <div className="ProfileHeader-info">
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">毕业院校: </span>
                                        <span className="ProfileHeader-detailValue">{studentInfo.university}</span>
                                    </div>
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">居住地: </span>
                                        <span className="ProfileHeader-detailValue">{studentInfo.address}</span>
                                    </div>
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">Email: </span>
                                        <span className="ProfileHeader-detailValue">{studentInfo.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(Profile);