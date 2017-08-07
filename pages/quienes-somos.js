import App from '../comp/app/App'
import Parallax from '../comp/parallax/Parallax'
import Nosotros from '../comp/nosotros/Nosotros'
import Info from '../comp/info/Info'
import Overdrive from 'react-overdrive'
import MobileMenu from '../comp/menu/mobileMenu'

export default () => (
  <Overdrive id='transition'>
    <div>
      <App>
        <MobileMenu />
        <Parallax title='Nosotros' img='/static/nosotros.jpg' />
        <Nosotros />
        <Info />
      </App>
    </div>
  </Overdrive>
)
