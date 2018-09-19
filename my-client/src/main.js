import React from 'react'
import './custom.css'
import {Link} from 'react-router-dom'
export const Main=(props)=>(
<div className="container">
<div className="menu">
<ul>
<li><Link style={{"textDecoration":"none"}} to = '/'>My App</Link></li>
<li><Link style={{"textDecoration":"none"}} to = '/hello'>Hello</Link></li>
<li><Link style={{"textDecoration":"none"}} to = '/socket-view'>Socket Test</Link></li>
</ul>
</div>
<div className="item">
{props.children}
</div>
</div>
)