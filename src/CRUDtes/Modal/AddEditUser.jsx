import React, { Component, Fragment } from 'react'

class AddEditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      name : '',
      email : '',
      gender : '',
      password : '',
      conpassword : '',
    }
  }
  render() {
    return (
      <Fragment>
        <div className="modal-header">
          <h5 className="modal-title text-bold" id="exampleModalLabel">Add New User</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="from-row">
            <div className="col-9">
              <label htmlFor="">Username</label>
            </div>
            <div className="form-row">
              <input type="text" className="form-control" type="text" name="username" id="username" />
            </div><br/>
            <div className="col-9">
              <label htmlFor="">Name</label>
            </div>
            <div className="form-row">
              <input type="text" className="form-control" type="text" name="name" id="name" />
            </div><br/>
            <div className="col-9">
              <label htmlFor="">Email</label>
            </div>
            <div className="form-row">
              <input type="text" className="form-control" type="text" name="email" id="email" />
            </div><br/>
            <div className="col-9">
              <label htmlFor="">Gender</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div><br/>
            <div className="col-9">
              <label htmlFor="">Password</label>
            </div>
            <div className="form-row">
              <input type="text" className="form-control" type="text" name="password" id="password" />
            </div><br/>
            <div className="col-9">
              <label htmlFor="">Confirm Password</label>
            </div>
            <div className="form-row">
              <input type="text" className="form-control" type="text" name="conpassword" id="conpassword" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AddEditUser