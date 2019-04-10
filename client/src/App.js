import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/navbar';
import ShoppingList from './components/shoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/addItemModal';
import {Container} from 'reactstrap';

class App extends Component {
  // TODO: Try to refactor all components into different UI library other than Bootstrap
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar />
                <Container>
                    <ItemModal/>
                    <ShoppingList/>
                </Container>
            </div>
        </Provider>
    );
  }
}

export default App;
