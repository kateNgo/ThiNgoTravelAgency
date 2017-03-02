<?php
?>
<div class="col-sm-6 col-sm-offset-3">
	<div class="well" style="margin-top: 5%;">
		<h3 style="margin-bottom: 30px;">Contact Form</h3>
		<form role="form" id="contactForm" data-toggle="validator"
					class="shake">
					<div class="row">
						<div class="form-group col-sm-6">
							<label for="subject" class="h4">Subject</label> <input type="text"
								class="form-control" id="subject" placeholder="Subject" required
								data-error="Please enter  a subject">
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group col-sm-6">
							<label for="email" class="h4">Email</label> <input type="email"
								class="form-control" id="email" placeholder="Enter email"
								required>
							<div class="help-block with-errors"></div>
						</div>
					</div>
					<div class="row">
						<div class="form-group col-sm-6">
							<label for="firstName" class="h4">First Name</label> <input type="text"
								class="form-control" id="firstName" placeholder="Enter first name" >
							<div class="help-block with-errors"></div>
						</div>
						<div class="form-group col-sm-6">
							<label for="lastName" class="h4">Last Name</label> <input type="text"
								class="form-control" id="lastName" placeholder="Enter last name"
								>
							<div class="help-block with-errors"></div>
						</div>
					</div>
					<div class="form-group">
						<label for="message" class="h4 ">Message</label>
						<textarea id="message" class="form-control" rows="5"
							placeholder="Enter your message" required></textarea>
						<div class="help-block with-errors"></div>
					</div>
					<button type="submit" id="form-submit"
						class="btn btn-success btn-lg pull-right ">Submit</button>
					<div id="msgSubmit" class="h3 text-center hidden"></div>
					<div class="clearfix"></div>
				</form>
	</div>
</div>
<script>


</script>