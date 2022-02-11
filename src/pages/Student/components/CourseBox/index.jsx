import { Button, Divider, Modal, message } from 'antd'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CourseItem from '../CourseItem'
import JoinCourseForm from '../JoinCourseForm';
import "./index.css";

export default function CourseBox(props) {
    const studentId = props.id;
    const [courseJoinList, setCourseJoinList] = useState([]);
    const [joinCourseVisible, setJoinCourseVisible] = useState(false);

    /*
     * fetch join course list 
     */
    useEffect(() => {
        // get courses that student joined
        axios.get(`http://localhost:8080/student/listJoinCourse/${studentId}`)
             .then((rsp) => {
                 setCourseJoinList([...rsp.data]);
                //  console.log(courseJoinList);
                 message.success("fetch join course list success!");
             })
             .catch((error) => {
                 console.log(error);
             })
    }, [studentId])
    
    const onJoinCourseClick = () => {
        setJoinCourseVisible(true);
    }

    const handleJoinCourseSuccess = (courseData) => {
        setJoinCourseVisible(false);
        let tmpData = [...courseJoinList];
        tmpData.push(courseData);
        setCourseJoinList(tmpData);
    }

    const joinCourses = courseJoinList.map((item) => {
        return (
            <div key={item.courseId} className="course-item">
                <CourseItem
                    courseId={item.courseId}
                    teacherId={item.teacherId}
                    teacherAvatar={item.avatar}
                    university={item.university}
                    teacherName={item.teacherName}
                    invitationCode={item.invitationCode}
                    startTime={item.courseStartTime}
                    endTime={item.courseEndTime}
                    coverImg={item.courseCover}
                    courseName={item.courseName}
                />
            </div>
        );
    });

    return (
        <div className="course-box">
            <div className="course-operate-bar-student">
                <Button style={{ alignSelf: "center" }} type="primary" onClick={onJoinCourseClick}>加入课程</Button>
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="student-course-label">我加入的课程：</div>
            <Divider style={{ margin: 0 }} />
            <div className="course-box-wrapper">
                { courseJoinList.length === 0 ? <div className="null-courses">您还未加入任何课程</div> : joinCourses }
            </div>
            {/* courses i joined */}
            <Modal
                visible={joinCourseVisible}
                destroyOnClose={true}
                title="加入课程"
                footer={[]}
                onCancel={() => setJoinCourseVisible(false)}
            >
                <JoinCourseForm handleJoinCourseSuccess={handleJoinCourseSuccess} />
            </Modal>
        </div>
    )
}
