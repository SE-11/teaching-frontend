import { Card, Image, Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
const { Meta } = Card;
export default function CourseItem(props) {
    // 可以通过外部包裹 Link 的方式来做点击 全体、局部跳转
    const cover = (
        <Image
            style={{ backgroundColor: "red" }}
            preview={false}
            src="https://assets.ketangpai.com/theme/min/12.jpg"
            alt="class-pic"
            />
    );
    return (
        <Link to="/">
            <Card
                style={{ width: "300px", boxShadow: "0px 2px 3px #dddddd", marginBottom: "10px" }}
                cover={cover}
                >
                    <Meta 
                        avatar={<Link to="/vip"><Avatar src="http://images.nowcoder.com/head/934m.png" /></Link> }
                        title="摸鱼学导论"
                        description="向老师教你如何科学摸鱼"
                    />
            </Card>
        </Link>
    )
}
