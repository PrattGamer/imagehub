import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login/main.jsx';


class App extends React.Component {
    render(){
        return(
            <main>

            <Login/>
            

            </main>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));