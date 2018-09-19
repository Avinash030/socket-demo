import React from 'react'
import {Route} from 'react-router-dom'
import App from './App'
import Hello from './hello'
import Socket from './socket/view2'
export const Root=()=>(
<div>
<Route exact path='/socket-view' component={Socket} />
<Route path='/hello' component={Hello} />
<Route exact path='/' component={App} />
</div>
)