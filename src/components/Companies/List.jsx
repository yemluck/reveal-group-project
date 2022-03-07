import { useDispatch, useSelector } from 'react-redux';
// const companies = useSelector(store => store.companies);
import Item from './Item';

const companies = ['apple', 'google', 'Netflix', 'meta'];

function List() {

  return (
    <div>
      <h2>This is a List.. Click on a company's name for more details</h2>
      {
        companies.map((company, i) => {
          return (<div key={i}>
            <Item company={company} />
          </div>)
        })
      }

    </div>
  )
}

export default List;