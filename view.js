import React from 'react'
import socketIOClient from "socket.io-client";
import {Main} from '../main'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

export default class View extends React.Component{
    constructor(){
        super()
        this.state={
            timestamp: [],
            timestamp: false,
            endpoint: "http://localhost:4001"
        }
    }
        fiatChanger=(fiat_id)=>{
            switch(fiat_id){
                case "90" : return "INR";
                case "3" : return "ETH";
                case "88" : return "USDT";
                case "1" : return "BTC";
                case "141" : return "TUSD";
                case "125" : return "ACT"
                default : "Not found"
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
        <div>
            {/* <p>name: {timestamp.name}</p>
          {timestamp.bids && timestamp.bids.map(y=>(
              <p>rate: {y.rate}</p>
          ))} */}
          <div>
        <div className="telegram-bottom">
          <a href="https://t.me/zecoexfintech" target="blank">
            <img src="images/telegram-app.png" className="responsive" alt="Telegram Icon" />
          </a>
        </div>
        {/* <div class='popup'>
  <div class='cnt223'>
    <a href='' class='close'><img src="images/closebtn.png" alt="Zecoex Asia's Fastest Growing Crypto Asset Exchange "></a>
    <img src="images/iub.png" alt="Zecoex Asia's Fastest Growing Crypto Asset Exchange">
  </div>
</div> */}
        <div id="hed">
          <div className="animation-bg">
            <div className="row">
              <div className="col-md-3 col-xs-12 animated fadeInUpShort go">
                <span className="big-title"> Cryptocurrencies: <label id="#active_currency">00</label></span>
              </div>
              <div className="col-md-3 col-xs-12 animated fadeInUpShort go">
                <span className="big-title"> Market Cap: $<label id="total_market">00.0</label></span>
              </div>
              <div className="col-md-3 col-xs-12 animated fadeInUpShort go">
                <span className="big-title"> 24h Vol: $<label id="total_volume">00.0</label></span>
              </div>
              <div className="col-md-3 col-xs-12 animated fadeInUpShort go">
                <span className="big-title"> BTC Dominance: <label id="btc_domains">00.0%</label></span>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="header">
  <div class="main_container">
    <div class="logo">
      <a href="">
        <img alt="Zecoex" src="images/logo.png">
      </a>
    </div>
    <div class="head_right">
      <div class="login">
        <a href="https://www.tradedesk.zecoex.com/">Login</a>
        <a class="modal-btn active" href="signup.html">Sign Up</a>
        <a href="loyalty-reward.html">Loyalty Rewards</a>
        <a href="heluss-loyalty-reward.html">Heluss Loyalty Rewards</a>
        <a href="heluss-airdrop.html">Heluss Airdrop</a>
        <a href="heluss-contest.html">Heluss Contest</a>
      </div>
    </div>
    <marquee><strong style="color: #117DFE; text-transform: uppercase;">Heluss (HUT) Trading Contest at Zecoex starts from 10th Sept. 2018 to 17th Sept. 2018. For more info <a href="heluss-contest.html"><span style="color: #E90000;">click here</span></a></marquee> 
  </div>
</div> */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="logo">
            <a className="navbar-brand" href="#">
              <img alt="Zecoex" src={require("./images/logo.png")} />
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.tradedesk.zecoex.com/">Login</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="signup.html">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="p2p-sell.html">P2P Sell</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Crypto / Airdrop
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="zecoex-loyalty-reward.html">Zecoex Loyalty Rewards</a>
                  <a className="dropdown-item" href="heluss-loyalty-reward.html">Heluss Loyalty Rewards</a>
                  <a className="dropdown-item" href="heluss-airdrop.html">Heluss Airdrop</a>
                  <a className="dropdown-item" href="heluss-contest.html">Heluss Contest</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <marquee><strong style={{color: '#117DFE', textTransform: 'uppercase'}}>Heluss Airdrop event at Zecoex is going to start from 22nd Aug. 2018 to 7th Sep. 2018. For more info <a href="heluss-airdrop.html"><span style={{color: '#E90000'}}>click here</span></a></strong></marquee>
        <div className="homebanner">
          <div id="particles-js" />
          <div className="banner_content">
            <div className="main_container2">
              <div className="banner_content_l">
                <div className="t1">Asia<label>'</label>s most diversified <span><strong>Crypto Asset Exchange</strong></span></div>
              </div>
              <div className="banner_content_r">
                <div id="tabs" className="owl-carousel">
                  <div className="item">
                    <img alt="Crypto Currency Exchange in India" src={require("./images/banner/hut-contest.jpg")} className="icon1" />
                  </div>
                  <div className="item">
                    <img alt="Crypto Currency Exchange in India" src={require("./images/banner/loylty-rewards.jpg")} className="icon1" />
                  </div>
                  <div className="item">
                    <img alt="Crypto Currency Exchange in India" src={require("./images/banner/hut-act.jpg")} className="icon1" />
                  </div>
                  <div className="item">
                    <img alt="Crypto Currency Exchange in India" src={require("./images/banner/cryptocompare.jpg")} className="icon1" />
                  </div>
                  <div className="item">
                    <img alt="Crypto Currency Exchange in India" src={require("./images/banner/trade.jpg")} className="icon1" />
                  </div>
                  <div className="item">
                    <a href="p2p-sell.html">
                      <img alt="Crypto Currency Exchange in India" src={require("./images/banner/p2p.jpg")} className="icon1" />
                    </a>
                  </div>
                  <div className="item">
                    <img alt="Crypto Currency Exchange in India" src={require("./images/banner/referral.jpg")} className="icon1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coin_tabs">
          <div className="coin_tabs_top">
            <ul>
              <li><a href="javascript:void(0);" id="trade_market" className="active">Trade Markets</a></li>
              <li><a href="javascript:void(0);" id="inr_market">INR Markets</a></li>
              <li><a href="javascript:void(0);" id="usdt_market">USDT Markets</a></li>
              <li><a href="javascript:void(0);" id="btc_market">BTC Markets</a></li>
            </ul>
          </div>
          <div className="coin_details_main">
            <div className="coin_details active">
              <div className="main_container3">
        
                <div className="trade_table">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="currency">Market</th>
                          <th>Last Trade</th>
                          <th>24H Low</th>
                          <th>24H High</th>
                          <th>24H Volume</th>
                        </tr> 
                      </thead>
                      <tbody>
                      {timestamp.length && timestamp.map((x,i)=>(
                        <tr key={i}>
                          <td className="currency">
                            <div className="icon_img" id="AE_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/AGI/BTC">{`${x.currency_symbol}/${this.fiatChanger(x.fiat_id)}`}</a>
                          </td>
                          <td><div id="AE_trade1">{x.rate}</div></td>
                          <td><div id="AE_low24hr_trade1">{x.low24hr}</div></td>
                          <td><div id="AE_high24hr_trade1">{x.high24hr}</div></td>
                          <td><div id="AE_quoteVolume_trade1">{x.quoteVolume}</div></td>
                        </tr>
                         ))}

                        {/* <tr>
                          <td className="currency">
                            <div className="icon_img" id="AGI_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/AGI/INR">AGI / INR</a>
                          </td>
                          <td><div id="AGI_trade90">00</div></td>
                          <td><div id="AGI_low24hr_trade90">00</div></td>
                          <td><div id="AGI_high24hr_trade90">00</div></td>
                          <td><div id="AGI_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ANT_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ANT/BTC">ANT / BTC</a>
                          </td>
                          <td><div id="ANT_trade1">00</div></td>
                          <td><div id="ANT_low24hr_trade1">00</div></td>
                          <td><div id="ANT_high24hr_trade1">00</div></td>
                          <td><div id="ANT_quoteVolume_trade1">00</div></td>
                        </tr> */}
                        {/* <tr>
                  <td>
                    <div class="icon_img" id="BCD_trade1_image"></div>
                    <a href="https://www.tradedesk.zecoex.com/users/bid/BCD/BTC">BCD / BTC</a>
                  </td>
                  <td><div id="BCD_trade1">00</div></td>
                  <td><div id="BCD_low24hr_trade1">00</div></td>
                  <td><div id="BCD_high24hr_trade1">00</div></td>
                  <td><div id="BCD_quoteVolume_trade1">00</div></td>
                </tr> */}
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="BTC_trade141_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/BTC/TUSD">BTC / TUSD</a>
                          </td>
                          <td><div id="BTC_trade141">00</div></td>
                          <td><div id="BTC_low24hr_trade141">00</div></td>
                          <td><div id="BTC_high24hr_trade141">00</div></td>
                          <td><div id="BTC_quoteVolume_trade141">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="CFI_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/CFI/BTC">CFI / BTC</a>
                          </td>
                          <td><div id="CFI_trade1">00</div></td>
                          <td><div id="CFI_low24hr_trade1">00</div></td>
                          <td><div id="CFI_high24hr_trade1">00</div></td>
                          <td><div id="CFI_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="CMT_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/CMT/BTC">CMT / BTC</a>
                          </td>
                          <td><div id="CMT_trade1">00</div></td>
                          <td><div id="CMT_low24hr_trade1">00</div></td>
                          <td><div id="CMT_high24hr_trade1">00</div></td>
                          <td><div id="CMT_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="DAI_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/DAI/BTC">DAI / BTC</a>
                          </td>
                          <td><div id="DAI_trade1">00</div></td>
                          <td><div id="DAI_low24hr_trade1">00</div></td>
                          <td><div id="DAI_high24hr_trade1">00</div></td>
                          <td><div id="DAI_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="DCR_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/DCR/BTC">DCR / BTC</a>
                          </td>
                          <td><div id="DCR_trade1">00</div></td>
                          <td><div id="DCR_low24hr_trade1">00</div></td>
                          <td><div id="DCR_high24hr_trade1">00</div></td>
                          <td><div id="DCR_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="DRGN_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/DRGN/BTC">DRGN / BTC</a>
                          </td>
                          <td><div id="DRGN_trade1">00</div></td>
                          <td><div id="DRGN_low24hr_trade1">00</div></td>
                          <td><div id="DRGN_high24hr_trade1">00</div></td>
                          <td><div id="DRGN_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="DTH_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/DTH/BTC">DTH / BTC</a>
                          </td>
                          <td><div id="DTH_trade1">00</div></td>
                          <td><div id="DTH_low24hr_trade1">00</div></td>
                          <td><div id="DTH_high24hr_trade1">00</div></td>
                          <td><div id="DTH_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="EMC2_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/EMC2/BTC">EMC2 / BTC</a>
                          </td>
                          <td><div id="EMC2_trade1">00</div></td>
                          <td><div id="EMC2_low24hr_trade1">00</div></td>
                          <td><div id="EMC2_high24hr_trade1">00</div></td>
                          <td><div id="EMC2_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ENG_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ENG/BTC">ENG / BTC</a>
                          </td>
                          <td><div id="ENG_trade1">00</div></td>
                          <td><div id="ENG_low24hr_trade1">00</div></td>
                          <td><div id="ENG_high24hr_trade1">00</div></td>
                          <td><div id="ENG_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ENJ_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ENJ/BTC">ENJ / BTC</a>
                          </td>
                          <td><div id="ENJ_trade1">00</div></td>
                          <td><div id="ENJ_low24hr_trade1">00</div></td>
                          <td><div id="ENJ_high24hr_trade1">00</div></td>
                          <td><div id="ENJ_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ETH_trade141_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ETH/TUSD">ETH / TUSD</a>
                          </td>
                          <td><div id="ETH_trade141">00</div></td>
                          <td><div id="ETH_low24hr_trade141">00</div></td>
                          <td><div id="ETH_high24hr_trade141">00</div></td>
                          <td><div id="ETH_quoteVolume_trade141">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ETHOS_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ETHOS/INR">ETHOS / INR</a>
                          </td>
                          <td><div id="ETHOS_trade90">00</div></td>
                          <td><div id="ETHOS_low24hr_trade90">00</div></td>
                          <td><div id="ETHOS_high24hr_trade90">00</div></td>
                          <td><div id="ETHOS_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ETHOS_trade88_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ETHOS/USDT">ETHOS / USDT</a>
                          </td>
                          <td><div id="ETHOS_trade88">00</div></td>
                          <td><div id="ETHOS_low24hr_trade88">00</div></td>
                          <td><div id="ETHOS_high24hr_trade88">00</div></td>
                          <td><div id="ETHOS_quoteVolume_trade88">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="FCT_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/FCT/BTC">FCT / BTC</a>
                          </td>
                          <td><div id="FCT_trade1">00</div></td>
                          <td><div id="FCT_low24hr_trade1">00</div></td>
                          <td><div id="FCT_high24hr_trade1">00</div></td>
                          <td><div id="FCT_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="GAS_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/GAS/BTC">GAS / BTC</a>
                          </td>
                          <td><div id="GAS_trade1">00</div></td>
                          <td><div id="GAS_low24hr_trade1">00</div></td>
                          <td><div id="GAS_high24hr_trade1">00</div></td>
                          <td><div id="GAS_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="GDC_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/GDC/INR">GDC / INR</a>
                          </td>
                          <td><div id="GDC_trade90">00</div></td>
                          <td><div id="GDC_low24hr_trade90">00</div></td>
                          <td><div id="GDC_high24hr_trade90">00</div></td>
                          <td><div id="GDC_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="GXS_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/GXS/BTC">GXS / BTC</a>
                          </td>
                          <td><div id="GXS_trade1">00</div></td>
                          <td><div id="GXS_low24hr_trade1">00</div></td>
                          <td><div id="GXS_high24hr_trade1">00</div></td>
                          <td><div id="GXS_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HSR_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HSR/BTC">HSR / BTC</a>
                          </td>
                          <td><div id="HSR_trade1">00</div></td>
                          <td><div id="HSR_low24hr_trade1">00</div></td>
                          <td><div id="HSR_high24hr_trade1">00</div></td>
                          <td><div id="HSR_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HUR_trade3_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HUR/ETH">HUR / ETH</a>
                          </td>
                          <td><div id="HUR_trade3">00</div></td>
                          <td><div id="HUR_low24hr_trade3">00</div></td>
                          <td><div id="HUR_high24hr_trade3">00</div></td>
                          <td><div id="HUR_quoteVolume_trade3">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HUR_trade88_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HUR/USDT">HUR / USDT</a>
                          </td>
                          <td><div id="HUR_trade88">00</div></td>
                          <td><div id="HUR_low24hr_trade88">00</div></td>
                          <td><div id="HUR_high24hr_trade88">00</div></td>
                          <td><div id="HUR_quoteVolume_trade88">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HUT_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HUT/BTC">HUT / BTC</a>
                          </td>
                          <td><div id="HUT_trade1">00</div></td>
                          <td><div id="HUT_low24hr_trade1">00</div></td>
                          <td><div id="HUT_high24hr_trade1">00</div></td>
                          <td><div id="HUT_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HUT_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HUT/INR">HUT / INR</a>
                          </td>
                          <td><div id="HUT_trade90">00</div></td>
                          <td><div id="HUT_low24hr_trade90">00</div></td>
                          <td><div id="HUT_high24hr_trade90">00</div></td>
                          <td><div id="HUT_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HUT_trade125_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HUT/ACT">HUT / ACT</a>
                          </td>
                          <td><div id="HUT_trade125">00</div></td>
                          <td><div id="HUT_low24hr_trade125">00</div></td>
                          <td><div id="HUT_high24hr_trade125">00</div></td>
                          <td><div id="HUT_quoteVolume_trade125">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="HUT_trade141_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/HUT/TUSD">HUT / TUSD</a>
                          </td>
                          <td><div id="HUT_trade141">00</div></td>
                          <td><div id="HUT_low24hr_trade141">00</div></td>
                          <td><div id="HUT_high24hr_trade141">00</div></td>
                          <td><div id="HUT_quoteVolume_trade141">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="IOST_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/IOST/BTC">IOST / BTC</a>
                          </td>
                          <td><div id="IOST_trade1">00</div></td>
                          <td><div id="IOST_low24hr_trade1">00</div></td>
                          <td><div id="IOST_high24hr_trade1">00</div></td>
                          <td><div id="IOST_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="KMD_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/KMD/BTC">KMD / BTC</a>
                          </td>
                          <td><div id="KMD_trade1">00</div></td>
                          <td><div id="KMD_low24hr_trade1">00</div></td>
                          <td><div id="KMD_high24hr_trade1">00</div></td>
                          <td><div id="KMD_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="KNC_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/KNC/BTC">KNC / BTC</a>
                          </td>
                          <td><div id="KNC_trade1">00</div></td>
                          <td><div id="KNC_low24hr_trade1">00</div></td>
                          <td><div id="KNC_high24hr_trade1">00</div></td>
                          <td><div id="KNC_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="LOOM_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/LOOM/BTC">LOOM / BTC</a>
                          </td>
                          <td><div id="LOOM_trade1">00</div></td>
                          <td><div id="LOOM_low24hr_trade1">00</div></td>
                          <td><div id="LOOM_high24hr_trade1">00</div></td>
                          <td><div id="LOOM_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="MAID_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/MAID/BTC">MAID / BTC</a>
                          </td>
                          <td><div id="MAID_trade1">00</div></td>
                          <td><div id="MAID_low24hr_trade1">00</div></td>
                          <td><div id="MAID_high24hr_trade1">00</div></td>
                          <td><div id="MAID_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="MKR_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/MKR/BTC">MKR / BTC</a>
                          </td>
                          <td><div id="MKR_trade1">00</div></td>
                          <td><div id="MKR_low24hr_trade1">00</div></td>
                          <td><div id="MKR_high24hr_trade1">00</div></td>
                          <td><div id="MKR_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="MTN_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/MTN/BTC">MTN / BTC</a>
                          </td>
                          <td><div id="MTN_trade1">00</div></td>
                          <td><div id="MTN_low24hr_trade1">00</div></td>
                          <td><div id="MTN_high24hr_trade1">00</div></td>
                          <td><div id="MTN_quoteVolume_trade1">00</div></td>
                        </tr>
                        {/* <tr>
                  <td class="currency">
                    <div class="icon_img" id="NANO_trade1_image"></div>
                    <a href="https://www.tradedesk.zecoex.com/users/bid/NANO/BTC">NANO / BTC</a>
                  </td>
                  <td><div id="NANO_trade1">00</div></td>
                  <td><div id="NANO_low24hr_trade1">00</div></td>
                  <td><div id="NANO_high24hr_trade1">00</div></td>
                  <td><div id="NANO_quoteVolume_trade1">00</div></td>
                </tr> */}
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="NANO_trade88_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/NANO/USDT">NANO / USDT</a>
                          </td>
                          <td><div id="NANO_trade88">00</div></td>
                          <td><div id="NANO_low24hr_trade88">00</div></td>
                          <td><div id="NANO_high24hr_trade88">00</div></td>
                          <td><div id="NANO_quoteVolume_trade88">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="NANO_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/NANO/INR">NANO / INR</a>
                          </td>
                          <td><div id="NANO_trade90">00</div></td>
                          <td><div id="NANO_low24hr_trade90">00</div></td>
                          <td><div id="NANO_high24hr_trade90">00</div></td>
                          <td><div id="NANO_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="NAS_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/NAS/BTC">NAS / BTC</a>
                          </td>
                          <td><div id="NAS_trade1">00</div></td>
                          <td><div id="NAS_low24hr_trade1">00</div></td>
                          <td><div id="NAS_high24hr_trade1">00</div></td>
                          <td><div id="NAS_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="PPT_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/PPT/BTC">PPT / BTC</a>
                          </td>
                          <td><div id="PPT_trade1">00</div></td>
                          <td><div id="PPT_low24hr_trade1">00</div></td>
                          <td><div id="PPT_high24hr_trade1">00</div></td>
                          <td><div id="PPT_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="PROD_trade3_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/PROD/ETH">PROD / ETH</a>
                          </td>
                          <td><div id="PROD_trade3">00</div></td>
                          <td><div id="PROD_low24hr_trade3">00</div></td>
                          <td><div id="PROD_high24hr_trade3">00</div></td>
                          <td><div id="PROD_quoteVolume_trade3">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="QASH_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/QASH/BTC">QASH / BTC</a>
                          </td>
                          <td><div id="QASH_trade1">00</div></td>
                          <td><div id="QASH_low24hr_trade1">00</div></td>
                          <td><div id="QASH_high24hr_trade1">00</div></td>
                          <td><div id="QASH_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="QSP_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/QSP/BTC">QSP / BTC</a>
                          </td>
                          <td><div id="QSP_trade1">00</div></td>
                          <td><div id="QSP_low24hr_trade1">00</div></td>
                          <td><div id="QSP_high24hr_trade1">00</div></td>
                          <td><div id="QSP_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="RDN_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/RDN/BTC">RDN / BTC</a>
                          </td>
                          <td><div id="RDN_trade1">00</div></td>
                          <td><div id="RDN_low24hr_trade1">00</div></td>
                          <td><div id="RDN_high24hr_trade1">00</div></td>
                          <td><div id="RDN_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="REQ_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/REQ/BTC">REQ / BTC</a>
                          </td>
                          <td><div id="REQ_trade1">00</div></td>
                          <td><div id="REQ_low24hr_trade1">00</div></td>
                          <td><div id="REQ_high24hr_trade1">00</div></td>
                          <td><div id="REQ_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="SKY_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/SKY/BTC">SKY / BTC</a>
                          </td>
                          <td><div id="SKY_trade1">00</div></td>
                          <td><div id="SKY_low24hr_trade1">00</div></td>
                          <td><div id="SKY_high24hr_trade1">00</div></td>
                          <td><div id="SKY_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="SPANK_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/SPANK/INR">SPANK / INR</a>
                          </td>
                          <td><div id="SPANK_trade90">00</div></td>
                          <td><div id="SPANK_low24hr_trade90">00</div></td>
                          <td><div id="SPANK_high24hr_trade90">00</div></td>
                          <td><div id="SPANK_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="SPANK_trade88_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/SPANK/USDT">SPANK / USDT</a>
                          </td>
                          <td><div id="SPANK_trade88">00</div></td>
                          <td><div id="SPANK_low24hr_trade88">00</div></td>
                          <td><div id="SPANK_high24hr_trade88">00</div></td>
                          <td><div id="SPANK_quoteVolume_trade88">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="STORJ_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/STORJ/BTC">STORJ / BTC</a>
                          </td>
                          <td><div id="STORJ_trade1">00</div></td>
                          <td><div id="STORJ_low24hr_trade1">00</div></td>
                          <td><div id="STORJ_high24hr_trade1">00</div></td>
                          <td><div id="STORJ_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="THETA_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/THETA/BTC">THETA / BTC</a>
                          </td>
                          <td><div id="THETA_trade1">00</div></td>
                          <td><div id="THETA_low24hr_trade1">00</div></td>
                          <td><div id="THETA_high24hr_trade1">00</div></td>
                          <td><div id="THETA_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="VET_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/VET/BTC">VET / BTC</a>
                          </td>
                          <td><div id="VET_trade1">00</div></td>
                          <td><div id="VET_low24hr_trade1">00</div></td>
                          <td><div id="VET_high24hr_trade1">00</div></td>
                          <td><div id="VET_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="VET_trade90_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/VET/INR">VET / INR</a>
                          </td>
                          <td><div id="VET_trade90">00</div></td>
                          <td><div id="VET_low24hr_trade90">00</div></td>
                          <td><div id="VET_high24hr_trade90">00</div></td>
                          <td><div id="VET_quoteVolume_trade90">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="WAX_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/WAX/BTC">WAX / BTC</a>
                          </td>
                          <td><div id="WAX_trade1">00</div></td>
                          <td><div id="WAX_low24hr_trade1">00</div></td>
                          <td><div id="WAX_high24hr_trade1">00</div></td>
                          <td><div id="WAX_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="WTC_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/WTC/BTC">WTC / BTC</a>
                          </td>
                          <td><div id="WTC_trade1">00</div></td>
                          <td><div id="WTC_low24hr_trade1">00</div></td>
                          <td><div id="WTC_high24hr_trade1">00</div></td>
                          <td><div id="WTC_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="XMR_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/XMR/BTC">XMR / BTC</a>
                          </td>
                          <td><div id="XMR_trade1">00</div></td>
                          <td><div id="XMR_low24hr_trade1">00</div></td>
                          <td><div id="XMR_high24hr_trade1">00</div></td>
                          <td><div id="XMR_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="XRP_trade141_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/XRP/TUSD">XRP / TUSD</a>
                          </td>
                          <td><div id="XRP_trade141">00</div></td>
                          <td><div id="XRP_low24hr_trade141">00</div></td>
                          <td><div id="XRP_high24hr_trade141">00</div></td>
                          <td><div id="XRP_quoteVolume_trade141">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ZEC_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ZEC/BTC">ZEC / BTC</a>
                          </td>
                          <td><div id="ZEC_trade1">00</div></td>
                          <td><div id="ZEC_low24hr_trade1">00</div></td>
                          <td><div id="ZEC_high24hr_trade1">00</div></td>
                          <td><div id="ZEC_quoteVolume_trade1">00</div></td>
                        </tr>
                        <tr>
                          <td className="currency">
                            <div className="icon_img" id="ZEN_trade1_image" />
                            <a href="https://www.tradedesk.zecoex.com/users/bid/ZEN/BTC">ZEN / BTC</a>
                          </td>
                          <td><div id="ZEN_trade1">00</div></td>
                          <td><div id="ZEN_low24hr_trade1">00</div></td>
                          <td><div id="ZEN_high24hr_trade1">00</div></td>
                          <td><div id="ZEN_quoteVolume_trade1">00</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*Trade Market End*/}
            {/*INR Market Start*/}
            <div className="coin_details">
              <div className="main_container3">
                <div className="coin_details_top">
                  <ul>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="coin_details_btm">
                  <ul>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ACT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.achain.com/" target="_blank" rel="nofollow">ACT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ACT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ACT_buy_INR">00</div>
                        <div className="ta3" id="ACT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ADA_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.cardano.org/en/home/" target="_blank" rel="nofollow">ADA/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ADA_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ADA_buy_INR">00</div>
                        <div className="ta3" id="ADA_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="AE_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.aeternity.com/" target="_blank" rel="nofollow">AE/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_AE_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="AE_buy_INR">00</div>
                <div class="ta3" id="AE_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AID_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.aidcoin.co/" target="_blank" rel="nofollow">AID/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AID_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="AID_buy_INR">00</div>
                        <div className="ta3" id="AID_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AION_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aion.network/" target="_blank" rel="nofollow">AION/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AION_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="AION_buy_INR">00</div>
                        <div className="ta3" id="AION_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ANT_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://aragon.one/" target="_blank" rel="nofollow">ANT/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ANT_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ANT_buy_INR">00</div>
                <div class="ta3" id="ANT_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ARDR_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.ardorplatform.org/" target="_blank" rel="nofollow">ARDR/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ARDR_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ARDR_buy_INR">00</div>
                        <div className="ta3" id="ARDR_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ARK_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ark.io/" target="_blank" rel="nofollow">ARK/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ARK_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ARK_buy_INR">00</div>
                        <div className="ta3" id="ARK_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AVT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aventus.io/" target="_blank" rel="nofollow">AVT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AVT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="AVT_buy_INR">00</div>
                        <div className="ta3" id="AVT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BAT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://basicattentiontoken.org/" target="_blank" rel="nofollow">BAT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BAT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BAT_buy_INR">00</div>
                        <div className="ta3" id="BAT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCD_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://btcd.io/" target="_blank" rel="nofollow">BCD/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCD_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BCD_buy_INR">00</div>
                        <div className="ta3" id="BCD_sell_INR">00</div>
                      </div>
                    </li> 
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCH_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.bitcoincash.org/" target="_blank" rel="nofollow">BCH/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCH_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BCH_buy_INR">00</div>
                        <div className="ta3" id="BCH_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCN_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bytecoin.org/" target="_blank" rel="nofollow">BCN/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCN_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BCN_buy_INR">00</div>
                        <div className="ta3" id="BCN_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BFT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bf-token.bnktothefuture.com/" target="_blank" rel="nofollow">BFT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BFT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BFT_buy_INR">00</div>
                        <div className="ta3" id="BFT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTC_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitcoin.org/en/" target="_blank" rel="nofollow">BTC/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTC_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTC_buy_INR">00</div>
                        <div className="ta3" id="BTC_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTM_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://bytom.io/" target="_blank" rel="nofollow">BTM/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTM_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTM_buy_INR">00</div>
                        <div className="ta3" id="BTM_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTG_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitcoingold.org/" target="_blank" rel="nofollow">BTG/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTG_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTG_buy_INR">00</div>
                        <div className="ta3" id="BTG_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTS_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitshares.org/" target="_blank" rel="nofollow">BTS/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTS_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTS_buy_INR">00</div>
                        <div className="ta3" id="BTS_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="CFI_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://cofound.it/" target="_blank" rel="nofollow">CFI/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_CFI_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="CFI_buy_INR">00</div>
                <div class="ta3" id="CFI_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="CMT_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.cybermiles.io/" target="_blank" rel="nofollow">CMT/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_CMT_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="CMT_buy_INR">00</div>
                <div class="ta3" id="CMT_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="CND_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://cindicator.com/" target="_blank" rel="nofollow">CND/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_CND_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="CND_buy_INR">00</div>
                        <div className="ta3" id="CND_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DADI_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://dadi.cloud/en/" target="_blank" rel="nofollow">DADI/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DADI_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DADI_buy_INR">00</div>
                        <div className="ta3" id="DADI_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DAI_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://makerdao.com/" target="_blank" rel="nofollow">DAI/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DAI_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DAI_buy_INR">00</div>
                <div class="ta3" id="DAI_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DASH_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.dash.org/" target="_blank" rel="nofollow">DASH/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DASH_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DASH_buy_INR">00</div>
                        <div className="ta3" id="DASH_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DATA_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.streamr.com/" target="_blank" rel="nofollow">DATA/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DATA_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DATA_buy_INR">00</div>
                        <div className="ta3" id="DATA_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DCR_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.decred.org/" target="_blank" rel="nofollow">DCR/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DCR_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DCR_buy_INR">00</div>
                <div class="ta3" id="DCR_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DGB_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.digibyte.io/" target="_blank" rel="nofollow">DGB/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DGB_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DGB_buy_INR">00</div>
                        <div className="ta3" id="DGB_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DGD_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://digix.global/" target="_blank" rel="nofollow">DGD/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DGD_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DGD_buy_INR">00</div>
                        <div className="ta3" id="DGD_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DOGE_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://dogecoin.com/" target="_blank" rel="nofollow">DOGE/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DOGE_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DOGE_buy_INR">00</div>
                        <div className="ta3" id="DOGE_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DRGN_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://dragonchain.com/" target="_blank" rel="nofollow">DRGN/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DRGN_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DRGN_buy_INR">00</div>
                <div class="ta3" id="DRGN_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DTH_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://dether.io/" target="_blank" rel="nofollow">DTH/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DTH_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DTH_buy_INR">00</div>
                <div class="ta3" id="DTH_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="EDO_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://eidoo.io/" target="_blank" rel="nofollow">EDO/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_EDO_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="EDO_buy_INR">00</div>
                        <div className="ta3" id="EDO_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ELF_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aelf.io/" target="_blank" rel="nofollow">ELF/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ELF_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ELF_buy_INR">00</div>
                        <div className="ta3" id="ELF_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="EMC2_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.emc2.foundation/" target="_blank" rel="nofollow">EMC2/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_EMC2_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="EMC2_buy_INR">00</div>
                <div class="ta3" id="EMC2_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ENG_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://enigma.co/" target="_blank" rel="nofollow">ENG/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ENG_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ENG_buy_INR">00</div>
                <div class="ta3" id="ENG_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ENJ_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://enjincoin.io/" target="_blank" rel="nofollow">ENJ/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ENJ_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ENJ_buy_INR">00</div>
                <div class="ta3" id="ENJ_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="EOS_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://eos.io/" target="_blank" rel="nofollow">EOS/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_EOS_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="EOS_buy_INR">00</div>
                        <div className="ta3" id="EOS_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETC_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ethereumclassic.org/" target="_blank" rel="nofollow">ETC/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETC_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ETC_buy_INR">00</div>
                        <div className="ta3" id="ETC_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETH_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.ethereum.org/" target="_blank" rel="nofollow">ETH/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETH_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ETH_buy_INR">00</div>
                        <div className="ta3" id="ETH_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ETHOS_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.ethos.io/" target="_blank" rel="nofollow">ETHOS/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ETHOS_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ETHOS_buy_INR">00</div>
                <div class="ta3" id="ETHOS_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETP_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://mvs.org/" target="_blank" rel="nofollow">ETP/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETP_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ETP_buy_INR">00</div>
                        <div className="ta3" id="ETP_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="FCT_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.factom.com/" target="_blank" rel="nofollow">FCT/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_FCT_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="FCT_buy_INR">00</div>
                <div class="ta3" id="FCT_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="FUN_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://funfair.io/" target="_blank" rel="nofollow">FUN/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_FUN_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="FUN_buy_INR">00</div>
                        <div className="ta3" id="FUN_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="GAS_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://neo.org/" target="_blank" rel="nofollow">GAS/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_GAS_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="GAS_buy_INR">00</div>
                <div class="ta3" id="GAS_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="GNT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://golem.network/" target="_blank" rel="nofollow">GNT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_GNT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="GNT_buy_INR">00</div>
                        <div className="ta3" id="GNT_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="GXS_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://gxs.gxb.io/" target="_blank" rel="nofollow">GXS/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_GXS_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="GXS_buy_INR">00</div>
                <div class="ta3" id="GXS_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="HSR_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://h.cash/" target="_blank" rel="nofollow">HSR/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_HSR_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="HSR_buy_INR">00</div>
                <div class="ta3" id="HSR_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ICX_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://icon.foundation/" target="_blank" rel="nofollow">ICX/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ICX_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ICX_buy_INR">00</div>
                        <div className="ta3" id="ICX_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="IOTA_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.iota.org/" target="_blank" rel="nofollow">IOTA/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_IOTA_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="IOTA_buy_INR">00</div>
                        <div className="ta3" id="IOTA_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="IOST_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://iost.io" target="_blank" rel="nofollow">IOST/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_IOST_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="IOST_buy_INR">00</div>
                <div class="ta3" id="IOST_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="KMD_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://komodoplatform.com/" target="_blank" rel="nofollow">KMD/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_KMD_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="KMD_buy_INR">00</div>
                <div class="ta3" id="KMD_sell_INR">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="KNC_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://kyber.network/" target="_blank" rel="nofollow">KNC/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_KNC_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="KNC_buy_INR">00</div>
                <div class="ta3" id="KNC_sell_INR">00</div>
              </div>
            </li>
             <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="LOOM_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://loomx.io/" target="_blank" rel="nofollow">LOOM/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_LOOM_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="LOOM_buy_INR">00</div>
                <div class="ta3" id="LOOM_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LRC_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://loopring.org/" target="_blank" rel="nofollow">LRC/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LRC_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="LRC_buy_INR">00</div>
                        <div className="ta3" id="LRC_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LSK_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://lisk.io/" target="_blank" rel="nofollow">LSK/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LSK_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="LSK_buy_INR">00</div>
                        <div className="ta3" id="LSK_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LTC_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://litecoin.com/" target="_blank" rel="nofollow">LTC/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LTC_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="LTC_buy_INR">00</div>
                        <div className="ta3" id="LTC_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MAID_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://maidsafe.net/" target="_blank" rel="nofollow">MAID/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MAID_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="MAID_buy_INR">00</div>
                <div class="ta3" id="MAID_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="MNA_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://decentraland.org/" target="_blank" rel="nofollow">MANA/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_MNA_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="MNA_buy_INR">00</div>
                        <div className="ta3" id="MNA_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="MITH_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://mith.io/" target="_blank" rel="nofollow">MITH/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_MITH_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="MITH_buy_INR">00</div>
                        <div className="ta3" id="MITH_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MKR_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://makerdao.com/" target="_blank" rel="nofollow">MKR/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MKR_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="MKR_buy_INR">00</div>
                <div class="ta3" id="MKR_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MTN_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://medicalchain.com/en/" target="_blank" rel="nofollow">MTN/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MTN_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="MTN_buy_INR">00</div>
                <div class="ta3" id="MTN_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="NANO_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://nano.org/en" target="_blank" rel="nofollow">NANO/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_NANO_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="NANO_buy_INR">00</div>
                <div class="ta3" id="NANO_sell_INR">00</div>
              </div>
            </li>
             <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="NAS_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://nebulas.io" target="_blank" rel="nofollow">NAS/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_NAS_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="NAS_buy_INR">00</div>
                <div class="ta3" id="NAS_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NCASH_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nucleus.vision/" target="_blank" rel="nofollow">NCASH/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NCASH_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NCASH_buy_INR">00</div>
                        <div className="ta3" id="NCASH_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NEO_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://neo.org/" target="_blank" rel="nofollow">NEO/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NEO_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NEO_buy_INR">00</div>
                        <div className="ta3" id="NEO_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NXS_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nexusearth.com/" target="_blank" rel="nofollow">NXS/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NXS_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NXS_buy_INR">00</div>
                        <div className="ta3" id="NXS_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NXT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nxtplatform.org/" target="_blank" rel="nofollow">NXT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NXT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NXT_buy_INR">00</div>
                        <div className="ta3" id="NXT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ODEM_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://odem.io/" target="_blank" rel="nofollow">ODEM/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ODEM_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ODEM_buy_INR">00</div>
                        <div className="ta3" id="ODEM_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="OMG_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://omisego.network/" target="_blank" rel="nofollow">OMG/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_OMG_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="OMG_buy_INR">00</div>
                        <div className="ta3" id="OMG_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ONT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ont.io/" target="_blank" rel="nofollow">ONT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ONT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ONT_buy_INR">00</div>
                        <div className="ta3" id="ONT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="PAY_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.tenx.tech/" target="_blank" rel="nofollow">PAY/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_PAY_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="PAY_buy_INR">00</div>
                        <div className="ta3" id="PAY_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="PIVX_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://pivx.org/" target="_blank" rel="nofollow">PIVX/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_PIVX_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="PIVX_buy_INR">00</div>
                        <div className="ta3" id="PIVX_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="POWR_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://powerledger.io/" target="_blank" rel="nofollow">POWR/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_POWR_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="POWR_buy_INR">00</div>
                        <div className="ta3" id="POWR_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="PPT_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://populous.world/index.html" target="_blank" rel="nofollow">PPT/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_PPT_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="PPT_buy_INR">00</div>
                <div class="ta3" id="PPT_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="QASH_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://liquid.plus/" target="_blank" rel="nofollow">QASH/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_QASH_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="QASH_buy_INR">00</div>
                <div class="ta3" id="QASH_sell_INR">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="QSP_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://quantstamp.com/" target="_blank" rel="nofollow">QSP/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_QSP_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="QSP_buy_INR">00</div>
                <div class="ta3" id="QSP_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="QTUM_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://qtum.org/" target="_blank" rel="nofollow">QTUM/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_QTUM_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="QTUM_buy_INR">00</div>
                        <div className="ta3" id="QTUM_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RCN_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ripiocredit.network/" target="_blank" rel="nofollow">RCN/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RCN_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="RCN_buy_INR">00</div>
                        <div className="ta3" id="RCN_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RDD_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://reddcoin.com/" target="_blank" rel="nofollow">RDD/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RDD_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="RDD_buy_INR">00</div>
                        <div className="ta3" id="RDD_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="RDN_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://raiden.network/" target="_blank" rel="nofollow">RDN/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_RDN_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="RDN_buy_INR">00</div>
                <div class="ta3" id="RDN_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="REP_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://www.augur.net/" target="_blank" rel="nofollow">REP/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_REP_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="REP_buy_INR">00</div>
                        <div className="ta3" id="REP_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="REQ_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://request.network/#/" target="_blank" rel="nofollow">REQ/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_REQ_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="REQ_buy_INR">00</div>
                <div class="ta3" id="REQ_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RLC_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://iex.ec/" target="_blank" rel="nofollow">RLC/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RLC_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="RLC_buy_INR">00</div>
                        <div className="ta3" id="RLC_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SALT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.saltlending.com/" target="_blank" rel="nofollow">SALT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SALT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SALT_buy_INR">00</div>
                        <div className="ta3" id="SALT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SAN_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://santiment.net/" target="_blank" rel="nofollow">SAN/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SAN_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SAN_buy_INR">00</div>
                        <div className="ta3" id="SAN_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SC_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://sia.tech/" target="_blank" rel="nofollow">SC/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SC_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SC_buy_INR">00</div>
                        <div className="ta3" id="SC_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="SKY_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.skycoin.net/" target="_blank" rel="nofollow">SKY/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_SKY_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="SKY_buy_INR">00</div>
                <div class="ta3" id="SKY_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SNGLS_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://singulardtv.com/" target="_blank" rel="nofollow">SNGLS/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SNGLS_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SNGLS_buy_INR">00</div>
                        <div className="ta3" id="SNGLS_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SNT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://status.im/" target="_blank" rel="nofollow">SNT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SNT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SNT_buy_INR">00</div>
                        <div className="ta3" id="SNT_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="SPANK_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://spankchain.com/" target="_blank" rel="nofollow">SPANK/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_SPANK_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="SPANK_buy_INR">00</div>
                <div class="ta3" id="SPANK_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="STEEM_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://steem.io/" target="_blank" rel="nofollow">STEEM/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_STEEM_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="STEEM_buy_INR">00</div>
                        <div className="ta3" id="STEEM_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="STORJ_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://storj.io/" target="_blank" rel="nofollow">STORJ/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_STORJ_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="STORJ_buy_INR">00</div>
                <div class="ta3" id="STORJ_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="STRAT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://stratisplatform.com/" target="_blank" rel="nofollow">STRAT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_STRAT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="STRAT_buy_INR">00</div>
                        <div className="ta3" id="STRAT_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SYS_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://www.syscoin.org" target="_blank" rel="nofollow">SYS/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SYS_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SYS_buy_INR">00</div>
                        <div className="ta3" id="SYS_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="THETA_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.thetatoken.org/" target="_blank" rel="nofollow">THETA/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_THETA_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="THETA_buy_INR">00</div>
                <div class="ta3" id="THETA_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TNB_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tnb.fund/" target="_blank" rel="nofollow">TNB/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TNB_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="TNB_buy_INR">00</div>
                        <div className="ta3" id="TNB_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TRX_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tron.network/" target="_blank" rel="nofollow">TRX/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TRX_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="TRX_buy_INR">00</div>
                        <div className="ta3" id="TRX_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TUSD_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.trusttoken.com/" target="_blank" rel="nofollow">TUSD/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TUSD_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="TUSD_buy_INR">00</div>
                        <div className="ta3" id="TUSD_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="USDT_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tether.to/" target="_blank" rel="nofollow">USDT/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_USDT_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="USDT_buy_INR">00</div>
                        <div className="ta3" id="USDT_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="VEN_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.vechain.org/" target="_blank" rel="nofollow">VEN/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_VEN_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="VEN_buy_INR">00</div>
                <div class="ta3" id="VEN_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="WAVE_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://wavesplatform.com/" target="_blank" rel="nofollow">WAVE/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_WAVE_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="WAVE_buy_INR">00</div>
                        <div className="ta3" id="WAVE_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="WAX_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://wax.io/" target="_blank" rel="nofollow">WAX/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_WAX_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="WAX_buy_INR">00</div>
                <div class="ta3" id="WAX_sell_INR">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="WTC_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.waltonchain.org/" target="_blank" rel="nofollow">WTC/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_WTC_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="WTC_buy_INR">00</div>
                <div class="ta3" id="WTC_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XEM_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nem.io" target="_blank" rel="nofollow">XEM/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XEM_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XEM_buy_INR">00</div>
                        <div className="ta3" id="XEM_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XLM_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.stellar.org/" target="_blank" rel="nofollow">XLM/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XLM_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XLM_buy_INR">00</div>
                        <div className="ta3" id="XLM_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="XMR_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://getmonero.org/" target="_blank" rel="nofollow">XMR/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_XMR_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="XMR_buy_INR">00</div>
                <div class="ta3" id="XMR_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XRP_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ripple.com/" target="_blank" rel="nofollow">XRP/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XRP_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XRP_buy_INR">00</div>
                        <div className="ta3" id="XRP_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XVG_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://vergecurrency.com/" target="_blank" rel="nofollow">XVG/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XVG_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XVG_buy_INR">00</div>
                        <div className="ta3" id="XVG_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="YOYOW_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://yoyow.org/" target="_blank" rel="nofollow">YOYOW/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_YOYOW_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="YOYOW_buy_INR">00</div>
                        <div className="ta3" id="YOYOW_sell_INR">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ZEC_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://z.cash/" target="_blank" rel="nofollow">ZEC/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ZEC_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ZEC_buy_INR">00</div>
                <div class="ta3" id="ZEC_sell_INR">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ZEN_image_INR"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://zencash.com/" target="_blank" rel="nofollow">ZEN/INR</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ZEN_INR"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ZEN_buy_INR">00</div>
                <div class="ta3" id="ZEN_sell_INR">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ZIL_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.zilliqa.com/" target="_blank" rel="nofollow">ZIL/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ZIL_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ZIL_buy_INR">00</div>
                        <div className="ta3" id="ZIL_sell_INR">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ZRX_image_INR" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://0xproject.com/" target="_blank" rel="nofollow">ZRX/INR</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ZRX_INR" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ZRX_buy_INR">00</div>
                        <div className="ta3" id="ZRX_sell_INR">00</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*INR Market End*/}
            {/*USDT MarketStart*/}
            <div className="coin_details">
              <div className="main_container3">
                <div className="coin_details_top">
                  <ul>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="coin_details_btm">
                  <ul>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ACT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.achain.com/" target="_blank" rel="nofollow">ACT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ACT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ACT_buy_USDT">00</div>
                        <div className="ta3" id="ACT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ADA_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.cardano.org/en/home/" target="_blank" rel="nofollow">ADA/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ADA_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ADA_buy_USDT">00</div>
                        <div className="ta3" id="ADA_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="AE_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.aeternity.com/" target="_blank" rel="nofollow">AE/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_AE_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="AE_buy_USDT">00</div>
                <div class="ta3" id="AE_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AID_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.aidcoin.co/" target="_blank" rel="nofollow">AID/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AID_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="AID_buy_USDT">00</div>
                        <div className="ta3" id="AID_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AION_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aion.network/" target="_blank" rel="nofollow">AION/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AION_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="AION_buy_USDT">00</div>
                        <div className="ta3" id="AION_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ANT_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://aragon.one/" target="_blank" rel="nofollow">ANT/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ANT_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ANT_buy_USDT">00</div>
                <div class="ta3" id="ANT_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ARDR_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.ardorplatform.org/" target="_blank" rel="nofollow">ARDR/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ARDR_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ARDR_buy_USDT">00</div>
                        <div className="ta3" id="ARDR_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ARK_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ark.io/" target="_blank" rel="nofollow">ARK/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ARK_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ARK_buy_USDT">00</div>
                        <div className="ta3" id="ARK_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AVT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aventus.io/" target="_blank" rel="nofollow">AVT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AVT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="AVT_buy_USDT">00</div>
                        <div className="ta3" id="AVT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BAT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://basicattentiontoken.org/" target="_blank" rel="nofollow">BAT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BAT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BAT_buy_USDT">00</div>
                        <div className="ta3" id="BAT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCD_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://btcd.io/" target="_blank" rel="nofollow">BCD/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCD_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BCD_buy_USDT">00</div>
                        <div className="ta3" id="BCD_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCH_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.bitcoincash.org/" target="_blank" rel="nofollow">BCH/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCH_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BCH_buy_USDT">00</div>
                        <div className="ta3" id="BCH_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCN_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bytecoin.org/" target="_blank" rel="nofollow">BCN/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCN_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BCN_buy_USDT">00</div>
                        <div className="ta3" id="BCN_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BFT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bf-token.bnktothefuture.com/" target="_blank" rel="nofollow">BFT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BFT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BFT_buy_USDT">00</div>
                        <div className="ta3" id="BFT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTC_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitcoin.org/en/" target="_blank" rel="nofollow">BTC/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTC_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTC_buy_USDT">00</div>
                        <div className="ta3" id="BTC_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTM_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://bytom.io/" target="_blank" rel="nofollow">BTM/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTM_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTM_buy_USDT">00</div>
                        <div className="ta3" id="BTM_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTG_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitcoingold.org/" target="_blank" rel="nofollow">BTG/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTG_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTG_buy_USDT">00</div>
                        <div className="ta3" id="BTG_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTS_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitshares.org/" target="_blank" rel="nofollow">BTS/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTS_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="BTS_buy_USDT">00</div>
                        <div className="ta3" id="BTS_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="CFI_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://cofound.it/" target="_blank" rel="nofollow">CFI/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_CFI_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="CFI_buy_USDT">00</div>
                <div class="ta3" id="CFI_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="CMT_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.cybermiles.io/" target="_blank" rel="nofollow">CMT/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_CMT_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="CMT_buy_USDT">00</div>
                <div class="ta3" id="CMT_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="CND_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://cindicator.com/" target="_blank" rel="nofollow">CND/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_CND_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="CND_buy_USDT">00</div>
                        <div className="ta3" id="CND_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DADI_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://dadi.cloud/en/" target="_blank" rel="nofollow">DADI/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DADI_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DADI_buy_USDT">00</div>
                        <div className="ta3" id="DADI_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DAI_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://makerdao.com/" target="_blank" rel="nofollow">DAI/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DAI_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DAI_buy_USDT">00</div>
                <div class="ta3" id="DAI_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DASH_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.dash.org/" target="_blank" rel="nofollow">DASH/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DASH_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DASH_buy_USDT">00</div>
                        <div className="ta3" id="DASH_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DATA_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.streamr.com/" target="_blank" rel="nofollow">DATA/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DATA_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DATA_buy_USDT">00</div>
                        <div className="ta3" id="DATA_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DCR_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.decred.org/" target="_blank" rel="nofollow">DCR/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DCR_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DCR_buy_USDT">00</div>
                <div class="ta3" id="DCR_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DGB_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.digibyte.io/" target="_blank" rel="nofollow">DGB/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DGB_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DGB_buy_USDT">00</div>
                        <div className="ta3" id="DGB_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DGD_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://digix.global/" target="_blank" rel="nofollow">DGD/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DGD_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DGD_buy_USDT">00</div>
                        <div className="ta3" id="DGD_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DOGE_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://dogecoin.com/" target="_blank" rel="nofollow">DOGE/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DOGE_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="DOGE_buy_USDT">00</div>
                        <div className="ta3" id="DOGE_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DRGN_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://dragonchain.com/" target="_blank" rel="nofollow">DRGN/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DRGN_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DRGN_buy_USDT">00</div>
                <div class="ta3" id="DRGN_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DTH_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="http://dether.io/" target="_blank" rel="nofollow">DTH/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DTH_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="DTH_buy_USDT">00</div>
                <div class="ta3" id="DTH_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="EDO_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://eidoo.io/" target="_blank" rel="nofollow">EDO/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_EDO_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="EDO_buy_USDT">00</div>
                        <div className="ta3" id="EDO_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ELF_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aelf.io/" target="_blank" rel="nofollow">ELF/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ELF_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ELF_buy_USDT">00</div>
                        <div className="ta3" id="ELF_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="EMC2_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.emc2.foundation/" target="_blank" rel="nofollow">EMC2/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_EMC2_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="EMC2_buy_USDT">00</div>
                <div class="ta3" id="EMC2_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ENG_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://enigma.co/" target="_blank" rel="nofollow">ENG/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ENG_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ENG_buy_USDT">00</div>
                <div class="ta3" id="ENG_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ENJ_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://enjincoin.io/" target="_blank" rel="nofollow">ENJ/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ENJ_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ENJ_buy_USDT">00</div>
                <div class="ta3" id="ENJ_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="EOS_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://eos.io/" target="_blank" rel="nofollow">EOS/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_EOS_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="EOS_buy_USDT">00</div>
                        <div className="ta3" id="EOS_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETC_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ethereumclassic.org/" target="_blank" rel="nofollow">ETC/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETC_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ETC_buy_USDT">00</div>
                        <div className="ta3" id="ETC_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETH_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.ethereum.org/" target="_blank" rel="nofollow">ETH/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETH_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ETH_buy_USDT">00</div>
                        <div className="ta3" id="ETH_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ETHOS_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.ethos.io/" target="_blank" rel="nofollow">ETHOS/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ETHOS_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ETHOS_buy_USDT">00</div>
                <div class="ta3" id="ETHOS_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETP_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://mvs.org/" target="_blank" rel="nofollow">ETP/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETP_USDT" />
                          </div>
                        </div>
                        {/* <div class="txt"><a href="https://mvs.org/" target="_blank" rel="nofollow">ETP/USDT</a></div> */}
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ETP_buy_USDT">00</div>
                        <div className="ta3" id="ETP_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="FCT_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.factom.com/" target="_blank" rel="nofollow">FCT/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_FCT_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="FCT_buy_USDT">00</div>
                <div class="ta3" id="FCT_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="FUN_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://funfair.io/" target="_blank" rel="nofollow">FUN/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_FUN_USDT" />
                          </div>
                        </div>
                        {/* <div class="txt"><a href="https://funfair.io/" target="_blank" rel="nofollow">FUN/USDT</a></div> */}
                      </div>
                      <div className="ta">
                        <div className="ta2" id="FUN_buy_USDT">00</div>
                        <div className="ta3" id="FUN_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="GAS_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://neo.org/" target="_blank" rel="nofollow">GAS/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_GAS_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="GAS_buy_USDT">00</div>
                <div class="ta3" id="GAS_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="GNT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://golem.network/" target="_blank" rel="nofollow">GNT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_GNT_USDT" />
                          </div>
                        </div>
                        {/* <div class="txt"><a href="https://golem.network/" target="_blank" rel="nofollow">GNT/USDT</a></div> */}
                      </div>
                      <div className="ta">
                        <div className="ta2" id="GNT_buy_USDT">00</div>
                        <div className="ta3" id="GNT_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="GXS_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://gxs.gxb.io/" target="_blank" rel="nofollow">GXS/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_GXS_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="GXS_buy_USDT">00</div>
                <div class="ta3" id="GXS_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="HSR_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://h.cash/" target="_blank" rel="nofollow">HSR/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_HSR_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="HSR_buy_USDT">00</div>
                <div class="ta3" id="HSR_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ICX_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://icon.foundation/" target="_blank" rel="nofollow">ICX/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ICX_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ICX_buy_USDT">00</div>
                        <div className="ta3" id="ICX_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="IOTA_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.iota.org/" target="_blank" rel="nofollow">IOTA/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_IOTA_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="IOTA_buy_USDT">00</div>
                        <div className="ta3" id="IOTA_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="IOST_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://iost.io/" target="_blank" rel="nofollow">IOST/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_IOST_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="IOST_buy_USDT">00</div>
                <div class="ta3" id="IOST_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="KMD_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://komodoplatform.com/" target="_blank" rel="nofollow">KMD/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_KMD_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="KMD_buy_USDT">00</div>
                <div class="ta3" id="KMD_sell_USDT">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="KNC_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://kyber.network/" target="_blank" rel="nofollow">KNC/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_KNC_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="KNC_buy_USDT">00</div>
                <div class="ta3" id="KNC_sell_USDT">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="LOOM_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://loomx.io/" target="_blank" rel="nofollow">LOOM/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_LOOM_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="LOOM_buy_USDT">00</div>
                <div class="ta3" id="LOOM_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LRC_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://loopring.org/" target="_blank" rel="nofollow">LRC/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LRC_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="LRC_buy_USDT">00</div>
                        <div className="ta3" id="LRC_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LSK_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://lisk.io/" target="_blank" rel="nofollow">LSK/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LSK_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="LSK_buy_USDT">00</div>
                        <div className="ta3" id="LSK_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LTC_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://litecoin.com/" target="_blank" rel="nofollow">LTC/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LTC_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="LTC_buy_USDT">00</div>
                        <div className="ta3" id="LTC_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MAID_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://maidsafe.net/" target="_blank" rel="nofollow">MAID/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MAID_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="MAID_buy_USDT">00</div>
                <div class="ta3" id="MAID_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="MNA_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://decentraland.org/" target="_blank" rel="nofollow">MANA/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_MNA_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="MNA_buy_USDT">00</div>
                        <div className="ta3" id="MNA_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="MITH_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://mith.io/" target="_blank" rel="nofollow">MITH/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_MITH_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="MITH_buy_USDT">00</div>
                        <div className="ta3" id="MITH_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MKR_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://makerdao.com/" target="_blank" rel="nofollow">MKR/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MKR_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="MKR_buy_USDT">00</div>
                <div class="ta3" id="MKR_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MTN_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://medicalchain.com/en/" target="_blank" rel="nofollow">MTN/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MTN_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="MTN_buy_USDT">00</div>
                <div class="ta3" id="MTN_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="NANO_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://nano.org/en" target="_blank" rel="nofollow">NANO/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_NANO_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="NANO_buy_USDT">00</div>
                <div class="ta3" id="NANO_sell_USDT">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="NAS_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://nebulas.io" target="_blank" rel="nofollow">NAS/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_NAS_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="NAS_buy_USDT">00</div>
                <div class="ta3" id="NAS_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NCASH_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nucleus.vision/" target="_blank" rel="nofollow">NCASH/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NCASH_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NCASH_buy_USDT">00</div>
                        <div className="ta3" id="NCASH_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NEO_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://neo.org/" target="_blank" rel="nofollow">NEO/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NEO_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NEO_buy_USDT">00</div>
                        <div className="ta3" id="NEO_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NXS_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nexusearth.com/" target="_blank" rel="nofollow">NXS/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NXS_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NXS_buy_USDT">00</div>
                        <div className="ta3" id="NXS_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NXT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nxtplatform.org/" target="_blank" rel="nofollow">NXT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NXT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="NXT_buy_USDT">00</div>
                        <div className="ta3" id="NXT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ODEM_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://odem.io/" target="_blank" rel="nofollow">ODEM/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ODEM_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ODEM_buy_USDT">00</div>
                        <div className="ta3" id="ODEM_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="OMG_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://omisego.network/" target="_blank" rel="nofollow">OMG/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_OMG_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="OMG_buy_USDT">00</div>
                        <div className="ta3" id="OMG_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ONT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ont.io/" target="_blank" rel="nofollow">ONT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ONT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ONT_buy_USDT">00</div>
                        <div className="ta3" id="ONT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="PAY_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.tenx.tech/" target="_blank" rel="nofollow">PAY/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_PAY_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="PAY_buy_USDT">00</div>
                        <div className="ta3" id="PAY_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="PIVX_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://pivx.org/" target="_blank" rel="nofollow">PIVX/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_PIVX_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="PIVX_buy_USDT">00</div>
                        <div className="ta3" id="PIVX_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="POWR_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://powerledger.io/" target="_blank" rel="nofollow">POWR/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_POWR_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="POWR_buy_USDT">00</div>
                        <div className="ta3" id="POWR_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="PPT_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://populous.world/index.html" target="_blank" rel="nofollow">PPT/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_PPT_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="PPT_buy_USDT">00</div>
                <div class="ta3" id="PPT_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="QASH_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://liquid.plus/" target="_blank" rel="nofollow">QASH/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_QASH_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="QASH_buy_USDT">00</div>
                <div class="ta3" id="QASH_sell_USDT">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="QSP_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://quantstamp.com/" target="_blank" rel="nofollow">QSP/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_QSP_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="QSP_buy_USDT">00</div>
                <div class="ta3" id="QSP_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="QTUM_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://qtum.org/" target="_blank" rel="nofollow">QTUM/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_QTUM_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="QTUM_buy_USDT">00</div>
                        <div className="ta3" id="QTUM_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RCN_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ripiocredit.network/" target="_blank" rel="nofollow">RCN/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RCN_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="RCN_buy_USDT">00</div>
                        <div className="ta3" id="RCN_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RDD_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://reddcoin.com/" target="_blank" rel="nofollow">RDD/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RDD_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="RDD_buy_USDT">00</div>
                        <div className="ta3" id="RDD_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="RDN_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://raiden.network/" target="_blank" rel="nofollow">RDN/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_RDN_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="RDN_buy_USDT">00</div>
                <div class="ta3" id="RDN_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="REP_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://www.augur.net/" target="_blank" rel="nofollow">REP/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_REP_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="REP_buy_USDT">00</div>
                        <div className="ta3" id="REP_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="REQ_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://request.network/#/" target="_blank" rel="nofollow">REQ/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_REQ_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="REQ_buy_USDT">00</div>
                <div class="ta3" id="REQ_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RLC_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://iex.ec/" target="_blank" rel="nofollow">RLC/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RLC_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="RLC_buy_USDT">00</div>
                        <div className="ta3" id="RLC_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SALT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.saltlending.com/" target="_blank" rel="nofollow">SALT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SALT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SALT_buy_USDT">00</div>
                        <div className="ta3" id="SALT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SAN_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://santiment.net/" target="_blank" rel="nofollow">SAN/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SAN_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SAN_buy_USDT">00</div>
                        <div className="ta3" id="SAN_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SC_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://sia.tech/" target="_blank" rel="nofollow">SC/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SC_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SC_buy_USDT">00</div>
                        <div className="ta3" id="SC_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="SKY_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.skycoin.net/" target="_blank" rel="nofollow">SKY/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_SKY_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="SKY_buy_USDT">00</div>
                <div class="ta3" id="SKY_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SNGLS_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://singulardtv.com/" target="_blank" rel="nofollow">SNGLS/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SNGLS_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SNGLS_buy_USDT">00</div>
                        <div className="ta3" id="SNGLS_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SNT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://status.im/" target="_blank" rel="nofollow">SNT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SNT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SNT_buy_USDT">00</div>
                        <div className="ta3" id="SNT_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="SPANK_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://spankchain.com/" target="_blank" rel="nofollow">SPANK/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_SPANK_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="SPANK_buy_USDT">00</div>
                <div class="ta3" id="SPANK_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="STEEM_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://steem.io/" target="_blank" rel="nofollow">STEEM/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_STEEM_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="STEEM_buy_USDT">00</div>
                        <div className="ta3" id="STEEM_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="STORJ_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://storj.io/" target="_blank" rel="nofollow">STORJ/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_STORJ_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="STORJ_buy_USDT">00</div>
                <div class="ta3" id="STORJ_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="STRAT_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://stratisplatform.com/" target="_blank" rel="nofollow">STRAT/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_STRAT_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="STRAT_buy_USDT">00</div>
                        <div className="ta3" id="STRAT_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SYS_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://www.syscoin.org" target="_blank" rel="nofollow">SYS/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SYS_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="SYS_buy_USDT">00</div>
                        <div className="ta3" id="SYS_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="THETA_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.thetatoken.org/" target="_blank" rel="nofollow">THETA/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_THETA_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="THETA_buy_USDT">00</div>
                <div class="ta3" id="THETA_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TNB_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tnb.fund/" target="_blank" rel="nofollow">TNB/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TNB_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="TNB_buy_USDT">00</div>
                        <div className="ta3" id="TNB_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TRX_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tron.network/index?lng=en" target="_blank" rel="nofollow">TRX/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TRX_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="TRX_buy_USDT">00</div>
                        <div className="ta3" id="TRX_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="VEN_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.vechain.org/" target="_blank" rel="nofollow">VEN/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_VEN_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="VEN_buy_USDT">00</div>
                <div class="ta3" id="VEN_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="WAVE_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://wavesplatform.com/" target="_blank" rel="nofollow">WAVE/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_WAVE_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="WAVE_buy_USDT">00</div>
                        <div className="ta3" id="WAVE_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="WAX_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://wax.io/" target="_blank" rel="nofollow">WAX/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_WAX_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="WAX_buy_USDT">00</div>
                <div class="ta3" id="WAX_sell_USDT">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="WTC_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.waltonchain.org/" target="_blank" rel="nofollow">WTC/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_WTC_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="WTC_buy_USDT">00</div>
                <div class="ta3" id="WTC_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XEM_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nem.io/" target="_blank" rel="nofollow">XEM/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XEM_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XEM_buy_USDT">00</div>
                        <div className="ta3" id="XEM_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XLM_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.stellar.org/" target="_blank" rel="nofollow">XLM/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XLM_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XLM_buy_USDT">00</div>
                        <div className="ta3" id="XLM_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="XMR_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://getmonero.org/" target="_blank" rel="nofollow">XMR/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_XMR_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="XMR_buy_USDT">00</div>
                <div class="ta3" id="XMR_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XRP_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ripple.com/" target="_blank" rel="nofollow">XRP/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XRP_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XRP_buy_USDT">00</div>
                        <div className="ta3" id="XRP_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XVG_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://vergecurrency.com/" target="_blank" rel="nofollow">XVG/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XVG_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="XVG_buy_USDT">00</div>
                        <div className="ta3" id="XVG_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="YOYOW_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://yoyow.org/" target="_blank" rel="nofollow">YOYOW/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_YOYOW_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="YOYOW_buy_USDT">00</div>
                        <div className="ta3" id="YOYOW_sell_USDT">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ZEC_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://z.cash/" target="_blank" rel="nofollow">ZEC/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ZEC_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ZEC_buy_USDT">00</div>
                <div class="ta3" id="ZEC_sell_USDT">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ZEN_image_USDT"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://zencash.com/" target="_blank" rel="nofollow">ZEN/USDT</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ZEN_USDT"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta2" id="ZEN_buy_USDT">00</div>
                <div class="ta3" id="ZEN_sell_USDT">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ZIL_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.zilliqa.com/" target="_blank" rel="nofollow">ZIL/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ZIL_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ZIL_buy_USDT">00</div>
                        <div className="ta3" id="ZIL_sell_USDT">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ZRX_image_USDT" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://0xproject.com/" target="_blank" rel="nofollow">ZRX/USDT</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ZRX_USDT" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta2" id="ZRX_buy_USDT">00</div>
                        <div className="ta3" id="ZRX_sell_USDT">00</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*USDT Market End*/}
            {/*- BTC Market Start*/}    
            <div className="coin_details">
              <div className="main_container3">
                <div className="coin_details_top">
                  <ul>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">SYMBOL</div>
                      <div className="ta">
                        <div className="ta2">BUY</div>
                        <div className="ta3">SELL</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="coin_details_btm">
                  <ul>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ACT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.achain.com/" target="_blank" rel="nofollow">ACT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ACT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ACT_buy_BTC">00</div>
                        <div className="ta3" id="ACT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ADA_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.cardano.org/en/home/" target="_blank" rel="nofollow">ADA/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ADA_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ADA_buy_BTC">00</div>
                        <div className="ta3" id="ADA_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="AE_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.aeternity.com/" target="_blank" rel="nofollow">AE/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_AE_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="AE_buy_BTC">00</div>
                <div class="ta3" id="AE_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AID_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.aidcoin.co/" target="_blank" rel="nofollow">AID/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AID_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="AID_buy_BTC">00</div>
                        <div className="ta3" id="AID_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AION_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aion.network/" target="_blank" rel="nofollow">AION/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AION_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="AION_buy_BTC">00</div>
                        <div className="ta3" id="AION_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ANT_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://aragon.one/" target="_blank" rel="nofollow">ANT/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ANT_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="ANT_buy_BTC">00</div>
                <div class="ta3" id="ANT_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ARDR_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.ardorplatform.org/" target="_blank" rel="nofollow">ARDR/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ARDR_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ARDR_buy_BTC">00</div>
                        <div className="ta3" id="ARDR_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ARK_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ark.io/" target="_blank" rel="nofollow">ARK/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ARK_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ARK_buy_BTC">00</div>
                        <div className="ta3" id="ARK_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="AVT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aventus.io/" target="_blank" rel="nofollow">AVT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_AVT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="AVT_buy_BTC">00</div>
                        <div className="ta3" id="AVT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCD_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://btcd.io/" target="_blank" rel="nofollow">BCD/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCD_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="BCD_buy_BTC">00</div>
                        <div className="ta3" id="BCD_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BCH_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.bitcoincash.org/" target="_blank" rel="nofollow">BCH/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BCH_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="BCH_buy_BTC">00</div>
                        <div className="ta3" id="BCH_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTM_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://bytom.io/" target="_blank" rel="nofollow">BTM/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTM_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="BTM_buy_BTC">00</div>
                        <div className="ta3" id="BTM_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTG_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitcoingold.org/" target="_blank" rel="nofollow">BTG/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTG_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="BTG_buy_BTC">00</div>
                        <div className="ta3" id="BTG_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="BTS_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://bitshares.org/" target="_blank" rel="nofollow">BTS/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_BTS_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="BTS_buy_BTC">00</div>
                        <div className="ta3" id="BTS_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="CFI_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://cofound.it/" target="_blank" rel="nofollow">CFI/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_CFI_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="CFI_buy_BTC">00</div>
                <div class="ta3" id="CFI_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="CMT_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.cybermiles.io/" target="_blank" rel="nofollow">CMT/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_CMT_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="CMT_buy_BTC">00</div>
                <div class="ta3" id="CMT_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="CND_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://cindicator.com/" target="_blank" rel="nofollow">CND/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_CND_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="CND_buy_BTC">00</div>
                        <div className="ta3" id="CND_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DADI_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://dadi.cloud/en/" target="_blank" rel="nofollow">DADI/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DADI_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="DADI_buy_BTC">00</div>
                        <div className="ta3" id="DADI_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DASH_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.dash.org/" target="_blank" rel="nofollow">DASH/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DASH_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="DASH_buy_BTC">00</div>
                        <div className="ta3" id="DASH_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DATA_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.streamr.com/" target="_blank" rel="nofollow">DATA/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DATA_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="DATA_buy_BTC">00</div>
                        <div className="ta3" id="DATA_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DCR_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.decred.org/" target="_blank" rel="nofollow">DCR/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DCR_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="DCR_buy_BTC">00</div>
                <div class="ta3" id="DCR_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DGB_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.digibyte.io/" target="_blank" rel="nofollow">DGB/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DGB_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="DGB_buy_BTC">00</div>
                        <div className="ta3" id="DGB_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DGD_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://digix.global/" target="_blank" rel="nofollow">DGD/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DGD_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="DGD_buy_BTC">00</div>
                        <div className="ta3" id="DGD_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="DOGE_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://dogecoin.com/" target="_blank" rel="nofollow">DOGE/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_DOGE_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="DOGE_buy_BTC">00</div>
                        <div className="ta3" id="DOGE_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DRGN_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://dragonchain.com/" target="_blank" rel="nofollow">DRGN/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DRGN_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="DRGN_buy_BTC">00</div>
                <div class="ta3" id="DRGN_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="DTH_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="http://dether.io/" target="_blank" rel="nofollow">DTH/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_DTH_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="DTH_buy_BTC">00</div>
                <div class="ta3" id="DTH_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="EDO_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://eidoo.io/" target="_blank" rel="nofollow">EDO/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_EDO_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="EDO_buy_BTC">00</div>
                        <div className="ta3" id="EDO_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ELF_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://aelf.io/" target="_blank" rel="nofollow">ELF/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ELF_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ELF_buy_BTC">00</div>
                        <div className="ta3" id="ELF_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="EMC2_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.emc2.foundation/" target="_blank" rel="nofollow">EMC2/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_EMC2_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="EMC2_buy_BTC">00</div>
                <div class="ta3" id="EMC2_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ENG_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://enigma.co/" target="_blank" rel="nofollow">ENG/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ENG_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="ENG_buy_BTC">00</div>
                <div class="ta3" id="ENG_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="EOS_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://eos.io/" target="_blank" rel="nofollow">EOS/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_EOS_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="EOS_buy_BTC">00</div>
                        <div className="ta3" id="EOS_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETC_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ethereumclassic.org/" target="_blank" rel="nofollow">ETC/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETC_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ETC_buy_BTC">00</div>
                        <div className="ta3" id="ETC_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ETH_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.ethereum.org/" target="_blank" rel="nofollow">ETH/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ETH_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ETH_buy_BTC">00</div>
                        <div className="ta3" id="ETH_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ETHOS_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.ethos.io/" target="_blank" rel="nofollow">ETHOS/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ETHOS_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="ETHOS_buy_BTC">00</div>
                <div class="ta3" id="ETHOS_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="FUN_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://funfair.io/" target="_blank" rel="nofollow">FUN/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_FUN_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="FUN_buy_BTC">00</div>
                        <div className="ta3" id="FUN_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="GAS_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://neo.org/" target="_blank" rel="nofollow">GAS/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_GAS_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="GAS_buy_BTC">00</div>
                <div class="ta3" id="GAS_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="GNT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://golem.network/" target="_blank" rel="nofollow">GNT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_GNT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="GNT_buy_BTC">00</div>
                        <div className="ta3" id="GNT_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="GXS_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://gxs.gxb.io/" target="_blank" rel="nofollow">GXS/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_GXS_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="GXS_buy_BTC">00</div>
                <div class="ta3" id="GXS_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="HSR_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://h.cash/" target="_blank" rel="nofollow">HSR/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_HSR_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="HSR_buy_BTC">00</div>
                <div class="ta3" id="HSR_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ICX_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://icon.foundation/" target="_blank" rel="nofollow">ICX/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ICX_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ICX_buy_BTC">00</div>
                        <div className="ta3" id="ICX_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="IOTA_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.iota.org/" target="_blank" rel="nofollow">IOTA/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_IOTA_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="IOTA_buy_BTC">00</div>
                        <div className="ta3" id="IOTA_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="IOST_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://iost.io/" target="_blank" rel="nofollow">IOST/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_IOST_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="IOST_buy_BTC">00</div>
                <div class="ta3" id="IOST_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="KMD_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://komodoplatform.com/" target="_blank" rel="nofollow">KMD/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_KMD_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="KMD_buy_BTC">00</div>
                <div class="ta3" id="KMD_sell_BTC">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="KNC_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://kyber.network/" target="_blank" rel="nofollow">KNC/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_KNC_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="KNC_buy_BTC">00</div>
                <div class="ta3" id="KNC_sell_BTC">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="LOOM_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://loomx.io/" target="_blank" rel="nofollow">LOOM/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_LOOM_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="LOOM_buy_BTC">00</div>
                <div class="ta3" id="LOOM_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LRC_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://loopring.org/" target="_blank" rel="nofollow">LRC/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LRC_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="LRC_buy_BTC">00</div>
                        <div className="ta3" id="LRC_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LSK_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://lisk.io/" target="_blank" rel="nofollow">LSK/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LSK_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="LSK_buy_BTC">00</div>
                        <div className="ta3" id="LSK_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="LTC_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://litecoin.com/" target="_blank" rel="nofollow">LTC/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_LTC_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="LTC_buy_BTC">00</div>
                        <div className="ta3" id="LTC_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MAID_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://maidsafe.net/" target="_blank" rel="nofollow">MAID/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MAID_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="MAID_buy_BTC">00</div>
                <div class="ta3" id="MAID_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="MNA_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://decentraland.org/" target="_blank" rel="nofollow">MANA/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_MNA_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="MNA_buy_BTC">00</div>
                        <div className="ta3" id="MNA_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="MITH_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://mith.io/" target="_blank" rel="nofollow">MITH/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_MITH_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="MITH_buy_BTC">00</div>
                        <div className="ta3" id="MITH_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MKR_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://makerdao.com/" target="_blank" rel="nofollow">MKR/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MKR_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="MKR_buy_BTC">00</div>
                <div class="ta3" id="MKR_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="MTN_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                   <div class="txt">
                      <a href="https://medicalchain.com/en/" target="_blank" rel="nofollow">MTN/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_MTN_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="MTN_buy_BTC">00</div>
                <div class="ta3" id="MTN_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="NANO_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://nano.org/en" target="_blank" rel="nofollow">NANO/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_NANO_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="NANO_buy_BTC">00</div>
                <div class="ta3" id="NANO_sell_BTC">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="NAS_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://nebulas.io" target="_blank" rel="nofollow">NAS/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_NAS_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="NAS_buy_BTC">00</div>
                <div class="ta3" id="NAS_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NCASH_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nucleus.vision/" target="_blank" rel="nofollow">NCASH/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NCASH_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="NCASH_buy_BTC">00</div>
                        <div className="ta3" id="NCASH_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NEO_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://neo.org/" target="_blank" rel="nofollow">NEO/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NEO_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="NEO_buy_BTC">00</div>
                        <div className="ta3" id="NEO_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NXS_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nexusearth.com/" target="_blank" rel="nofollow">NXS/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NXS_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="NXS_buy_BTC">00</div>
                        <div className="ta3" id="NXS_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="NXT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nxtplatform.org/" target="_blank" rel="nofollow">NXT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_NXT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="NXT_buy_BTC">00</div>
                        <div className="ta3" id="NXT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="OMG_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://omisego.network/" target="_blank" rel="nofollow">OMG/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_OMG_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="OMG_buy_BTC">00</div>
                        <div className="ta3" id="OMG_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ONT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ont.io/" target="_blank" rel="nofollow">ONT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ONT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ONT_buy_BTC">00</div>
                        <div className="ta3" id="ONT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="PAY_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.tenx.tech/" target="_blank" rel="nofollow">PAY/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_PAY_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="PAY_buy_BTC">00</div>
                        <div className="ta3" id="PAY_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="PIVX_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://pivx.org/" target="_blank" rel="nofollow">PIVX/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_PIVX_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="PIVX_buy_BTC">00</div>
                        <div className="ta3" id="PIVX_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="POWR_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://powerledger.io/" target="_blank" rel="nofollow">POWR/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_POWR_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="POWR_buy_BTC">00</div>
                        <div className="ta3" id="POWR_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="PPT_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://populous.world/index.html" target="_blank" rel="nofollow">PPT/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_PPT_BTC"></div>
                  </div>
               </div>
              </div>
              <div class="ta">
                <div class="ta23" id="PPT_buy_BTC">00</div>
                <div class="ta3" id="PPT_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="QASH_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://liquid.plus/" target="_blank" rel="nofollow">QASH/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_QASH_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="QASH_buy_BTC">00</div>
                <div class="ta3" id="QASH_sell_BTC">00</div>
              </div>
            </li>
            <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="QSP_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://quantstamp.com/" target="_blank" rel="nofollow">QSP/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_QSP_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="QSP_buy_BTC">00</div>
                <div class="ta3" id="QSP_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="QTUM_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://qtum.org/" target="_blank" rel="nofollow">QTUM/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_QTUM_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="QTUM_buy_BTC">00</div>
                        <div className="ta3" id="QTUM_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RCN_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ripiocredit.network/" target="_blank" rel="nofollow">RCN/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RCN_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="RCN_buy_BTC">00</div>
                        <div className="ta3" id="RCN_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RDD_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://reddcoin.com/" target="_blank" rel="nofollow">RDD/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RDD_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="RDD_buy_BTC">00</div>
                        <div className="ta3" id="RDD_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="RDN_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://raiden.network/" target="_blank" rel="nofollow">RDN/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_RDN_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="RDN_buy_BTC">00</div>
                <div class="ta3" id="RDN_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="REP_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://www.augur.net/" target="_blank" rel="nofollow">REP/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_REP_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="REP_buy_BTC">00</div>
                        <div className="ta3" id="REP_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="REQ_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://request.network/#/" target="_blank" rel="nofollow">REQ/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_REQ_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="REQ_buy_BTC">00</div>
                <div class="ta3" id="REQ_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="RLC_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://iex.ec/" target="_blank" rel="nofollow">RLC/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_RLC_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="RLC_buy_BTC">00</div>
                        <div className="ta3" id="RLC_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SALT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.saltlending.com/" target="_blank" rel="nofollow">SALT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SALT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="SALT_buy_BTC">00</div>
                        <div className="ta3" id="SALT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SAN_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://santiment.net/" target="_blank" rel="nofollow">SAN/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SAN_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="SAN_buy_BTC">00</div>
                        <div className="ta3" id="SAN_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SC_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://sia.tech/" target="_blank" rel="nofollow">SC/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SC_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="SC_buy_BTC">00</div>
                        <div className="ta3" id="SC_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="SKY_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.skycoin.net/" target="_blank" rel="nofollow">SKY/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_SKY_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="SKY_buy_BTC">00</div>
                <div class="ta3" id="SKY_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SNGLS_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://singulardtv.com/" target="_blank" rel="nofollow">SNGLS/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SNGLS_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="SNGLS_buy_BTC">00</div>
                        <div className="ta3" id="SNGLS_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SNT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://status.im/" target="_blank" rel="nofollow">SNT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SNT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="SNT_buy_BTC">00</div>
                        <div className="ta3" id="SNT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="STEEM_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://steem.io/" target="_blank" rel="nofollow">STEEM/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_STEEM_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="STEEM_buy_BTC">00</div>
                        <div className="ta3" id="STEEM_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="STORJ_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://storj.io/" target="_blank" rel="nofollow">STORJ/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_STORJ_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="STORJ_buy_BTC">00</div>
                <div class="ta3" id="STORJ_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="STRAT_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://stratisplatform.com/" target="_blank" rel="nofollow">STRAT/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_STRAT_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="STRAT_buy_BTC">00</div>
                        <div className="ta3" id="STRAT_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="SYS_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="http://www.syscoin.org" target="_blank" rel="nofollow">SYS/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_SYS_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="SYS_buy_BTC">00</div>
                        <div className="ta3" id="SYS_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="THETA_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.thetatoken.org/" target="_blank" rel="nofollow">THETA/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_THETA_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="THETA_buy_BTC">00</div>
                <div class="ta3" id="THETA_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TNB_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tnb.fund/" target="_blank" rel="nofollow">TNB/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TNB_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="TNB_buy_BTC">00</div>
                        <div className="ta3" id="TNB_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="TRX_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://tron.network/index?lng=en" target="_blank" rel="nofollow">TRX/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_TRX_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="TRX_buy_BTC">00</div>
                        <div className="ta3" id="TRX_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="WAVE_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://wavesplatform.com/" target="_blank" rel="nofollow">WAVE/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_WAVE_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="WAVE_buy_BTC">00</div>
                        <div className="ta3" id="WAVE_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="WTC_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://www.waltonchain.org/" target="_blank" rel="nofollow">WTC/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_WTC_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="WTC_buy_BTC">00</div>
                <div class="ta3" id="WTC_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XEM_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://nem.io/" target="_blank" rel="nofollow">XEM/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XEM_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="XEM_buy_BTC">00</div>
                        <div className="ta3" id="XEM_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XLM_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.stellar.org/" target="_blank" rel="nofollow">XLM/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XLM_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="XLM_buy_BTC">00</div>
                        <div className="ta3" id="XLM_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="XMR_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://getmonero.org/" target="_blank" rel="nofollow">XMR/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_XMR_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="XMR_buy_BTC">00</div>
                <div class="ta3" id="XMR_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XRP_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://ripple.com/" target="_blank" rel="nofollow">XRP/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XRP_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="XRP_buy_BTC">00</div>
                        <div className="ta3" id="XRP_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="XVG_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://vergecurrency.com/" target="_blank" rel="nofollow">XVG/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_XVG_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="XVG_buy_BTC">00</div>
                        <div className="ta3" id="XVG_sell_BTC">00</div>
                      </div>
                    </li>
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ZEC_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://z.cash/" target="_blank" rel="nofollow">ZEC/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ZEC_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="ZEC_buy_BTC">00</div>
                <div class="ta3" id="ZEC_sell_BTC">00</div>
              </div>
            </li> */}
                    {/* <li>
              <div class="ta1">
                <div class="image">
                  <div class="img" id="ZEN_image_BTC"></div>
                </div>
                <div class="tooltip tooltip--indis" data-type="indis">
                  <div class="tooltip__trigger" role="tooltip">
                    <div class="txt">
                      <a href="https://zencash.com/" target="_blank" rel="nofollow">ZEN/BTC</a>
                    </div>
                  </div>
                  <div class="tooltip__base">
                    <svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                      <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z"/>
                    </svg>
                    <div class="tooltip__content" id="info-indis_ZEN_BTC"></div>
                  </div>
                </div>
              </div>
              <div class="ta">
                <div class="ta23" id="ZEN_buy_BTC">00</div>
                <div class="ta3" id="ZEN_sell_BTC">00</div>
              </div>
            </li> */}
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ZIL_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://www.zilliqa.com/" target="_blank" rel="nofollow">ZIL/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ZIL_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ZIL_buy_BTC">00</div>
                        <div className="ta3" id="ZIL_sell_BTC">00</div>
                      </div>
                    </li>
                    <li>
                      <div className="ta1">
                        <div className="image">
                          <div className="img" id="ZRX_image_BTC" />
                        </div>
                        <div className="tooltip tooltip--indis" data-type="indis">
                          <div className="tooltip__trigger" role="tooltip">
                            <div className="txt">
                              <a href="https://0xproject.com/" target="_blank" rel="nofollow">ZRX/BTC</a>
                            </div>
                          </div>
                          <div className="tooltip__base">
                            <svg className="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
                              <path d="M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z" />
                            </svg>
                            <div className="tooltip__content" id="info-indis_ZRX_BTC" />
                          </div>
                        </div>
                      </div>
                      <div className="ta">
                        <div className="ta23" id="ZRX_buy_BTC">00</div>
                        <div className="ta3" id="ZRX_sell_BTC">00</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*BTC Market End*/}
          </div>
        </div>
        <div className="clr" />
        <div className="feel_secure">
          <div className="main_container">
            <div className="feel_secure_top"> <img src={require("./images/icon2.jpg")} alt="Crypto Currency Exchange" />
              <h2>Feel Secure with <strong>ZECOEX</strong></h2>
              <div className="txt2">Risk Management Strategy</div>
              <div className="clr" />
              <ul>
                <li>
                  <div className="img"><img src="images/icona.png" alt="Crypto Currency Exchange" /></div>
                  <h3>Technology</h3>
                  <div className="txt">We keep your data safe with technology measures such Web Application Firewall, Data Encryption at Rest &amp; in Motion, Captcha, 2FA, Threat and Anomaly Detection Tools.</div>
                </li>
                <li>
                  <div className="img"><img src="images/iconb.png" alt="Crypto Currency Exchange in India" /></div>
                  <h3>Regulations</h3>
                  <div className="txt">We comply with local laws and regulations including KYC, AML. We are also taking necessary steps to comply with GDPR and other Data Protection guidelines of various governments.</div>
                </li>
                <li>
                  <div className="img"><img src="images/iconc.png" alt="Crypto Currency Exchange in India" /></div>
                  <h3>Cold Wallet</h3>
                  <div className="txt">We keep your <strong>crypto funds</strong> safe in <strong>cold wallet</strong> in an offline environment, away from the internet.</div>
                </li>
              </ul>
              <div className="clr" />
              <h3 className="disclaimer">Disclaimer</h3>
              <div className="txt">Investments in <strong>crypto assets</strong> are subject to market risks. Please visit the official website of coin and analyse carefully before investing.</div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="main_container">
            <ul>
              <li><div className="numscroller" data-slno={1} data-min={0} data-max={100000} data-delay={500} data-increment={500}>0</div><span>Customers</span></li>
              <li><div className="numscroller" data-slno={2} data-min={0} data-max={250} data-delay={10} data-increment={5}>0</div><span>PAIRS</span></li>
              <li><div className="numscroller">4</div><span>FIAT</span></li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <div className="main_container">
            <div className="list">
              <h3>Explore</h3>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="http://blog.zecoex.com/">Blog</a></li>
                <li><a href="about-crypto.html">About Cryptos</a></li>
                <li><a href="videos.html">Videos</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="support.html">Support</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="add-a-coin.html">Add a Coin</a></li>
              </ul>
            </div>
            <div className="list">
              <h3>Policies</h3>
              <ul>
                <li><a href="fees.html">Fees</a></li>
                <li><a href="terms-of-use.html">Terms of Use</a></li>
                <li><a href="aml-policy.html">AML Policy</a></li>
                <li><a href="kyc-policy.html">KYC Policy</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="anti-spam-policy.html">Anti-Spam Policy</a></li>
                <li><a href="p2p.html">P2P</a></li>
              </ul>
            </div>
            <div className="list">
              <h3>Contact Us</h3>
              <a href="mailto:info@zecoex.com">info@zecoex.com</a><br />OR<br />Whatsapp Support Available <br /><br />
            </div>
            <div className="clr" />
            <div className="social">
              <a href="https://t.me/zecoexcryptoassetexchange" target="_blank"><img alt="Zecoex Telegram Channel" src="images/Telegram.png" /></a>
              <a href="https://www.facebook.com/ZecoexFintechLimited/" target="_blank"><img alt="Zecoex Facebook" src="images/Facebook.png" /></a>
              <a href="https://plus.google.com/u/0/+ZECOEXTECHSERVEPVTLTD" target="_blank"><img alt="Zecoex Google" src="images/GooglePlus.png" /></a>
              <a href="https://www.instagram.com/zecoex_fintech/" target="_blank"><img alt="Zecoex Instagram" src="images/Instagram.png" /></a>
              <a href="https://www.linkedin.com/in/zecoex-fintech-limited-b4920b150/" target="_blank"><img alt="Zecoex LinkedIN" src="images/LinkedIN.png" /></a>
              <a href="https://in.pinterest.com/ZecoexFintechLimited/" target="_blank"><img alt="Zecoex Pinterest" src="images/pinterest.png" /></a>
              <a href="https://twitter.com/ZecoexFintech" target="_blank"><img alt="Zecoex Twitter" src="images/Twitter.png" /></a>
              <a href="https://www.youtube.com/channel/UCrERGT1EHi0jvEGTFcsyKTg/videos?disable_polymer=1" target="_blank"><img alt="Zecoex Youtube" src="images/YouTube.png" /></a>
              <a href="https://medium.com/@ZecoexFintech" target="_blank"><img src="images/Medium.png" width="5.5%" /></a>
            </div>
            <div className="foo">© Copyright 2018 <strong>Zecoex</strong></div>
          </div>
        </div>
      </div>
   
        </div>
        </Main>
        )
    }
}