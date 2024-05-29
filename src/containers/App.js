import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./DashBoard";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={DashBoard} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
