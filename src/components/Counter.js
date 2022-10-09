import React, { Component } from 'react'
import { connect} from 'react-redux'
export class Counter extends Component {
  incrementHandler=()=>{
    this.props.increment();
  }
  decrementHandler=()=>{
    this.props.decrement();
  }
  resetHandler=()=>{
    this.props.reset();
  }
  render() {
    return (
      <div className='counter'>
        <div className="counter-val">
            <h1>{this.props.counter}</h1>
        </div>
        <div className="counter-info">
            <div className="steps">
              <h1>Steps</h1>
              <div className="buttons">
                <button>5</button>
                <button>10</button>
                <button>15</button>
              </div>
            </div>
            <div className="max-steps">
                <h1>Max Value</h1>
                <div className="buttons">
                  <button>15</button>
                  <button>100</button>
                  <button>200</button>
                </div>
            </div>
        </div>
        <div className="counter-methods">
          <div className="buttons">
            <button onClick={this.incrementHandler}>increment</button>
            <button onClick={this.decrementHandler}>decrement</button>
            <button onClick={this.resetHandler}>reset</button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    counter:state.counter,
    maxValue:state.maxValue
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  increment:()=>{
    dispatch({type:"increment"});
  },
  decrement:()=>{
    dispatch({type:"decrement"});
  },
  reset:()=>{
    dispatch({type:"reset"});
  }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);