import React from 'react';
import '../css/specifics.css';

let globalTitleData;
let globalTextData;

const Specifics = (props) => {

    setData(props.specificSelection);

    return (

        //----------

        <div>

            <div id="centering-div">
                <div id="cont-1">

                    <div id="title-cont">
                        <h1>{globalTitleData}</h1>
                        <p>{globalTextData}</p>
                    </div>
                    <span id="divide-span"></span>
                    <div id="explore-cont-outer">
                        <h2>Explore</h2>
                        <div id="explore-cont-inner">
                            <h4><a href="https://www.wisegoals.com/house-goals.html">House Goals</a></h4>
                            <h4><a href="https://www.realhomes.com/us/advice/how-to-prepare-your-house-for-renovation">Home Renovation</a></h4>
                            <h4><a href="https://www.bankrate.com/real-estate/flipping-houses/">House Flipping</a></h4>
                        </div>
                    </div>

                </div>


                <div id="example-cont-overall">
                    <div id="separator-cont">
                        <span></span>
                        <h2>Suggestions</h2>
                        <span></span>
                    </div>
                    <div id="the-suggestions">
                        <div id="suggestions-achievements">
                        </div>
                        <div id="suggestions-habits">
                        </div>
                    </div>
                    <div id="space-footer"></div>
                </div>

            </div>

        </div>

        //----------
    )


}

function setData(switchVal) {
    switch (switchVal) {
        case 0:
            globalTitleData = "Your Room";
            globalTextData = "Lots of text about room";
            break;
        case 1:
            globalTitleData = "Your House";
            globalTextData = "Lots of text about house";
            break
        case 2:
            globalTitleData = "Your Life";
            globalTextData = "Lots of text about life";
            break
        default:
            globalTitleData = "Loading from database";
            globalTextData = "Page data will load shortly (we hope)";
            break;
    }
}

export default Specifics;