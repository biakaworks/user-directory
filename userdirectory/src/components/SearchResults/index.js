import React from "react";
import "./searchResults.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Users" src={result.picture.medium} className="img-fluid" />
          <p>{result.phone}</p>
          <p>{result.name.first + " " + result.name.last} </p>
          <p>{result.phone}</p>
    
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
