import React from 'react';
import htmr from 'htmr';
import './index.css';


export default function AnnounceItem(props) {
    const {content} = props;
    const {pubTime} = props;

    return (
        <div className="ann-item-wrapper">
            <div className="ann-itme-content">
                {htmr(content)}
            </div>
            <div className="ann-item-pubtime">{pubTime}</div>
        </div>
    )
}
