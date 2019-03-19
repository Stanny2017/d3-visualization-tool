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
                    width:65%;
                    margin:0 auto;
                    padding-top:0px;
                    padding-right:0px;
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