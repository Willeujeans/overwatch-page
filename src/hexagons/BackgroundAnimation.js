import React, { PureComponent } from 'react'
import HexHolder from './HexHolder';

export default function BackgroundAnimation() {
    let hexHolderArray = [];
    function createHexagons(){
        for(let x =0; x< 15; x++){
            if(x%2===0){
            hexHolderArray[x] =<HexHolder prop={0} key={x}/>;
            }else{
            hexHolderArray[x] = <HexHolder prop={50} key={x}/>;
            }
        }
            return(
                hexHolderArray
            );
    }
    createHexagons();
    return(
        <div className="backgroundHexagons">
            <div className="wallContainer">
            <div className="whiteWall"></div>
            </div>
            <div className="AlignToCenter">
            {createHexagons()}
            </div>
        </div>
    );
}