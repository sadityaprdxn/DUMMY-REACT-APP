import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <section className="counters">
                <div className="wrapper">
                    <ul>
                        <Li target = "25"/>
                        <Li target = "205"/>
                        <Li target = "25465"/>
                        <Li target = "2524"/>
                    </ul>
                </div>
            </section>
        );
    }
}

class Li extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value : 0
      }
    }
  
    runCounter() {
      
      this.setState(
          (prevState) => {
              return (
                  {
                      value : prevState.value + 1
                  }
              )
          } ,
          () => {
          if ( this.state.value  <  parseInt(this.props.target)) {
                  setTimeout( () => this.runCounter(), 50);
              }
          }
      )
    }

    render() {
        return(
            <li>
                <span className="counter" onClick={() => this.runCounter()} data-current="0" data-target="24">{this.state.value}</span>
                <span>click the number</span>
            </li>
        )
    }
}

export default Counter;
