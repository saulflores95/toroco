import App from '../comp/app/App'
import Parallax from '../comp/parallax/Parallax'
import Nosotros from '../comp/nosotros/Nosotros'
import Info from '../comp/info/Info'

export default () => (
  <div>
    <App>
      <Parallax title='Nosotros' img='http://www.torocotrucking.com/freightmanager/images/main_image2.jpg'/>
      <Nosotros />
      <Info />
    </App>
  </div>
)
