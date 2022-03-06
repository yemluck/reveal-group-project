function Item({ company }) {


  const selectCompany = (company) => {
    history.push(`/companies/${company}`)
  }


  return (
    <div>
      Item
      <h3>{company}</h3>
      <button onClick={() => selectCompany(company)}> select </button>
    </div>
  )
}

export default Item; 