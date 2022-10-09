import { createStore } from "redux";
const counterReducer=(state={counter:0,maxValue:0,steps:1},action)=>{
if(action.type==="increment"){
    return {...state,
        counter:(state.counter+state.steps<=state.maxValue)?(state.counter+state.steps):(state.maxValue),
        // maxValue:state.maxValue

    }
}
if(action.type==="decrement"){
    return {
        ...state,
        counter:(state.counter-state.steps>=0)?(state.counter-state.steps):(0),
        // maxValue:state.maxValue
    }
}
if(action.type==="reset"){
    return {...state,
        counter:0,
        steps:1,
        maxValue:0
        // maxValue:state.maxValue
    }
}
if(action.type==="setStep"){
    return {
        ...state,
        steps:action.increaseBy
    }
}
if(action.type==="setMaxValue"){
    return {
        ...state,
        maxValue:action.limit
    }
}
return state;
}
const store=createStore(counterReducer);
export default store;
