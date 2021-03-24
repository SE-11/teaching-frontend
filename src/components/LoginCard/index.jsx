import { Card } from 'antd';
import React, { useState } from 'react'
import LoginForm from '../LoginForm';
import RegisteredForm from '../RegisteredForm';

export default function LoginCard() {
    const [tabKey, setTabKey] = useState("login");

    const tabList = [
        {
          key: 'login',
          tab: 'login',
        },
        {
          key: 'registered',
          tab: 'registered',
        },
    ];

    const onTabChange = (key) => {
        setTabKey(key);
    }

    const handleRegisterdSuccess = () => {
        setTabKey("login");
    }

    const contentList = {
        login: <LoginForm  />,
        registered: <RegisteredForm handleRegisterdSuccess={ handleRegisterdSuccess } />,
    };

    return (
        <div>
            <Card
                tabList={ tabList }
                activeTabKey={tabKey}
                onTabChange={onTabChange}
            >
                {contentList[tabKey]}
            </Card>
        </div>
    )
}
