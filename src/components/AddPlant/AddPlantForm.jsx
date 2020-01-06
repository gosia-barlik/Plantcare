import React from "react";
import {withRouter} from "react-router-dom";

class AddPlantForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
                plant:{
                name:'',
                photo:'',
                wateringFrequency: '',
                fertilizingFrequency: '',
                nextWateringDate: '',
                nextFertilizingDate: ''
            }
        };
    }

    componentDidMount(){
        if(this.props.create==false){
            const plant = this.props.firebaseDB.ref('plants/' + this.props.match.params.id);
            plant.on('value', (snapshot)=>{
                this.setState({plant:snapshot.val()});
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/yourplants");
    };

    render() {
        return (
            <div className="form-addplant-area">
                <form className="form" id="addplantForm" onSubmit={this.handleSubmit}>
                    <div className="form-row-1">
                    <img src="images/icons/iconmonstr-x-mark-1-240.png" alt="exit" id="exit-icon"
                         className="icon"/>
                    <button type="submit" className="save-btn">
                        <img src="images/icons/iconmonstr-save-2-240.png" alt="save" id="save-icon"
                        className="icon"/>
                    </button>
                    </div>
                    <div className="form-row">
                        <div>your plant</div>
                    </div>
                    <div className="addplant-form-row">
                        <div className="form-photo">
                            <Upload/>
                        </div>
                        <div className="form-row">
                            <label>name</label>
                            <input type="text" name="plant-name" data-error="Wypełnij to pole" value={this.state.plant.name}/>
                        </div>
                    </div>
                    <div className="addplant-form-row">
                        <img src="images/icons/iconfinder_drop_226581.png" alt="watering" className="icon"/>
                        <div className="form-row-1">
                            <span> every </span>
                            <input type="number" name="watering-frequency" data-error="Wypełnij to pole"/>
                            <span> days </span>
                            <span> starting at</span>
                            <input type="date" name="starting-date" data-error="Wypełnij to pole"/>
                        </div>
                        <img src="images/icons/iconmonstr-trash-can-16-240.png" alt="icon" className="icon-trash"/>
                    </div>
                    <div className="addplant-form-row">
                        <img src="images/icons/iconmonstr-eyedropper-3-240.png" alt="fertilizing" className="icon"/>
                        <div className="form-row-1">
                            <span> every </span>
                            <input type="number" name="fertilizer-frequency" data-error="Wypełnij to pole"/>
                            <span> days </span>
                            <span> starting at</span>
                            <input type="date" name="date" data-error="Wypełnij to pole"/>
                        </div>
                        <img src="images/icons/iconmonstr-trash-can-16-240.png" alt="icon" className="icon-trash"/>
                    </div>


                    {/*<div className="form-row">*/}
                    {/*<button type="submit" className="submit-btn">*/}
                    {/*<img src="images/icons/iconmonstr-plus-2-240.png" alt="add"*/}
                    {/*className="add"/>ADD PLANT</button>*/}
                    {/*</div>*/}
                    {/*<div className="form-row">*/}
                    {/*<div>you have no plants yet</div>*/}
                    {/*</div>*/}

                </form>
            </div>
        )
    }
}

class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: null
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div className={'input-file-wrapper'}>
                <label>ADD</label>
                <img className="form-photo" src={this.state.file}/>
                <input type="file" className="custom-file-input" style={{color: "transparent"}} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default withRouter(AddPlantForm);