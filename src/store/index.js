import { createStore } from "redux";
const counterReducer=(state={counter:0,maxValue:10,steps:1},action)=>{
if(action.type==="increment"){
    return {...state,
        counter:(state.counter+1<=state.maxValue)?(state.counter+state.steps):(state.maxValue),
        // maxValue:state.maxValue

    }
}
if(action.type==="decrement"){
    return {
        ...state,
        counter:(state.counter-1>=0)?(state.counter-state.steps):(0),
        // maxValue:state.maxValue
    }
}
if(action.type==="reset"){
    return {...state,
        counter:0,
        steps:1
        // maxValue:state.maxValue
    }
}
return state;
}
const store=createStore(counterReducer);
export default store;
