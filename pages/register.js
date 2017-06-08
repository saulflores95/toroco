import React from 'react'
import Register from '../comp/register/Register'

const register = () => (
  <div>
    <Register />
  </div>
)

register.getInitialProps = async({ req, res }) => {
  if (req.user) {
    return res.redirect('/')
  }
  let user = 'No User'
  return { user: user }
}

export default register
