import { Card, Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";

const { Meta } = Card;
export default function CourseItem(props) {
    // 可以通过外部包裹 Link 的方式来做点击 全体、局部跳转
    const coverImg = props.coverImg;
    const courseName = props.courseName;
    const courseStartTime = props.startTime;
    const endStartTime = props.endTime;
    const invitationCode = props.invitationCode;
    const teacherAvatar = props.teacherAvatar;
    const university = props.university;
    const teacherName = props.teacherName;
    const cover = (
        <div className="course-cover" style={{ backgroundImage: `url(${coverImg})`}}>
            <p className="course-cover-term">{courseStartTime} - {endStartTime}</p>
            <div className="course-cover-code">课堂码🧾: {invitationCode}</div>
        </div>        
    );
    
    return (
        <Link to="/">
            <Card
                style={{ width: "300px", boxShadow: "0px 2px 3px #dddddd", marginBottom: "10px" }}
                cover={cover}
                >
                    <Meta 
                        avatar={<Link to="/vip"><Avatar src={teacherAvatar} /></Link> }
                        title={courseName}
                        description={`${teacherName} - ${university}`}
                    />
            </Card>
        </Link>
    )
}