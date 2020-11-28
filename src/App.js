import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer />
        <HooksIceCreamContainer/>
        <CakeContainer/>
        <IceCreamContainer/> 
        <NewCakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
