import React from 'react'
import Developer from './Developer'

class Design extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : 'Website Design Packages',
      namaDesigns : [
        {cat : 'Website Home Page Design (PSD)', feat : 'Up to 3 design concepts and Unlimited revisions', pri : '$90 USD'},
        {cat : 'Starter Package', feat : 'Up to 5 Static HTML pages', pri : '$190 USD'},
        {cat : 'Additional Webpages', feat : 'Static HTMML Output', pri : '$10 USD each'},
        {cat : 'Wordpress Theme', feat : 'Design and Conversion', pri : '$120 USD'},
        {cat : 'Joomla Template', feat : 'Design and Conversion', pri : '$120 USD'},
      ]
    }
  }
  render(){
    return (
      <div className="container">
        <table className="table table-bordered m-0 p-0">
          <thead>
            <tr className="bg-primary text-white">
              <th><h4>Category</h4></th>
              <th><h4>Features</h4></th>
              <th><h4>US$</h4></th>
            </tr>
            <tr>
              <th colspan="3" className="bg-warning text-white">
                <h4 className="mt-4s">{this.state.name}</h4>
              </th>
            </tr>
          </thead>
          {this.state.namaDesigns.map ((namaDesign, index) => 
          <tbody key={index} className="table-warning">
            <tr>
              <td>{namaDesign.cat}</td>
              <td>{namaDesign.feat}</td>
              <td>{namaDesign.pri}</td>
            </tr>
          </tbody>
          )}
        </table>
        <Developer />
      </div>
    )
  }
}

export default Design