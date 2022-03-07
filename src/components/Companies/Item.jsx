import { useHistory } from 'react-router-dom';

function Item({ company }) {

  const history = useHistory();

  const selectCompany = (company) => {
    history.push(`/companies/${company}`)
  }


  return (
    <div>
      <h4 className="company-link" onClick={() => selectCompany(company)}>{company}</h4>
    </div>
  )
}

export default Item; 