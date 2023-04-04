import React, { PureComponent } from 'react'
import HexagonElm from './Hexagon';

export default function HexHolder({prop}) {
    let hexAmount = [];
    function createHexagons(){
        console.log(prop+"px");
        for(let x =0; x < 25; x++){
            hexAmount[x] = <HexagonElm key={x}/>;
        }
            return(
                hexAmount
            );
    }
    return(
            <div style={{marginLeft: prop+"px"}} className="hexHolder">
                {createHexagons()}
            </div>
    );
}