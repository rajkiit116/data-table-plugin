<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>jQuery, Ajax and Servlet/JSP integration example</title>

<script src="http://code.jquery.com/jquery-1.10.2.js"
	type="text/javascript"></script>
<script src="js/app-ajax.js" type="text/javascript"></script>
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" >
  <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
 <script src= "https://cdn.datatables.net/scroller/1.4.4/css/scroller.dataTables.min.css"></script>
  <script>
/*   $(document).ready(function(){
	    $('#example').DataTable();
	}); */
  </script>
  
</head>
<body>
	<strong>Ajax Response</strong>:
	<div id="ajaxGetUserServletResponse"></div>
	
	 <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>name</th>
                <th>rank</th>
                <th>price_usd</th>
                <th>price_btc</th>
                <th>24h_volume_usd</th>
                <th>market_cap_usd</th>
                <th>available_supply</th>
                <th>total_supply</th>
                <th>max_supply</th>
                <th>percent_change_1h</th>
                <th>percent_change_24h</th>
                <th>percent_change_7d</th>
                <th>last_updated</th>
                
            </tr>
        </thead>

    </table>
	
	
	
	
</body>
</html>