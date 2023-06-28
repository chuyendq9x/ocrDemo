import React from 'react';
import 'antd/dist/antd.css';
import '../css/styles/dashboard.css'
import { Layout} from 'antd';
import Contents from "./Content";
import TopBar from './TopBar';



const { Content, Footer, Header} = Layout;

class DashBoard extends React.Component{

    render() {
        return (
            <Layout>
                <Header>
                    <TopBar/>
                </Header>
                <Layout>
                    <Content style={{margin: '0 16px',padding: 24 , minHeight: 380}}>
                            <Contents/>
                    </Content>
                </Layout>
                <Footer style={{
                    background: '#ffffff',
                    textAlign: 'center',
                    borderTop: '1px solid #ededed',
                }}>Design ©2022 Created by DTDI Team</Footer>

            </Layout>

        );
    }
}

export default DashBoard;