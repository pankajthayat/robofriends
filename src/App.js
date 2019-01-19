import React , { Component }from "react";
import CardList from "./CardList";
import { robots } from "./robots"
import SearchBox from "./SearchBox"

class App extends Component{
    state={
        robots:robots,
     searchField:""
    }
    onSearchChange=(e)=>{
        let searchField=e.target.value;
        let filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        this.setState({robots:filteredRobots,searchField})
    }
    render(){
        return(
            <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox  searchChange={this.onSearchChange}/>
            <CardList robots={this.state.robots} searchField={this.state.searchField}/>
            </div>
            
        )
    }

}

export default App;