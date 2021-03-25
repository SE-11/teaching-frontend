import { Avatar, Breadcrumb, Button, Dropdown, Menu, Modal } from 'antd'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AddCourseForm from '../AddCourseForm';
import "./index.css";
const BreadcrumbItem = Breadcrumb.Item;
const MenuItem = Menu.Item;

function NavBar(props) {
    // console.log(props)
    
    const menu = (
        <Menu style={{ marginTop: "10px" }}>
            <MenuItem key="1">个人中心</MenuItem>
            <MenuItem key="2">学生管理</MenuItem>
            <MenuItem key="3">课程管理</MenuItem>
            <MenuItem key="4">设置</MenuItem>
            <MenuItem key="5">退出</MenuItem>
        </Menu>
    );

    const [addCourseVisible, setAddCourseVisible] = useState(false);

    const onAddCourseClick = () => {
        setAddCourseVisible(true);
    }
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
                <Button
                    onClick={onAddCourseClick}
                    style={{ marginRight: "80px", marginTop: "8px" }}
                    type="primary"
                >
                    创建课程
                </Button>
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

            <Modal
                visible={addCourseVisible}
                destroyOnClose={true} 
                title="创建课程" 
                footer={[]}
                onCancel={() => setAddClassVisible(false)}
                >
                <AddCourseForm />
            </Modal>
        </div>
    )
}

export default withRouter(NavBar);
