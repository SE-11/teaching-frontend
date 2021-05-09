import { DownloadOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import React from 'react'
import './index.css'

export default function HomeworkItem(props) {
    const {newFilename, path, title, startTime, endTime} = props;

    return (
        <div className="homework-itme-wrapper">
            <span className="homework-itme-title">{title}</span>
            <Tag color="geekblue">{`${startTime} --- ${endTime}`}</Tag>
            <div className="homework-itme-file">
                <div className="homework-itme-filename">{newFilename}</div>
                <div>
                    <Button icon={<DownloadOutlined />} type='link' href={path} download={newFilename}>下载</Button>
                </div>
            </div>
        </div>
    )
}
