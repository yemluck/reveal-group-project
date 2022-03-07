import {useState} from 'react';
import { useDispatch } from 'react-redux';

function CompanySearch() {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault;
        dispatch({
            type: "FETCH_COMPANIES",
            payload: searchInput
        })
    }
    return (
        <form onSubmit={(evt) => handleSubmit(evt)}>
            <label htmlFor="search-input">Search for a company: </label>
            <input id="search-input" type="text" value={searchInput} onChange={(evt) => setSearchInput(evt.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default CompanySearch;