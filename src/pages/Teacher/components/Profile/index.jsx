import { Image, message, Space } from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router';
import "./index.css";
function Profile(props) {
    // /teacher/profile/{id}
    // 拿到教师的个人信息
    const teacherId = props.match.params.id;
    const [teacherInfo, setTeacherInfo] = useState("")
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
        <div>
            <div className="teacher-card">
                <div className="teacher-profile-header">
                    <div className="teacher-header-cover"></div>
                    <div className="teacher-header-main">
                        <div className="teacher-header-avatar">
                            <Image 
                                src={teacherInfo.avatar}
                                width="130px"
                            />
                        </div>
                        <div className="teacher-header-content">
                            <div className="teacher-header-name">{teacherInfo.teacherName}</div>
                            <div>
                                <Space size="large">
                                    <span className="teacher-header-label">教育经历</span>
                                    <span>{teacherInfo.university}</span>    
                                </Space>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Profile);