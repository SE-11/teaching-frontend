import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import './index.css';

export default function CoursewareItem(props) {
    const {newFilename} = props;
    const createTime = `${props.createTime.slice(0, 10)} ${props.createTime.slice(11, 15)}`;
    const {path} = props;
    return (
        <div className="courseware-item-wrapper">
            <div className="courseware-item-name">{newFilename}</div>
            <div className="courseware-item-uploadtime">{createTime}</div>
            <div className="courseware-item-action">
                <Button icon={<DownloadOutlined />} type='link' href={path} download={newFilename}>下载</Button>
            </div>
        </div>
    )
}
