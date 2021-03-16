import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store/store";
import './styles/style.scss';
import Header from "./components/Header/Header.jsx";
import Forms from "./components/Forms/Forms.jsx";
import DataAlert from "./components/DataAlert/DataAlert.jsx";

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

function App() {
    return (
        <div className='app'>
            <div className="container">
                <Header />
                <Forms />
                <DataAlert />
            </div>
        </div>
    )
}

render(app, document.getElementById('root'));