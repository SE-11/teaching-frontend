import { Form, Input, DatePicker, Checkbox } from 'antd'
import React from 'react'

const {RangePicker} = DatePicker;
const FormItem = Form.Item;
export default function AddCourseForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const options = [
        { label: 'Class', value: 'class' },
        { label: 'Grade', value: 'grade' },
    ]
    const onChange = (checkedValues) => {
        console.log(checkedValues);
    }
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Form 
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
                    <RangePicker picker="month" />
                </FormItem>
                <FormItem
                    name="options"
                    label="Extra options"
                    >
                    <Checkbox.Group options={options} onChange={onChange} />
                </FormItem>

            </Form>
        </div>
    )
}
