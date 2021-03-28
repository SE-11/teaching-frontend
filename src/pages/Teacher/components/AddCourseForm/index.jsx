import { Form, Input, DatePicker, Button, message } from 'antd'
import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN';
import { courseJSON } from '../../../../utils/courseDataValidate';
import axios from 'axios';
const {RangePicker} = DatePicker;
const FormItem = Form.Item;
export default function AddCourseForm(props) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const onChange = (checkedValues) => {
        console.log(checkedValues);
    }
    const onFinish = (values) => {
        values["teacherId"] = window.localStorage.getItem("teacherId");
        let data = courseJSON(values)
        // console.log(data);
        axios.post('http://localhost:8080/teacher/saveCourse', data)
             .then((rsp) => {
                // console.log(rsp.data);
                let courseData = rsp.data;
                message.success("添加成功!");
                props.handleAddCourseSuccess(courseData);
             })
             .catch((error) => {
                 message.error(error);
             })
    }

    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Form 
                onFinish={onFinish}
                {...layout}
                style={{ width: "300px", marginRight: "50px" }}
            >
                <FormItem
                    name="courseName"
                    label="Course name"
                    >
                    <Input placeholder="Course Name" />
                </FormItem>
                <FormItem
                    name="className"
                    label="Class name"
                    >
                    <Input placeholder="Class Name(Optional)" />
                </FormItem>
                <FormItem
                    name="term"
                    label="Term"
                    >
                    <RangePicker locale={locale} picker="month" />
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 8 }}>
                    <Button style={{ width: "100%" }} htmlType="submit" type="primary">Add</Button>
                </FormItem>

            </Form>
        </div>
    )
}
