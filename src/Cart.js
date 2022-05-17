import React from "react";

class birbCart extends React.Component{
    birbsadopted = (adoptBirbs, remItem) => {
        return adoptBirbs.map((adoptedBirb, ind) => {
            return (
                <li key={ind}>
                    {adoptedBirb.name} ${adoptedBirb.amount}
                    <button onClick={() => {
                        remItem(adoptedBirb.id);
                    }}>
                        Remove
                    </button>
                </li>
            )
        });
    }
}


