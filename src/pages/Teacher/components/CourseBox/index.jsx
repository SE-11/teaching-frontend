import { Button, Divider, Modal, message, Space } from 'antd'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import AddCourseForm from '../AddCourseForm';
import CourseItem from '../CourseItem'
import JoinCourseForm from '../JoinCourseForm';
import "./index.css";

export default function CourseBox(props) {
    const teacherId = props.id;
    const [courseTeachList, setCourseTeachList] = useState([]);
    const [courseJoinList, setCourseJoinList] = useState([]);
    const [addCourseVisible, setAddCourseVisible] = useState(false);
    const [joinCourseVisible, setJoinCourseVisible] = useState(false);

    /*
     * fetch course list 
     * 
     */
    useEffect(() => {
        axios.get(`http://localhost:8080/teacher/listCourse/${teacherId}`)
             .then((rsp) => {
                 setCourseTeachList([...rsp.data]);
                 message.success("fetch course list success!");
             })
             .catch((error) => {
                 console.log(error);
             });
    }, [teacherId]);

    /*
     * fetch join course list 
     */
    useEffect(() => {
        // get courses that teahcer joined
        axios.get(`http://localhost:8080/teacher/listJoinCourse/${teacherId}`)
             .then((rsp) => {
                 setCourseJoinList([...rsp.data]);
                 message.success("fetch join course list success!");
             })
             .catch((error) => {
                 console.log(error);
             })
    }, [teacherId])
    
    const onAddCourseClick = () => {
        setAddCourseVisible(true);
    }

    const onJoinCourseClick = () => {
        setJoinCourseVisible(true);
    }

    /**
     * 
     * @param {Object} courseData 新添加的 course 信息
     * 
     */
    const handleAddCourseSuccess = (courseData) => {
        // only need the course id
        // 考虑简化参数
        // console.log("course data: ",courseData);
        setAddCourseVisible(false);
        axios.get(`http://localhost:8080/teacher/getCourseInfoById/${courseData.courseId}`)
             .then((rsp) => {
                 let tmpData = [...courseTeachList];
                 tmpData.push(rsp.data);
                 setCourseTeachList(tmpData);
                 message.success("添加成功!");
             })
             .catch((error) => {
                 message.error(error);
             });
    }

    const handleJoinCourseSuccess = (courseData) => {
        setJoinCourseVisible(false);
        let tmpData = [...courseJoinList];
        tmpData.push(courseData);
        setCourseJoinList(tmpData);
    }

    const teachCourses = courseTeachList.map((item) => {
        // console.log(item);
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
            <div className="course-operate-bar">
                <div className="teacher-course-label">我教授的课程：</div>
                <div className="add-join-course-button">
                    <Space size="large">
                        <Button type="primary" onClick={onAddCourseClick}>创建课程</Button>
                        <Button type="primary" onClick={onJoinCourseClick}>加入课程</Button>
                    </Space> 
                </div>
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="course-box-wrapper">
                { courseTeachList.length === 0 ? <div className="null-courses">您还未教授任何课程</div> : teachCourses }
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="teacher-course-label">我加入的课程：</div>
            <Divider style={{ margin: 0 }} />
            <div className="course-box-wrapper">
                { courseJoinList.length === 0 ? <div className="null-courses">您还未加入任何课程</div> : joinCourses }
            </div>
            {/* courses i joined */}
            <Modal
                visible={addCourseVisible}
                destroyOnClose={true} 
                title="创建课程" 
                footer={[]}
                onCancel={() => setAddCourseVisible(false)}
            >
                <AddCourseForm handleAddCourseSuccess={handleAddCourseSuccess} />
            </Modal>
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
