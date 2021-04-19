import { Form, Input, Radio, Button, message } from 'antd'
import React from 'react'
import md5 from "crypto-js/md5";
import axios from "axios";
import { registDataSOrT } from "../../utils/registDataValidate";
const FormItem = Form.Item;

export default function RegisteredForm(props) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    // 暂时把学号存 localstorage 里
    const onFinish = (values) => {
        // console.log(values);
        values.password = md5(values.password).toString();
        let postData = registDataSOrT(values);
        if(postData.type === "student") {
            // 学生注册
            // console.log(postData.data);
            axios.post('http://localhost:8080/regist/student', postData.data)
                      .then((rsp) => {
                          if(rsp.data.errorCode === 1) {
                              window.localStorage.setItem("userType", "student");
                              window.localStorage.setItem("userId", rsp.data.studentId);
                              message.success('注册成功!请登录!');
                          } else {
                              message.error('注册失败!');
                          }
                      })
                      .catch((err) => {
                          console.log("post student err: ", err);
                      });
            props.handleRegisterdSuccess();
        } else {
            // 老师注册
            axios.post('http://localhost:8080/regist/teacher', postData.data)
                 .then((rsp) => {
                     if(rsp.data.errorCode === 1) {
                         window.localStorage.setItem("userType", "student");
                         window.localStorage.setItem("userId", rsp.data.teacherId);
                         message.success('注册成功!请登录!');
                     }
                 })
                 .catch((err) => {
                     console.log("post teacher err: ", err);
                 });
            props.handleRegisterdSuccess();
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center  " }}>
            <Form
                {...layout}
                style={{ width: "300px", marginRight: "50px" }}
                onFinish={onFinish}
            >
                <FormItem
                    label="Phone"
                    name="phone"
                    rules={
                        [
                            {
                                required: true,
                                max: 11,
                                whitespace: true,
                                message: '请输入11位数电话号码'
                            },
                            {
                                required: true,
                                pattern: /^[0-9]+$/,
                                message: '请输入数字',
                                whitespace: true
                            }
                        ]
                    }
                >
                    <Input placeholder="Phone number" allowClear />
                </FormItem>

                <FormItem
                    label="Password"
                    name="password"
                    dependencies={['rePassword']}
                    hasFeedback
                    rules={
                        [
                            { required: true, message: '请输入密码' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('rePassword') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('两次密码不一致!'));
                                },
                            }),
                        ]
                    }
                >
                    <Input placeholder="Password" allowClear />
                </FormItem>

                <FormItem
                    label="Re-Password"
                    name="rePassword"
                    dependencies={['password']}
                    hasFeedback
                    rules={
                        [
                            { required: true, message: '请确认密码' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if(!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次密码不一致!'))
                                }
                            }),
                        ]
                    }
                >
                    <Input placeholder="Re-Password" allowClear />
                </FormItem>

                <FormItem name="identity" label="角色">
                    <Radio.Group style={{ display: "flex", justifyContent: "space-between" }}>
                        <Radio.Button value="student" style={{ width: "130px", textAlign: "center" }}>学生</Radio.Button>
                        <Radio.Button value="teacher" style={{ width: "130px", textAlign: "center" }}>老师</Radio.Button>
                    </Radio.Group>
                </FormItem>

                <FormItem
                    label="Name"
                    name="name" 
                    rules={[
                        {required: true, message: "请输入您的姓名"}
                    ]}   
                >
                    <Input placeholder="Name" allowClear />
                </FormItem>

                <FormItem
                    label="University"
                    name="university"
                    rules={[
                        {required: true, message: "请输入您所在的高校"}
                    ]}
                >
                    <Input placeholder="University" allowClear />
                </FormItem>

                <FormItem wrapperCol={{ span: 16, offset: 8 }}>
                    <Button style={{ width: "100%" }} htmlType="submit" type="primary">
                        Registered
                    </Button>
                </FormItem> 
            </Form>
        </div>
    )
}
