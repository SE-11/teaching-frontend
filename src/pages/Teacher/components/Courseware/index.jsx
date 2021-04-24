import { Button, Divider, message, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import './index.css';

export default function Courseware(props) {
    const {courseId} = props.courseInfo;
    const {teacherId} = props.courseInfo;
    const [addCoursewareVisible, setAddCoursewareVisible] = useState(false);
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
                setAddCoursewareVisible(false);
                message.success('课件上传成功!');
            } else if (info.file.status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
            }
        }
    };


    return (
        <div className="courseware-wrapper">
            {teacherId.toString() === window.localStorage.getItem('teacherId') ?
                <div className="courseware-bar">
                    <Button type='primary' onClick={handleAddCourseware}>上传课件</Button>
                </div> :
                <></>
            }
            <Divider style={{ marginTop: "5px", marginBottom: "5px" }} />
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
