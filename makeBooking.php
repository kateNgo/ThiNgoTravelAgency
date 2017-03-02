
<style>
<!--
.bookingImg {
	width: 2.5rem;
	height: 2.5rem;
}
-->
</style>
<?php
include 'globals.php';
$value = $_GET ['selectedRouteNo'];

$link = mysql_connect ( "rerun", "potiro", "pcXZb(kL" );

if (! $link) {
	die ( "can not cennect db server" );
	echo "Can not connect to database server";
} else {
	mysql_select_db ( "poti", $link );
	$sql_str = " select DISTINCT route_no, from_city, to_city, price  from flights where route_no=" . $value;
	
	$result = mysql_query ( $sql_str );
	$row = mysql_fetch_row ( $result );
	$routeNo = $row [0];
	$fromCity = $row [1];
	$toCity = $row [2];
	$price = $row [3];
	
	?>
<div class="col-sm-8 col-sm-offset-2">
	<div class="well row" style="margin-top: 5%;">
		<h3 style="margin-bottom: 20px; font-weight: bold;">Booking flight</h3>
		<h4 style="margin-bottom: 10px;">
			From &nbsp;<img src="images/departure_icon.png" class="bookingImg"
				alt="Logo" width="auto" height="30%" />&nbsp; <?php echo $fromCity;?> &nbsp;to &nbsp;<img
				src="images/arrival_icon.png" alt="Logo" width="auto"
				class="bookingImg" height="30%" />&nbsp;<?php echo $toCity;?>&nbsp; - Fare <?php echo "$".$price;?> </h4>

		<form role="form" id="makeBookingForm" class="shake">
		
			<table class="table">
				<caption>
					<img src="images/person.jpg" alt="Logo" class="bookingImg"
						width="auto" height="30%" />Who's going?
				</caption>
				<thead>
					<tr>
						<th>Select ticket</th>
						<th class='centerText'>Child</th>
						<th class='centerText'>Adult</th>
						<th class='centerText'>Wheelchair</th>
						<th class='centerText'>Special Diet</th>
					</tr>
				</thead>
				<tbody>
				<?php
	for($i = 1; $i <= 5; $i ++) {
		echo "<tr>
						<td><select name=\"selectTicket" . $i . "\" id=\"selectTicket" . $i . "\" class=\"btn btn-primary dropdown-toggle form-control\"
							data-toggle=\"dropdown\" >";
		for($j = 0; $j < 10; $j ++) {
			echo "<option value='" . $j . "'>" . $j . "</option>";
		}
		echo "</select></td>
						<td class='centerText'><input type=\"radio\" name=\"ticketType" . $i . "\" id=\"child" . $i . "\" value=\"child" . $i . "\"/></td>
						<td class='centerText'><input type=\"radio\" name=\"ticketType" . $i . "\" id=\"adult" . $i . "\" value=\"adult" . $i . "\"/></td>
						<td class='centerText'><input type=\"checkbox\" name=\"wheelchair" . $i . "\" id=\"wheelchair" . $i . "\" value='wheelchair" . $i . "'/></td>
						<td class='centerText'><input type=\"checkbox\" name=\"specialDiet" . $i . "\" id=\"specialDiet" . $i . "\" value='specialDiet" . $i . "' /></td>
					</tr>";
	} //for($i = 1; $i <= 5; $i ++) {
	?>
					
					<tr>
						<td><div id="totalTickets"></div></td>
						<td id="totalChild"></td>
						<td id="totalAdult"></td>
						<td id="totalWheelchair"></td>
						<td id="totalSpecialDiet"></td>
					</tr>
				</tbody>
			</table>
			
				<button id="addToBookingsBtn"
					style="padding: 5px; margin-right: 10px; margin-left: 8px;"
					class="btn btn-success btn-lg pull-left ">Add to Bookings</button>
				<div id="dialog-3-makeBooking" title="Add to Booking!"></div>
			<?php 
			echo "<input type='text' hidden name='routeNo' value='".$routeNo."'>";
			echo "<input type='text' hidden name='fromCity' value='".$fromCity."'>";
			echo "<input type='text' hidden name='toCity' value='".$toCity."'>";
			echo "<input type='text' hidden name='price' value='".$price."'>";
			?>
		</form>
	</div>
</div>
<?php
} // if (! $link) else
?>
<script type="text/javascript">


</script>
