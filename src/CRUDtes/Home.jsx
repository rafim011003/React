// import React, { Component, Fragment } from 'react'
// import Axios from 'axios'
// import AddEditUser from './Modal/AddEditUser'
// import Swal from 'sweetalert'

// class Home extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data : [],
//       Page : '',
//       last_page : '',
//       per_page : '5',
//       cari : '', 
//       user_id : '',
//       current_page : '',
//       total_pages : '',
//       formName : '',
//       userId : '',
//       status : '',
//       page : '',
//       last_page : '',
//       per_page : '5',
//       current_page : '',
//       total_pages : '',
//       formName : '',
//       userId : '',
//       status : '',
//       cari : '',
//     }
//     // console.log('constructor');
//   }

//   handlerAdd = () => {
//     const row = this.state.per_page
//     const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${row}?page=1`
//     Axios
//     .get(url)
//     .then(response => {
//       console.log('success ', response);
//       this.setState({
//         data : response.data.data,
//         page : response.data.meta.current_page,
//         last_page : response.data.meta.last_page
//       })
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }

//   onPrev =() =>{
//     console.log('Previous Click')
//     const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page-1}`
//     Axios
//     .get(url)
//     .then (response => {
//       console.log('Data Has Been geted', response)
//       this.setState({
//         datas : response.data.data,
//         per_page : response.data.meta.per_page,
//         current_page : response.data.meta.current_page,
//         total_pages : response.data.meta.total_pages
//       })
//       // console.log('Anda berada di data yang ke-', response.data.meta.current_page)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   onNext =() => {
//     console.log('Next Click')
//     const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page+1}`
//     Axios
//     .get(url)
//     .then (response => {
//       console.log('Data Has Been geted', response)
//       this.setState({
//         datas : response.data.data,
//         per_page : response.data.meta.per_page,
//         current_page : response.data.meta.current_page,
//         total_pages : response.data.meta.total_pages
//       })
//       // console.log('Anda berada di data yang ke-', response.data.meta.current_page)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   // onPage = (event) => {
//   //   console.log('page')
//   //   const laman = event.target.value
//   //   const row = this.state.per_page
//   //   const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${row}?page=${laman}`
//   //   Axios
//   //   .get(url)
//   //   .then(response => {
//   //     console.log('success', response);
//   //     this.setState({
//   //       data : response.data.data,
//   //       page : response.data.meta.current_page,
//   //       last_page : response.data.meta.last_page,
//   //       per_page : response.data.meta.per_page
//   //     })
//   //   })
//   //   .catch(error => {
//   //     console.log('error', error);
//   //   })
//   // }

//   onInput = (event) => {
//     event.preventDefault()
//     this.setState({
//       cari : event.target.value
//     })
//   }

//   onSubmit = (event) => {
//     event.preventDefault()
//     const urlc = "https://belajar-react.smkmadinatulquran.sch.id/api/users/cari"
//     const payloadc = {
//       cari : this.state.cari
//     }
//     console.log(payloadc);
//     Axios
//     .post(urlc, payloadc)
//     .then(success => {
//       this.setState({
//         data : success.data.data,
//         page : success.data.meta.current_page,
//         last_page : success.data.meta.last_page,
//         per_page : success.data.meta.per_page
//       })
//     })
//     .catch(error => {
//       console.log('error', error);
//     })
//   }

//   onSelectItem =(event) => {
//     console.log('Value', event.target.value)
//     const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`
//     Axios
//     .get(url)
//     .then (response => {
//       console.log('Select item', response)
//       this.setState({
//         datas : response.data.data,
//         per_page : response.data.meta.per_page,
//         current_page : response.data.meta.current_page,
//         total_pages : response.data.meta.total_pages
//       })
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   onDelete = (event) => {
//     event.preventDefault()
//     const id_user = event.target.value
//     const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id_user}`
//     Axios
//     .get(url)
//     .then(response => {
//       this.handlerAdd()
//       Swal("Success", "Data Has Been Delete", "success")
//     })
//     .catch(error => {
//       console.log('Failed', error);
//     })
//   }
 
//   componentDidMount() {
//     console.log('componentDidMount');
//     const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}`
//     Axios
//     .get(url)
//     .then(response => {
//       console.log('Data Has Been gated', response);
//       this.setState({
//         data : response.data.data,
//         per_page : response.data.meta.per_page,
//         current_page : response.data.meta.current_page,
//         total_pages : response.data.meta.total_pages
//       })
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className="container">
//           {/* modal */}
//           <h2 className="text-center my-5">Crud</h2>
//           <div className="row mb-4 mt-4">

//             {/* new user */}
//             <div className="col-4">
//             <button onClick={()=> {
//                 this.setState({ formName : 'Form Registrasi', status : 'Add', userId : ''}) }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 <i className="fas fa-plus-circle"></i>&nbsp; Create new user
//               </button>
//             </div>

//             {/* seacrh */}
//             <div className="col-4">
//               <form onSubmit={this.onSubmit}>
//                 <input type="text" name="cari" id="cari" onChange={this.onInput} className="form-control" aria-describedby="cari" autoComplete="off" placeholder="Seacrh..." />
//               </form>
//             </div>

//             {/* option */}
//             <div className="col-4">
//               <div className="float-right">
//                 <div className="col-sm-1 col-1 col-md-1 col-lg-1">
//                   <select className="btn border" onChange={this.onSelectItem} >
//                     <option className="option" value="5">5</option>
//                     <option className="option" value="10">10</option>
//                     <option className="option" value="25">25</option>
//                     <option className="option" value="50">50</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* table */}
//           <div className="row d-flex justify-content-center">
//             <div className="col-11 mt-3">
//               <table className="table table-bordered text-center">
//                 <thead>
//                   <tr>
//                     <th>No</th>
//                     <th>Username</th>
//                     <th>Email</th>
//                     <th>Name</th>
//                     <th>Gender</th>
//                     <th>Registered</th>
//                     <th>Edit</th>
//                     <th>Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.data.map((data, index) => 
//                     <tr key={data.id}>
//                       <td>{index +1}</td>
//                       <td>{data.username}</td>
//                       <td>{data.email}</td>
//                       <td>{data.name}</td>
//                       <td>{data.jenis_kelamin}</td>
//                       <td>{data.stored_at}</td>
//                       <td>
//                         <button onClick={ () => {this.setState({formName : 'Form Update', userId : data.id, status : 'Update'})}} className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
//                           Update
//                         </button>
//                       </td>
//                       <td>
//                         <button type="button" value={data.id} onClick={this.onDelete} className="btn btn-danger ml-4">
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* nextprev */}
//           <div className="d-flex justify-content-end">
//             <nav>
//               <ul className="pagination">
//                 <li className="page-item"><button onClick={this.onPrev} className="page-link"><i className="fas fa-chevron-left fa-xs"></i> Previous</button></li>
//                 <li className="page-item"><button onClick={this.onNext} className="page-link">Next <i className="fas fa-chevron-right fa-xs"></i></button></li>
//               </ul>
//             </nav>
//           </div>

//           {/* Modal */}
//           <div className="modal fade" id="exampleModal" tabIndex="1" role="dialog" aria-labelledby="exampleModelLabel" aria-hidden="true">
//             <div className="modal-dialog" role="document">
//               <div className="modal-content">
//                 <AddEditUser user_id={this.state.user_id} handlerAdd={this.handlerAdd} judul="Form User"/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     )
//   }
// }

// export default Home;


import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'
import Swal from 'sweetalert'

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
      cari : '',
    }
    console.log('constructor')
  }

  handlerAdd = () => {
    this.componentDidMount()
  }

  onInput = (event) => {
    event.preventDefault()
    this.setState({
      cari : event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const urlc = "https://belajar-react.smkmadinatulquran.sch.id/api/users/cari"
    const payloadc = {
      cari : this.state.cari
    }
    console.log(payloadc);
    Axios
    .post(urlc, payloadc)
    .then(success => {
      this.setState({
        data : success.data.data,
        page : success.data.meta.current_page,
        last_page : success.data.meta.last_page,
        per_page : success.data.meta.per_page
      })
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  onPost (url, payloadc) {
    Axios
    .post(url, payloadc)
    .then(response => {
      this.setState({
        data : response.data.data,
        per_page : response.data.meta.per_page,
        total : response.data.meta.total,
        current_page : response.data.meta.current_page,
        last_page : response.data.meta.last_page
      })
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  onChangeSearch = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  onSubmitSearch = (event) => {
    event.preventDefault()
    console.log('Submit')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/cari`
    const payload = {
      cari : this.state.cari
    }
    this.onPost(url, payload)
  }

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
      Swal("Success", "Data Has Been Delete", "success")
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
              <div className="col-4">
                <label htmlFor="cari"> Cari</label>
                <br/>
                <form onSubmit={this.onSubmitSearch} />
                  <input onChange={this.onChangeSearch} name="cari" className="btn border" type="text"/>
                {/* </form> */}
              </div>
            </div>
            <div className="row justify-content-end">
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