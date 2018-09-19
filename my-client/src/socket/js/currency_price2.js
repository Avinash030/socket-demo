
$(document).ready(function(){

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/inr_market_price.php", success: function(result){

      var obj = JSON.parse(result);

        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = obj[i].buy_price;
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = obj[i].sell_price;
      
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

   setInterval(curencyvalue, 10000);
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

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = obj[i].buy_price;
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = obj[i].sell_price;
      

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


 $('#usdt_market').click(function(){

  

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/usdt_market_price.php", success: function(result){

      var obj = JSON.parse(result);
       
       //console.log(obj);
        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = obj[i].buy_price;
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = obj[i].sell_price;
      
         document.getElementById(obj[i].currency_symbol+"_image_"+obj[i].fiat_symbol).innerHTML = '<img src="images/icons/'+obj[i]["currency_symbol"]+'.png">';

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
      }

    }

});

 setInterval(usdt_price, 10000);
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

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = obj[i].buy_price;
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = obj[i].sell_price;
      

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
    }
    }
  });
 };

 $('#btc_market').click(function(){

  

$.ajax({url: "https://www.tradedesk.zecoex.com/currency_api/btc_market_price.php", success: function(result){

      var obj = JSON.parse(result);
       
       console.log(obj);
        for (var i = 0; i <= obj.length; i++) {

          var inr_buy = document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML;
          var inr_sell = document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML;

          document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).style.color = "green";
          document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).style.color = "green";

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = obj[i].buy_price;
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = obj[i].sell_price;
      
         document.getElementById(obj[i].currency_symbol+"_image_"+obj[i].fiat_symbol).innerHTML = '<img src="images/icons/'+obj[i]["currency_symbol"]+'.png">';

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
      }

    }

});

 setInterval(btc_price, 10000);
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

         document.getElementById(obj[i].currency_symbol+"_buy_"+obj[i].fiat_symbol).innerHTML = obj[i].buy_price;
         document.getElementById(obj[i].currency_symbol+"_sell_"+obj[i].fiat_symbol).innerHTML = obj[i].sell_price;
      

         document.getElementById("info-indis_"+obj[i].currency_symbol+"_"+obj[i].fiat_symbol).innerHTML= '<div class="col-md-12"><div class="col-md-12"><strong style="color: #5ee132;">Circulating Supply :</strong> '+obj[i].circulating_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Total Supply : </strong> '+obj[i].total_supply+'</div><div class="col-md-12"><strong style="color: #5ee132;"> Max Supply : </strong> '+obj[i].max_supply+'</div><div class="col-md-12"> <strong style="color: #5ee132;">Market Cap : </strong> '+obj[i].market_cap+'</div><div class="col-md-12"><strong style="color: #5ee132;">Percent Change in 24h :</strong> '+ obj[i].percent_change_24h+' %</div><div class="col-md-12"><strong style="color: #5ee132;"> Percent Change in 7d :</strong> '+obj[i].percent_change_7d+' %</div></div>';
    }
    }
  });
 };
