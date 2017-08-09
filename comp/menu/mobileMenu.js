import React, { Component  } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import Link from 'next/link'
import Divider from 'material-ui/Divider';
import scrollToElement from 'scroll-to-element'

export default class MobileMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  componentWillMount = () => {
    try { injectTapEventPlugin() } catch (e) { }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  goTo(idName) {
    console.log('clicked')
    let el = global.document.getElementById(idName)
    scrollToElement(el)
  }

  render() {
    const menuStyle = {
      height: '50px',
      width: '50px',
      marginTop: '70px',
      marginLeft: '20px',
      color: 'green',
      zIndex: 200
    }
    const exitStyle = {
      color: 'green'
    }


    return (
      <MuiThemeProvider>
        <div>
          <Menu style={menuStyle} onTouchTap={this.handleToggle}/>
          <div className='mobile-menu'>
            <Drawer autoFocus open={this.state.open}>
              <img alt='company-logo' className='company-logo' src='http://www.torocotrucking.com/freightmanager/images/main_logo.jpg' />
              <Divider />
              <MenuItem onTouchTap={this.goTo.bind(this, 'main')}>Inicio</MenuItem>
              <MenuItem onTouchTap={this.goTo.bind(this, 'nosotros')}>Nosotros</MenuItem>
              <MenuItem onClick={this.goTo.bind(this, 'servicios')}>Servicios</MenuItem>
              <MenuItem onClick={this.goTo.bind(this, 'contacto')}>Contactanos</MenuItem>
              <MenuItem onClick={this.handleToggle}><Exit style={exitStyle}/></MenuItem>
            </Drawer>
          </div>
          <style jsx>{`
            .company-logo {
              height: 100px;
              width: 100%;
              padding-top: 55px;
              padding-bottom: 35px;
              display:block;
              margin:auto;
            }

            .mobile-menu {
              font-family: Roboto;
              text-align: center;
              color: green;
            }

            a {
              text-decoration: none;
              color: green;
              font-size: 20px;
            }
          `}</style>
        </div>
      </MuiThemeProvider>
    );
  }
}
