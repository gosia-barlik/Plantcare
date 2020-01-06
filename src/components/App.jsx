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
                            <Route exact path='/' render={(props) => <ContentLogin firebaseDB={this.props.firebaseDB} {...props} />}/>
                            {/*<Route path='/main' component={ContentMain}/>*/}
                            <Route path='/yourplants' render={(props) => <ContentYourPlants firebaseDB={this.props.firebaseDB} {...props} />}/>
                            <Route exact path='/addplant' render={(props) => <ContentAddPlant create={true} firebaseDB={this.props.firebaseDB} {...props} />}/>
                            <Route exact path='/addplant/:id' render={(props) => <ContentAddPlant create={false} firebaseDB={this.props.firebaseDB} {...props} />}/>
                        </Switch>
                    </>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}

export default App;