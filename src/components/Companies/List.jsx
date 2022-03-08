import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import Pagination from './Pagination';



function List() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_COMPANIES',
            payload: ""
        });
    }, []);

    const companies = useSelector(store => store.companies);

    return (
        <div>
            <h3>Click on a company's name for more details</h3>
            {
                companies.map((company, i) => {
                    return (<div key={i}>
                        <Item company={company.company} />
                    </div>)
                })
            }
            <Pagination />
        </div>
    )
}

export default List;