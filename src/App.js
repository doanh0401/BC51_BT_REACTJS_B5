import logo from './logo.svg';
import './App.css';
import Shoesstore from './Component/Shoesstore';
import BaiTapDatVe from './Component/BaiTapDatVe/BaiTapDatVe'
import { Fragment } from 'react';
import BaiTapForm from './Component/BaiTapForm/BaiTapForm';
function App() {
  return (
    <Fragment>
      {/*<Shoesstore /> */}
      {/* <BaiTapDatVe /> */}
      <BaiTapForm />
    </Fragment>
  );
}

export default App;
