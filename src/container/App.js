import React , { Component }from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox"
import "./app.css"
import Scroll from "../component/Scroll"
class App extends Component{
    state={
        robots:[],
     searchField:""
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
          // console.log(response.json())
           return response.json();
        })
        .then(users=>{
            console.log(users)
            this.setState({robots:users})
        })
    }
    onSearchChange=(e)=>{
        let searchField=e.target.value;
        let filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        this.setState({robots:filteredRobots,searchField})
    }

    render(){
        
        
            return(!(this.state.robots.length))? <h1>Loading...</h1>:(
                <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox  searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={this.state.robots} searchField={this.state.searchField}/>
                </Scroll>
                </div>
                
            )
        }

    

}

export default App;