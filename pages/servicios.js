import App from '../comp/app/App'
import Parallax from '../comp/parallax/Parallax'
import Services from '../comp/services/Services'
import Overdrive from 'react-overdrive'
import MobileMenu from '../comp/menu/mobileMenu'

export default () => (
  <Overdrive id='transition'>
    <div>
      <App>
        <MobileMenu />
        <Parallax title='Servicios' img='/static/servicio.jpg' />
        <Services />
      </App>
    </div>
  </Overdrive>
)
