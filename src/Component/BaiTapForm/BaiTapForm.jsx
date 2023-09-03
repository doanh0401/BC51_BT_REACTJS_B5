import React, { Component } from 'react'
import UserManagement from './UserManagement'
import RegistorForm from './RegistorForm'


export default class BaiTapForm extends Component {
  render() {
    return (
        <div className="w-75 mx-auto mt-5">

        <RegistorForm />

        <UserManagement />
      </div>
    )
  }
}
