import React, { Component, Fragment } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      name : '',
      email : '',
      gender : '',
      password : '',
      conpassword : '',
      isLoading: false,
      isProccess: false
    }
  }
  onInputHandle = (event) => {
    // console.log('input berhasil')
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  onSubmitHandle = (event) => {
    event.prevetDefault()
    console.log('sudah submit');
  }
  render() {
    return (
      <Fragment>
        <div className="modal-header text_center">
          <h5 className="modal-title text-bold text-center" id="exampleModalLabel">Add New User</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="" onSubmit={this.onSubmitHandle}>
            <div className="from-row">
              <div className="col-9">
                <label htmlFor="">Username</label>
              </div>
              <div className="form-row">
                <input type="text" className="form-control" type="text" name="username" autoComplete="off" onChange={this.onInputHandle} value={this.state.username} />
              </div>
              <br/>
              <div className="col-9">
                <label htmlFor="">Name</label>
              </div>
              <div className="form-row">
                <input type="text" className="form-control" type="text" name="name" autoComplete="off" onChange={this.onInputHandle} value={this.state.name} />
              </div>
              <br/>
              <div className="col-9">
                <label htmlFor="">Email</label>
              </div>
              <div className="form-row">
                <input type="text" className="form-control" type="text" name="email" autoComplete="off" onChange={this.onInputHandle} value={this.state.email} />
              </div>
              <br/>
              <div className="col-9">
                <label htmlFor="">Gender</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name="gender" type="radio" value="male" onChange={this.onInputHandle} value={this.state.gender} checked={this.state.gender === 'male'} />
                <label className="form-check-label" for="flexRadioDefault1" value="male">Male</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name="gender" type="radio" value="female" onChange={this.onInputHandle} value={this.state.gender} checked={this.state.gender === 'female'} />
                <label className="form-check-label" for="flexRadioDefault2" value="female">Female</label>
              </div>
              <br/>
              <div className="col-9">
                <label htmlFor="">Password</label>
              </div>
              <div className="form-row">
                <input type="text" className="form-control" type="text" name="password" autoComplete="off" onChange={this.onInputHandle} value={this.state.password} />
              </div>
              <br/>
              <div className="col-9">
                <label htmlFor="">Confirm Password</label>
              </div>
              <div className="form-row">
                <input type="text" className="form-control" type="text" name="conpassword" autoComplete="off" onChange={this.onInputHandle} value={this.state.conpassword} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Register