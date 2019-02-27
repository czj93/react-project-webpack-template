function combineReducers(reducers){
	return function(state = {},action){ //state={}这里赋了{}，只是为了兼容state[attr]不报错
    	let newState = {};
        for(let attr in reducers){
    	    let reducer = reducers[attr];
            newState[attr] = reducer(state[attr],action); //state[attr]可能为undefined，我们一般会在每个reducer里赋一个initState的初始值
        }
        return newState;
    }
}


export default combineReducers({
    
})