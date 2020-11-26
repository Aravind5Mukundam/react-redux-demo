const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return{
        type: BUY_CAKE,
        payload: cake
        
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        payload: iceCreams
        
    }
}

const initialState ={
    cake : [
        {
            name:'Strawberry Delight',
            id:1,
            price: 200,
            flavour: "Strawberry"
        },
        {
            id:2,
            name:"Chocolate Heaven",
            price: 400,
            flavour: "Dark Chocolate"
        },
        {
            id:3,
            name:"White  walker",
            price: 500,
            flavour: "Vaniila + berry"
         }
    ],
    iceCreams: [
        {
            name:'African Delight',
            id:1,
            price: 120,
            flavour: "Butter Scotch"
    },
        {
            id:2,
            name:"Creamstone",
            price: 140,
            flavour: "Dark Chocolate"
    },
        {
            id:3,
            name:"Brown Bread",
            price: 500,
            flavour: "Vaniila + Grape nuts"
    }
    ]
    
    
}

const reducer = (state = initialState, action) => {
    switch(action.ttype){
        case BUY_CAKE: return{
            ...state,
            cake: state.payload
        }

        case BUY_ICECREAM: return{
            ...state,
            iceCreams: state.payload
        }
         
        default: return state
    }
}

const cakeAction = (id) =>{
    const cake = initialState.cake.filter(element => element.id !== id);
    return buyCake(cake);
}

const iceCreamAction = (id) =>{
    const iceCreams = initialState.iceCreams.filter(element => element.id !== id);
    return buyIceCream(iceCreams);
}




const store = createStore(reducer)
console.log('initial  state',store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()) );
store.dispatch(cakeAction(1))
store.dispatch(cakeAction(3))
store.dispatch(iceCreamAction(2))
unsubscribe();
