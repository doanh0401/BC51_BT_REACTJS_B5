import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { isAddAction, themSvAction, updateSvAction } from "../../store/actions/SvAction";

class RegistorForm extends Component {
  maSvInputRef = createRef();
  emailInputRef = createRef();
  hoTenInputRef = createRef();
  SoDienThoaiInputRef = createRef();

  state = {
    MaSv: "",
    HoTen: "",
    SoDienThoai: "",
    email: "",
  }

  static getDerivedStateFromProps(nextProps, currentState) {
  
    if (
      nextProps.selectedSv &&
      nextProps.selectedSv.MaSv !== currentState.MaSv
    ) {
      currentState = nextProps.selectedSv;
    }

    return currentState;
  }
  componentDidUpdate (prevProps) {
    if (prevProps.isAdd !== this.props.isAdd) {
      if (!this.props.isAdd) {
        this.maSvInputRef.current.innerHTML = "";
        this.hoTenInputRef.current.innerHTML = "";
        this.SoDienThoaiInputRef.current.innerHTML = "";
        this.emailInputRef.current.innerHTML = "";
      } 
    }
  }

  handleChange = (event) => {
    this.storeState(event);
    this.deleteMess(event);
  };

  storeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  deleteMess = (event) => {
    switch (event.target.name) {
      case "MaSv":
          this.maSvInputRef.current.innerHTML = "";
      break;
      case "HoTen":
          this.hoTenInputRef.current.innerHTML = "";
      break;
      case "SoDienThoai":
          this.SoDienThoaiInputRef.current.innerHTML = "";
      break;
      case "email":
          this.emailInputRef.current.innerHTML = "";
      break;
    }
  };


  
  handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    isValid &=
      this.validateRequired(
        this.state.MaSv,
        this.maSvInputRef.current,
        "Không được để trống"
      );

    isValid &=
      this.validateRequired(
        this.state.email,
        this.emailInputRef.current,
        "email không được để trống"
      ) &&
      this.validateEmail(
        this.state.email,
        this.emailInputRef.current,
        "Không đúng định dạng"
      );

    isValid &=
      this.validateRequired(
        this.state.HoTen,
        this.hoTenInputRef.current,
        "Không được để trống"
      );

    isValid &= this.validateRequired(
      this.state.SoDienThoai,
      this.SoDienThoaiInputRef.current,
      "Không được để trống"
    );

    if(this.props.isAdd)  {
      isValid &= this.validateReplicate(
        this.state.MaSv,
        this.maSvInputRef.current,
        "Mã Sv không được trùng"
      );
      if(isValid){
        this.props.dispatch(themSvAction(this.state));
      }
    }
    else {
      this.props.dispatch(updateSvAction(this.state));
      this.props.dispatch(isAddAction(true));
    }

    this.setState({
      MaSv: "",
      HoTen: "",
      SoDienThoai: "",
      email: "",
    });
  };

  validateRequired = (value, ref, mess) => {
    if (value) {
      ref.innerHTML = "";

      return true;
    }

    ref.innerHTML = mess;

    return false;
  };

  validateEmail = (value, ref, message) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      ref.innerHTML = "";

      return true;
    }

    ref.innerHTML = message;

    return false;
  };

  validateReplicate = (value, ref, mess) => {
    if(value) {
      const index = this.props.SvList.findIndex((element) => {
        return element.MaSv === value;
      });
  
      if (index === -1) {
        ref.innerHTML = "";
  
        return true;
      }
  
      ref.innerHTML = mess;
  
      return false;
    }
    return false;
  };

  validateName = (value, ref, mess) => {
    if (
      /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})+$/.test(
        value
      )
    ) {
      ref.innerHTML = "";

      return true;
    }

    ref.innerHTML = mess;

    return false;
  };

  render() {
    return (
      <div className="card p-0">
        <div className="card-header bg-dark text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Mã SV</label>
                  <input
                    value={this.state.MaSv}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="MaSv"
                  />
                  <span className="text-danger" ref={this.maSvInputRef}></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input
                    value={this.state.HoTen}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="HoTen"
                  />
                  <span className="text-danger" ref={this.hoTenInputRef}></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    value={this.state.SoDienThoai}
                    onChange={this.handleChange}
                    type="number"
                    className="form-control"
                    name="SoDienThoai"
                  />
                  <span
                    className="text-danger"
                    ref={this.SoDienThoaiInputRef}
                  ></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                    type="text"
                    className="form-control"
                  />
                  <span className="text-danger" ref={this.emailInputRef}></span>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success mr-2">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSv: state.svReducer.selectedSv,
    SvList: state.svReducer.SvList,
    isAdd: state.svReducer.isAdd
  };
};

export default connect(mapStateToProps)(RegistorForm);
