import React from 'react'

class Developer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : 'Website Development / Programing Packages',
      namaDesigns : [
        {cat : 'Custom Web Application Development (including Dating Website)', feat : 'PHP / MySQL Solution', pri : '$8 USD / hour'},
        {cat : 'E-Commercee Webshop Module Development', feat : 'Shooping Cart, Admin Panel Suport, Platforms - osCommercee / Virtuemart', pri : '$590 USD'},
        {cat : 'Forum Integration and Custom Skinning', feat : 'SMF / PHPBB Platforms', pri : '$150 USD'},
        {cat : 'Blog Installation and Custom Setup', feat : 'Wordpress Platforms', pri : '$120 USD'},
        {cat : 'CMS (Content Management) Integration', feat : 'Joomla / Wordpress Platforms', pri : '$100 USD'},
      ]
    }
  }
  render(){
    return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colspan="3" className="bg-warning text-white">
                <h5 className="mt-4s">{this.state.name}</h5>
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
    )
  }
}

export default Developer