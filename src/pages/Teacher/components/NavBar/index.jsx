import { Avatar, Breadcrumb,Dropdown, Menu } from 'antd'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./index.css";
const BreadcrumbItem = Breadcrumb.Item;
const MenuItem = Menu.Item;

function NavBar(props) {
    // console.log(props)
    const teacherId = props.teacherInfo.teacherId;
    const menu = (
        <Menu style={{ marginTop: "10px" }}>
            <MenuItem key="1"><Link to={`/teacher/profile/${teacherId}`}>个人中心</Link></MenuItem>
            <MenuItem key="2">学生管理</MenuItem>
            <MenuItem key="3">课程管理</MenuItem>
            <MenuItem key="4">设置</MenuItem>
            <MenuItem key="5">退出</MenuItem>
        </Menu>
    );

    return (
        <div className="teacher-navbar">
            <div className="nav-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem>我的课堂</BreadcrumbItem>
                    <BreadcrumbItem>课程详情</BreadcrumbItem>
                </Breadcrumb>
            </div>

            {/* Dropdown */}
            <div className="teacher-avatar">
                <Dropdown
                    placement="bottomCenter"
                    overlay={menu}
                >
                    <Link to="/help">
                        <Avatar
                            style={{ marginBottom: "2px" }}
                            size="large"
                            src={props.teacherInfo.avatar}
                        />
                    </Link>
                </Dropdown>
            </div>
        </div>
    )
}

export default withRouter(NavBar);
