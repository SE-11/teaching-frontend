import { Button, Divider, message, Modal, Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import './index.css';
import axios from 'axios';
import CoursewareItem from '../CoursewareItem';

export default function Courseware(props) {
    const {courseId} = props.courseInfo;
    const {teacherId} = props.courseInfo;
    const [addCoursewareVisible, setAddCoursewareVisible] = useState(false);
    const [coursewareList, setCoursewareList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/course/courseware/listCourseware/${courseId}`)
             .then((rsp) => {
                 console.log(rsp.data);
                 setCoursewareList([...rsp.data]);
             })
             .catch((err) => {
                 console.log(err);
             });
    }, [courseId])

    const handleAddCourseware = () => {
        setAddCoursewareVisible(true);
    }

    const data = {
        'courseId': courseId
    }
    const uploadProps = {
        action: `http://localhost:8080/course/courseware/upload`,
        data: data,
        multiple: true,
        onChange(info) {
            if(info.file.status !== 'uploading') {
                console.log(info.file, info.fileList)
            }
            if (info.file.status === 'done') {
                console.log(`${info.file.name} file uploaded successfully`);
                console.log(info.file.response.fileInfo);
                let tmpData = [...coursewareList];
                tmpData.push(info.file.response.fileInfo);
                setCoursewareList(tmpData);
                setAddCoursewareVisible(false);
                message.success('课件上传成功!');
            } else if (info.file.status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
            }
        }
    };

    const coursewares = coursewareList.map((it) => {
        return (
            <div key={it.id} className="courseware-item">
                <CoursewareItem
                    {...it} />
            </div>
        );
    });

    return (
        <div className="courseware-wrapper">
            {teacherId.toString() === window.localStorage.getItem('teacherId') ?
                <div className="courseware-bar">
                    <Button icon={<UploadOutlined />} type='primary' onClick={handleAddCourseware}>上传课件</Button>
                </div> :
                <></>
            }
            <Divider style={{ marginTop: "5px", marginBottom: "5px" }} />
            <div>
                {coursewares}
            </div>
            <Modal
                width="500px"
                style={{ top: '200px' }}
                visible={addCoursewareVisible}
                destroyOnClose={true}
                title="上传课件"
                footer={[]}
                onCancel={() => setAddCoursewareVisible(false)}
            >
                <Upload.Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击此处或将文件拖拽至此以上传</p>
                </Upload.Dragger>
            </Modal>
        </div>
    )
}
