import { Button, Image, message } from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router';
import "./index.css";
function Profile(props) {
    // /teacher/profile/{id}
    // 拿到教师的个人信息
    const teacherId = props.match.params.id;
    const [teacherInfo, setTeacherInfo] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8080/teacher/${teacherId}`)
             .then((rsp) => {
                 console.log(rsp.data)
                 setTeacherInfo(rsp.data);
                 message.success("teacher info fetch success!");
             })
             .catch((error) => {
                 console.log(error);
             });
    }, [])

    return (
        <>
            <div className="teacher-card">  
                <div className="ProfileHeader-userCover">
                    { 
                      teacherInfo.cover === null ? 
                      <div className="UserCover-colorBlock"></div> : 
                      <Image 
                            src={teacherInfo.cover}
                            alt="用户封面"
                      />
                    }
                </div>
                <div className="ProfileHeader-wrapper">
                    <div className="ProfileHeader-main">
                        <div className="UserAvatar">
                            <Image
                                src={teacherInfo.avatar}
                                alt="用户头像"
                                width="160px"
                            />
                        </div>
                        <div className="ProfileHeader-content">
                            <div className="ProfileHeader-contentHead">
                                <h1 className="ProfileHeader-title">
                                    <span className="ProfileHeader-name">{teacherInfo.teacherName}</span>
                                    <span className="ProfileHeader-headline">{teacherInfo.description}</span>
                                </h1>
                                <Button type="primary" ghost>编辑个人资料</Button>
                            </div>
                            <div className="ProfileHeader-contentBody">
                                <div className="ProfileHeader-info">
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">毕业院校: </span>
                                        <span className="ProfileHeader-detailValue">{teacherInfo.university}</span>
                                    </div>
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">居住地: </span>
                                        <span className="ProfileHeader-detailValue">{teacherInfo.address}</span>
                                    </div>
                                    <div className="ProfileHeader-infoItem">
                                        <span className="ProfileHeader-detailLabel">Email: </span>
                                        <span className="ProfileHeader-detailValue">{teacherInfo.email}</span>
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