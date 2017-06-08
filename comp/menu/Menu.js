import React from 'react'
import Link from 'next/link'

const Menu = () => (
  <div className='container'>
    <div id='menu' className='menuContainer'>
      <div>
        <ul className='linkContainer'>
          <li className='li'><Link href='/quienes-somos'><a>Quienes Somos</a></Link></li>
          <li className='li'><Link href='/servicios'><a>Servicios</a></Link></li>
          <li className='li'><Link href='/contacto'><a>Contactanos</a></Link></li>
          <li className='li'><img src='http://www.torocotrucking.com/freightmanager/images/main_logo.jpg'/></li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        @media only screen and (min-width: 1025px) {
          .container {
            background: white;
            position: absolute;
            bottom: 0;
            right: 0;
            height:100%;
            width: 35%;
            max-width: 50em;
            margin: auto auto 1em;
          }
          .menu-container {
            z-index: 1;
            background-color: white;
            width: 500px;
            height: 100%;
          }

          a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
          }

          .li {
            color: gray;
            font-size: 45px;
            cursor: pointer;
            cursor: hand;
            text-decoration:none;
            padding-top: 60px;
            font-weight: bold;
            text-align: center;
            transition: font-size 0.1s ease-in-out;
            -o-transition: font-size color 0.2s ease-in-out; /* opera */
            -ms-transition: font-size color 0.2s ease-in-out; /* IE 10 */
            -moz-transition: font-size color 0.2s ease-in-out;/* Firefox */
            -webkit-transition: font-size color 0.2s ease-in-out; /*safari and chrome */
          }

          .li:hover{
            font-size: 55px;
            color: green;
          }

          .li img {
            width: 58%;
            height: 100px;
          }

          li {
            list-style-type: none;
          }


        }

        @media only screen and (min-width: 481px) and (max-width: 1024px) {
          .container {
            background: white;
            position: absolute;
            bottom: 0;
            right: 0;
            height:100%;
            width: 35%;
            max-width: 50em;
            margin: auto auto 1em;
          }
          a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
          }
          .menu-container {
            z-index: 111;
            background-color: white;
            width: 250px;
            height: 100%;
          }

          li {
            color: gray;
            font-size: 20px;
            cursor: pointer;
            cursor: hand;
            padding-top: 60px;
            font-weight: bold;
            text-align: center;
            transition: font-size 0.1s ease-in-out;
            -o-transition: font-size color 0.5s ease-in-out; /* opera */
            -ms-transition: font-size color 0.5s ease-in-out; /* IE 10 */
            -moz-transition: font-size color 0.5s ease-in-out;/* Firefox */
            -webkit-transition: font-size color 0.5s ease-in-out; /*safari and chrome */
          }


          li:hover{
            font-size: 30px;
            color: green;
          }
        }

      `}
    </style>
  </div>
)

export default Menu
