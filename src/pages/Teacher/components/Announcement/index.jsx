import React, { useEffect, useState } from 'react'
import './index.css';
import { Button, Divider, Form, message, Modal } from 'antd';
import AnnounceItem from '../AnnounceItem';
import BraftEditor  from "braft-editor";
import 'braft-editor/dist/index.css'
import axios from 'axios';
import { FileAddOutlined } from '@ant-design/icons';

export default function Announcement(props) {
    const {courseId} = props.courseInfo;
    const {teacherId} = props.courseInfo;
    const [announceList, setAnnounceList] = useState([]);
    const [addAnnVisible, setAddAnnVisible] = useState(false);
    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));
    // const [outputHTML, setOutputHTML] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/course/${courseId}/listAnn`)
             .then((rsp) => {
                 console.log(rsp.data);
                 setAnnounceList([...rsp.data]);
             })
             .catch((err) => {
                 console.log(err);
             });
    }, [])

    const announces = announceList.map((it) => {
        return (
            <div key={it.id} className="ann-item">
                <AnnounceItem
                    content={it.content}
                    pubTime={it.createTime} />
            </div>
        );
    });

    const handleAddAnnounce = () => {
        setAddAnnVisible(true);
    }

    const handleEditorChange = (editorState) => {
        setEditorState(editorState);
    }

    const onFinish = (values) => {
        console.log(values.editor.toHTML());
        let data = {
            'courseId': courseId,
            'content': values.editor.toHTML()
        }
        axios.post('http://localhost:8080/course/addAnnounce', data)
             .then((rsp) => {
                 let tmpData = [...announceList];
                 tmpData.push(rsp.data);
                 setAnnounceList(tmpData);
                 message.success("发布公告成功!");
                 setAddAnnVisible(false);
             })
             .catch((err) => {
                 console.log(err);
             })
    }

    return (
        <div className="announce-wrapper">
            {teacherId.toString() === window.localStorage.getItem('teacherId') ?
                <div className="announce-bar">
                    <Button icon={<FileAddOutlined />} type="primary" onClick={handleAddAnnounce}>发布新公告</Button>
                </div> :
                <></>
            }
            <Divider style={{ marginTop: "5px", marginBottom: "5px" }} />
            <div className="announces">
                {announces}
            </div>
            <Modal
                width="800px"
                style={{ top: '50px' }}
                visible={addAnnVisible}
                destroyOnClose={true}
                title="发布新公告"
                footer={[]}
                onCancel={() => setAddAnnVisible(false)}
            >
                <Form onFinish={onFinish}>
                    <Form.Item name="editor">
                        <BraftEditor
                            value={editorState}
                            onChange={handleEditorChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button width="100%" type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
