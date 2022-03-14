import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
//import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';
import './Companies.css';



function List() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_COMPANIES',
            payload: ""
        });
    }, []);

    const companies = useSelector(store => store.companies);
    const errors = useSelector(store => store.errors);
    const [currentPage, setCurrentPage] = useState(0);
    
    const PER_PAGE = 10;

    const handlePageClick = ({ selected: selectedPage}) => 
        setCurrentPage(selectedPage);

    const offset = currentPage * PER_PAGE;

    const currentPageData = companies
        .slice(offset, offset + PER_PAGE)
        .map((company, i) => {
            return (<div key={i}>
                    <Item company={company} />
                </div>)
        });

    const pageCount = Math.ceil(companies.length / PER_PAGE);

    // console.log('this is the companies from the store:', companies);
   
    return (
        <>
        <h3> Click on a company's name for more details</h3>
            {currentPageData}
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            
        </>
    )
}

export default List;