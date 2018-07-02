import React from 'react'; 
import '../../Assets/css/index.css'; 
import {Link} from 'react-router-dom'; 
import Package from '../../Assets/img/package.png'; 
import Province from './InputProvince'; 
import ParcelDetail from './ParcelDetail/ParcelDetail';

export default class Contents extends React.Component{ 
    constructor(props) {
        super(props);
     
        this._handleAddButton = this._handleAddButton.bind(this);
     
        this.state = {    
           data: []
        }
     }
     
     _handleAddButton() {
         let newly_added_data = { title: 'new title', content: 'new content goes here', name: 'radio-size' + 1 };
     
         this.setState({
             data: [...this.state.data, newly_added_data]
         });
     }
        render(){ 
            let added_buttons_goes_here = this.state.data.map( (data, index) => {
                return (
                    <ParcelDetail key={index} pass_in_data={data}/>
                )
            });
        return(
<div className="container bg-color-body">
    <div className="row">
        <div className="col-sm-4 content-left">
            <h2>All Package Is Very Take Care <br/>  Form My Company</h2>
            <img src={Package} width="150" alt="Package" id="package" />
            <hr/>
            <p>Create by Mr.Banly the developer Cambodia.</p>
        </div>
        <div className="col-sm-8">
            <div className="content-right bg-color">
                <div className="container">
                    <div id="title-bar">
                        <h1> PARCEL INFORMATION </h1></div>

                    <div className="form-group row">
                        <label className="col-sm-4" id="label-style">Shipping From</label>
                        <div className="col-sm-8">
                            <Province/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4" id="label-style">Shipping To</label>
                        <div className="col-sm-8">
                            <Province/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4" id="label-style">Shipping By</label>
                        <div className="col-sm-8 input-radio">
                            <input type="radio" name="shipping" /> <span>Drop Off</span>
                            <input type="radio" name="shipping" /> <span>Pick Up</span>
                        </div>
                    </div>
                    <hr/>
                    <div className=" row">
                        <label>Parcel Detail</label>
                        <div className="col-sm-12">
                            <ParcelDetail/>
                            {added_buttons_goes_here}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <a href='#' onClick={this._handleAddButton}>+ add more package</a>
                        </div>
                        <div className="col-sm-12">
                            <Link to='/parcel-service'>
                            <button typ="button" id="btnStart">START</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
); } }