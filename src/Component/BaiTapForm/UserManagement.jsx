import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSvAction, xoaSvAction } from '../../store/actions/SvAction';

class UserManagement extends Component {
  state = {
    keyword: ""
  }

  renderContent = () => { 
    let data = this.props.SvList.filter((element) => {
      return element.HoTen.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
    });
    return data.map((element,idx) => {
      const {MaSv,HoTen,SoDienThoai,email} = element;
      const className = idx % 2 === 0 ? "bg-light" : "";
      return (
          <tr className={className} key={MaSv}>
          <td>{MaSv}</td>
          <td>{HoTen}</td>
          <td>{SoDienThoai}</td>
          <td>{email}</td>
          <td>
            <button onClick={() => this.props.dispatch(setSelectedSvAction([element,false]))} className="btn btn-info mr-2">EDIT</button>
            <button onClick={() => this.props.dispatch(xoaSvAction(element))} className="btn btn-danger">DELETE</button>
          </td>
        </tr>
      )
  });
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    })
  }

  render() {
    return (
        <div className="card p-0 mt-3">
        <div className="card-header bg-dark text-white font-weight-bold">USER MANAGEMENT</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Search by full name..."
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead className='bg-dark'>
              <tr>
                <th>Mã SV</th>
                <th>Họ Tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderContent()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    SvList: state.svReducer.SvList,
  }
}

export default connect(mapStateToProps)(UserManagement);