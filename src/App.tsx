import React from 'react'
import logo from './logo.svg'
import './App.css'
import Message from './Message'

class App extends React.Component<any> {
    componentDidMount() {
        console.log('The App component mounted as expected!')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Message message="welcome to TypeScript Universe!!" name='Ezekiel'/>
                </header>
            </div>
        )
    }
}

export default App
