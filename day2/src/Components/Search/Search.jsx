 import "./Search.css"
 export function Search(){
    return(
        <div className="search-box">
  <div className="search-grid">
    <div className="search-item">
      <label>Select Year</label>
      <select>
        <option>Year</option>
      </select>
    </div>
    <div className="search-item">
      <label>Select Make</label>
      <select>
        <option>Make</option>
      </select>
    </div>
    <div className="search-item">
      <label>Select Model</label>
      <select>
        <option>Model</option>
      </select>
    </div>
    <div className="search-item">
      <label>Body Style</label>
      <select>
        <option>Style</option>
      </select>
    </div>
    <div className="search-item">
      <label>Car Condition</label>
      <select>
        <option>Condition</option>
      </select>
    </div>
    <div className="search-item">
      <label>Select Price</label>
      <select>
        <option>Price</option>
      </select>
    </div>
    <div className="search-button">
      <button>Search</button>
    </div>
  </div>
</div>
    )
}