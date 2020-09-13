import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'
import swal from 'sweetalert'

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      datas : [],
      page : '',
      last_page : '',
      per_page : '5',
      current_page : '',
      total_pages : '',
      formName : '',
      userId : '',
      status : '',
      cari : ''
    }
    console.log('constructor')
  }

  onChangeSearch =(event) => {
    this.setState({[event.target.name] : event.target.value})
  }
  
  onSubmitSearch = (event) => {
    event.preventDefault()
    console.log('Submit')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/cari`
    const payload = {
      cari : this.state.cari
    }
    this.onPost(url,payload)
  }
  onPost(url, payload){
      Axios
      .post(url, payload)
      .then(response => {
        // console.log('response', response.data.data.username)
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          total: response.data.meta.total_page,
          current_page: response.data.meta.current_page,
          last_page : response.data.meta.last_page
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

  handlerAdd() {
    this.componentDidMount()
  }

   // onInput = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     cari : event.target.value
  //   })
  // }

  // onSubmit = (event) => {
  //   event.preventDefault()
  //   const urlc = "https://belajar-react.smkmadinatulquran.sch.id/api/users/cari"
  //   const payloadc = {
  //     cari : this.state.cari
  //   }
  //   console.log(payloadc);
  //   Axios
  //   .post(urlc, payloadc)
  //   .then(response => {
  //     this.setState({
  //       datas : response.data.data,
  //       per_page : response.data.meta.per_page,
  //       current_page : response.data.meta.current_page,
  //       total_pages : response.data.meta.total_pages
  //     })
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //   })
  // }

  onPrev =() =>{
    console.log('Previous Click')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page-1}`
    Axios
    .get(url)
    .then (response => {
      console.log('Data Has Been geted', response)
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

  onNext =() => {
    console.log('Next Click')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page+1}`
    Axios
    .get(url)
    .then (response => {
      console.log('Data Has Been geted', response)
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

  onSelectItem =(event) => {
    console.log('Value', event.target.value)
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`
    Axios
    .get(url)
    .then (response => {
      console.log('Select item', response)
      this.setState({
        datas : response.data.data,
        per_page : response.data.meta.per_page,
        current_page : response.data.meta.current_page,
        total_pages : response.data.meta.total_pages
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  onDelete = (event) => {
    event.preventDefault()
    const id_user = event.target.value
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id_user}`
    Axios
    .get(url)
    .then(response => {
      this.handlerAdd()
      swal({
        title: "Data Has Been Deleted!",
        text: "Success",
        icon: "success",
        button: "OK",
      });
    })
    .catch(error => {
      console.log('Failed', error);
    })
  }    

  updateTable = () => {
    this.componentDidMount()
  }

  componentDidMount(){
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
  render(){
    return(
      <Fragment>
        <div className="container mt-3 mb-3">
          <h2 className="text-center font-weight-bold mb-3">Latihan CRUD</h2>
          <div className="row">
            {/* Add User */}
            <div className="row">
              <div className="col-4">
                <button onClick={()=> {
                  this.setState({ formName : 'Form Registrasi', status : 'Add', userId : ''}) }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  <i className="fas fa-plus-circle"></i>&nbsp; Create new user
                </button>
              </div>
              <div className="row mt-2">
                <div className="col-4">
                  <button onClick={this.updateTable} className="btn btn-success">Refresh Page</button>
                </div>
              </div>
            </div>
            {/* seacrh */}
            <div className="row justify-content-center">
              
            </div>
            <div className="row justify-content-end">
              <div className="col-5">
                <form onSubmit={this.onSubmitSearch}>
                  <input onChange={this.onChangeSearch} name="cari" id="cari" className="btn border" type="text" placeholder="Search.." autoComplete="off" aria-discribedby="cari" />
                </form>
              </div>
              <div className="col-2">
                <select onChange={this.onSelectItem} className="form-select">
                  <option className="option" value="5">5</option>
                  <option className="option" value="10">10</option>
                  <option className="option" value="25">25</option>
                  <option className="option" value="50">50</option>
                </select>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="roe d-flex justify-content-center">
            <div className="col-11 mt-3">
            <table className="table table-bordered table-responsive text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Registered</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.datas.map((data, index) =>
                <tr key={data.id}>
                  <th scope="row" className="text-center">{index+1}</th>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.jenis_kelamin}</td>
                  <td>{data.stored_at}</td>
                  <td>
                    <button onClick={ () => {this.setState({formName : 'Form Update', userId : data.id, status : 'Update'})}} className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                      Update
                    </button>
                  </td>
                  <td>
                    <button type="button" value={data.id} onClick={this.onDelete} className="btn btn-danger ml-4">
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
            </div>
          </div>
          {/* PrevNext */}
          <div className="d-flex float-right">
            <nav>
              <ul className="pagination">
                <li className="page-item"><button onClick={this.onPrev} className="page-link"><i className="fas fa-chevron-left fa-xs"></i> Previous</button></li>
                <li className="page-item"><button onClick={this.onNext} className="page-link">Next <i className="fas fa-chevron-right fa-xs"></i></button></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Modals */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <AddEditUser updateTable={this.updateTable} status={this.state.status} userId={this.state.userId} formName = {this.state.formName} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Home;