import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import Tracker from './Components/Tracker';
import ImprovementItem from './Components/ImprovementItem';
import SpecificsPage from './Components/Specifics';

import AccountPage from './Components/AccountPage';

class App extends Component {

  state = {
    isLoggedIn: false,
    name: "",
    itemsArray:
    [
      [
        <ImprovementItem
          id={1}
          divState="achieve"
          //circleState="unchecked"
          itemName="Goal"
        />
      ],
      [
        <ImprovementItem
          id={2}
          divState="achieved"
          //circleState="unchecked"
          itemName="Goaled"
        />
      ],
      [
        <ImprovementItem
          id={3}
          divState="achieve-habit"
          //circleState="unchecked"
          itemName="Habit"
        />
      ],
      [
        <ImprovementItem
          id={4}
          divState="achieved-habit"
          //circleState="unchecked"
          itemName="Habited"
        />
      ]
    ],
    mainContent: 
      <MainPage
      trackerClicked={() => this.trackerClicked(this.state.itemsArray)}
      />
  }

  homeClicked = (values) => {
    console.log("home clicked");
    this.setState({
      mainContent: <MainPage 
      trackerClicked={() => this.trackerClicked(values)}/>
    })
  }

  trackerClicked = (values) => {
    console.log("tracker clicked");
    this.setState({
      mainContent: <Tracker
        uncheckedGoals={values[0]}
        checkedGoals={values[1]}
        uncheckedHabits={values[2]}
        checkedHabits={values[3]}
        percent={12.5}
      />
    })
  }

  specificsClicked = (selection) => {
    console.log(selection);
    this.setState({
      mainContent: <SpecificsPage
        specificSelection={selection}
      />
    })
  }

  loginClicked = () => {
    console.log("login clicked");
    this.setState({
      name: "Drew",
      isLoggedIn: true
    })
  }

  accountPageClicked = () => {
    this.setState({
      mainContent: <AccountPage
      />
    })
  }

  render() {

    return (
      <div>
        <div id="view-height-max">
          <Header
            name={this.state.name}
            isLoggedIn={this.state.isLoggedIn}
            loginClicked={() => this.loginClicked()}
            trackerClicked={() => this.trackerClicked(this.state.itemsArray)}
            homeClicked={() => this.homeClicked(this.state.itemsArray)}
            specHomeClicked={() => this.specificsClicked(0)}
            specHouseClicked={() => this.specificsClicked(1)}
            specLifeClicked={() => this.specificsClicked(2)}
            accountPageClicked={() => this.accountPageClicked()}
          />

          {this.state.mainContent}
        </div>
      </div>
    );
  }
}

export default App;
