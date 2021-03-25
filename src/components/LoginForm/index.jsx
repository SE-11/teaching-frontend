import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import md5 from "crypto-js/md5";
import React from 'react'
import { withRouter } from 'react-router-dom';

const FormItem = Form.Item;

function LoginForm(props) {
    const onFinish = (values) => {
        // console.log(values);
        // 后端
        // 检查电话号是否已经注册
        // 检测密码是否正确
        values.password = md5(values.password).toString();
        axios.post('http://localhost:8080/login', values)
             .then((rsp) => {
                 if(rsp.data.errorCode === 1) {
                     // 根据类型 跳转老师页面还是学生页面
                     let path;
                     if(rsp.data.userType === "student") {
                        window.localStorage.setItem('studentId', rsp.data.id);
                        path = '/student';
                        props.history.replace(path);
                        message.success("登录成功!");
                     } else {
                        window.localStorage.setItem('teacherId', rsp.data.id);
                        path = '/teacher';
                        props.history.replace(path);
                        message.success("登录成功!");
                     }
                 }
             })
             .catch((err) => {
                 message.error(err);
                 console.log(err);
             });
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form 
                {...layout}
                style={{ width: "300px", marginRight: "50px" }}
                onFinish={onFinish}
                >
                <FormItem
                    label="Phone"
                    name="phone"
                    >
                    <Input placeholder="Phone number" />
                </FormItem>
                <FormItem
                    label="Password"
                    name="password"
                    >
                    <Input placeholder="Password" />
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 8 }}>
                    <Button style={{ width: "100%" }} htmlType="submit" type="primary">
                        Login
                    </Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default withRouter(LoginForm);
