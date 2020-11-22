import CakeContainer from "../../components/CakeContainer"

const { BUY_CAKE } = require("./CakeTypes")

const initialState ={
    numOfCakes:10
}

const CakeReducer =(state = initialState,action)=>{
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
}
export default CakeReducer;