import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header, Navigation, Home, About} from './components'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default App