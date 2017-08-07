import Contact from '../comp/contact/Contact'
import App from '../comp/app/App'
import NoSSR from 'react-no-ssr'
import Overdrive from 'react-overdrive'
import Parallax from '../comp/parallax/Parallax'
import MobileMenu from '../comp/menu/mobileMenu'

const contacto = () => (
  <Overdrive id='transition'>
    <div>
      <App>
        <MobileMenu />
        <Parallax title='Contacto' img='/static/contacto.jpg' />
        <div className='container'>
          <NoSSR onLoading={<div>Loading</div>}>
            <Contact />
          </NoSSR>
        </div>
      </App>
      <style>{`
        .container {
          margin-top:100px;
        }
      `}</style>
    </div>
  </Overdrive>

)

/* contacto.getInitialProps = async({ req, res }) => {
  return { user: null }
} */

export default contacto
