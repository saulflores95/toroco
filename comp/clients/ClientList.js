const ClientList = ({ clients }) => (
  <div className='list'>
    {clients.map(client => {
      <div className='list-item'>

      </div>
    })}
    <style>
      {`
        .list {
          width: 30%;
          border-style: solid;
          height: 980px;
        }
      `}
    </style>
  </div>
)
 export default ClientList;
