import React from 'react'
import logo from "./../../logo.svg"
import {Image} from 'antd';
import { Link } from 'react-router-dom';
import pic1 from "./pic1.png";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

export default function Footer() {
    return (
        <div style={{backgroundColor:'#272e38',color:'white'}}>
            <div style={{display:'flex'}}>
                <div style={{width:'200px'}}>
                </div>
                <div style={{width:'700px'}}>
                    <div>
                        <Link to="/" style={{ marginRight: "200px" }}>
                            <Image
                                src={logo}
                                style={{ marginTop: "8px"}}
                                width="150px"
                                preview={false}
                            />
                        </Link>
                    </div>
                    <div style={{display:'flex',marginTop:'70px'}}>
                        <li style={{listStyleType:"none",marginRight:"30px"}}>
                            <a style={{color:'white',fontSize:'18px',fontWeight:'300'}}>关于我们</a>
                        </li>
                        <li style={{listStyleType:"none",marginRight:"30px"}}>
                            <a style={{color:'white',fontSize:'18px',fontWeight:'300'}}>服务条款</a>
                        </li>
                        <li style={{listStyleType:"none",marginRight:"30px"}}>
                            <a style={{color:'white',fontSize:'18px',fontWeight:'300'}}>产品动态</a>
                        </li>
                        <li style={{listStyleType:"none",marginRight:"30px"}}>
                            <a style={{color:'white',fontSize:'18px',fontWeight:'300'}}>浏览器下载</a>
                        </li>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{fontSize:'18px',fontWeight:'500',marginTop:'20px',marginRight:'30px'}}>
                        <p style={{display:'flex'}}>联系我们</p>
                        <p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABbUlEQVQ4T7WTsUrDQBzGv4uFYKuDCNLFB/ANfACXTr6ADtK0UFxMqEObqEXTLpoeRRBpTxQcXZzExQfwDZydLIqTVYM2J1VT0/SUXIm33d3/+913/++OIOZBYubh/4GabvNv15eMWhnZGww41HT7DUDCh7hj6sTp3npHBtoHLhd3U2rXfQqJ24xa6ZGAubVqhhN+ERYzakn1uV+8WqpNu6/ewwDQI2nWMNsjOeyJAoFA1pl/aDiUcwCLX5vkilFzQcbdpyosCLpUPGW+2Shfy0CHgDnDNjiH40O678rM8X75PipUmKCm27cAZn2IoihzTad848+zxk6JACqrb1TCB/36JDTdfgYwHmj2dotaW5pRK4B7Bz8g4jBqFoWhCPr5CGAqsO4CUIdcEXLSqpsrwlAEUAYg+1cPCchhi5qFSMBeUT5fSXqpxB2ASQH4hVErGenKIlc5o1rjnC8B6HAPm0cN6yxYJ/VPozyd2IEfD9dqFbViejoAAAAASUVORK5CYII=">
                            </img>
                            12345678911
                        </p>
                        <p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABQklEQVQ4T2NkoDJgpLJ5DLQxMLWw5eN/BgY+SlzLyMDwaXZ/DT/YhSlFzS0M/xmrKTGQgfF/65y+2hq4l5PKOnmZfv/+RI6h/1hZ+eZ1lX8G6YW4sLDlL+cfPq7Jk/N+pha27PzPwOBGjMGMDAy7ZvfXuOfmTmL/zvLp25z+GmaYgf/BpjMyFM/uq+lLLWzS/s/AdAWfoYwM/3Rm99ddTS1qKfr/n6EXpHZOfw0jioFQA97P6a8Rgri8+SEDA6McqsH/H83pr5WH+uwtAwMDWC0+A8GS/5kY7Of21hxKKWiJZGBkWAYRZIiaM6FmeXJxix3jP4aD6D7A5UJkdefn9NcYNTQ0MIEEGxoa/qUUtpxlYGAwwhYcxBgI0cfIYAl14XF84Uq8gcREOZ5IIVI7prIh5EKqFw5kBxoWjbQpD6npQgDtEYIVM9D/VwAAAABJRU5ErkJggg==">
                            </img>
                            1195740145@qq.com
                        </p>
                    </div>
                </div>
                <div style={{marginTop:'20px',marginRight:'30px',textAlign:'center',fontWeight:'600'}}>
                    <img src={pic2} style={{width:'100px',height:'100px'}}></img>
                    <p>向杰文</p>
                </div>
                <div style={{marginTop:'20px',marginRight:'30px',textAlign:'center',fontWeight:'600'}}>
                    <img src={pic1} style={{width:'100px',height:'100px'}}></img>
                    <p>王子涵</p>
                </div>
                <div style={{marginTop:'20px',marginRight:'30px',textAlign:'center',fontWeight:'600'}}>
                    <img src={pic3} style={{width:'100px',height:'100px'}}></img>
                    <p>易礼康</p>
                </div>
            </div>
            <div style={{justifyContent:'center',display:'flex',backgroundColor:'#15191f',color:'#647184'}}>
                <p style={{marginTop:'10px'}}>Copyright © 2021 Teaching.com All Rights Reserved</p>
            </div>
        </div>
    )
}
