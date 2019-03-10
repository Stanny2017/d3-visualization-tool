import Layout from '../components/Layout'


const data = [
    {
        key: 0,
        title: 'my first blog 8789',
        description: '这是我的第一篇博客系统，我将记录所有实现细节在这篇文章里'
    },
    {
        key: 0,
        title: 'my first blog 01',
        description: '这是我的第一篇博客系统，我将记录所有实现细节在这篇文章里'
    },
    {
        key: 0,
        title: 'my first blog 01',
        description: '这是我的第一篇博客系统，我将记录所有实现细节在这篇积分卡的身份啊手动阀第三方asd发射点发军事对抗发开始登陆福建阿瑟东发生的刻录机f啊手动阀大家考虑是否啊手动阀就是打开了放假啊打卡练腹肌啊f的法定刷卡付文章里'
    }
]

const Artical = (props) => {
    return (
        <div>
            <ul style={{ paddingLeft: 0 }}>
                {data.map(item => {
                    return (
                        <li key={item.key} className="artical-item">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
            <style jsx>{`
                .artical-item{
                    margin-bottom:70px;
                    list-style:none;
                }
                .artical-item>h1:hover{
                    cursor:pointer;
                }
            `}</style>
        </div>
    )
}

export default () => (

    <Layout>
        <Artical></Artical>
    </Layout>
)
