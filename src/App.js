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
    mainContent: <MainPage />
  }

  homeClicked = () => {
    console.log("home clicked");
    this.setState({
      mainContent: <MainPage />
    })
  }

  trackerClicked = (values) => {
    console.log("tracker clicked");
    this.setState({
      mainContent: <Tracker
        uncheckedGoals={values[1]}
        checkedGoals={values[2]}
        uncheckedHabits={values[0]}
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

    // Testing data
    let UG = [
      <ImprovementItem
        id={1}
        divState="achieve"
        //circleState="unchecked"
        itemName="Goal"
      />
    ]

    let CG = [
      <ImprovementItem
        id={2}
        divState="achieved"
        //circleState="unchecked"
        itemName="Goaled"
      />
    ]

    let UH = [
      <ImprovementItem
        id={3}
        divState="achieve-habit"
        //circleState="unchecked"
        itemName="Habit"
      />
    ]

    let CH = [
      <ImprovementItem
        id={4}
        divState="achieved-habit"
        //circleState="unchecked"
        itemName="Habited"
      />
    ]

    let allItems = [UH, UG, CG, CH];

    return (
      <div>
        <div id="view-height-max">
          <Header
            name={this.state.name}
            isLoggedIn={this.state.isLoggedIn}
            loginClicked={() => this.loginClicked()}
            trackerClicked={() => this.trackerClicked(allItems)}
            homeClicked={() => this.homeClicked()}
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
