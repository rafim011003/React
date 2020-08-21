import React from 'react'

class SiswaRPL extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      namaDaftar : 'Daftar Siswa Outdor',
      namaSiswas : [
        {nama : 'Bambang', nisn : '123456', jurusan : 'kuli Bangunan'},
        {nama : 'Jajang', nisn : '654321', jurusan : 'Tambal Ban'},
        {nama : 'Sumanto', nisn : '654321', jurusan : 'Steam'},
        {nama : 'Sutri', nisn : '654321', jurusan : 'Kang Parkir'},
      ]
    }
  }
  onClickHandler = () => {
    // {event}
    console.log("Tombol Sudah Di click")
    this.setState({
      namaDaftar : 'Daftar Siswa Indor',
      namaSiswas : [
        {nama : 'Budi', nisn : '123456', jurusan : 'Administrasi'},
        {nama : 'Anto', nisn : '654321', jurusan : 'Rekayasa Perangkat Lunak'},
        {nama : 'andi', nisn : '654321', jurusan : 'IOT'},
        {nama : 'maman', nisn : '654321', jurusan : 'Cyber Security'},
      ]
    })
  }
  render(){
    return (
      <div className="container">
        <button className="form-control btn btn-success" onClick={this.onClickHandler}>Ganti Daftar</button>
        <h4 className="text-center mt-4">{this.state.namaDaftar}</h4>
        {this.state.namaSiswas.map ((namaSiswa, index) => 
          <div className="card text-center" key={index}>
            <img height="150" width="150" src="https://cdn.iconscout.com/icon/free/png-256/avatar-368-456320.png" />
            <h5 className="card-title">{namaSiswa.nama}</h5>
            <p className="card-text">{namaSiswa.nisn}</p>
            <p className="card-text">{namaSiswa.jurusan}</p>
            <p>Siswa ke {index +1}</p>
          </div>
        )}
      </div>
    )
  }
}

export default SiswaRPL