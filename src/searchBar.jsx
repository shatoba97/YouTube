import React, { Component } from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:''};
        
      }
      
      
  render(){ return(
      <form action="/list/">
      <div className="row">
          
              <div className="input-group">
                    <input type="text" name="search" 
                        className="form-control"
                        //value={decodeURIComponent(window.location.search).replace("?","")}
                        onChange = { (event) => this.onInputChange(event.target.value)} 
                        placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" 
                            onClick={ (event) => this.onClick()} 
                            type="button"> { this.value = "Go!" }
                        </button>
                    </span>
              </div>
          
      </div>
      </form>
  );
  }
  onClick(term) {
    window.location="/list/?"+this.state.term;
    
  }

  onInputChange(term) {
    this.setState({ term });
    //this.props.onSearchTermChange(term);
  }
} 


// ReactDOM.render(
//         <Index action="/list" method="GET" />, document.getElementById('root'));

export default SearchBar;

