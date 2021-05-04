import React, { useState } from 'react';
import { Button, Menu, Image, Modal } from 'antd';
import { Link, withRouter, Redirect } from 'react-router-dom';
import logo from "./../../logo.svg";
import LoginCard from '../LoginCard';
const MenuItem = Menu.Item;

function HomeNavigation(props) {
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const loginState = window.localStorage.getItem('loginState');
    const redirectUrl = `/${window.localStorage.getItem('userType')}`;
    const handleOnCourse = () => {
        props.history.push(redirectUrl);
    }
    const onClick = () => {
        setLoginModalVisible(true);
    }


    return (
        <div style={{ display: "flex", justifyContent: "space-around"  }}>
            <Link to="/" style={{ marginRight: "200px" }}>
                <Image
                    src={logo}
                    style={{ marginTop: "8px"}}
                    width="150px"
                    preview={false}
                />
            </Link>

            <Menu theme="light" mode="horizontal" style={{ display: "flex", justifyContent: "center" }}>
                <MenuItem key="index"><Link to="/" />首页</MenuItem>
                <MenuItem key="product"><Link to="/product" />产品功能</MenuItem>
                <MenuItem key="help"><Link to="/help" />关于</MenuItem>
                <div style={{ marginLeft: "50px" }}>
                    { loginState === '1' ?  
                        <Button type="primary" onClick={handleOnCourse}>进入课堂</Button> : 
                        <Button type="primary" onClick={onClick}>登陆/注册</Button> }
                </div>
            </Menu>

            {/* 登录弹出框 */}
            <Modal
                style={{ width: "300px" }}
                destroyOnClose={true} 
                title="login/register" 
                footer={[]}
                onCancel={() => setLoginModalVisible(false)}
                visible={ loginModalVisible }
                >
                    <LoginCard />
            </Modal>
        </div>
    )
}

export default withRouter(HomeNavigation);
