import react from "react";
import reactDom from "react-dom";
function App() {
  return (
    <div className = 'Hero'>
  <label className = 'names' for= "CUSTOMER">NAME
      <input type ="search" name= 'CUSTOMER' ></input>
    </label><label for= "ID">PROPERTY ID
      <input type ="search" name= 'ID' ></input>
    </label><label for= "AREA">PROPERTY AREA
      <input type ="search" name= 'property' ></input>
    </label>
    <label for= "AGENT">AGENT NAME
      <input type ="search" name= 'AGENT' ></input>
    </label>
    </div>
  );
}

export default App;
