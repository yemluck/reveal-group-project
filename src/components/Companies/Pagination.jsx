
export default function Pagination(){
    let pageNumber = 1;
    // TODO: add state tracking for offset
    return (
        <div>
            <button className="btn">Previous</button>
            <span>Page {pageNumber}</span>
            <button className="btn">Next</button>
        </div>
    )
}