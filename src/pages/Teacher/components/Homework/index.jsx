import { FileAddOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Form, Input, message, Modal, Select, Upload } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { formatTime } from '../../../../utils/formatHomeworkTime';
import HomeworkItem from '../HomeworkItem';
import './index.css'

export default function Homework(props) {
    const {courseId} = props.courseInfo;
    const {teacherId} = props.courseInfo;
    const [uploadHomeworkVisible, setUploadHomeworkVisible] = useState(false);
    const [file, setFile] = useState("");
    const [homeworkList, setHomeworkList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/course/homework/listHomework/${courseId}`)
            .then((rsp) => {
                console.log(rsp.data);
                setHomeworkList([...rsp.data]); 
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const uploadProps = {
        beforeUpload: file => {
            setFile(file);
            return false;
        }
    }

    const onFinish = (values) => {
        // console.log(values);
        let [startTime, endTime] = formatTime(values.time);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', values['title']);
        formData.append('type', values['type']);
        formData.append('courseId', courseId);
        formData.append('startTime', startTime);
        formData.append('endTime', endTime);

        // console.log(file);
        axios.post(`http://localhost:8080/course/homework/upload`, formData)
             .then((rsp) => {
                 console.log(rsp.data);
                 setUploadHomeworkVisible(false);
                 message.success('发布作业成功!')
             })
             .catch((error) => {
                 console.log(error);
             })
    }

    const homeworks = homeworkList.map((it) => {
        return (
            <div className="homework-item" key={it.id}>
                <HomeworkItem {...it} />
            </div>
        );
    })

    return (
        <div className="homework-wrapper">
            {teacherId.toString() === window.localStorage.getItem('teacherId') ?
                <div className="homework-bar">
                    <Button icon={<FileAddOutlined />} type="primary" onClick={() => setUploadHomeworkVisible(true)}>发布作业</Button>
                </div> :
                <></>
            }
            <Divider style={{ marginTop: "5px", marginBottom: "5px" }} />
            <div>
                {homeworks}
            </div>
            <Modal
                width="800px"
                style={{ top: '50px' }}
                visible={uploadHomeworkVisible}
                destroyOnClose={true}
                title="发布作业"
                footer={[]}
                onCancel={() => setUploadHomeworkVisible(false)}
            >
                <Form onFinish={onFinish}>
                    <Form.Item name="title">
                        <Input placeholder='作业名称' />
                    </Form.Item>
                    <Form.Item
                        name="time"
                    >
                        <DatePicker.RangePicker showTime locale={locale} format='HH:mm' />
                    </Form.Item>
                    <Form.Item name="type">
                        <Select placeholder="作业类型">
                            <Select.Option value="个人作业">个人作业</Select.Option>
                            <Select.Option value="小组作业">小组作业</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="file">
                        <Upload.Dragger {...uploadProps} >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">点击此处或将文件拖拽至此以上传</p>
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                        <Button style={{ width: "100%" }} htmlType="submit" type="primary">Add</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
