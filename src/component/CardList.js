import React from "react";
import Card from "./Card"
export default ({ robots,searchField }) => {
    return (
        <div>
            {robots.map((user, i) => {
               
                    return (<Card
                        key={i}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                    />)
                
               
            }
            )}
            </div>
    )}