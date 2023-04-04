import React, { PureComponent } from 'react'
import blizzardLogo from './images/Blizzard-Logo.png';
import OverwatchLogo from './images/OverwatchLogo.png';
import SearchLogo from './images/searchIcon.png';
import AccountLogo from './images/userIcon.png';

export default function HeaderElm({prop}) {
    return(
        <div className="HeaderElm">
            <div className="LinkContainer">
                <div className="WhiteSquare">
                    <img className="BlizzardLogo" src={blizzardLogo}/>
                </div>
                <img className="OverwatchLogo MarginLeft" src={OverwatchLogo}/>
                <a href="#" className="Link">Game Info</a>
                <a href="#" className="Link">Heros</a>
                <a href="#" className="Link">Seasons</a>
                <a href="#" className="Link">News</a>
                <a href="#" className="Link">Community</a>
                <a href="#" className="Link">Shop</a>
                <div className="RightSide">
                    <a href="#" className="Link"><img className="SearchLogo" src={SearchLogo}/></a>
                    <a href="#" className="Link"><img className="SearchLogo" src={AccountLogo}/>Account</a>
                    <a href="#" className="Link OrangeButton">Play Now</a>
                </div>
            </div>
        </div>
    );
}