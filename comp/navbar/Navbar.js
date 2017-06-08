import React from 'react'
import { Row, Col } from 'react-grid-system'
import Link  from 'next/link'

const Navbar = () => (
  <div className='container'>
    <div className='ull'>
      <li className='li'><Link to='/'><img className='img' src='http://taketheleash.nl/wp-content/plugins/ionmoon-flex-slider/assets/img/leftarrowdark.png' /></Link></li>
    </div>
    <style jsx>
      {`
        .container{
          margin-bottom: 67px;
        }
        .ull {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: white;
            position: fixed;
            top: 0;
            width: 100%;
            padding-bottom: 20px;
            padding-top: 10px;
            z-index: 9999;
        }

        .img {
          height: 50px;
          width:50px;
        }

        .li {
            float: left;
        }

        .li a {
            display: block;
            color: white;
            text-align: center;
            text-decoration: none;
        }

        .liRight {
            float: right;
        }

        .liRight a {
            display: block;
            color: gray;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        .liRight a:hover:not(.active) {
            background-color: #131;
        }
        .active {
            background-color: #4CAF50;
        }

        .wrap {
          margin: 0px;
          display: inline-block;
          position: relative;
          height: 25px;
          float: right;
          padding: 0;
          position: relative;
        }

        input[type="text"] {
          height: 25px;
          font-size: 20px;
          display: inline-block;
          font-family: "Montserrat";
          font-weight: 100;
          border: none;
          outline: none;
          color: #555;
          padding: 30px;
          padding-right: 25px;
          width: 0px;
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          z-index: 3;
          transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
          cursor: pointer;
        }

        input[type="text"]:focus:hover {
          border-bottom: 1px solid #BBB;
        }

        input[type="text"]:focus {
          width: 50vw;
          z-index: 1;
          border-bottom: 1px solid #BBB;
          cursor: text;
        }

        input[type="submit"] {
          height: 50px;
          width: 63px;
          display: inline-block;
          color:red;
          float: right;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;
          text-indent: -10000px;
          border: none;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          cursor: pointer;
          opacity: 0.4;
          cursor: pointer;
          transition: opacity .4s ease;
        }

        input[type="submit"]:hover {
          opacity: 0.8;
        }

        .img{
          width: 50px;
          height: 50px;
        }

      `}
    </style>
  </div>
)

export default Navbar
