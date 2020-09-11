import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'
import swal from 'sweetalert'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      Page : '',
      last_page : '',
      per_page : '5',
      cari : '',
      user_id : '',
    }
  }

  handlerAdd = () => {
    const row = this.state.per_page
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${row}=1`
    Axios
    .get(url)
    .then(response => {
      console.log('berhasil di dapatkan', response);
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onPrev = (event) => {
    console.log('Previous Click');
    const per_laman = event.target.value
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.page-1}`
    Axios
    .get(url)
    .then(response => {
      console.log('success', response);
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page,
        per_page : response.data.meta.per_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onNext = (event) => {
    console.log('Previous Click');
    const per_laman = event.target.value
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.page+1}`
    Axios
    .get(url)
    .then(response => {
      console.log('success', response);
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page,
        per_page : response.data.meta.per_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onPage = (event) =>{
    console.log('page')
    const laman = event.target.value
    const row = this.state.per_page
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${row}?page=${laman}`
    Axios
    .get(url)
    .then(response => {
      console.log('Success', response);
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page,
        per_page : response.data.meta.per_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onInput = (event) => {
    event.preventDefault()
    this.setState({
      cari :event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const urlsrc = "https://belajar-react.smkmadinatulquran.sch.id/api/users/cari"
    const loadsrc = {
      cari : this.state.cari
    }
    console.log(loadsrc);
    Axios
    .post(urlsrc, loadsrc)
    .then(success => {
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page,
        per_page : response.data.meta.per_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onChange = (baris) => {
    console.log(baris);
    const row = baris
    const urlsrc = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${row}?page=${this.state.page}`
    Axios
    .get(url)
    .then(response => {
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page,
        per_page : response.data.meta.per_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  opnModal() {
    const modals = document.getElementsByName('modal')

    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.add('show');
      modals[i].setAttribute('aria-hidden', 'false');
      modals[i].setAttribute('style', 'display:block');
    }

    const modalsDrops = document.getElementsByName('modal-Drop')

    for (let i = 0; i > modalsDrops.length; i++) {
      document.body.appendChild(modalsDrops[i]);
      
    }
  }

  onDelete = (event) => {
    event.preventDefault()
    const id_user = e.target.value
    const urlsrc = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id_user}`
    Axios
    .get(url)
    .then(terhapus => {
      this.handlerAdd()
      Swal("Success", "Data Has Been Delete", "success")
    })
    .catch(error => {
      console.log(error);
    })
  }
 
  componentDidMount() {
    console.log('componentDidMount');
    const row = this.state.per_page
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${row}page=1`
    Axios
    .get(url)
    .then(response => {
      console.log('Success', response);
      this.setState({
        data : response.data.data,
        page : response.data.meta.current_page,
        last_page : response.data.meta.last_page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const hal = [];
    for (var a = 1; a <= this.state.last_page; a++) {
      hal.push(<li key={a} className="page-item"><button name="button" value={a} onClick={this.page} className="page-link">{a}</button></li>)
    }

    return (
      <Fragment>
        {/* modal */}
        <div className="row mb-4">
          <div className="col col-4">
            <button type="button" onClick={this.opnModal} className="btn btn-primary ml-5" data-toggle="modal" data-target="#exampleModal">
              Create
            </button>
          </div>
          <div className="col col-4">
            <form action="" onSubmit={this.onSubmit}>
              <input type="text" name="cari" id="cari" className="form-control" onChange={this.onInput} autoComplete="off" placeholder="Seacrh" />
            </form>
          </div>
          <div className="col col-4">
            <div className="float-right">
              <div className="col-sm-1 col-1 col-md-1 col-lg-1">
                <select className="btn border" onChange={baris => this.onChange(baris.target.value)} >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <AddEditUser/>
            </div>
          </div>
        </div> */}
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