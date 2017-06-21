import React, {Component} from 'react'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'

export default class Register extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  addUser () {
    let username = this.refs.username.value
    let password = this.refs.password.value
    if (username) {
      axios.post('/api/register', {
        username: username,
        password: password
      })
      .then(function (response) {
        if (response.data.message === 'A user with the given username is already registered') {
          return alert(response.data.message)
        } else {
          alert(`Welcome to HCB ${username}`)
          Router.push('/')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='vid-container'>
            <img className='bgvid' src='http://wallpapercave.com/wp/2GFdZrW.jpg' />
            <div className='inner-container'>
              <img src='http://wallpapercave.com/wp/2GFdZrW.jpg' className='bgvid inner' />
              <div className='box'>
                <h1>Register Son!</h1>
                <input type='text' ref='username' placeholder='Username' />
                <input type='password' ref='password' placeholder='Password' />
                <button type='button' onClick={this.addUser.bind(this)}>Register</button>
                <p>Are you member? <span><Link href='/login'><a>Log In</a></Link></span></p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          body{
            padding:0;
            margin:0;
          }
          .vid-container{
            position:relative;
            height:100vh;
            overflow:hidden;
          }
          .bgvid{
            position:absolute;
            left:0;
            top:0;
            width:100vw;
          }
          .inner-container{
            width:400px;
            height:400px;
            position:absolute;
            top:calc(50vh - 200px);
            left:calc(50vw - 200px);
            overflow:hidden;
          }
          .bgvid.inner{
            top:calc(-50vh + 200px);
            left:calc(-50vw + 200px);
            filter: url("data:image/svg+xml;utf9,<svg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'><filter%20id='blur'><feGaussianBlur%20stdDeviation='10'%20/></filter></svg>#blur");
            -webkit-filter:blur(10px);
            -ms-filter: blur(10px);
            -o-filter: blur(10px);
            filter:blur(10px);
          }
          .box{
            position:absolute;
            height:100%;
            width:100%;
            font-family:Helvetica;
            color:#fff;
            background:rgba(0,0,0,0.13);
            padding:30px 0px;
          }
          .box h1{
            text-align:center;
            margin:30px 0;
            font-size:30px;
          }
          .box input{
            display:block;
            width:300px;
            margin:20px auto;
            padding:15px;
            background:rgba(0,0,0,0.2);
            color:#fff;
            border:0;
          }
          .box input:focus,.box input:active,.box button:focus,.box button:active{
            outline:none;
          }
          .box button{
            background:#2ecc71;
            border:0;
            color:#fff;
            padding:10px;
            font-size:20px;
            width:330px;
            margin:20px auto;
            display:block;
            cursor:pointer;
          }
          .box button:active{
            background:#27ae60;
          }
          .box p{
            font-size:14px;
            text-align:center;
          }
          .box p span{
            cursor:pointer;
            color:#666;
          }
        `}
        </style>
      </div>
    )
  }
}
