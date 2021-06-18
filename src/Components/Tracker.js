import React from 'react';

import './ImprovementItem';
import '../css/tracker.css';
import ImprovementItem from './ImprovementItem';

/*
Data Management Scheme

   Intent
    - Reduce number of component operations
    - Remove data handling from view rendering

   In this component, we are simply calling the ImprovementItem (II) component,
   and passing it the proper props. However, this means the tracker props must also include this.
   Furthermore, this className determines how many II props will render, meaning we need a map method,
   and something that can be iterated over. We must also be sure that the values we want to pull from it
   actually exist.

   So, we will have the calling component pass us an II component. Then this component
   can handle the formatting, reducing what the parent component must do, and keeping
   the data handling separate.
*/

const Tracker = (props) => {


    console.log(props.uncheckedGoals);
    // Unchecked Goals
    let uncheckedGoals = (

        props.uncheckedGoals.map((id, circleState, goalName, divState, index) => {
            return <ImprovementItem
                id={id}
                divState={divState}
                circleState={circleState}
                itemName={goalName}
                key={index}
            />
        })

    );
    // Checked Goals
    let checkedGoals = (
        props.checkedGoals.map((id, circleState, goalName, divState, index) => {
            return <ImprovementItem
                id={id}
                divState={divState}
                circleState={circleState}
                itemName={goalName}
                key={index}
            />
        })
    );
    // Unchecked Habits
    let uncheckedHabits = (
        props.uncheckedHabits.map((id, circleState, goalName, divState, index) => {
            return <ImprovementItem
                id={id}
                divState={divState}
                circleState={circleState}
                itemName={goalName}
                key={index}
            />
        })
    );
    // Checked Habits
    let checkedHabits = (
        props.checkedHabits.map((id, circleState, goalName, divState) => {
            return <ImprovementItem
                divState={divState}
                circleState={circleState}
                itemName={goalName}
                key={id} // This is IMPORTANT
            /*
            We will be deleting, reodering, changing, and moving these guys all over the entire website.
            If we associate the key with the unique id from the database, react will not only know precisely what
            to re-render, it may even simplify our work in the future as every visible instance of an II also
            contains data mapping it right into our database
            */
            />
        })
    );
    return (
        <div>

            <div id="percent-better-cont">
                <h1 id="percent-better-h1">{props.percent}</h1>
                <span></span>
                <p id="better-txt"><em>Better Than Before</em></p>
            </div>

            <div id="flex-cont">
                <div id="advance-the-day">
                    <h4>Finish the day!</h4>
                </div>
            </div>

            <div id="tracker-boxes-cont">

                <div id="new-achievements-cont">
                    <h2>New Achievements</h2>
                    <span className="separator"></span>
                    <p className="plus">+</p>

                    {uncheckedGoals}

                    <div className="complete-bar">
                        <span></span>
                        <p><em>Completed Total</em></p>
                        <span></span>
                    </div>

                    {checkedGoals}

                </div>

                <div id="excellent-habits-cont">
                    <h2>Excellent Habits</h2>
                    <span className="separator"></span>
                    <p className="plus">+</p>

                    {uncheckedHabits}

                    <div className="complete-bar">
                        <span></span>
                        <p><em>Completed Today</em></p>
                        <span></span>
                    </div>

                    {checkedHabits}

                </div>
            </div>
        </div>
    )
}

export default Tracker;