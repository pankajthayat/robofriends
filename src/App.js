import React , { Component }from "react";
import CardList from "./CardList";
import { robots } from "./robots"
import SearchBox from "./SearchBox"
import "./app.css"
import Scroll from "./Scroll"
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
        let filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        this.setState({robots:filteredRobots,searchField})
    }

    render(){
        if(this.state.robots.length==0)
        {
            return <h1>Loading...</h1>;
        }
        else{
            return(
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

}

export default App;