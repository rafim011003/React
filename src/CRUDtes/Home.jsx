import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      per_page : '10',
      total_pages : '',
      current_page : ''
    }
    console.log('constructor')
  }

  onPrevHandle =() => {
    console.log('Klik mundur');
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page-1}`
    Axios
    .get(url)
    .then(response => {
      console.log('berhasil di dapatkan', response);
      this.setState({
        data : response.data.data,
        per_page : response.data.meta.per_page,
        total_pages : response.data.current_pages,
        current_page : response.data.meta.current_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onNextHandle =() => {
    console.log('Klik maju');
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page+1}`
    Axios
    .get(url)
    .then(response => {
      console.log('berhasil di dapatkan', response);
      this.setState({
        data : response.data.data,
        per_page : response.data.meta.per_page,
        total_page : response.data.current_page,
        current_page : response.data.meta.current_page
      })
      // console.log('Page saat ini ketika next', response.data.meta.current_page);
    })
    .catch(error => {
      console.log(error);
    })
  }

  onSelectItem = (event) =>{
    console.log('value', event.target.value)
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`
    Axios
    .get(url)
    .then(response => {
      console.log('Ganti item', response);
      this.setState({
        data : response.data.data,
        per_page : response.data.meta.per_page,
        total_pages : response.data.total_pages,
        current_page : response.data.meta.current_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    console.log('componentDidMount');
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}`
    Axios
    .get(url)
    .then(response => {
      console.log('berhasil di dapatkan', response);
      this.setState({
        data : response.data.data,
        per_page : response.data.meta.per_page,
        total_pages : response.data.total_pages,
        current_page : response.data.meta.current_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <Fragment>
        <h2 className="text-center">Latihan Crud (Axios)</h2>
        {/* modal */}
        <button type="button" className="btn btn-primary ml-5" data-toggle="modal" data-target="#exampleModal">
          Create
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <AddEditUser/>
            </div>
          </div>
        </div>
        {/* modal */}
        {/* opt */}
        <div className="row d-flex justify-content-end">
          <div className="col-sm-1 col-1 col-md-1 col-lg-1">
            <select className="btn border" onChange={this.onSelectItem} >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        {/* opt */}
        {/* table */}
        <div className="row d-flex justify-content-center">
          <div className="col-11 mt-3">
          <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Registered</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data, index) => 
              <tr key={data.id}>
                <td>{index +1}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.name}</td>
                <td>{data.jenis_kelamin}</td>
                <td>{data.stored_at}</td>
              </tr>
            )}
          </tbody>
        </table>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <nav>
            <ul className="pagination">
              <li className="page-item"><button className="page-link" onClick={this.onPrevHandle}>Previous</button></li>
              <li className="page-item"><button className="page-link" onClick={this.onNextHandle}>Next</button></li>
            </ul>
          </nav>
        </div>
        {/* table */}
      </Fragment>
    )
  }
}

export default Home;