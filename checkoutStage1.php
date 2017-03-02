<?php
include 'globals.php';
session_start ();
$allBookedFlights = $_SESSION ['allBookedFlights'];

echo "<p>".$allBookedFlights[0]->numberSpecialDiet;
?>
<div class="col-sm-6 col-sm-offset-3">
	<div class="well row" style="margin-top: 5%;">
		<h3 style="margin-bottom: 20px; font-weight: bold;">Checkout - Stage 1</h3>
		<form role="form" id="stage1Form" data-toggle="validator"
				class="shake">
			<div class="row">
				<div class="form-group col-sm-4">
					<label for="insideAustralia" class="h4">Inside Australia</label> </div>
				<div class="form-group col-sm-8 radio "><input class="pull-left"
						type="checkbox"  id="insideAustralia" name="insideAustralia" value="1" checked></div>
				
			</div>
				
			
			<div class="row">
				<div class="form-group col-sm-6">
					<label for="firstName" class="h4">First name <span class="redAsterisks">*</span></label> <input
						type="text" class="form-control" id="firstName"
						placeholder="First name" required
						data-error="first name is required">
					<div class="help-block with-errors"></div>
				</div>
				<div class="form-group col-sm-6">
					<label for="lastName" class="h4">Last name <span class="redAsterisks">*</span> </label> <input
						type="text" class="form-control" id="lastName"
						placeholder="Last name" required
						data-error="last name is required">
					<div class="help-block with-errors"></div>
				</div>
			</div>
			<div class="row">
					<div class="form-group col-sm-6">
						<label for="addressLine1" class="h4">Address Line 1 <span class="redAsterisks">*</span></label> <input
							type="text" class="form-control" id="addressLine1"
							placeholder="Address Line 1" required data-error="Address is required">
						<div class="help-block with-errors"></div>
					</div>
					<div class="form-group col-sm-6">
						<label for="addressLine2" class="h4">Address Line 2</label> <input
							type="text" class="form-control" id="addressLine2"
							placeholder="Address Line 2" >
						<div class="help-block with-errors"></div>
					</div>
			</div>
			<div class="row">
					<div class="form-group col-sm-6">
						<label for="suburb" class="h4">Suburb <span class="redAsterisks">*</span></label> <input
							type="text" class="form-control" id="suburb"
							placeholder="suburb" required data-error="suburb is required">
						<div class="help-block with-errors"></div>
					</div>
					<div class="form-group col-sm-6">
						<label for="state" class="h4" id="stateLabel">State <span class="redAsterisks">*</span></label>
						 <select class="btn btn-primary dropdown-toggle form-control"
								data-toggle="dropdown" name="stateList" id="stateList"
								data-error="State is required">
								<option value="NSW">New South Wales</option>
								<option value="ACT">Australian Capital Territory </option>
								<option value="NT">Northern Territory </option>
								<option value="SA">South Australia</option>
								<option value="VIC">Victoria</option>
								<option value="QDL">Queensland</option>
								<option value="TAS">Tasmania  </option>
								<option value="WA">Western Australia </option>
							</select>
							<input 	type="text" class="form-control" id="stateText" name="stateText" 
							placeholder="State" >
						<div class="help-block with-errors"></div>
					</div>
			</div>
			<div class="row">
					<div class="form-group col-sm-6">
						<label for="postcode" class="h4" id="postcodeLabel">Postcode <span class="redAsterisks">*</span></label> <input
							type="text" class="form-control" id="postcode"
							placeholder="Postcode" required data-error="Postcode is required">
						<div class="help-block with-errors"></div>
					</div>
					<div class="form-group col-sm-6">
						<label for="Country" class="h4">Country<span class="redAsterisks">*</span></label><input
							type="text" class="form-control" id="country" value="Australia"
							placeholder="Country" required data-error="Country is required">
						<div class="help-block with-errors"></div>
					</div>
			</div>
				<div class="row">
				<div class="form-group col-sm-6">
						<label for="email" class="h4">Email <span class="redAsterisks">*</span></label> <input type="email"
							class="form-control" id="email" placeholder="Enter email"
							required>
						<div class="help-block with-errors"></div>
					</div>
					<div class="form-group col-sm-6">
						<label for="mobilePhone" class="h4">Mobile phone</label> <input
							type="text" class="form-control" id="mobilePhone"
							placeholder="Mobile Phone">
					</div>
					
				</div>
				<div class="row">
					<div class="form-group col-sm-6">
						<label for="businessPhone" class="h4">Business Phone</label> <input
							type="text" class="form-control" id="businessPhone"
							placeholder="Business Phone">
					</div>
					<div class="form-group col-sm-6">
						<label for="workPhone" class="h4">Work Phone </label> <input type="text"
							class="form-control" id="workPhone" placeholder="Work Phone">
						<div class="help-block with-errors"></div>
					</div>
				</div>
				<button  id="continueStage1Btn" type="submit"
					class="btn btn-success btn-lg pull-right ">Stage 2 - Payment Details</button>
				<div id="msgSubmit" class="h3 text-center hidden"></div>
				<div id="dialog-7-checkoutStage1" title="Payment Details"></div>
				<div class="clearfix"></div>
				
			</form>
	</div>
</div>
<script>

</script>