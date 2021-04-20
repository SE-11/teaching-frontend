import React from 'react'
import { Row, Col } from 'antd';
import Footer from '../../components/Footer';
import "./index.css";
import ProductBrick from '../../components/ProductBrick';

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
                        <img src="https://www.ketangpai.com/img/interlight.2db8439b.png" alt="pic-1" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            轻量级
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            无需下载安装，简单操作易上手 轻松开启课堂，快速加入 不依赖课件，支持多种教学模式
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/intersignin.6b814682.png" alt="pic-2" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            考勤签到
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            二维码、数字口令、GPS等5种考勤形式， 精准有效、避免代签 签到数据自动生成，一键导出
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interlesson.9fd0377e.png" alt="pic-3" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            互动讲堂
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            课件在线讲解、标记疑问 支持发言、开启弹幕、抢答、提问、话题讨论、黑板、画笔标注课堂要点、让课堂更精彩
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interword.f62bf283.png" alt="pic-4" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            实时测评
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            支持投票、拍照、评价等11种互动题型 在线发起课堂互动，实时检测教学效果 实时分析互动答题情况，在线讲解
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interreword.e9ec40d0.png" alt="pic-5" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            词云功能
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            一键词云功能，提取学生有效观点 自动分析学习要点和关键点 精准掌握教学关键点覆盖情况
                            </div>
                        </div>
                    </li>
                    <li style={{width:'380px',height:'300px',textAlign:'center'}}>
                        <img src="https://www.ketangpai.com/img/interlight.2db8439b.png" alt="pic-6" style={{width:'124px',height:'124px'}}></img>
                        <div style={{ fontSize:"20px"}}>
                            表现奖励
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                            过程表现实时激励，提升学习积极性 支持多种课堂表现奖励方式 全过程记录学生参与课堂活动情况
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div style={{ textAlign: "center", margin: "40px 0" }}>
                    <div style={{ fontSize: "40px" }}>
                        在线直播教学
                        <div style={{ fontSize: "20px" }}>
                        打破空间壁垒，后疫情时代不可或缺的混合教学方式
                        </div>
                    </div>
                    <div style={{display:'flex',marginTop:'50px'}}>
                        <div style={{width:'346px',height:'302px',background:'white',marginLeft:'130px',borderRadius:'8px',textAlign:"left"}}>
                            <div style={{marginLeft:'33px',marginTop:'20px',width:'280px',fontSize:'28px',color:'#ffb607'}}>
                                01
                            </div>
                            <div style={{marginLeft:'33px',width:'280px',fontSize:'28px'}}>
                                课件同屏
                            </div>
                            <div style={{marginLeft:'33px',marginTop:'10px',width:'280px',fontSize:'18px',color:'#74787c'}}>
                                满足线上线下混合式教学场景，动画级课件同屏实现轻量级直播，不限人员数量，手机电脑均可参与
                            </div>
                        </div>
                        <div style={{width:'346px',height:'302px',background:'#3b83fc',marginLeft:'130px',borderRadius:'8px',textAlign:'left'}}>
                            <div style={{marginLeft:'33px',marginTop:'20px',width:'280px',fontSize:'28px',color:'#ffb607'}}>
                                02
                            </div>
                            <div style={{marginLeft:'33px',width:'280px',fontSize:'28px',color:'white'}}>
                                视频直播
                            </div>
                            <div style={{marginLeft:'33px',marginTop:'10px',width:'280px',fontSize:'18px',color:'white'}}>
                                低延时直播、共享窗口、支持摄像头开启 支持弹幕、实时课堂互动 直播录像自动保存，轻松构建直播课
                            </div>
                        </div>
                        <div style={{width:'346px',height:'302px',background:'white',marginLeft:'130px',borderRadius:'8px',textAlign:'left'}}>
                        <div style={{marginLeft:'33px',marginTop:'20px',width:'280px',fontSize:'28px',color:'#ffb607'}}>
                                03
                            </div>
                            <div style={{marginLeft:'33px',width:'280px',fontSize:'28px'}}>
                                云录屏
                            </div>
                            <div style={{marginLeft:'33px',marginTop:'10px',width:'280px',fontSize:'18px',color:'#74787c'}}>
                                在线制作精品课程资源；随时开启云录屏，沉淀教学录像资产；支持课程资源对外开放，拓展学习范围
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ textAlign: "center", margin: "40px 0" }}>
                    <div style={{ fontSize: "40px" }}>
                        混合教学全过程管理
                        <div style={{ fontSize: "20px" }}>
                        课前、课中、课后，线上线下，教学场景全过程管理
                        </div>
                    </div>
                    <div style={{marginTop:'70px'}}>
                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            <Col span={8} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                                <ProductBrick
                                    imgSrc="https://www.ketangpai.com/img/task.a6436aca.png" 
                                    title="作业" 
                                    paragraph="81 种文档格式作业在线展示和批阅，实时查重，精准对比，避免学生抄袭。 自动管理成绩，一键下载作业数据。"
                                    />
                            </Col>
                            <Col span={8} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                                <ProductBrick
                                    imgSrc="data:image/png;base64,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"
                                    title="考试/练习"
                                    paragraph="单选、多选、填空、简答等10余种题型。支持题库随机抽题组卷。支持限时考试、选项随机等防作弊模式。"
                                    />
                            </Col>
                            <Col span={8} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                                <ProductBrick
                                    imgSrc="data:image/png;base64,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"
                                    title="课件资料"
                                    paragraph="课件、资料、话题、公告等教学内容支撑。在线制作方便快捷，提升备课效率。支持课前发布活动，课中互动，课后巩固。"
                                    />
                            </Col>
                            <Col span={8} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                                <ProductBrick
                                    imgSrc="data:image/png;base64,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"
                                    title="多元化教学"
                                    paragraph="支持线上、线下、混合教学模式， 满足多种教学场景需求承载多元化教学模式，教学场景高度还原"
                                    />
                            </Col>
                            <Col span={8} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                                <ProductBrick
                                    imgSrc="data:image/png;base64,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"
                                    title="成绩管理"
                                    paragraph="汇总互动数据、平时成绩、期末成绩 个性化配置成绩权重占比数据报表一键导出下载，课留存，可追溯"
                                    />
                            </Col>
                            <Col span={8} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                                <ProductBrick
                                    imgSrc="data:image/png;base64,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"
                                    title="教学数据分析"
                                    paragraph="全方位教学数据信息化，可视化实时监测教学质量，把控教学进度，学业预警分析，提升教学效果"
                                    />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div style={{background:'#4285f4',marginRight:'50px',marginLeft:'50px',height:'242px',borderRadius:'12px',display:'flex',justifyContent:'center'}}>
                <div style={{width:'600px',marginLeft:'70px',marginTop:'40px'}}>
                    <div style={{fontSize:'40px',color:'white'}}>
                        智能备课
                    </div>
                    <div style={{fontSize:'24px',marginTop:'10px',color:'white'}}>
                        沉淀教学资源，提升教学效率，促进教师成长
                    </div>
                </div>
                <div style={{width:'400px',marginTop:'50px'}}>
                    <div style={{display:'flex'}}>
                        <div>
                            <img style={{width:'40px',height:'40px'}} src="data:image/png;base64,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" alt=""/>
                        </div>
                        <div style={{fontSize:'26px',marginLeft:'10px',color:'white'}}>
                            资源管理
                        </div>
                    </div>
                    <div style={{marginLeft:'50px',color:'white',fontSize:'16px',fontWeight:'100px',marginTop:'15px'}}>
                        教学资源结构化，管理更高效 题库、试卷库等7类教学资源在线制作 一键分享下载导出，沉淀教学资源
                    </div>
                </div>
                <div style={{width:'420px',marginRight:'70px',marginLeft:'20px',marginTop:'50px'}}>
                    <div style={{display:'flex'}}>
                        <div>
                            <img style={{width:'40px',height:'40px'}} src="data:image/png;base64,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" alt=""/>
                        </div>
                        <div style={{fontSize:'26px',marginLeft:'10px',color:'white'}}>
                            协同备课
                        </div>
                    </div>
                    <div style={{marginLeft:'50px',color:'white',fontSize:'16px',fontWeight:'100px',marginTop:'15px'}}>
                        支持个人或小组协同备课，资源共享 有效提升备课效率，助力教师成长 专业备课，教学资源利用最大化
                    </div>
                </div>
            </div>

            <div>
                <div style={{ textAlign: "center", margin: "40px 0" }}>
                    <div style={{ fontSize: "40px" }}>
                        在线课程建设
                        <div style={{ fontSize: "20px" }}>
                        促进教学资源利用，提升教学质量，就能人才培养
                        </div>
                    </div>
                    <ul style={{listStyle:'none',display:'flex',justifyContent:'space-between',flexWrap:'wrap',position:'relative'}}>
                        <li style={{width:'380px',height:'300px',textAlign:'center',background:'#f3f8ff'}}>
                            <img src="https://www.ketangpai.com/img/jiegouhua.b5789af4.png" alt="pic-6" style={{width:'182px',height:'182px'}}></img>
                            <div style={{position:'absolute',textAlign:'center',top:'125px',marginLeft:'115px',fontSize:'30px'}}>
                                结构化管理
                            </div>
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                                课程资源结构化建设，管理更高效 支持多种方式建设课程目录大纲
                            </div>
                        </li>
                        <li style={{width:'380px',height:'300px',textAlign:'center',background:'#f3f8ff'}}>
                            <img src="https://www.ketangpai.com/img/duoyuanhua.5cdc5d57.png" alt="pic-7" style={{width:'182px',height:'182px'}}></img>
                            <div style={{position:'absolute',textAlign:'center',top:'125px',marginLeft:'115px',fontSize:'30px'}}>
                                课程多元化
                            </div>
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                                单元活动高度颗粒化，提升资源丰富度 支持教学视频、直播、资料、课件等多种 然后从课程体系搭建
                            </div>
                        </li>
                        <li style={{width:'380px',height:'300px',textAlign:'center',backgroundc:'#f3f8ff'}}>
                            <img src="https://www.ketangpai.com/img/hudong.f79abe38.png" alt="pic-8" style={{width:'182px',height:'182px'}}></img>
                            <div style={{position:'absolute',textAlign:'center',top:'125px',marginLeft:'135px',fontSize:'30px'}}>
                                互动讲堂
                            </div>
                            <div style={{ fontSize:"15px",margin:'0 auto',width:'250px'}}>
                                助力金课，MOOC、SPOC、 直播构建多元化线下、线上、混合教学课程体系
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='pic1' style={{height:'400px'}}>
                <div>
                    <div style={{ fontSize:"50px",marginTop:"40px",textAlign:'center'}}>
                        <div style={{ fontSize: "50px",color:'#1f2023' }}>欢迎使用Teaching</div>
                        <div style={{ fontSize: "25px",color:'#74787c' }}>精彩教学，从这里开始</div>
                    </div>
                    <Row style={{ display: "flex", justifyContent: "center",marginTop:'80px' }}>
                        <Col span={11} style={{display:"flex",justifyContent:"flex-end",marginBottom:"30px",marginTop:"50px"}}>
                            <button style={{cursor:'pointer',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"white",borderColor:"white",color:"#4285f4",boxSizing:"border-box",outline:"none"}}>
                                    联系Teaching
                            </button>
                        </Col>
                        <Col span={1} style={{display:"flex",justifyContent:"flex-end",marginBottom:"30px",marginTop:"50px"}}>
                        </Col>
                        <Col span={11} style={{display:"flex",justifyContent:"flex-start",marginBottom:"30px",marginTop:"50px"}}>
                            <button style={{cursor:'pointer',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"#4285f4",borderColor:"white",color:"white",boxSizing:"border-box",outline:"none"}}>
                                    免费注册
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>

            <Footer></Footer>
        </div>
        
        
    )
}
