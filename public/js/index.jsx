import React, { Component } from "react";
import ReactDOM from "react-dom";

const SearchBar =()=> ({ 
  render(){ return(
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="input-group">
                  <input type="text" name="search" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                                  <button className="btn btn-secondary" type="submit"> { this.value = "Go!" }
                                  </button>
                              </span>

              </div>
          </div>
      </div>
  );
  }
}); 

var Index =()=> ({ 
  render() {
      return( 
          <form action={ this.props.action } method={ this.props.method }>
          < SearchBar />
          </form>
      );
      
  }
});
// ReactDOM.render(
//         <Index action="/list" method="GET" />, document.getElementById('root'));

export default Index;
module.hot.accept();
