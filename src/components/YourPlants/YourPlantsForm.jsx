import React from "react";
import {NavLink, withRouter} from "react-router-dom";

class YourPlantsForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            plants : [],
            loaded : true
        };

    }

    componentDidMount(){
        const plants = this.props.firebase.database().ref('plants');
        plants.once('value').then((snapshot)=>{
            const plantsArr =[];

            snapshot.forEach ((data)=> {
                const plant = data.val();
                plant.id= data.key;
                plantsArr.push(plant);
            });

            this.setState({plants:plantsArr, loading:false});
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.history.push("/addplant");
    };

    render() {
        return (
            <div className = "form-yourplants-area fade-in">
                <form className="form" id="yourplantsForm" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <button type="submit" className="submit-btn">
                            <img src="images/icons/iconmonstr-plus-2-240.png" alt="add"
                                 className="add"/>ADD PLANT</button>
                    </div>
                    {this.state.plants.length>0 ?
                        this.state.plants.map(plant=>
                            <>
                                <NavLink to={'/addplant/'+plant.id} key={plant.id}>
                                <div className="addplant-form-row">
                                    <div className="form-photo">
                                        <img src={plant.photo}/>
                                    </div>
                                    <div className="form-row">
                                        <label>{plant.name}</label>
                                    </div>
                                </div>
                                </NavLink>
                            </>
                        )
                        :
                        <div className="form-row">
                            <div>you have no plants yet</div>
                        </div>
                    }
                </form>
            </div>
        )
    }
}

export default withRouter(YourPlantsForm);