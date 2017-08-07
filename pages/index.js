import App from '../comp/app/App'
import Video from '../comp/video/Video'
import Menu from '../comp/menu/Menu'
import Overdrive from 'react-overdrive'
import { Visible } from 'react-grid-system'
import MobileHome from '../comp/home/mobile'
import Services from '../comp/services/Services'

export default () => (
  <Overdrive id='transition'>
    <div>
      <App>
        <Visible lg xl>
          <Video />
          <Menu />
        </Visible>
        <Visible xs sm md>
          <div>
            <MobileHome />
            <Services />
          </div>
        </Visible>
      </App>
    </div>
  </Overdrive>
)
