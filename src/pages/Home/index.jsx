import { Carousel, Image, Row, Col } from 'antd';
import React from 'react';
import Footer from '../../components/Footer';
import HomeBrick from '../../components/HomeBrick';
import "./index.css";

export default function Home() {
    return (
        <div style={{ backgroundColor: "rgb(245, 249, 255)" }}>
            <Carousel autoplay>
                <Image alt="实时语音，视频互动，共享桌面" preview={false} src="https://www.ketangpai.com/img/banner-home03.f97cf0e7.png" />
                <Image alt="computer" preview={false} src="https://www.ketangpai.com/img/banner-home01.9994acf5.jpg" />
            </Carousel>
            <div>
                <div style={{ textAlign: "center", margin: "40px 0" }}>
                    <div style={{ fontSize: "50px" }}>混合教学全过程管理</div>
                    <div style={{ fontSize: "25px", color: "rgb(116, 120, 124)" }}>课前、课中、课后，线上线下，教学场景全过程管理</div>
                </div>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="https://www.ketangpai.com/img/task.a6436aca.png" 
                            title="作业" 
                            paragraph="81 种文档格式作业在线展示和批阅，实时查重，精准对比，避免学生抄袭。 自动管理成绩，一键下载作业数据。"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,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"
                            title="考试/练习"
                            paragraph="单选、多选、填空、简答等10余种题型。支持题库随机抽题组卷。支持限时考试、选项随机等防作弊模式。"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,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"
                            title="课件资料"
                            paragraph="课件、资料、话题、公告等教学内容支撑。在线制作方便快捷，提升备课效率。支持课前发布活动，课中互动，课后巩固。"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD30lEQVR4Xu2bSWgUQRSGvxrcEJeDuCEmKghxiQuCRBHXgx7cMHHfDgbEJB4EFRXxoGJUFA86QSGKEdFRMW4XL2LcBXENbghuEeNCwBWXaFoqPTPpzEwyna6W6XR3n4Z01ev/ffXeq65Kl6CRSwv2nA2BXWh0b6ydY+8JKqFmhcivONaQRpHohhZMK0QTaxzrmBVhQtsq8l+vje0aB0DbnVaNEC2sPMPxfTTtj1j+uqVRZz0A2p50zfFO2CBQFLyK+h394eqRj4VmiIRaAK7M+WSREq4JOgCPhH5cASx4JUTtVKcFQsmAufK+qJkjtGD622Y7z6uOiqBSeDX8I+x8AH4EeHQG8FMgTMCvAX4NSEUN6JQBc86rzeLf3kFJlpoN4P+kgHQwuxROz4UP92NECsh/oSy81sCvr1CcqWTr/wCQkvJf1gl7GIKy8P5K5iIYvVFJdL3OwV5KtuwHkDYGppTEi4oIHVYAWSuVRDsXwJL70KZjvHOlM6Hylv531wIwhrxWAyezIecUvLkGZ+bXQXElgGXPIBDeartXDNc26w7nPYeiPvUjwnUARq6FoUt1J68Xwt19jee36wBEQv/7Bzg4PHlxcxWAfrNg/Hbd6WBvubnmMQC5D6B1B5BFLzbXG0LhqgiIhP+j43BxdfLRr50G8yDLZFszFlP6IhQBULYOHh4xIxc6psOCS+bammnlCABXNsKDA2bk6m3kQkiuF1Sv0ESoeqpkRe1VOBIBFVfh7IKmCQm0gq5DIOG/Z5OYqv4BH8ub9rwGWqsBmFwCz87A01JbxKTCiBqAVCg2PjMjB/pOhXOLLCuxD0CXQdCirQUhGry/C39/N63v1MPQc1T4HcT6klgdgB27O9INWcxkUTN7Dc6FUesdAMC4CjQrvqF2h8fCZ8NGSmP2Bi6EMZtcBuDGdrhTZA7jhJ2Qke0yADd3wO095gDkvQAh4NcXKB5krk+CVuo1wM4UMA3AsLF6YRU8OeExAItvQrtuyuEvDTS/CJALKbmgktedfXCj0PLoNw8AMteL5F4DMG4b9J+t//5bDXv7KjnvfADTj0KPEXBimr7BKgJ1DiuuAiOGnJsC3YfDjOPxI/zzE+wfojzyzgeQaHY5uxAqrtjmvPNS4PIGKD+kOzh2CwyYZ3vIx9JTT4Hccmjd3p5RSbSx2jkTpoegNAeqHtvzHIMVdQDSmHFetioxNAmqnljtbbmfPQAsPz71HX0A/icyqfhEJvWRH1Xgp4CfAp5PAc9/Lu/1AxOyHHq1DsjTY/6hqciE6Oljc1EIHpkREh6c9EQkJDs6G4Xg5cPTxtd0Lxyf/wcHk7hgHuJwKwAAAABJRU5ErkJggg=="
                            title="课中互动"
                            paragraph="课件在线讲解、标记疑问 支持发言、开启弹幕、抢答、提问、话题讨论、黑板、画笔标注课堂要点，让课堂更精彩"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC5ElEQVR4Xu2bz2sTQRTHP+OPboRWS6VCvEiPgnpRsFA92AqSePSgf4M3b/oX6M2bd2968GhChbQHEX/fBI9FkAYEi0LBpLUd2eZHJ8ludnZmY3ezk1NgZ96893nffTOb7BMM+cjKxG0Qj4HisHEpvlYHeU+Ut56H+SiCLshq4SFS3k9xYPFdE+KRKDUe9E8cACAr3jZwJP4KmZjxV5SbR1VPewDIiiczEYalk6Lc7Mbd/TLmme9H1lXCHoCxvOejVNKuCS0AOZH+QAEsN4Vob3XPooCN53V5R8iKt57hfd42L3UfQC4qf+hByAFwCnC3gKsBtqU0y/NHswtcrsHMAmy8gfdLZnySsKGx8mgAlBr7S1cLGm4EDEnChsbKDoD1OeDMXTi5CELA51st5kHZu/hCIx9E25ASfq7Atyd69iJGWShAQOlPr/mVOWjW4doaFIrQqMPqHHhFWFzTcziOjeox/1FOz27IKHMAS+swMdNrdqcBr6YHl7rxGw55eo7GsbG1AbXTenYTB6DKXDUud+Dddfj1FqbnYb4G4nA8J+PYMC2ybY/MFRAGIF6o9qMdAMNt1imgRcD8FrAXbyosOADGByFXBJXz/kGK2e0Cbhew0p95EXQ1YIQ14PtTmC2DNxud3bGrAa8vweaXwcfqMBRjBUANfuoCXPmQIwWowU+eg6ufooP3R6RaAcsnYLcJCx/h+PnwgEyDTz0ANTthEGyCTz2A3W1YntrPfD8E2+BTD8B3MAxCEsFnAkAQhMmzsPm1pYw4BS+oiqS6CKoO9yshieAzo4AOCBWCbeY7NjOjAL1dPf4oB8A9DsdXjTLDPQ4b/yZ46ibo/uFplaMhk/0/Y3+8tLJurgB/2YOEkEDwfgh2AKzYp2OyA2BcA9KRQGsvnAKcAtyrsrl/XX6vNzC/DRN+Gc1rHfC7x1zTVGcjzXXbnALB7q1D62PJ/zEQ2DiZEyUMb53tQshz87Qqwjy0z/8Du8aWUrBhHXYAAAAASUVORK5CYII="
                            title="考勤签到"
                            paragraph="二维码、数字口令、GPS等5种考勤形式， 精准有效、避免代签 签到数据自动生成，一键导出"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,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"
                            title="成绩管理"
                            paragraph="汇总互动数据、平时成绩、期末成绩 个性化配置成绩权重占比数据报表一键导出下载，课留存，可追溯"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMrklEQVR4Xu1da3BU5Rl+3pNNdpPdQARSWqsVlMZRwNYJrVMRNJtSf2i9oijUERwvnU6rLeAlCVdhN+USFMeZjugAjo2XgRqtUq2aBUGlDtCiEFuhKGp/KLcJZpPsbnbP2/k2QyaXPXvL7uZkz3t+JbPf+d73fZ7nvN/9HEKWr2netnKbXjBd0yITAarQGRcCNJrApSAqBbM9yy6Yu3qiIJjbGNQG8EmN8CnAh3S9oCWsRXbuqi09ns0AKBuVV9W3V2rMs1nHDCZMIiArdrLhu5nqZICJcZA0vK0TPb+9xrkv0/5ljJipq46XOsLF9zJhHhgTM+2o1Af1GLUQY1PA1rnh/YfL2zKByaAFcNVSLtOKOh4A+H4AozLhlNSREIFTAD2hh0rW71hOrQlLxykwCAEwuT3tdzKwmoDywTgh96aHAAPHCXjIV+d8FiBOp5a0BOBe0XoBaYWbGXxFOkblnswiQKD3WO+a61tcdiTVmlMWgLu+7Rbo9DSAkakak/JZReA0kXZ3c23J1lSsJC8AZnJ729eAaD6Yk78vFW+k7OAQIGIwr/PVOh+E+juJKykiK5/iwrKTnZuY9TlJ1ClFhhgBIq2x9WjxvH0bqCuRKwkFECX/REcTg69JVJn8bh4ECLStdUzJjfvuiy+C+AJgpur6zufkyTcPsal4ojJBc03xHfGag7gCcHv8awEsSMWolDUdAg2+OtdCI68MBRDt7bP2knT4TEdoag6pziDps3w1pVti3RhTAGqcD82m5p1lqJca3GYtfRp6uDLWPEEMATBVezp2yiSPWblMzy81WdRcVzK9/4zhAAG4vX61mLMxPTNyl6kRINzlq3Vt6u1jHwGohR0qaj8kc/umpjFt59TaAYecFb0XkPoIwO1pXwrwsrQtyI3DAAFa5qtzLj/jaI8A1Hq+PVx8VJZ0hwGHg3PxVNDWOe7MfoIeAVR7/AsYUON+ufIcAQIWNte5GlSYPQJwe/wtAC7O89glvG7WW3y1rkk9AlB7+EjnvYKOdRBgjaaoPYbRDFDt9TcwY751wpdIibCuuda1ICoA90r/xyBMFlgshADjgG+R6xKK7ttn+ka2bluIfABqy3mYeCxVrey4mUhPaRuRtaDK32iZtZlU7W1bwkw9EwP5G65E1h8BIl5Kbo+/EcBsgcd6CBChkao8/j0ETLFe+BIxA3vV4Y7PAR4ncFgRATqqmgB1+nSMFcOXmHFC7fUPWP6ItlWVQBRUGSCpAwRWxSjf4xYB5DvDCeLLuQBsGjD3ykJc++NClBYnPJdiCXraOhmv7+/C5ne7ENZzG3LOBXB3VSFu/1lRbqMcJtZe2B3CM9sTnubKaDQ5F8ArfyiRJ9+AQpUJbnisI6MEJ6pMBJAIoRz+bgkBSBNgrChLNAHSCRwoAEt1AnOYUcVUEgjkvA+QhE9SJIcIiAByCLYZTYkAzMhKDn0SAeQQbDOaEgGYkZUc+mQaATTXOnMY9tCbqva2D70T6pCQWZaDRQBDowcRwNDgDskA/YCXDDA0SpQMMDS4Swboj3u+ZIC3DnShaU8YHSHG1IoC3DmtCPbCgRtfpAnIwyZg444QGj/ou6Hj55MKUHOdY0CeEQHkmQCe3h7Ei7vDA4gmAl6dXwKnvW8WEAHkiQCYGU/5Qtjy4UDyz4TY9PsSjCgRAcTtbg3HPoAi/0/vhPCXPcbkX3qehrVziqUJSNTZHm4CUOQ/+XYIr+w1Jv/sswjr5jhQPkITAeSTABT56/8ewmv/NCb/+6O6yR9TOpB8hYX0AYZpH0BnxuNvhLBtvzH5544iNMxxYLQB+SKAGOlgODQBivyGbSG8+bEx+eeNJqyd48AoV+wn/0zokgGGWQbQdcaabUG8dSBi2JqNG6PIL8ZZzsQnnkQAWRBARGc8u6sL2/7VhXAEuPIiG+5xF6HUkZiQeH0UVe+q14JobjEm//zvENbMLkZZv+GeUb0igAwLIBhmrGgKYPfhvofrxo4g1F5vx6RzCxL1Q2P+rsiv/2sQ2z8xJn/C2G7yR6Rw1lEEkEEBtAcZi7cE8NGXsU9WagTcOa0Qsy8vhKb+SfIKRxieV4PY+R9j8iu+q2H17Y6Uj7uJADIkgNYOxiMvBnD468THan/0Aw0119ljjsv7a0KRv6IpiPcOGZN/4fe6yXel0cSIADIggGPf6njohQC+Opn8Oy5GFAMLr7FjaoXNMA90RRiPvhzEB4eNyb/obA2rbnPAmQb5MgzMwDDwq5Pd5B/7Nnnye5u9vtKGX1cXocjWt0kIhRnLXg7gw/8aZ5SJ52ion+UYsMCTZMsSLSYZYBAZ4PDXkWjab41zkrpAAyIJWoXx5YRFNzgwrrx7zK7IX7I1gD2fGd84+VwN3lkOlBQl35eIJQwRQJoC+OjLCBZtCaAjaPy8XX1J90aM1a8Hsf+L+Cqw24DfzCjCjEk2LN4awL7PjcurPoTnVgeKB0m+ZIA0m4Ddh8N4tCmIkPFEHGb+tDu1ExHU5M0Lu7uicwOJssEoJ+FUu3Fzolb1Vt7qgCPG7p5UUr/MBBqglWgq+J2DXVj9eigukfOuLMSvpg58/UzL/yLwvhrE16fT6y9UjtewYqYj5taudMiXDJBiBnhlbxeefCukXnEe81Kt8e+uLsL1lYWGfPgDjMfeCGLHv4179rFu/sn5Gh6d6RjQWUyXeMkAKWaA53aFsHmX8YuTVGfvkV8WwT3RmPzeJt/Y3xVdxw8k8S6myyZoWHZT5smXDJBkBmh8P4SN7xozpTpwS2+y47IJxmP6WHr78qSOlU0BHDlm3CRc/sMCLLnJjsKCwfX2jTKFjAISjAJUyr55fUd0USfW5bQj2iOfnOYcvxrybfCF0BRjR88VFQVYfKMdtiyRLxkgiQxw5FgE9z4TiEm+Wm794212TBib3gJP70r/cTiMx98M4XgbR7+hd+2lNvz2F0VZJV8EkIQAAiHGrCc74O+ngbEjKTr/fs6o+BsuUumkqRU/NbNY5tSSXs5Npf5YZaUJSNAEqJ/V0K/hb6Gecb9ac/feGnuT5WAJyfX9IoAkBKCKqAWfj76IYGQJoXJ8AQpSWM7NNamp2BMBJCmAVEAdTmVFACIAU+hVjocPEQ2SAYYIeDHbFwHTZAAhZmgQEAEMDe6msSoCMA0VQ+OICGBocDeNVRGAaagYGkdyLgD5YMRAoi31wQj5ZIzxk26JT8bIV8OMBWCJj0aJACwuAGkCLN4ESCfQ4p3AoRnsiFUjBHI+DBQqzIUAub3tATDbzeWWeJMTBIiCKgMcBzAmJwbFiNkQOEFVnvbPCDzebJ6JP9lHgEGfU5XHv4eAKdk3JxbMhgADe6na6/8zM+aYzTnxJ/sIEKGRqr1tS5hpefbNiQWzIUDES6lqZcfNRPpWszkn/mQfAWZtJk3ztpXbmL4hRI/GyWURBBjgMPHYKOnulf6PQZhskdglTIUA44BvkeuSqACqvf4GZswXZKyDABHWNde6FkQFUFXfXkk677VO+BIpazRle41zX0+77/b6D4IxUaCxAAKEFl+ta5KKtEcA1R7/AgbWWiB8y4dIwMLmOldDHwFMXXW81B4uPgpglOURym8ATgVtnePef7i8rY8AoqMBT/tSgJfld/xWj46W+eqcPRN/fcb+Vy3lMipqP0RAudVhysf4GTjOIWfFjuXUeia+AZM/bo9/LoBN+QiAxIR5vjrX5t44xJj9Y6r2dOxk8BUCWP4gQKD3mutKpgPU5+WIMad/3StaL4Bm2wdgZP5AYOlITkMPV/oWlx3pj4Lh/L+7vu0WsPYSmGWNYDhrh4hB+ixfTemWWGHEJdft8at5gQXDOX7xHQ2+OtdCIxziP93MVF3f+RyzLhtGhqGSiLTG5priO6CygMGVML1XPsWFZSc6mhh8zTDEwLIuE2hb65iSG/fdR3Hfi55QAArBqAhOdm6STDA89KSe/NbRxfMSkT9gJjBueMzqDMEaEM2XjqFJhaBSPfM6X63zwXhpP8E8QPzgoqMDnZ6WIaLpRHAaGt9j1NtPuw8Q60Y1T0Ba4WaZLDKHCNQkD+tdc2ON8xN5mFQfIHYl0SZhLjNWydpBIpiz87ua2yfCw75a5+b+M3zJWhyEALpNqAUkrajjAYDvl6XkZGEfdLlTAD2hh0rW917YSafWQQvgjFG1n8ARLr6XgbsAXJyOM3JPQgQ+IWBjwNa54cx6fsI7EhTImAB621F7DDXm2axjBhMmyZbz9GhSW7eJcZA0vK0TPa/28KVXk/FdWRFAb3PRcwd6wXRNi0xkpgsZqCDQGIBdICq1/NF0oiCY2wDyM/gEAYeI+FNdL2gJa5Gdu2pL1entrF3/B/4vJSi3vITcAAAAAElFTkSuQmCC"
                            title="教学数据分析"
                            paragraph="全方位教学数据信息化，可视化实时监测教学质量，把控教学进度，学业预警分析，提升教学效果"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADMklEQVR4Xu2bz0sbQRTHv6NtNlIjFaIn/QdEkNaDBw8eArahENez4NVLWkQUPKQgFO/iFsR/Qhep2HrzH2gvehM8eDPpL6LWqM2UWbohm+xmdzPZzeyP3MK+efPeZ968mZ2dR+Did5XLvSCEfAAhb1w080+U0kNK6fvhg4NvTjslTgRLsvyZAq+cyIoiQ4AvaVV9bWdPSwAlWd6mwFs7JSI/J4CSVtV3VjZaAijK8j2ApyI758K2hyFVTZjJNwGg2axUkqQ7F8oDI5quVJLk6KhSb3ATgKIs08B41IahQ6pq8NnwJ2Rhb4XHMB1qAK5kWSFAvg2ogWtCgY/Dqqol9xqAsId+4yjpU0EDEMR1njfs9H2CBiBqo6/DY1FAtO1tT89XXqJBbE+r1ZekODf3Sdi9vddUKT0kUQ1/nW0MII6AkG997dJIPAXiKRBPgXC//nqaA56MjeH55qZdH9zP/xwf42Znh1uP6YkQTw5I7+97YpSZ0tL8vGVfz5aWcLO725YtXKuACAD683kkMxm0AtSKTMcBPF5e4lpRUC2X0ZfLoS+bbWtkGhuZOdi/vIzkzIwmKgSAX4UCHs/OjLYTgvTeHjeERgdTq6uQpqdrersO4OH8HL/X1kwd7R0dxeD2NheEegdT6+uQpqYM+roO4PviImi5bOkkb77QHRwoFJCYnGzqp+sA7AzoBICBjQ0kJiZMIdv1bzUyHUuCP1dW8PfiwrMIuD89RWJ83FJ/1wFUb2/xY2HB1EApk0Eq7+2Je9cBMM/vTk5wvbVlgNA7MoJBReFKgE4aCwFAN5SBYAkxOTsLkjD9JunEJ1cyQgFwZXmHhGMALd4VfN0Kd2hAm9QIvwp45biul4W40PsAPwCwPoTdCfoFgPUj5LuAnwA0CKK9DfoNgPUn3HmAlxCs1nnhToS8giDkmWDkT4W9Gm0/9XKdB/hpqFd9xQB4Pox4NSp+6o0jII6AyH8ej/o1uchflGQZN6p5QLsqywBE/rJ0FKPAcF3+fxQEvkLM6QaqvpIsLplppBb2hNiyaIrBiHzZnB4RIasgc144WT8lwlBJVl8hZpYk4+Jpp0sHkwtj+fw/WWuptDvs/EMAAAAASUVORK5CYII="
                            title="直播-云录屏"
                            paragraph="满足线上线下混合式教学场景 动画及课件同屏+语音实现轻量级直播 不限人员数量，手机电脑均可参与"
                            />
                    </Col>
                </Row>
            </div>
            <div>
                <div style={{ textAlign: "center", margin: "40px 0" }}>
                    <div style={{ fontSize: "50px" }}>智慧教学平台</div>
                </div>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACVUlEQVR4Xu2bS07DMBCGfyNRHhJX4Ao8LgESd4CwYkO5AUKIG1A2rAicgUpwCR5X4ApIPIpUo7RNm7RxM6ntyI6nu6rjif155rfjegQqfOQhdrCEKwAHFZrVadpFH+fiAa/UhwqKoYzwBGCPYuuQzbOIsV/Wn7kAZIRrAO0yJ47/3hExzlR9VAKQEXoAlh0fHLV7fyJGq8h4BoBsYwWf+KF69spuA6uig99sn2cBRJBeDapiZ0WM3JhzXxoW9io0uXQYA5BH6EDgtCJQP80lbsT9UNwnABoe+tMzlabCAICn67xu9A32CSmARgufcg8QQ4jR9vZFF6eX7fvYFTLCo8N7e9tcuwmAIMM/JcsAOAI4BQxpwO0X0FrTF63eN3Cyru+H6MGMBpgafNrpGiGYAXBnYSE5Jh1WEedZbcYAjKwCHAGcAsVJ9vEOXGxr56lNB3Y1oCYh0wHEAKyKYDYCqgrlvLYG9wn1RYBJAEnMG4LgL4AEggGNYQBeakAq+xwB+u8LnAKcAiZOhFRLnK19AGvAiIAzIqg6EQomApIJKYIQFACdV7KythSNKfOh+N3MMrjgw8nNggZw+QZsbhWzckYEKVNZ9W2Q4pMBuLIVpswWR4CbJ8f1rQKO/n1WHwDVZomSPtM2ho7DErf1AlhksJbbMAAj5wGWZ8mme44AviY3rAMK96Jkkl+h6kByYZovS6cKG1oU5K7Lj9KgCRVi1BVzXEnGJTPTyJqeCnOLpgapEHrZXEYUwyyczKZEIyrJMhViRQpJOlTztKhKv3h6RiAbWD7/D7oDO4YLaQhIAAAAAElFTkSuQmCC" 
                            title="线下互动课堂" 
                            paragraph="多种互动教学工具，沉浸式学习体验，精准化学习。"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD+klEQVR4Xu2bT0gUURjAv7c67uaunRQkunRIErvUVdRahYogKKIOhZUpFP65u1Jiset9FSosjahIiKIoKnCXCuxYBElihyKiBPXkbqv7b+JNTe2Ms7sz876Zdmdmbsu+9+Z7v/f9e2/eR0DD0zEa35XJwmUC/EEN3UxrygN5WuGCCzOD3ndqX0rUNGwPxp7zAPvUtC2VNgTgRWTIt7+YPAUB+EPxMPB8f7FBSvp/QsaiAe9APhnzAvAHY0kA4Ep6cuqFS0WHfFVKzTcAOBDm3eur8TX1Y5dPS3eN1/NsgKznSrwBgD8Y48tnStoljQ75JHOW/LCY2uejIzGHvwD8odUx4EmfdqZl2IPw49FAjeDc/wGwuOrLl0k0BQFAOcZ5Vr0T8wQBgNUdXz5YVAsITW+zWf4tK9Fy7O9ykd1kbzD+pFRze6Oh0r0Dsav6i3AdAI4G2Cz+y/2KqSZQ6yPQ4+egYycHc98yMHDr954r3OmBpq0VMPMhBRPRFCybuB0xBUBXGwcnmqW7USUAuatzZzYJk69SRgcCMBRAQ70LrnRtUpxEMQBip/OTCVhYzBoGwjAAw4fd0NpYmVdwtQDoAK8/pmHkoWQbjwbEEABXuzywvb6ioJBaANCBPi1m4Nwk/jkNOoDhI25o3ZF/5UUqWgEImjCfhpEHuJqACqCQzcvVQQ8AOga2T0AFEAl4VdumXgDC9j0UV/2eYg3RAJxp4+CkLNQVejkLgNuzSZhCCpFoALSsPgXDAgBTC1AA1NYQmO6vLqZtkv9ZARwf+wnLq+wH2CgABg9VCemtlocVAE2bRx/TbzdsDwoAreqPYQJYZuAAwDgPcDRAQ/xXygTZrJit938zgS9LWTg7kWCTHqE3CoCZwWogRNVdC4nIgek1eP81o3saawjHBSgA9IRB3bP+0zEyl4bQI/aNEQqAus0E7vVpS4RYARwLx2ElxjoK4J0I6YkELOJjbYhQNIBO5FQLB50tirdQWOap2PfumyTceIngAOjncYw8QJTSLC3AWn0qNyqAxi0uGD+tfAiKpQa9UwmY/4F3SIoKgE7y0lE3NDcUPxLTA2R2IQ0X77N7/tx3owOgg1/v8cC2usKHoloBfF7KQPdEGRyKihPD1AQjVl6U0xANEAfH8Am9NxMw/x3P5uWaZygA8WV6QiRmqCtkbqYAEAWgGWP3Hg7amyoV9w40vb0WWUfJ8NT6GFMBqBXKzHYOAMxM0MyVw3qXowG2vyZn+4uS1Jbs6geEq7IUgO0vS9tRCyTX5QUAVqgQUxsbcyrJnJIZOTSrO8SCRVMUhu3L5kSNsFgFmfrCyVyTsEQlWU6FmJKPVPVBrxzzBJTiaTkxK5bP/wL1EAG7HZjiywAAAABJRU5ErkJggg==" 
                            title="混合教学全过程管理" 
                            paragraph="课前课中课后全过程教学管理，教学数据可视化，可留存，提升教学质量。"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACb0lEQVR4Xu1bsU7cQBB9g5SQhgKR6qAJElIoQTpDBxUg5ROAP0ju/AMQAj/gO/gDyB+ABFTQhTsJSpCQQpO7KlGKa0IisZFNEDbGePe8XNbrcevZ3dnnN29n1zsEladZnwDEBoR4p9KsZ7ZEewCtoFw5kx2TpAwb3j6AeSlbc4wO4LgLae48DUCzVocQH9I6Mfo90SbK1UqSj8kANLzfAF4YPTl55/7AcV8+Zh4H4LLej583v+T7zpHlYN8rjFWuwx7HAWh4IkdTUnfVcSNzjgJgF+2TwImEwz0AJ94mCO/VIc1hC4EtTLmBuN8DYDv1H36nf6FwC0A+1/ms1AvyhDsA7Ba+JKgclwh+eituTrPCmcv21DdJaNZ2jc3tnxtVoj1C0cTvAagMADOAQ8Dy3D9FSFkDWAM0aMDO6DwWh94+96od6f/zjwssfT3IPKaWEBDlamZHuumAmrVumkXaaAGg8AzI/Bn+YwdaGOD7PzMwjNmBkZ5M5ajzDcedlpaxtAHwsTSFteFpLU6ldbLW+oJP7ZM0M6n3DICuPIAZwCHAGsAiyKsAL4OcB0glH1mNOBHiTJBT4fzsBXa+n2P56jAW9ttv5rD0erwrOTBSA5K2wwIC6+1GbKKrJQcU+juvgoSR22GVCZhkq2U7XPgjMT4ULfqxuEkxreqLFg1QHdQkewZA15mgSV9VxRdmADNAw99hFcqZZsvX5PiipM/JooZBcFX2FoA8FkVllZPQZekisiByXd4HwIYKMVlOhCrJuGQmBprtgvhk0ZSPRuHL5u4oYVcFmULhZDgmbKgkC1WIPaaRXDwtu3IEdhaWz/8F6hRZwsgDS4gAAAAASUVORK5CYII=" 
                            title="在线直播教室" 
                            paragraph="在线直播教学搭配教学互动，充分还原真实的教学场景，提升教学效果。"
                            />
                    </Col>
                    <Col span={6} style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                        <HomeBrick
                            imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACjklEQVR4Xu1bzUrDQBD+1r8KPoGICB5FD4rvoKB4FQXxKELtKUIjeBJMwZxaQTyKoHgVC/oOogfFoyAiPoHg/0pilcSauk3GJT+TW+ns7Oy3M9/MJjsCTTyyaA3jFWsAJpoYplO0ijasipJ5rjqpUBGUxvoxIMZUZOMjI0+EvTL+lz0NAZDLpTKkXPpLSaz/F6IiNoqFIBsDAZCG9QygPdaLUzfuRdhmx2/idQDIpXIOuYdHdd0Jknzq6hSVwpPX4noADEsmaElNmyps07dm34+UuX0QOL5w+AZAGlYFQL5pSJM5YFPYpkvuXgBS7fo/9+krFFwAkpnno7reZ51QAyDdxBdYA9imELXy9iwqnokc34YRIQ3rKMa1/X/jWnUAyBT51ZEhA8AewCHAHEBGtX09wOIs0NpKptKn6O0N2NoDbu7I9NNlgcI80NtNZlhDRbf3QHmHZC4aAIYHgNkpEoOUlewdAudXyuKB1SBJGtwoRjYklILlUqhhvhciDABFHcAewCEQORZDKWAOYBIM5TicBTwI0BRCnAU4C0SOxVAKOAvEJQuE2r54DKIhwXisJZQVDACfBilOg6NDwLTme1MHVeD0IpTb01eCjsb8HOC8E9TxOO8EN3dJZqLlgP5eYGEGaGkhMa5Oyfs7sL0PXN+S6acFgMwsfYoYAJIsoG/DyGfS6wEzk8DIYONFnF0C+84Xez2PXgBUj80EhxxV+PQCkHkPUN0WjXJ6PUDjwlSnYgA4DVIchlT9LYZyfE0u8xclHa/MKg84F6b5svQXL2XNC3zX5d0wSEOHmGqW8XSSccvMT9DSHgoNm6bcUMh625yHFLPZOOkNiZR0kn13iP3Gkdw8rZo5XH5IYfv8B3O8OQAdLIqLAAAAAElFTkSuQmCC" 
                            title="在线课程建设" 
                            paragraph="在线直播课、精品慕课资源、课程资源体系搭建，沉淀教学资源。"
                            />
                    </Col>
                    <Col span={11} style={{display:"flex",justifyContent:"flex-end",marginBottom:"30px",marginTop:"50px"}}>
                        <button style={{cursor:'pointer',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"#fff",borderColor:"#4285f4",color:"#4285f4",boxSizing:"border-box",outline:"none"}}>
                                了解详细功能
                        </button>
                    </Col>
                    <Col span={1} style={{display:"flex",justifyContent:"flex-end",marginBottom:"30px",marginTop:"50px"}}>
                    </Col>
                    <Col span={11} style={{display:"flex",justifyContent:"flex-start",marginBottom:"30px",marginTop:"50px"}}>
                        <button style={{cursor:'pointer',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"#4285f4",borderColor:"#4285f4",color:"white",boxSizing:"border-box",outline:"none"}}>
                                立即注册体验
                        </button>
                    </Col>
                </Row>   
            </div>
            <div>
                <div style={{ textAlign: "center", margin: "40px 0"}}>
                    <div style={{ fontSize: "50px" }}>
                        <span style={{color:"#4285f4"}}>1</span>
                        <span>  所学校的师生正在使用Teaching！</span>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image src="https://www.ketangpai.com/img/nowUseSchool.5020ee7e.png" preview={false}></Image>
                </div> 
            </div>
            <div className='pic' style={{height:'400px'}}>
                <div>
                    <div style={{ fontSize:"50px",marginTop:"40px",color:"white",textAlign:'center'}}>
                        <div style={{ fontSize: "50px" }}>欢迎使用Teaching</div>
                        <div style={{ fontSize: "25px" }}>精彩教学，从这里开始</div>
                    </div>
                    <Row style={{ display: "flex", justifyContent: "center",marginTop:'80px' }}>
                        <Col span={11} style={{display:"flex",justifyContent:"flex-end",marginBottom:"30px",marginTop:"50px"}}>
                            <button style={{cursor:'pointer',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"#4285f4",borderColor:"white",color:"white",boxSizing:"border-box",outline:"none"}}>
                                    联系Teaching
                            </button>
                        </Col>
                        <Col span={1} style={{display:"flex",justifyContent:"flex-end",marginBottom:"30px",marginTop:"50px"}}>
                        </Col>
                        <Col span={11} style={{display:"flex",justifyContent:"flex-start",marginBottom:"30px",marginTop:"50px"}}>
                            <button style={{cursor:'pointer',borderRadius:"10px",width:"180px",height:"60px",textAlign:"center",lineHeight:"48px",fontSize:"130%",fontWeight:"400",background:"white",borderColor:"white",color:"#4285f4",boxSizing:"border-box",outline:"none"}}>
                                    免费注册
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer/>
        </div>        
    )
}
