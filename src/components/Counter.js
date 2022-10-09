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
  stepHandler=(e)=>{
    let selectedStep=Number(e.target.innerText);
    this.props.setStep(selectedStep);
  }
  maxValueHandler=(e)=>{
    let selectedMaxValue=Number(e.target.innerText);
    this.props.setMaxValue(selectedMaxValue);
  }
  changeStylesSet=(number)=>{
    if(this.props.steps===number){
      return {backgroundColor:'dodgerblue',color:'#fff'}
    }
    else{
      return {}
    }
  }
  changeStylesMax=(number)=>{
    if(this.props.maxValue===number){
      return {backgroundColor:'dodgerblue',color:'#fff'}
    }
    else{
      return {}
    }
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
                <button style={this.changeStylesSet(5)} onClick={this.stepHandler}>5</button>
                <button style={this.changeStylesSet(10)} onClick={this.stepHandler}>10</button>
                <button style={this.changeStylesSet(15)} onClick={this.stepHandler}>15</button>
              </div>
            </div>
            <div className="max-steps">
                <h1>Max Value</h1>
                <div className="buttons">
                  <button style={this.changeStylesMax(15)} onClick={this.maxValueHandler}>15</button>
                  <button style={this.changeStylesMax(100)} onClick={this.maxValueHandler}>100</button>
                  <button style={this.changeStylesMax(200)} onClick={this.maxValueHandler}>200</button>
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
    maxValue:state.maxValue,
    steps:state.steps
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
  },
  setStep:(selectedStep)=>{
    dispatch({type:"setStep",increaseBy:selectedStep});
  },
  setMaxValue:(selectedMaxValue)=>{
    dispatch({type:"setMaxValue",limit:selectedMaxValue});
  }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);