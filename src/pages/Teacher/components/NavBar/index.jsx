import { Avatar, Breadcrumb, Dropdown, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css";
const BreadcrumbItem = Breadcrumb.Item;
const MenuItem = Menu.Item;

export default function NavBar() {
    const menu = (
        <Menu style={{ marginTop: "10px" }}>
            <MenuItem key="1">学生管理</MenuItem>
            <MenuItem key="2">课程管理</MenuItem>
            <MenuItem key="3">设置</MenuItem>
            <MenuItem key="4">退出</MenuItem>
        </Menu>
    );
    return (
        <div className="student-navbar">
            <div className="nav-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem>我的课堂</BreadcrumbItem>
                    <BreadcrumbItem>课程详情</BreadcrumbItem>
                </Breadcrumb>
            </div>
            
            <div className="student-avatar">
                <Dropdown
                    placement="bottomCenter"
                    overlay={menu}
                >
                    <Link to="/vip">
                        <Avatar
                            src="http://images.nowcoder.com/head/7m.png"
                        />
                    </Link>
                </Dropdown>
            </div>
        </div>
    )
}
