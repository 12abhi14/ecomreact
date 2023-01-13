import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import {Home} from './components/Home'
import {Signup} from './components/Signup'
import {Login} from './components/Login'
import {AddProducts} from './components/AddProducts'
import { Notfound } from './components/Notfound';

export class Hello extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  element={<Notfound/>}/>
          <Route path='/addproducts' element={<AddProducts/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Hello