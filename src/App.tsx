import React from 'react'
import logo from './logo.svg'
import './App.css'
import Message from './Message'

const initialState = {
    name: 'Ezekiel',
    message: 'TypeScript is cool'
}

type State = Readonly<typeof initialState>

const messageHoc = (WrappedComponent: any) => {
    class HOC extends React.Component<{}, State> {
        readonly state: State = initialState

        render() {
            return (
                <WrappedComponent name={this.state.name} message={this.state.message} />
            )
        }
    }
}

class App extends React.Component<any, State> {
    readonly state: State = initialState

    componentDidMount() {
        console.log('The App component mounted as expected!')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Message message={this.state.message} name={this.state.name} />
                </header>
            </div>
        )
    }
}

export default App
