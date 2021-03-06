import React from 'react'

const initialState = {
    name: 'Ezekiel',
    message: 'HoC is cool!!'
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

    return HOC
}

export default messageHoc
