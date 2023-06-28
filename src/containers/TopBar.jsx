import React from 'react';
import {Link} from 'react-router-dom';
import { Menu  } from 'antd';
import '../css/style.css';


class TopBar extends React.Component {
    render() {

        return (
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item style={{marginLeft:'50%'}}>
                        <Link to="/">TRANG CHỦ</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">DEMO</Link>
                    </Menu.Item>

                </Menu>

        );
    }
}

export default TopBar;
