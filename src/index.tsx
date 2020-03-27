import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/browser'

import App from './App'

class ErrorWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error })
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key])
            })
            Sentry.captureException(error)
        })
    }

    render() {
        if (this.state.error) {
            return <p>Whoops - Something went wrong.</p>
        } else {
            return this.props.children
        }
    }
}

ReactDOM.render(
    <ErrorWrapper>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorWrapper>,
    document.getElementById('root')
)  