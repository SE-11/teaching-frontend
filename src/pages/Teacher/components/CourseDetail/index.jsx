import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Divider, Menu} from 'antd';
import './index.css';
import { Link, Route, Switch } from 'react-router-dom';
import Announcement from '../Announcement';
import Courseware from '../Courseware';
import Homework from '../Homework';


const MenuItem = Menu.Item;
export default function CourseDetail(props) {
    // 拿到课程 id
    const courseId = props.match.params.id;
    const [courseInfo, setCourseInfo] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/course/${courseId}`)
             .then((rsp) => {
                 setCourseInfo(rsp.data);
             })
             .catch((err) => {
                 console.log(err);
             });
    }, [courseId]);

    return (
        <div>
            <div className="course-header">
                <div className="course-header-cover">
                    <div
                        className="course-cover"
                        style={{ backgroundImage: `url(${courseInfo.courseCover})` }}
                    >
                        <p className="course-cover-term">{courseInfo.courseStartTime} - {courseInfo.courseEndTime}</p>
                        <div className="course-cover-code">课堂码🧾: {courseInfo.invitationCode}</div>
                    </div>
                </div>
                <div className="course-header-content">
                    <div className="course-name">
                        {courseInfo.courseName}
                    </div>
                    <div className="teacher-info">
                        {/* <span><Link to={`/teacher/profile/${courseInfo.teacherId}`}><Avatar size="small" src={courseInfo.avatar} /></Link></span> */}
                        <span className="teacher-label">Professor:</span>
                        <span className="teacher-value-item"><Link style={{ textDecoration: "underline", color:"#000" }} to={`/teacher/profile/${courseInfo.teacherId}`}>{courseInfo.teacherName}</Link></span>
                        <Divider type="vertical" />
                        <span className="teacher-value-item">{courseInfo.university}</span>
                    </div>
                </div>
            </div>
            <Divider style={{ marginTop: "0px", marginBottom: "0px" }} />
            <div className="course-nav">
                <Menu mode="horizontal" defaultSelectedKeys={['courseware']} style={{ display: "flex", justifyContent: "space-around" }}>
                    <MenuItem key="courseware" style={{ width: "100px", textAlign: "center" }}>
                        <Link to={`/teacher/course/${courseInfo.courseId}/courseware`} />课件
                    </MenuItem>
                    <MenuItem key="homework" style={{ width: "100px", textAlign: "center" }}>
                        <Link to={`/teacher/course/${courseInfo.courseId}/homework`} />作业
                    </MenuItem>
                    <MenuItem key="discuss" style={{ width: "100px", textAlign: "center" }}>
                        <Link to={`/teacher/course/${courseInfo.courseId}/announcement`} />公告
                    </MenuItem>
                </Menu>
            </div>
            <div className="course-content">
                <Switch>
                    {/* <Route path={`/teacher/course/${courseInfo.courseId}/`} render={() => <Courseware courseInfo={courseInfo} />} /> */}
                    <Route path={`/teacher/course/${courseInfo.courseId}/courseware`} render={() => <Courseware courseInfo={courseInfo} />} />
                    <Route path={`/teacher/course/${courseInfo.courseId}/homework`} render={() => <Homework courseInfo={courseInfo} />} />
                    <Route path={`/teacher/course/${courseInfo.courseId}/announcement`} render={() => <Announcement courseInfo={courseInfo} />}  />
                </Switch>
            </div>
        </div>
    )
}
