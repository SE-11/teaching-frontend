import { Button, Divider, Modal, message } from 'antd'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import AddCourseForm from '../AddCourseForm';
import CourseItem from '../CourseItem'
import "./index.css";

export default function CourseBox(props) {
    const teacherId = props.id;
    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/teacher/listCourse/${teacherId}`)
             .then((rsp) => {
                 setCourseList([...rsp.data]);
                 message.success("fetch course list success!");
                 console.log(courseList);
             })
             .catch((error) => {
                 message.error(error)
             });
    }, []);
    const colSpan = {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 6,
    }
    const [addCourseVisible, setAddCourseVisible] = useState(false);

    const onAddCourseClick = () => {
        setAddCourseVisible(true);
    }
    const handleAddCourseSuccess = (courseData) => {
        console.log(courseData);
        setAddCourseVisible(false);
    }

    const courses = courseList.map((item) => {
        console.log(item);
        return (
            <div key={item.courseId} className="course-item">
                <CourseItem
                    startTime={item.courseStartTime}
                    endTime={item.courseEndTime}
                    coverImg={item.cover}
                    courseName={item.courseName}
                />
            </div>
        );
    })

    return (
        <div className="course-box">
            <div className="course-operate-bar">
                <div className="add-course-button">
                    <Button type="primary" onClick={onAddCourseClick}>创建课程</Button>
                </div>
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="course-box-wrapper">
                {/* <div className="course-item">
                    <CourseItem />
                </div>
                <div className="course-item">
                    <CourseItem />
                </div>
                <div className="course-item">
                    <CourseItem />
                </div>
                <div className="course-item">
                    <CourseItem />
                </div>
                <div className="course-item">
                    <CourseItem />
                </div>
                <div className="course-item">
                    <CourseItem />
                </div> */}
                {courses}
            </div>
            <Modal
                visible={addCourseVisible}
                destroyOnClose={true} 
                title="创建课程" 
                footer={[]}
                onCancel={() => setAddCourseVisible(false)}
            >
                <AddCourseForm handleAddCourseSuccess={handleAddCourseSuccess} />
            </Modal>
        </div>
    )
}
