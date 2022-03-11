import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';

function Item({ company }) {

    const history = useHistory();
    
    const selectCompany = (company) => {
        history.push(`/companies/${company.name}`)
    }
    // redo the link to make it only be the text -> and not all the way across on line... maybe make a <Link> on a <span> holding the company's name
    // or whatever

    return (
        <div>
            <h4 className="company-link" ><Link to={`/companies/details/${company.name}/${company.wikipedia}`}><span>{company.name}</span></Link></h4>
        </div>
    )
}

export default Item; 