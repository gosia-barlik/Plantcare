import React from "react";
import Header from "./Common/MainLayout/Header";
import Footer from "./Common/MainLayout/Footer";
import ContentLogin from "./Login/ContentLogin";
// import ContentMain from "./Main/ContentMain";
import ContentAbout from "./About/ContentAbout";
import ContentYourPlants from "./YourPlants/ContentYourPlants";
import ContentAddPlant from "./AddPlant/ContentAddPlant";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        return(
            <>
                <BrowserRouter>
                    <Header/>
                    <>
                        <Switch>
                            <Route exact path='/' render={(props) => <ContentLogin firebase={this.props.firebase} {...props} />}/>
                            {/*<Route path='/main' component={ContentMain}/>*/}
                            <Route exact path='/about' render={(props) => <ContentAbout firebase={this.props.firebase} {...props} />}/>
                            <Route exact path='/yourplants' render={(props) => <ContentYourPlants firebase={this.props.firebase} {...props} />}/>
                            <Route exact path='/addplant' render={(props) => <ContentAddPlant create={true} firebase={this.props.firebase} {...props} />}/>
                            <Route exact path='/addplant/:id' render={(props) => <ContentAddPlant create={false} firebase={this.props.firebase} {...props} />}/>
                        </Switch>
                    </>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}

export default App;