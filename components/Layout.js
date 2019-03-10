import Header from './Header'
const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className="content">
                {props.children}
            </div>
            <style jsx>{`
                .content{
                    width:50%;
                    margin:0 auto;
                    padding-top:50px;
                    padding-right:15%;
                    box-sizing:border-box;
                }
            `}
            </style>
            <style jsx global>{`
                body{
                    margin:0;
                    padding:0;
                }
                html{
                    min-width:1200px;
                }
            `}</style>
        </div>
    )
}
export default Layout