import React from "react";
import Card from "./Card"
export default ({robots})=>{
    const cardComponent=robots.map((user,i)=>{
        return(<Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
    })

    return(
cardComponent

    )

}