import { Row, Col, Button, Divider, Modal } from 'antd'
import React, {useState} from 'react'
import AddCourseForm from '../AddCourseForm';
import CourseItem from '../CourseItem'
import "./index.css";

export default function CourseBox() {
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


    return (
        <div className="course-box">
            <div className="course-operate-bar">
                <div className="add-course-button">
                    <Button type="primary" onClick={onAddCourseClick}>创建课程</Button>
                </div>
            </div>
            <Divider style={{ margin: 0 }} />
            <div className="course-box-wrapper">
                {/* <Row gutter={24}>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                </Row>
                <Row gutter={24}>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                </Row> */}
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
                </div>
                <div className="course-item">
                    <CourseItem />
                </div>
                
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
