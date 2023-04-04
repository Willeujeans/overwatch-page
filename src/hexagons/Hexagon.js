import React, { PureComponent } from 'react'
import HexagonImage from '../images/hexagon.png';

export default function HexagonElm() {
    return(
        <img className="HexImage" src={HexagonImage}/>
        // <div className="hexagon">
        //     <div className="hex hexSquare1"></div>
        //     <div className="hex hexSquare2"></div>
        //     <div className="hex hexSquare3"></div>
        // </div>
    );}