import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import Home from "../components/Home";

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Row>
                    <Col span={12} offset={10}>
                        <h1 style={{ fontSize: "30px" }}>DEMO TRỰC TIẾP</h1>
                    </Col>
                    <Col span={20} offset={2}>
                        <Route exact path="/" component={Home} />
                    </Col>
                </Row>
            </Switch>
        );
    }
}

export default Content;
