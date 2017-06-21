import Navbar from '../comp/navbar/Navbar'
import Contact from '../comp/contact/Contact'
import App from '../comp/app/App'
import NoSSR from 'react-no-ssr'
const contacto = ({ user }) => (
  <div>
    <App>
      <Navbar user={user} />
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
)

contacto.getInitialProps = async({ req, res }) => {
  return { user: req.user }
}

export default contacto
