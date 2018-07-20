import React from 'react'

export default class CardsValid extends React.Component{
    render(){
        return(
            <div>
                <p type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" aria-hidden="true">
                    Launch demo modal
                </p>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}