import React from 'react'
import socketIOClient from "socket.io-client";
import {Main} from '../main'
import './assest/css/custom.css'

export default class View extends React.Component{
    constructor(){
        super()
        this.state={
            timestamp: [],
            endpoint: "http://localhost:4001"
        }
    }

        componentDidMount(){
            const { endpoint } = this.state;
            const socket = socketIOClient(endpoint);
            socket.on("FromApi", data => this.setState({ timestamp: data }));
        }
    

    render(){
        const {timestamp} = this.state
        return(
       <Main>
        <aside className="asideLeft">
        <ul className="sidebar-menu tab-content accordion" data-widget="tree" id="accordionExample">
          <li id="otc" className="tab-pane active">
            <h2 type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="fa"><span>OTC</span></h2>
            <div id="collapseOne" className="collapse in" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="searchSecHolder">      			
                <div className="searcHolder">
                  <input type="text" placeholder="Search" />
                  <i className="fa fa-search" aria-hidden="true" />
                </div>
                <div className="selectHolder">
                  <div>
                    <select>
                      <option value={0}>ANY</option>
                      <option value={1}>USD</option>
                      <option value={2}>BTC</option>
                      <option value={3}>ETH</option>
                      <option value={4}>JPY</option>
                    </select>
                  </div>
                </div>
              </div>
              <div id="content-1" className="pmd-scrollbar mCustomScrollbar">      		
                <table width="100%" border={0}>
                 <tbody>
                  {timestamp.length && timestamp.map((x,i)=>
                      <tr key={i}>
                      <td><i className="fa fa-star"/></td>
                      <td><img src={`https://zecoex.com/images/icons/${x.cSymbol}.png`} alt="coin symbol" className="iconswidth"/></td>
                      <td>{x.cSymbol}</td>
                      <td><span className="amnt green">{x.last} <span>USD</span></span></td>      
                    </tr> 
                    )}

                    {/*<tr>
                       <td><i className="fa fa-star" /></td>
                      <td><img src={"https://zecoex.com/images/icons/ETHOS.png"} className="iconswidth" /></td>
                      <td>ETHOS</td>
                      <td><span className="amnt red">{x.last}<span>USD</span></span></td>      
                    </tr> 
                    <tr>
                      <td><i className="fa fa-star" /></td>
                      <td><img src={"https://zecoex.com/images/icons/HUR.png"} className="iconswidth" /></td>
                      <td>HUR</td>
                      <td><span className="amnt red">{x.last}<span>USD</span></span></td>      
                    </tr> 
                    <tr>
                      <td><i className="fa fa-star" /></td>
                      <td><img src={"https://zecoex.com/images/icons/NANO.png"} className="iconswidth" /></td>
                      <td>NANO</td>
                      <td><span className="amnt green">{x.last}<span>USD</span></span></td>      
                    </tr> 
                    <tr>
                      <td><i className="fa fa-star" /></td>
                      <td><img src={"https://zecoex.com/images/icons/SPANK.png"} className="iconswidth" /></td>
                      <td>SPANK</td>
                      <td><span className="amnt green">{x.last}<span>USD</span></span></td>      
                    </tr>    */}
                    {/* <tr>
                      <td><i className="fa fa-star" /></td>
                      <td><img src={"https://zecoex.com/images/icons/ZEC.png"} className="iconswidth" /></td>
                      <td>ZEC</td>
                      <td><span className="amnt green">1.00567 <span>USD</span></span></td>      
                    </tr>   
                    <tr>
                      <td><i className="fa fa-star" /></td>
                      <td><img src={"https://zecoex.com/images/icons/ZEC.png"} className="iconswidth" /></td>
                      <td>ZEC</td>
                      <td><span className="amnt green">1.00567 <span>USD</span></span></td>      
                    </tr>    */}
                  </tbody>
                  </table>
              </div>
            </div>
          </li>	
        </ul>
      </aside>
       </Main>
        )
    }
}