import Layout from '../components/Layout'
import React from 'react';

const data = [
    {
        key: 0,
        title: 'my first blog 8789',
        description: '这是我的第一篇博客系统，我将记录所有实现细节在这篇文章里'
    },
    {
        key: 1,
        title: 'my first blog 01',
        description: '这是我的第一篇博客系统，我将记录所有实现细节在这篇文章里'
    },
    {
        key: 2,
        title: 'my first blog 01',
        description: '这是我的第一篇博客系统，我将记录所有实现细节在这篇积分卡的身份啊手动阀第三方asd发射点发军事对抗发开始登陆福建阿瑟东发生的刻录机f啊手动阀大家考虑是否啊手动阀就是打开了放假啊打卡练腹肌啊f的法定刷卡付文章里'
    }
]
const imgs = [
    {
        key: 0,
        title: "气泡图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/bubbleChart.png?raw=true",
    },
    {
        key: 1,
        title: "条形图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/barChart.png?raw=true",
    },
    {
        key: 2,
        title: "柱状图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/simpleBarChart.png?raw=true",
    },
    {
        key: 3,
        title: "面积图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/mianjiChart.png?raw=true",
    },
    {
        key: 4,
        title: "饼图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/pieChart.png?raw=true",
    },
    {
        key: 5,
        title: "散点图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/sandianChart.png?raw=true",
    },
    {
        key: 6,
        title: "折线图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/zhexianChart.png?raw=true",
    },
    {
        key: 7,
        title: "堆叠面积图",
        url:"https://github.com/Stanny2017/static-files/blob/master/visual-example/duidiemianjiChart.png?raw=true",
    },
]

const BigImg = (props) => {
    return (
        <div>
            <div className="img-absolute">
                <img src={props.src} className="big-img"></img>
                <style jsx>{`
                    .img-absolute{
                        width:50%;
                        position: absolute;
                        top: 100px;
                        left: 0px;
                        right: 0px;
                        bottom: 100px;
                        margin: 0 auto;
                        min-height: 450px;
                        background: white;
                    }
                    .big-img {
                        width: 100%;
                        height:100%;
                    }
                `}</style>
            </div>
        </div>
    )
}

class Artical extends React.Component {
    state = {
        src: "",
    }
    handleClick = (e) => {
        var now = this.state.src;
        if(now){
            this.setState({
                src: ""
            });
        }
        else{
            this.setState({
                src: e.target.src
            })
        }
    }
    render(){
        return (
            <div>
                <div className="img-content">
               
                    {imgs.map(item => {
                        return (
                            <div key={item.key} className="colDiv">
                                <img key={item.key} src={item.url} className="imgCol" onClick={this.handleClick}
                                ></img>
                                <br/>
                                <label className="textStyle" key={item.title}>{item.title}</label>
                            </div>
                        )
                    })}
                    <style jsx>{`
                        .artical-item{
                            margin-bottom:70px;
                            list-style:none;
                        }
                        .artical-item>h1:hover{
                            cursor:pointer;
                        }
                        .img-content{
                            width:100%;
                            display: grid;
                            grid-gap:10px;
                            grid-template-rows: repeat(2, 1fr);
                            grid-template-columns: repeat(4, 1fr);
                            margin-top: 30px;
                            min-height: 450px;
                        }
                        .colDiv{
                            text-align: center;
                        }
                        .col{
                            background: white;
                        }
                        .imgCol {
                            width:100%;
                            height:90%;
                        }
                        .textStyle {
                            position: relative;
                            bottom: 0px;
                            font-weight:bold;
                        }
                    `}</style>
                </div>
                {
                    this.state.src?<BigImg src={this.state.src} onClick={()=>alert('abc')}></BigImg>:null
                }
            </div>
        )
    }
}


export default () => {
    return (
        <Layout>
            <Artical></Artical>
        </Layout>
    )
}
