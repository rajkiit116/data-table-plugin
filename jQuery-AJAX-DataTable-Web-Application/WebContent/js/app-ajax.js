
$(document).ready(function() {
	
	var example_table = $('#example').DataTable({
		  'ajax': {
		    "type"   : "GET",
		    "url"    : 'https://api.coinmarketcap.com/v1/ticker/',
		    "dataSrc": ""
		  },
		  'columns': [
			  {"data" : "id"},
              {"data" : "name"},
              {"data" : "name"},
              {"data" : "rank"},
              {"data" : "price_usd"},
              {"data" : "price_btc"},
              {"data" : "24h_volume_usd"},
              {"data" : "market_cap_usd"},
              {"data" : "available_supply"},
              {"data" : "total_supply"},
              {"data" : "max_supply"},
              {"data" : "percent_change_1h"},
              {"data" : "percent_change_24h"},
              {"data" : "percent_change_7d"},
              {"data" : "last_updated"}
		  ]
		});
	
	
	
	
/*	$.ajax({
        type: "GET",
        url: "https://api.coinmarketcap.com/v1/ticker/",
        dataType: "json",
        success: function (response) {
		for (var i = 0; i < response.length; i++) {
			$("#ajaxGetUserServletResponse").html(response[i].id);
		}
        var table_data = JSON.parse(response);
        var table = $('#example').DataTable( {
            data: table_data
});
        },
        error: function (response) {
            var responseTextObject = jQuery.parseJSON(response.responseText);
        }
    });*/
	
  /*  $.ajax({url: "https://api.coinmarketcap.com/v1/ticker/", success: function(response){
    	var jsonString = JSON.parse(response);
    	alert(jsonString[0]);
        $("#ajaxGetUserServletResponse").html(jsonString[0]);
    }});*/
	
	/*    $('#example').DataTable( {
    serverSide: true,
    ordering: false,
    searching: false,
    ajax: function ( data, callback, settings ) {
        var out = [];

        for ( var i=data.start, ien=data.start+data.length ; i<ien ; i++ ) {
            out.push( [ i+'-1', i+'-2', i+'-3', i+'-4', i+'-5' ] );
        }

        setTimeout( function () {
            callback( {
                draw: data.draw,
                data: out,
                recordsTotal: 5000000,
                recordsFiltered: 5000000
            } );
        }, 50 );
    },
    scrollY: 200,
    scroller: {
        loadingIndicator: true
    }
} );*/
});