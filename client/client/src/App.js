import React, { Component } from 'react';
import './App.css';


//puttinfg it out on the page

class App extends Component {

    //creating a state to impor data from database
    constructor(props) {
        super(props);
        this.state={
            tickets: [],
        };
        this.ticketData();
    }
    // function to return data from state
    ticketData(){
        fetch('/')
            .then(data =>
            {
                console.log(data);
                return data.json();
            })
            .then(returnedData => this.setState({tickets: returnedData}));
    }


  render() {
        //mapping the data to organize on page
      const ticketMappedData = this.state.ticket.map((eachElement, index)=>{
          return(<div key={index}>
              <p>{eachElement.ticket_person_reporting}</p>
              <p>{eachElement.ticket_problem_description}</p>
              <p>{eachElement.ticket_date}</p>
              <hr/>
          </div>)
      });
    return (
        //calling the app
      <div className="App">
        <header className="App-header">
            {ticketMappedData}

        </header>
      </div>
    );
  }
}

export default App;
