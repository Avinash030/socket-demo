var curency_value = null;
var usdtprice     = null;
var btcprice      = null;
var trademarket   = null;
$(document).ready(function(){

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/inr_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].buy_price).toFixed(2);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(2);
      
         document.getElementById(obj[i].currency_symbol+"_image_"+obj[i].fiat_symbol).innerHTML = '<img src="images/icons/'+obj[i]["currency_symbol"]+'.png">';

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
      }

    }

});

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/global_currency_api.php?access_key=Zx2ar0as1ad8ss05ps31", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {
          //console.log(obj[i].bitcoin_percentage_of_market_cap);
         document.getElementById("#active_currency").innerHTML = obj[i].active_cryptocurrencies;
         document.getElementById("btc_domains").innerHTML = obj[i].bitcoin_percentage_of_market_cap+'%';
         document.getElementById("total_market").innerHTML = obj[i].total_market_cap;
         document.getElementById("total_volume").innerHTML = obj[i].total_volume_24h;

          
        }
    }
  });

   curency_value = setInterval(curencyvalue, 8000);
   setInterval(globalstats, 10000);

});

function curencyvalue(){

     $.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/inr_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {


          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          if(inr_buy > obj[i].buy_price || inr_sell > obj[i].sell_price){
            document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "red";
            document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "red";
          }
          else{
            document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
            document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";
          }

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].buy_price).toFixed(2);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(2);
      

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
    }
    }
  });
 };


 function globalstats(){

     $.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/global_currency_api.php?access_key=Zx2ar0as1ad8ss05ps31", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {
         //console.log(obj[i].bitcoin_percentage_of_market_cap);
         document.getElementById("#active_currency").innerHTML = obj[i].active_cryptocurrencies;
         document.getElementById("btc_domains").innerHTML = obj[i].bitcoin_percentage_of_market_cap+'%';
         document.getElementById("total_market").innerHTML = obj[i].total_market_cap;
         document.getElementById("total_volume").innerHTML = obj[i].total_volume_24h;
         
        }
    }
  });
 };

$('#inr_market').click(function(){

  clearInterval(trademarket); 
  clearInterval(btcprice);
  clearInterval(usdtprice); 

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/inr_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML =  Number(obj[i].buy_price).toFixed(2);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(2);
      
         document.getElementById(obj[i].currency_symbol+"_image_"+obj[i].fiat_symbol).innerHTML = '<img src="images/icons/'+obj[i]["currency_symbol"]+'.png">';

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
      }

    }

});

 curency_value = setInterval(curencyvalue, 8000);

});

 $('#usdt_market').click(function(){

 clearInterval(trademarket); 
  clearInterval(btcprice);
  clearInterval(curency_value);

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/usdt_market_price.php", success: function(result){

      var obj = JSON.parse(result);
        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].buy_price).toFixed(4);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(4);
      
         document.getElementById(obj[i].currency_symbol+"_image_"+obj[i].fiat_symbol).innerHTML = '<img src="images/icons/'+obj[i]["currency_symbol"]+'.png">';

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
      }

    }

});

     usdtprice = setInterval(usdt_price, 8000);
 });


function usdt_price(){

     $.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/usdt_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {


          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          if(inr_buy > obj[i].buy_price || inr_sell > obj[i].sell_price){
            document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "red";
            document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "red";
          }
          else{
            document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
            document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";
          }

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].buy_price).toFixed(4);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(4);
      

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
    }
    }
  });
 };



 $('#btc_market').click(function(){

  clearInterval(usdtprice); 
  clearInterval(trademarket);
  clearInterval(curency_value);

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/btc_market_price.php", success: function(result){

      var obj = JSON.parse(result);
        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;
          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].buy_price).toFixed(8);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(8);
      
         document.getElementById(obj[i].currency_symbol+"_image_"+obj[i].fiat_symbol).innerHTML = '<img src="images/icons/'+obj[i]["currency_symbol"]+'.png">';

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
      }

    }

});

 btcprice = setInterval(btc_price, 8000);
 });


function btc_price(){

     $.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/btc_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {


          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          if(inr_buy > obj[i].buy_price || inr_sell > obj[i].sell_price){
            document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "red";
            document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "red";
          }
          else{
            document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
            document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";
          }

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].buy_price).toFixed(8);
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = Number(obj[i].sell_price).toFixed(8);
      

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
    }
    }
  });
 };

$('#trade_market').click(function(){

  clearInterval(usdtprice); 
  clearInterval(btcprice);
  clearInterval(curency_value);

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/trade_market_price.php", success: function(result){
      var obj = JSON.parse(result);
        for (var i = 0; i <= obj.length; i++) {
          document.getElementById(obj[i].currency_symbol+"_trade"+obj[i].fiat_id).innerHTML = Number(obj[i].rate).toFixed(8);
          document.getElementById(obj[i].currency_symbol+"_trade"+obj[i].fiat_id+"_image").innerHTML = '<img src="images/icons/'+obj[i].currency_symbol+'.png">';
        }
    }
});
 trademarket = setInterval(trade_market, 8000);
 });


function trade_market(){

     $.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/trade_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {
          var trade = document.getElementById(obj[i].currency_symbol+"_trade"+obj[i].fiat_id).innerHTML;
          if(trade > obj[i].rate){
            document.getElementById(obj[i].currency_symbol+"_trade"+obj[i].fiat_id).style.color = "red";
          }
          else{
            document.getElementById(obj[i].currency_symbol+"_trade"+obj[i].fiat_id).style.color = "green";
          }
            document.getElementById(obj[i].currency_symbol+"_trade"+obj[i].fiat_id).innerHTML = Number(obj[i].rate).toFixed(8);
      

     }
    }
  });
   };