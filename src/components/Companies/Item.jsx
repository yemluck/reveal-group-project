import { useHistory } from 'react-router-dom';

function Item({ company }) {

  const history = useHistory();

  const selectCompany = (company) => {
    history.push(`/companies/${company}`)
  }


  return (
    <div>
      <h3 className="company-link" onClick={() => selectCompany(company)}>{company}</h3>
    </div>
  )
}

export default Item; 