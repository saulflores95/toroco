import React, { Component } from 'react'
import App from '../comp/app/App'
import Parallax from '../comp/parallax/Parallax'
import Nosotros from '../comp/nosotros/Nosotros'
import Info from '../comp/info/Info'
import MobileMenu from '../comp/menu/mobileMenu'
import NoSSR from 'react-no-ssr'
import Contact from '../comp/contact/Contact'
import Services from '../comp/services/Services'
import MobileHome from '../comp/home/mobile'
import MobileContent from '../comp/home/content'

export default class Spa extends Component {
  componentWillMount () {
  }

  render () {
    return (
      <App>
        <div className='main-container'>
          <div className='menu'>
            <MobileMenu />
          </div>
          <div id='main'>
            <MobileHome />
            <MobileContent />
          </div>
          <div id='nosotros'>
            <Parallax title='Nosotros' img='/static/nosotros.jpg' />
            <Nosotros />
            <Info />
          </div>
          <div id='servicios'>
            <Parallax title='Servicios' img='/static/servicio.jpg' />
            <Services />
          </div>
          <div id='contacto'>
            <Parallax title='Contacto' img='/static/contacto.jpg' />
            <div className='container'>
              <NoSSR onLoading={<div>Loading</div>}>
                <Contact />
              </NoSSR>
            </div>
          </div>
          <style>{`
            .main-container {
            }
            .menu {
              position: fixed;
              z-index: 100;
            }
            .container {
              margin-top:100px;
            }
            #nosotros {
              margin-bottom:300px;
            }

            #servicios {
              margin-bottom:300px
            }
          `}</style>
        </div>
      </App>
    )
  }
}
