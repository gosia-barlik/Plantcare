import React from "react";
import Header from "./Common/MainLayout/Header";
import Footer from "./Common/MainLayout/Footer";
import ContentLogin from "./Login/ContentLogin";
// import ContentMain from "./Main/ContentMain";
import ContentYourPlants from "./YourPlants/ContentYourPlants";
import ContentAddPlant from "./AddPlant/ContentAddPlant";
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
                            {/*<Route path='/main' component={ContentMain}/>*/}
                            <Route path='/yourplants' component={ContentYourPlants}/>
                            <Route path='/addplant' component={ContentAddPlant}/>
                        </Switch>
                    </>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}

export default App;