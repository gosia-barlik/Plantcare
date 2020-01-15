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
                },
        };
    }

    componentDidMount(){
        if(this.props.create===false){
            const plant = this.props.firebase.database().ref('plants/' + this.props.match.params.id);
            plant.on('value', (snapshot)=>{
                this.setState({plant:snapshot.val()});
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create ?
            this.props.firebase.database().ref('plants')
                .push(this.state.plant)
                .then(()=> this.props.history.push("/yourplants"))
            :
            this.props.firebase.database().ref('plants/'+this.props.match.params.id)
                .set(this.state.plant)
                .then(()=> this.props.history.push("/yourplants"))
    };

    handleClose = (e) => {
        e.preventDefault();
        this.props.history.push("/yourplants")
    };

    handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const plant = {...this.state.plant };

        switch(name){
            case 'name':
                plant.name=value;
                break;
            case 'wateringFrequency':
                plant.wateringFrequency=value;
                break;
            case 'fertilizingFrequency':
                plant.fertilizingFrequency=value;
                break;
            case 'nextWateringDate':
                plant.nextWateringDate=value;
                break;
            case 'nextFertilizingDate':
                plant.nextFertilizingDate=value;
                break;
        }

        this.setState({plant})
    };

    handlePhotoChange = (e) => {
        const plant = {...this.state.plant };
        const file = e.target.files[0];

        this.props.firebase.storage().ref()
            .child('/plants/'+file.name)
            .put(file)
            .then(snapshot=>snapshot.ref.getDownloadURL()
                .then(url=> {plant.photo = url;
                            this.setState({plant})
                })
            );
    };

    render() {
        return (
            <div className="form-addplant-area fade-in">
                <form className="form" id="addplantForm" onSubmit={this.handleSubmit}>
                    <div className="form-row-1">
                        <button type="button" onClick={this.handleClose} className="close-btn">
                    <img src="images/icons/iconmonstr-x-mark-1-240.png" alt="exit" id="exit-icon"
                         className="icon"/>
                        </button>
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
                            <div className={'input-file-wrapper'}>
                                <label><img src="images/icons/iconmonstr-instagram-11-240.png" alt="" className="icon" id ="photo-icon"/>
                                    {this.state.plant.photo&&<img className="form-photo" src={this.state.plant.photo} id={'plant-photo'}/>}</label>
                                <input type="file" name="photo" className="custom-file-input" style={{color: "transparent"}} onChange={this.handlePhotoChange} id={'add-photo'}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>name</label>
                            <input type="text" name="name" onChange={this.handleChange} data-error="Wypełnij to pole" defaultValue={this.state.plant.name}/>
                        </div>
                    </div>
                    <div className="addplant-form-row">
                        <img src="images/icons/iconfinder_drop_226581.png" alt="watering" className="icon"/>
                        <div className="form-row-1">
                            <span> every </span>
                            <input type="number" name="wateringFrequency" onChange={this.handleChange} data-error="Wypełnij to pole" defaultValue={this.state.plant.wateringFrequency}/>
                            <span> days </span>
                            <span> next</span>
                            <input type="date" name="nextWateringDate" onChange={this.handleChange} data-error="Wypełnij to pole" defaultValue={this.state.plant.nextWateringDate}/>
                        </div>
                        {/*<img src="images/icons/iconmonstr-trash-can-16-240.png" alt="icon" className="icon-trash"/>*/}
                    </div>
                    <div className="addplant-form-row">
                        <img src="images/icons/iconmonstr-eyedropper-3-240.png" onChange={this.handleChange} alt="fertilizing" className="icon"/>
                        <div className="form-row-1">
                            <span> every </span>
                            <input type="number" name="fertilizingFrequency" onChange={this.handleChange} data-error="Wypełnij to pole" defaultValue={this.state.plant.fertilizingFrequency}/>
                            <span> days </span>
                            <span> next</span>
                            <input type="date" name="nextFertilizingDate" onChange={this.handleChange} data-error="Wypełnij to pole" defaultValue={this.state.plant.nextFertilizingDate}/>
                        </div>
                        {/*<img src="images/icons/iconmonstr-trash-can-16-240.png" alt="icon" className="icon-trash"/>*/}
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

export default withRouter(AddPlantForm);