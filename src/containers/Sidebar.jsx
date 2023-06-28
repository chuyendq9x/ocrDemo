import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Sider} = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const {url} = this.props;
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo">
                </div>
                <Menu theme="dark"  mode="inline">
                    <Menu.Item key="tailieu">
                        <PieChartOutlined />
                        <Link to="">
                                    <span className="nav-text">
                                      Tài liệu
                                    </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
                        }
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
                        }
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <FileOutlined />
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
export default Sidebar;