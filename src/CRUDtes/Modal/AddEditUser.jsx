import Axios from 'axios';
import React, { Fragment, Component } from 'react'
import swal from 'sweetalert';

class AddEditUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      username : '',
      name : '',
      jenis_kelamin : '',
      email : '',
      password : '',
      password_confirmation : '',
      isLoading : false,
      isProcess : false,
      per_page : '',
      current_page : '',
      total_pages : '',
    }
  }

  refreshPage(){
    console.log('componentDidMount')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}`
    Axios
    .get(url)
    .then (response => {
      console.log('Data Berhasil didapatkan', response)
      this.setState({
        datas : response.data.data,
        per_page : response.data.meta.per_page,
        current_page : response.data.meta.current_page,
        total_pages : response.data.meta.total_pages
      })
      // console.log('Anda berada di data yang ke-', response.data.meta.current_page)
    })
    .catch(error => {
        console.log(error)
    })
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps.userId)
    console.log('props now', this.props.userId)

    if(prevProps.userId !== this.props.userId){
      if(this.props.status === 'Add'){
        console.log('ADD FUNCTION')
        this.setState({
          username : '',
          name : '',
          email : '',
          jenis_kelamin : '',
        })
      } else {
        console.log('userId', this.props.userId)
        const userId = this.props.userId
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${userId}`
        Axios
        .get(url)
        .then(response => {
          console.log('response', response.data.data.username)
          this.setState({
            username : response.data.data.username,
            name : response.data.data.name,
            email : response.data.data.email,
            jenis_kelamin : response.data.data.jenis_kelamin,
          })
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }

  onInputHandle =(e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  onSubmitHandle =(event) => {
    event.preventDefault()
    this.setState({
      isLoading: true,
    })
    console.log('Form Has Been Submit')

    if(this.props.status === 'Update'){
      console.log('Ready to Update')
      event.preventDefault()
      this.refreshPage()
      const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/update`
      const payload = {
        id : this.props.userId,
        username : this.state.username,
        name : this.state.name,
        jenis_kelamin : this.state.jenis_kelamin,
        email : this.state.email,
      }
      Axios
      .put(url, payload)
      .then(response => {
        this.refreshPage()
        console.log('Success', response)
        // this.props.updateTable()
        swal({
          title: "Your Data Has Been Updated!",
          text: "Success",
          icon: "success",
          button: "OK",
        });
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      console.log('Ready to add')
      event.preventDefault()
      const url = 'https://belajar-react.smkmadinatulquran.sch.id/api/register'
      const payload = {
        username : this.state.username,
        name : this.state.name,
        jenis_kelamin : this.state.jenis_kelamin,
        email : this.state.email,
        password : this.state.password,
        password_confirmation : this.state.password_confirmation,
      }
      console.log(payload)
      Axios
      .post(url, payload)
      .then(response => {
        this.refreshPage()
        // this.preventDefault()
        console.log('Success', response)
        swal({
          title: "Your Data Has Been Entered",
          text: "Success",
          icon: "success",
          button: "OK",
        });
        this.setState({
          username : '',
          name : '',
          jenis_kelamin : '',
          email : '',
          password : '',
          password_confirmation : '',
          isLoading: false,
          isProcess: false
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false,
        })
      })
    }
  }

    // onPost(url, payload){

    // }

  render(){
    const empty = {
      fontFamily: 'FontAwesome, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
      fontstyle: 'normal',
      fontWeight: 'normal',
      textDecoration: 'inherit'
    };
    return(
      <Fragment>
        <div className="modal-header">
          <h5 className="modal-title ml-3" name="exampleModalLabel"><i className="fas fa-user-edit"></i>&nbsp; {this.props.formName}</h5>
          <h6>User ID : {this.props.userId}</h6>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container m-0">
            <form action="" onSubmit={this.onSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="">Name :</label>
                <input type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="form-control mt-2"
                onChange={this.onInputHandle}
                value={this.state.name} />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="">Username :</label>
                <input type="text"
                placeholder="Enter Username"
                autoComplete="off"
                name="username"
                className="form-control mt-2"
                onChange={this.onInputHandle}
                value={this.state.username} />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="">E-mail :</label>
                <input type="text"
                placeholder="Enter E-mail"
                autoComplete="off"
                name="email"
                className="form-control mt-2"
                onChange={this.onInputHandle}
                value={this.state.email} />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="">Jenis Kelamin :</label><br/>
                <div className="form-check mt-2 form-check-inline">
                  <input className="form-check-input" type="radio" name="jenis_kelamin" value="laki-laki"
                  onChange={this.onInputHandle}
                  checked={this.state.jenis_kelamin === 'laki-laki'} />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                      Laki-laki
                  </label>
                </div>
                <div className="form-check mt-2 form-check-inline">
                  <input className="form-check-input" type="radio" name="jenis_kelamin" value="perempuan"
                  onChange={this.onInputHandle}  
                  checked={this.state.jenis_kelamin === 'perempuan'} />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                      Perempuan
                  </label>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="">Password :</label>
                <input type="password"
                name="password"
                placeholder="&#xf084;&nbsp; Enter Password"
                autoComplete="off"
                style={empty}
                name="password"
                className="form-control mt-2"
                onChange={this.onInputHandle}
                value={this.state.password} />
                <div name="emailHelp" className="form-text disabled">Password Anda akan tetap aman.</div>
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="">Confirmation Password :</label>
                <input type="password"
                name="password"
                placeholder="&#xf00c;&nbsp; Confirmation Password"
                autoComplete="off"
                style={empty} name="password_confirmation"
                className="form-control mt-2"
                onChange={this.onInputHandle}
                value={this.state.password_confirmation}/>
              </div>
              <button className="btn btn-success mt-4 mb-3 btn-block">
                  {this.state.isLoading ? ('Save...') : ('Create')} &nbsp;<i className="fas fa-plus-circle"></i>
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AddEditUser