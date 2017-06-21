import ClientList from '../comp/clients/ClientList'

const dummy = [
  {name: 'Saul Flores',
    location: 'Tijuana'
  },
  {
    name: 'Ruben Casas',
    location: 'Mexicali'
  },
  {
    name: 'Roberto Martinez',
    location: 'Sonora'
  },
]

const admin = () => (
  <div>
    <ClientList clients={dummy}/>
  </div>
)

export default admin;
