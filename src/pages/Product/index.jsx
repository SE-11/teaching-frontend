import React from 'react'
import { Carousel, Image, Row, Col } from 'antd';
import Footer from '../../components/Footer';
import HomeBrick from '../../components/HomeBrick';
import "./index.css";

export default function Product() {
    return (
        <div style={{ backgroundColor: "rgb(245, 249, 255)" }}>
            <div className='product' style={{height:'470px'}}>
                <div style={{display:"inline-block",boxSizing:"border-box"}}>
                    <div style={{marginTop:'124px',paddingLeft:'1000px',width:'1400px',position:'absolute',boxSizing:"border-box"}}>
                        <div style={{fontSize:"35px",color:'white'}}>
                            教学从未如此得心应手
                        </div>
                        <div style={{fontSize:"20px",color:'white',marginTop:'20px'}}>
                            融合教学场景，有效连接各项教学元素，打造多元化互动创新教学模式
                        </div>
                        <div style={{display:"flex"}}>
                            <button style={{cursor:'pointer',marginTop:'20px',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"white",borderColor:"white",color:"#4285f4",boxSizing:"border-box",outline:"none"}}>
                                立即注册
                            </button>
                            <button style={{cursor:'pointer',marginTop:'20px',marginLeft:'20px',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"#4285f4",color:"white",boxSizing:"border-box",outline:"none"}}>
                                联系我们
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ textAlign: "center", margin: "40px 0" }}>
                    <div style={{ fontSize: "40px" }}>
                        互动课堂教学
                        <div style={{ fontSize: "20px" }}>
                        让教与学更高效，让知识传递更高效
                        </div>
                    </div>
                </div>
                <ul style={{listStyle:'none',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interlight.2db8439b.png" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            轻量级
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            无需下载安装，简单操作易上手 轻松开启课堂，快速加入 不依赖课件，支持多种教学模式
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/intersignin.6b814682.png" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            考勤签到
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            二维码、数字口令、GPS等5种考勤形式， 精准有效、避免代签 签到数据自动生成，一键导出
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interlesson.9fd0377e.png" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            互动讲堂
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            课件在线讲解、标记疑问 支持发言、开启弹幕、抢答、提问、话题讨论、黑板、画笔标注课堂要点、让课堂更精彩
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interword.f62bf283.png" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            实时测评
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            支持投票、拍照、评价等11种互动题型 在线发起课堂互动，实时检测教学效果 实时分析互动答题情况，在线讲解
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interreword.e9ec40d0.png" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            词云功能
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            一键词云功能，提取学生有效观点 自动分析学习要点和关键点 精准掌握教学关键点覆盖情况
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interlight.2db8439b.png" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            表现奖励
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            过程表现实时激励，提升学习积极性 支持多种课堂表现奖励方式 全过程记录学生参与课堂活动情况
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}
