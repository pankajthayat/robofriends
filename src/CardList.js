import React from "react";
import Card from "./Card"
export default ({robots})=>{
    const cardComponent=robots.map((user,i)=>{
        return(<Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
    })
    const x=[<Card />,<Card/>]
    const y=[1,2,3]
    return(
cardComponent
//x
    )

}