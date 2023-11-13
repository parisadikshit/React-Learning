import React,{Component} from "react";
import LifeCycle from "./lifecycle";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLifeCycle:false
    }
    console.log('Constructor is called', new Date().toLocaleTimeString());
  }
  
  toggleShowLifeCycle = () => {
    this.setState((prevState)=> ({
      showLifeCycle:!prevState.showLifeCycle
    }))
  }
  render(){
    const {showLifeCycle} = this.state;
    return (
      <>
      <h1> Main App Component</h1>
      <button onClick={this.toggleShowLifeCycle}>Show LifeCycle Methods</button>
      <p>In this example, clicking the "Show LifeCycle Methods" button will conditionally render or unrender the Lifecycle component, which leads to the unmounting and mounting sequence.</p>
      {showLifeCycle?<LifeCycle/>:<div>No data found</div>}
      </>
    )
  }

}

export default App;