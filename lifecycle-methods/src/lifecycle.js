import React,{Component} from "react";

class LifeCycle extends Component {
  constructor(props){
    super(props);

    // initializing the state
    this.state = {
      data:null,
      loading:true,
      count:0
    };
    console.log('Constructor is called', new Date().toLocaleTimeString());
  }

  componentDidMount(){
    // fetching the data after the component is mounted

    setTimeout(()=> {
      this.setState({
        data:'Hello there!',
        loading:false
      })
      console.log('Data is fetched, component is mounted', new Date().toLocaleTimeString())
    },2000)
    console.log('Component did mount',new Date().toLocaleTimeString())
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update',new Date().toLocaleTimeString());
  }

  componentWillUnmount() {
    console.log('Component will unmount',new Date().toLocaleTimeString());
  }

  handleClick = () => {
    this.setState((prevState)=> (
      {
        count: prevState.count +1
      }
    ))
  }


  render(){
    const {data, loading, count} = this.state;
    return (
      <div>
        <h1>Component LifeCycle Methods</h1>
        {loading ? <p>Loading...</p> : <p>Data: {data}</p>}
        <h3> Count: {count}</h3>
        <button onClick={this.handleClick}>Increment count</button>
      </div>
    )
  }
}
export default LifeCycle;
