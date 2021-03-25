import { Row, Col } from 'antd'
import React from 'react'
import CourseItem from '../CourseItem'
import "./index.css";

export default function CourseBox() {
    const colSpan = {
        xs: 24,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
    }


    return (
        <div>
            <div className="course-box-wrapper">
                <Row gutter={24} justify="space-around">
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                    <Col {...colSpan}><CourseItem /></Col>
                </Row>
            </div>

        </div>
    )
}
