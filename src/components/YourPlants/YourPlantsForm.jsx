import React from "react";
import {NavLink, withRouter} from "react-router-dom";

class YourPlantsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            loaded: true
        };

    }

    componentDidMount() {
        this.getPlantsInfo();
    }

    getPlantsInfo = () => {
        const plants = this.props.firebase.database().ref('plants');
        plants.once('value').then((snapshot) => {
            const plantsArr = [];

            snapshot.forEach((data) => {
                const plant = data.val();
                plant.id = data.key;
                plantsArr.push(plant);
            });

            this.setState({plants: plantsArr, loading: false});
        });
    };

    handleDelete = (e) => {
       this.props.firebase.database().ref('plants/'+e.target.dataset.id)
           .remove()
           .then(result=> this.getPlantsInfo());
    };

    render() {
        return (
            <div className="form-yourplants-area fade-in">
                <form className="form" id="yourplantsForm">
                    <div className="form-row">
                        <NavLink to={'/addplant'}>
                            <button type="submit" className="submit-btn">
                                <img src="images/icons/iconmonstr-plus-2-240.png" alt="add"
                                     className="add"/>ADD PLANT
                            </button>
                        </NavLink>
                    </div>
                    {this.state.plants.length > 0 ?
                        this.state.plants.map(plant =>
                            <>
                                    <div className="addplant-form-row">
                                        <div className="form-photo">
                                            <img src={plant.photo}/>
                                        </div>
                                        <div className="form-row">
                                            <label>{plant.name}</label>
                                        </div>

                                        <div className="form-row-2">
                                        <NavLink to={'/addplant/' + plant.id} key={plant.id}>
                                            <img src="images/icons/iconmonstr-pencil-2-240.png" alt="icon"
                                                 className="icon-edit"/>
                                        </NavLink>
                                        <img src="images/icons/iconmonstr-trash-can-16-240.png" alt="icon"
                                                 className="icon-trash" onClick={this.handleDelete} data-id={plant.id}/>
                                        </div>
                                    </div>
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

class Modal extends React.Component {
    render() {
        return (
            <div id="modal">
                <div id="deleteView" className="modal-container shadow-lg">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete confirmation</h5>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to delete this plant?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="deleteCloseBtn" className="btn btn-secondary"
                                data-dismiss="modal">CANCEL
                        </button>
                        <button type="button" id="deleteConfirmBtn" className="btn btn-danger">DELETE</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(YourPlantsForm);