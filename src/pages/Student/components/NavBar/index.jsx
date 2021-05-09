import { Avatar, Dropdown, Menu, message } from 'antd'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./index.css";

const MenuItem = Menu.Item;

function NavBar(props) {
    const studentId = props.studentInfo.studentId;
    const pathLevel = props.location.pathname.split('/').filter(i => i).length;
    const handleSignOut = () => {
        window.localStorage.setItem('loginState', 0);
        props.history.replace('/');
        message.success('您已退出!');
    }

    const menu = (
        <Menu style={{ marginTop: "10px", textAlign: "center" }}>
            <MenuItem key="1"><Link to={`/student/profile/${studentId}`}>个人中心</Link></MenuItem>
            <MenuItem key="2">学生管理</MenuItem>
            <MenuItem key="3">课程管理</MenuItem>
            <MenuItem key="4" onClick={handleSignOut}>退出</MenuItem>
        </Menu>
    );
    return (
        <div className="student-navbar">
            { pathLevel === 1 ? 
                <div className="nav-tip">Logo</div>
             : 
                <div className="nav-tip">
                    <Link to="/student">回到首页</Link>
                </div>
            }
            
            <div className="student-avatar">
                <Dropdown
                    placement="bottomCenter"
                    overlay={menu}
                >
                    <Link to={`/student/profile/${studentId}`}>
                        <Avatar
                            style={{ marginBottom: "2px" }}
                            size="large"
                            src={props.studentInfo.avatar}
                        />
                    </Link>
                </Dropdown>
            </div>
        </div>
    )
}
export default withRouter(NavBar);
