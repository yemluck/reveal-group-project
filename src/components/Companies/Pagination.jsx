
export default function Pagination(){
    let pageNumber = 1;
    // TODO: add redux state tracking for pageNumber
    return (
        <div>
            <button className="btn">Previous</button>
            <span>Page {pageNumber}</span>
            <button className="btn">Next</button>
        </div>
    )
}