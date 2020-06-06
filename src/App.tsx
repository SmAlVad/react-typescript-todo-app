import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import TodosPage from './pages/TodosPage'
import About from './pages/About'

function App() {

    return (
        <Router>
            <Navbar/>
            <div className="container py-1">
                <Switch>
                    <Route exact path="/" component={TodosPage}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
