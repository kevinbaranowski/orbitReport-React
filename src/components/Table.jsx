import './styling.css'

const Table = ({ sat }) => {
  const tableRows = sat.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td>{data.operational ? 'active' : 'inactive'}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default Table;