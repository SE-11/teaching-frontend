import { Avatar,Dropdown, Menu, message } from 'antd'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./index.css";
const MenuItem = Menu.Item;

function NavBar(props) {
    // console.log(props)
    const teacherId = props.teacherInfo.teacherId;
    
    const pathLevel = props.location.pathname.split('/').filter(i => i).length;

    const handleSignOut = () => {
        window.localStorage.setItem('loginState', 0);
        props.history.replace('/');
        message.success('您已退出!');
    }

    const menu = (
        <Menu style={{ marginTop: "10px", textAlign: "center" }}>
            <MenuItem key="1"><Link to={`/teacher/profile/${teacherId}`}>个人中心</Link></MenuItem>
            <MenuItem key="2">学生管理</MenuItem>
            <MenuItem key="3">课程管理</MenuItem>
            <MenuItem key="4" onClick={handleSignOut}>退出</MenuItem>
        </Menu>
    );

    return (
        <div className="teacher-navbar">
            { pathLevel === 1 ? 
                <div className="nav-tip">Logo</div>
             : 
                <div className="nav-tip">
                    <Link to="/teacher">回到首页</Link>
                </div>
            }
            
            {/* Dropdown */}
            <div className="teacher-avatar">
                <Dropdown
                    placement="bottomCenter"
                    overlay={menu}
                >
                    <Link to={`/teacher/profile/${teacherId}`}>
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
