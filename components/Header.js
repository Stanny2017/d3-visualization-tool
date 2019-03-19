import Link from 'next/link';
import { Icon } from 'antd';


const linkStyle = {
    marginRight: 40
}

const iconStyle = {
    marginRight: 10
}

const Header = () => (
    <div className="wrapper">

        <div className="content">
            <div className="bolg-name">
                <span> web 数据可视化工具</span>
            </div>
            <div className="nav">
                <Link href="/" >
                    <a style={linkStyle}>
                        <Icon style={iconStyle} type="home" />
                        我的图表
                    </a>
                </Link>
                <Link href="/about" >
                    <a>
                        <Icon style={iconStyle} type="contacts" />创建图表
                    </a>
                </Link>
            </div>
        </div>

        <div style={{ position: "absolute", right: 0, top: 0 }}>
            <a href="https://github.com/Stanny2017">
                <img style={{ height: 180 }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="fork me on github" />
            </a>
        </div>

        <style jsx>{`
        .wrapper{
            height: 100px;
            background: #f5f5f5;
            font-size: 16px;
            color: #555; 
            box-sizing: border-box;
            padding:20px 0;
        }
        .wrapper .content{
            width:65%;
            margin: 0 auto;
            height: 100%;
            
        }
        .nav{
            vertical:bottom;
            display:inline;
        }
        .nav a{
            text-decoration:none;
            color: #555;
        }
        .nav a:hover{
            background: rgb(85, 85, 85,0.2);
        }
        .bolg-name{
            font-size: 30px;
            font-weight: bolder;
            
            line-height:60px;
            display:inline-block;
            margin-right:200px;
            border-width:1.5px;
            border-style:solid;
            border-color: black transparent;
        }
        `}</style>
    </div >
)
export default Header