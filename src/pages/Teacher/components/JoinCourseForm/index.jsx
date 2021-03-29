import { Form, Input, Button } from 'antd'
import axios from 'axios';
import React from 'react'

const FormItem = Form.Item;
export default function JoinCourseForm(props) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const onFinish = (values) => {
        // teacher join course
        values["teacherId"] = window.localStorage.getItem("teacherId");
        console.log(values);
        // axios.post
    }
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Form
                onFinish={onFinish}
                {...layout}
                style={{ width: "300px", marginRight: "50px" }}
            >
                <FormItem
                    name="invitationCode"
                    label="InvitationCode"
                    >
                    <Input placeholder="InvitationCode" />
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 8 }}>
                    <Button style={{ width: "100%" }} htmlType="submit" type="primary">Join</Button>
                </FormItem>
            </Form>
        </div>
    )
}
