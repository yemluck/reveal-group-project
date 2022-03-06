import { useDispatch, useSelector } from 'react-redux';
const companies = useSelector(store => store.companies);
import Item from './Item';


function List() {

  return (
    <div>
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