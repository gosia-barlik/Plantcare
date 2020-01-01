import React from "react";
import Header from "./Common/MainLayout/Header";
import Footer from "./Common/MainLayout/Footer";
import ContentLogin from "./Login/ContentLogin";
import ContentMain from "./Main/ContentMain";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        return(
            <>
                <Header/>
                <BrowserRouter>
                    <>
                        <Switch>
                            <Route exact path='/' component={ContentLogin}/>
                            <Route path='/main' component={ContentMain}/>
                            {/*<Route path='/main/addplant' component={Addplant}/>*/}
                        </Switch>
                    </>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}

export default App;