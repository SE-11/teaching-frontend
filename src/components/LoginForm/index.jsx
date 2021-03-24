import { Button, Form, Input } from 'antd'
import React from 'react'

const FormItem = Form.Item;

export default function LoginForm() {
    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <div style={{ display: "flex", justifyContent: "center  " }}>
            <Form 
                style={{ width: "300px" }}
                onFinish={onFinish}
                >
                <FormItem
                    name="phone"
                    >
                    <Input placeholder="Phone number" />
                </FormItem>
                <FormItem
                    name="password"
                    >
                    <Input placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button style={{ width: "100%" }} htmlType="submit" type="primary">
                        Login
                    </Button>
                </FormItem>
            </Form>
        </div>
    )
}
