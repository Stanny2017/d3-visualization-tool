import Layout from '../components/Layout'
import React from 'react';

const imgs = [
    {
        key: 0,
        title: "气泡图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/bubbleChart.png?raw=true",
    },
    {
        key: 1,
        title: "条形图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/barChart.png?raw=true",
    },
    {
        key: 2,
        title: "柱状图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/simpleBarChart.png?raw=true",
    },
    {
        key: 3,
        title: "面积图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/mianjiChart.png?raw=true",
    },
    {
        key: 4,
        title: "饼图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/pieChart.png?raw=true",
    },
    {
        key: 5,
        title: "散点图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/sandianChart.png?raw=true",
    },
    {
        key: 6,
        title: "折线图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/zhexianChart.png?raw=true",
    },
    {
        key: 7,
        title: "堆叠面积图",
        url: "https://github.com/Stanny2017/static-files/blob/master/visual-example/duidiemianjiChart.png?raw=true",
    },
]

class ChartExamples extends React.Component {
    state = {
        src: "",
    }

    render() {
        return (
            <div>
                <div className="img-content">

                    {
                        imgs.map(item => {
                            return (
                                <div className="img-box" key={item.key}>
                                    <div key={item.title} className="colDiv">
                                        <img src={item.url} className="imgCol" />
                                        <br />
                                        <label className="textStyle" >{item.title}</label>
                                    </div>

                                    <div className="img-cover"><h2>创建{item.title}</h2></div>
                                </div>
                            )
                        })
                    }
                    <style jsx>{`
                        .img-box{
                            position:relative;
                        }

                        .img-box>.img-cover{
                            position:absolute;
                            left:0;
                            top:0;
                            opacity:0;
                            width:100%;
                            height:100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;

                        }

                        .img-box:hover .img-cover{
                            cursor:pointer;
                            opacity:0.6;
                            background:grey;
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
                            height:180px;
                        }

                        .textStyle {
                            position: relative;
                            bottom: 0px;
                            font-weight:bold;
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}


export default () => {
    return (
        <Layout>
            <ChartExamples></ChartExamples>
        </Layout>
    )
}
