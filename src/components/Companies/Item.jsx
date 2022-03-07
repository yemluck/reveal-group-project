import { useHistory, Link } from 'react-router-dom';

function Item({ company }) {

  const history = useHistory();

  const selectCompany = (company) => {
    history.push(`/companies/${company}`)
  }
  // redo the link to make it only be the text -> and not all the way across on line... maybe make a <Link> on a <span> holding the company's name
  // or whatever

  return (
    <div>
      <h4 className="company-link" ><Link to={`/companies/details/${company}`}><span>{company}</span></Link></h4>
    </div>
  )
}

export default Item; 