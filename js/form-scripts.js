
 // Menu actions
function homeMenu(){
	$.ajax({
		url : "home.html",
		success : function(result) {
			$("#mainContent").html(result);
		}
	});
}
function searchFlights(){
	$.ajax({
		url : "searchFlights.php",
		success : function(result) {
			$("#mainContent").html(result);
		}
	});
}
function yourBookings(){
	$.ajax({
		url : "yourBookings.php",
		success : function(result) {
			$("#mainContent").html(result);
		}
	});
}
function yourBookings(){
	$.ajax({
		url : "yourBookings.php",
		success : function(result) {
			$("#mainContent").html(result);
		}
	});
}
function contactMenu(){
	$.ajax({
		url : "contact.php",
		success : function(result) {
			$("#mainContent").html(result);
		}
	});
}
// end menu action


$(function(){
	// methods for allBookedFlights
$( "#dialog-4-allBookedFlights" ).dialog({
	modal: true,
    autoOpen: false,
    buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }  
 });
 
 $("#bookMoreFlightsBtn").click(function(e){
	
	 e.preventDefault();
	 console.log("return the users to search option");
	 $.ajax({
			url : "searchFlights.php",
			success : function(result) {
				$("#mainContent").html(result);
			}
	});
 });
 $("#clearAllBookedFlightsBtn").click(function(e){
		 e.preventDefault();
		 console.log("Clear all booked flights");
		 $.ajax({
				url : "clearAllBookedFlights.php",
				success : function(result) {
					$("#mainContent").html(result);
				}
		});
 });
 $("#proceedToCheckoutBtn").click(function(e){
			 e.preventDefault();
			 console.log("proceed booked flights");
			 $.ajax({
					url : "checkoutStage1.php",
					success : function(result) {
						$("#mainContent").html(result);
					}
			});
 });

 
// methods for checkoutStage1
 $( "#dialog-7-checkoutStage1" ).dialog({
		modal: true,
	    autoOpen: false,  
	 });
	var insideAustralia = true;
	createInsideAustralia(true);
	function validatePostcode(postcode){
		var patt =/[^0-9]/;
		if (patt.test(postcode))
			return false;
		if (postcode.length >5 )
			return false;
		return true;
	}
	function validatePhone(phone){
		var patt =/[^0-9 \-]/;
		if (patt.test(phone))
			return false;
		
		return true;
	}
	$("#insideAustralia").change(function(e){
		if (this.checked){
			createInsideAustralia(true);
		}else{
			createInsideAustralia(false);
		}
	});
	$("#stage1Form").validator().on("submit", function (event) {
	    if (event.isDefaultPrevented()) {
	        // handle the invalid form...
	        formError();
	       submitMSG(false, "One or more compulsory fields is blank!");
	    } else {
	        event.preventDefault();
	        if (!validatePostcode($("#postcode").val())){
	        	$("#dialog-7-checkoutStage1").html("<b> Postcode just allows not more than 5 digits!");
		 		$( "#dialog-7-checkoutStage1" ).dialog( "open" );
		 		return false;
	        }
	        if (!validatePhone($("#mobilePhone").val())){
	        	$("#dialog-7-checkoutStage1").html("<b> Invalid Mobile Phone!");
		 		$( "#dialog-7-checkoutStage1" ).dialog( "open" );
		 		return false;
	        }
	        if (!validatePhone($("#businessPhone").val())){
	        	$("#dialog-7-checkoutStage1").html("<b> Invalid Business Phone!");
		 		$( "#dialog-7-checkoutStage1" ).dialog( "open" );
		 		return false;
	        }
	        if (!validatePhone($("#workPhone").val())){
	        	$("#dialog-7-checkoutStage1").html("<b> Invalid Work Phone!");
		 		$( "#dialog-7-checkoutStage1" ).dialog( "open" );
		 		return false;
	        }
	        submitStage1Form();
	        
	    }
	});
	function submitStage1Form(){
		
		var firstName= $("#firstName").val();
		
	    var lastName= $("#lastName").val();
	    var addressLine1= $("#addressLine1").val();
	    var addressLine2= $("#addressLine2").val();
	    var suburb= $("#suburb").val();
	    if (insideAustralia){
	    	var state= $("#stateList").val();
	    }else{
	    	var state= $("#stateText").val();
	    }
	    
	    var country= $("#country").val();
	    var postcode= $("#postcode").val();
	    var email = $("#email").val();
	    var mobilePhone= $("#mobilePhone").val();
	    var businessPhone= $("#businessPhone").val();
	    var workPhone= $("#workPhone").val();
	    var customer = new Object();
	    customer.firstName= firstName;
	    customer.lastName=lastName;
	    customer.addressLine1= addressLine1;
	    customer.addressLine2= addressLine2;
	    customer.suburb=suburb;
	    customer.state = state;
	    customer.country=country;
	    customer.postcode=postcode;
	    customer.email=email;
	    customer.mobilePhone= mobilePhone;
	    customer.businessPhone=businessPhone;
	    customer.workPhone=workPhone;
	    var jsonStr = JSON.stringify(customer);
	    var urlStr = "checkoutStage2.php?customer="+jsonStr;
		console.log(urlStr);
		$.ajax({
			type: "GET",
			url : urlStr,
			success : function(result) {
				// console.log(result);
				$("#mainContent").html(result);
				// return true;
			},
		     complete: function() {},
		     error: function(xhr, textStatus, errorThrown) {
		       console.log('ajax loading error...'+textStatus);
		       return false;
		     }
		});
	    
	}
	function formError(){
	    $("#stage1Form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	        $(this).removeClass();
	    });
	}
	function submitMSG(valid, msg){
	    if(valid){
	        var msgClasses = "h3 text-center tada animated text-success";
	    } else {
	        var msgClasses = "h3 text-center text-danger";
	    }
	    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	function createInsideAustralia(inside){
		if (inside){
			insideAustralia = true;
			document.getElementById("country").value="Australia";
			document.getElementById("country").disabled = true;
			
			document.getElementById("stateList").style.display="block";
			document.getElementById("stateText").style.display="none";
			$("#stateLabel").html("State <span class='redAsterisks'>*</span>");
			$("#postcodeLabel").html("Postcode <span class='redAsterisks'>*</span>");
			$("#state").attr('required', 'true');
			$("#postcode").attr('required', 'true');
			
		}else{ // outside Australia
			insideAustralia = false;
			document.getElementById("country").disabled = false;
			
			document.getElementById("stateList").style.display="none";
			document.getElementById("stateText").style.display="block";
			$("#stateLabel").html("State ");
			$("#state").removeAttr( "required" );
			$("#postcodeLabel").html("Postcode");
			$("#postcode").removeAttr( "required" );
			
			// $("p").append(
		}
	}
	
	// Mtehods for checkoutStage2
	$( "#dialog-5-checkoutStage2" ).dialog({
		modal: true,
	    autoOpen: false,  
	 });
	$("#reviewBookingBtn").click(function(e){
		 e.preventDefault();
		 var creditCardType=document.querySelector('input[name="creditCardType"]:checked').value;
		 
		 var cardNumber = document.getElementById("cardNumber").value;
		 var expireMonth = parseInt(document.getElementById("expireMonth").value);
		 var expireYear = parseInt(document.getElementById("expireYear").value);
		 
		 if (!validateCardNumber(cardNumber)){
			 $("#dialog-5-checkoutStage2").html("<b> Credit card number just contains 12 digits!");
		 		$( "#dialog-5-checkoutStage2" ).dialog( "open" );
		 		return false;
		 }
		 if (!validateExpire(expireMonth,expireYear)){
			 $("#dialog-5-checkoutStage2").html("<b> Invalid credit card expiry date!");
		 		$( "#dialog-5-checkoutStage2" ).dialog( "open" );
		 		return false;
		 }
		 var urlStr="checkoutStage3.php?creditCardType="+creditCardType+"&cardNumber="+cardNumber+
		 			"&expireMonth="+ expireMonth+ "&expireYear="+ expireYear;
		 $.ajax({
				type: "GET",
				url : "checkoutStage3.php",
				success : function(result) {
					// console.log(result);
					$("#mainContent").html(result);
					// return true;
				},
			     complete: function() {},
			     error: function(xhr, textStatus, errorThrown) {
			       console.log('ajax loading error...'+textStatus);
			       return false;
			     }
			});
	});
	function validateExpire(expireMonth,expireYear){
		if ((expireYear==2016) && (expireMonth<=5)){
			return false;
		}
		return true;
	}


	function validateCardNumber(cardNumber){
		var patt =/[^0-9]/;
		if (patt.test(cardNumber))
			return false;
		if (cardNumber.length!=12)
			return false;
		return true;
	}
	
	// Motheds for checkoutStage3
	$("#confirmPaymentBtn").click(function(e){
		 e.preventDefault();
		 
	$.ajax({
		type: "GET",
		url : "checkoutStage4.php",
		success : function(result) {
			// console.log(result);
			$("#mainContent").html(result);
			// return true;
		},
	  complete: function() {},
	  error: function(xhr, textStatus, errorThrown) {
	    console.log('ajax loading error...'+textStatus);
	    return false;
	  }
	});
	});
	
	// Methods for Contact
	$("#contactForm").validator().on("submit", function (event) {
	    if (event.isDefaultPrevented()) {
	        // handle the invalid form...
	        formError();
	        submitMSG(false, "Did you fill in the form properly?");
	    } else {
	        // everything looks good!
	        event.preventDefault();
	        submitForm();
	    }
	});


	function submitForm(){
	    // Initiate Variables With Form Content
	    var subject = $("#subject").val();
	    var firstName = $("#firstName").val();
	    var lastName = $("#lastName").val();
	    var email = $("#email").val();
	    var message = $("#message").val();

	    $.ajax({
	        type: "POST",
	        url: "contactSent.php",
	        data: "subject=" + subject+ "&firstName=" + firstName+ "&lastName=" + lastName+ "&email=" + email + "&message=" + message,
	        success : function(text){
	            if (text == "success"){
	                formSuccess();
	            } else {
	                formError();
	                submitMSG(false,text);
	            }
	        }
	    });
	}

	function formSuccess(){
	    $("#contactForm")[0].reset();
	    submitMSG(true, "Message Submitted!")
	}

	function formError(){
	    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	        $(this).removeClass();
	    });
	}

	function submitMSG(valid, msg){
	    if(valid){
	        var msgClasses = "h3 text-center tada animated text-success";
	    } else {
	        var msgClasses = "h3 text-center text-danger";
	    }
	    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	// Methods for makeBooking
	var total=0;
	var totalAdult=0;
	var totalWheelchair=0;
	var totalSpecialDiet=0;
	$( "#dialog-3-makeBooking" ).dialog({
		modal: true,
	    autoOpen: false,  
	    buttons: {
	        Ok: function() {
	          $( this ).dialog( "close" );
	        }
	      }
	 });
	 
	 $("#addToBookingsBtn").click(function(e){
		 e.preventDefault();
			
			if (total ==0) {
				$("#dialog-3-makeBooking").html("<b> Please select number of ticket!");
		 		$( "#dialog-3-makeBooking" ).dialog( "open" );
				  
			}else{
				var fromCity = $("input[name=fromCity]").val();
				var toCity = $("input[name=toCity]").val();
				var price = $("input[name=price]").val();
				var routeNo= $("input[name=routeNo]").val();
			    	
				var bookedFlights = createBookingObjects();
				var selectedFlight = makeSelectedFlight(routeNo, fromCity, toCity, price);
				var selectedFlightJsonStr = JSON.stringify(selectedFlight);
				var jsonStr = JSON.stringify(bookedFlights);
							
				var urlStr = "allBookedFlights.php?selectedFlight="+selectedFlightJsonStr;
				console.log(urlStr);
				$.ajax({
					type: "GET",
					url : urlStr,
					success : function(result) {
						// console.log(result);
						$("#mainContent").html(result);
						// return true;
					},
				     complete: function() {console.log('ajax loading success...');},
				     error: function(xhr, textStatus, errorThrown) {
				       console.log('ajax loading error...'+textStatus);
				       return false;
				     }
				});
			}
	 });
	 
	 function makeSelectedFlight(routeNo, fromCity, toCity,price){
		 var selectedFlight = new Object();
		 selectedFlight.routeNo=routeNo;
		 selectedFlight.fromCity=fromCity;
		 selectedFlight.toCity = toCity;
		 selectedFlight.price=price;
		 selectedFlight.numberTicket=total;
		 selectedFlight.numberChildren= total-totalAdult;
		 selectedFlight.numberWheelchair=totalWheelchair;
		 selectedFlight.numberSpecialDiet=totalSpecialDiet;
		 return selectedFlight;
	 }
	 function createBookingObjects(){
		 var bookedFlights = [];
		 var j=0;
		 for (i=1;i<=5;i++){
			 var flight = createBookedFlight(i);
			 if (flight != null){
				bookedFlights[j] = 	 flight;
				j++;
			 }
		 }
		 return bookedFlights;
		  
	 }
	 function createBookedFlight(i){
		 var ticket = parseInt(document.getElementById("selectTicket"+i).value);
		 var child=false;
		 var wheelchair=false;
		 var specialDiet= false;
		 if (ticket >0){
			 if (document.getElementById("adult"+i).checked) {
				 child = true;
			 }
			 if (document.getElementById("wheelchair"+i).checked) {
				 wheelchair = true;
			 }
			 if (document.getElementById("specialDiet"+i).checked) {
				 specialDiet = true;
			 }
			 var flight = new Object();
			 flight.ticket=ticket;
			 flight.child=child;
			 flight.wheelchair=wheelchair;
			 flight.specialDiet=specialDiet;
			 return flight;
		 }
		 return null;
	 }
	$('#selectTicket1, #selectTicket2, #selectTicket3, #selectTicket4, #selectTicket5').change(function(e){
		var id = e.target.id;
		total=0
		for (i=1;i<=5;i++){
			total +=parseInt(document.getElementById("selectTicket"+i).value);
		}	
		$("#totalTickets").html("Total selected tickets: <strong>" +total+ "<strong>");
		handleTicketType(id);
		handleAdultTicket();
		handleWheelchair();
		handleSpecialDiet();
	 });
	$("#adult1,#adult2,#adult3,#adult4,#adult5,#child1,#child2,#child3,#child4,#child5" ).change(function(e){
		handleAdultTicket();
	});
	function handleAdultTicket(){
		totalAdult=0;
		for (i=1;i<=5;i++){
			
			if (document.getElementById("adult"+i).checked) {
				totalAdult += parseInt(document.getElementById("selectTicket"+i).value);
			}
		}
		if(!isNaN(totalAdult)){
			$("#totalAdult").html("Adult: <strong>" +totalAdult+ "<strong>");
		}else{
			$("#totalAdult").html("Adult: <strong>" +0+ "<strong>");
		}
		var totalChild = total - totalAdult;
		
		if(!isNaN(totalChild)){
			$("#totalChild").html("Child: <strong>" +totalChild+ "<strong>");
		}else{
			$("#totalChild").html("Child: <strong>" +0+ "<strong>");
		}
		return totalAdult;
	}
	$("#specialDiet1,#specialDiet2,#specialDiet3,#specialDiet4,#specialDiet5").change(function(e){
		handleSpecialDiet();
	});
	$("#wheelchair1,#wheelchair2,#wheelchair3,#wheelchair4,#wheelchair5").change(function(e){
		handleWheelchair();
	});
	function handleWheelchair(){
		totalWheelchair=0;
		for (i=1;i<=5;i++){
			
			if (document.getElementById("wheelchair"+i).checked) {
				totalWheelchair += parseInt(document.getElementById("selectTicket"+i).value);
			}
		}
		$("#totalWheelchair").html("Wheelchair: <strong>" +totalWheelchair+ "<strong>");
		return totalWheelchair;
	}

	$("#specialDiet1,#specialDiet2,#specialDiet3,#specialDiet4,#specialDiet5").change(function(e){
		handleSpecialDiet();
	});
	function handleSpecialDiet(){
		totalSpecialDiet=0;
		for (i=1;i<=5;i++){
			
			if (document.getElementById("specialDiet"+i).checked) {
				totalSpecialDiet += parseInt(document.getElementById("selectTicket"+i).value);
			}
		}
		$("#totalSpecialDiet").html("Special Diet: <strong>" +totalSpecialDiet+ "<strong>");
		return totalSpecialDiet;
	}
	function handleTicketType(id){
		if (document.getElementById(id).value!="0"){
			var order = id.charAt(id.length-1);
			var ticketType = "ticketType"+order;
		
			if (document.querySelector('input[name ="'+ ticketType+'"]:checked')== null){
				
				document.getElementById("adult"+order).checked= true;
			}
		}
	}
	
	// Methods for searchFlights
	
	$( "#dialog-1-searchFlights" ).dialog({
		modal: true,
	    autoOpen: false, 
	    buttons: {
	        Ok: function() {
	          $( this ).dialog( "close" );
	        }
	      } 
	 });
	$("#searchBtn").click(function(event){
		
		event.preventDefault();
		var fromCity = $("#fromCity").val();
	 	var toCity = $("#toCity").val();
	 	if ((fromCity == "") && (toCity=="")){
	 		
	 		$("#dialog-1-searchFlights").html("<b> Please select origin or destination city!");
	 		$( "#dialog-1-searchFlights" ).dialog( "open" );
	 		return;
	 	}else{
	 		$.ajax({
	 	        type: "POST",
	 	        url: "searchResult.php",
	 	        data: "fromCity=" + fromCity + "&toCity=" +toCity,
	 	        success : function(result){
	 	        	$("#mainContent").html(result); 
	 	        }
	 	    });
	 	}
	});
	// Methods for searchResult
	$( "#dialog-2-searchResult" ).dialog({
		modal: true,
	    autoOpen: false,  
	    buttons: {
	        Ok: function() {
	          $( this ).dialog( "close" );
	        }
	      }
	 });
	$("#newSearchBtn").click(function(event){
		event.preventDefault();
		$.ajax({
			url : "searchFlights.php",
			success : function(result) {
				$("#mainContent").html(result);
			}
		});
	});
	$("#makeBookingBtn").click(function(event){
		event.preventDefault();
		var selectedRouteNo = document.querySelector('input[name = "route_no"]:checked');
		if (selectedRouteNo ==null) {
			$("#dialog-2-searchResult").html("<b> Please select a flight!");
	 		$( "#dialog-2-searchResult" ).dialog( "open" );
			  
		}else{
			var urlStr = "makeBooking.php?selectedRouteNo="+selectedRouteNo.value;
			$.ajax({
				type: "GET",
				url : urlStr,
				success : function(result) {
					// console.log(result);
					$("#mainContent").html(result);
					// return true;
				},
			     complete: function() {console.log('ajax loading success...');},
			     error: function(xhr, textStatus, errorThrown) {
			       console.log('ajax loading error...'+textStatus);
			       return false;
			     }
			});
		}
		
	});
	// Methods for yourBooking
	var numberBookings = <?php echo count($allBookedFlights);?>;
	var bookings = <?php echo $allBookedFlights;?>;

	var selectedBookings=[];

	$( "#dialog-6-yourBooking" ).dialog({
		modal: true,
	    autoOpen: false,  
	    buttons: {
	        Ok: function() {
	          $( this ).dialog( "close" );
	        }
	      }
	 });
	 
	 $("#deleteSelectedFlightsBtn").click(function(e){
		 
		 e.preventDefault();
		 var n=0;
		 for(i=0;i<numberBookings;i++){
			 if (document.getElementById("booking"+i).checked){
				 selectedBookings[n++]=document.getElementById("booking"+i).value;
			 }
		 }
		 
		 if(n==0){
			 $("#dialog-6-yourBooking").html("<b> Please select a flight to delete!");
		 		$( "#dialog-6-yourBooking" ).dialog( "open" );
		 	return;
		 }else{
			 // delete checked booking
			// console.log("selectedBookings: "+selectedBookings);
			 $.ajax({
					url : "yourBookings.php?selectedBookings="+selectedBookings,
					success : function(result) {
						$("#mainContent").html(result);
					}
				});	 
		 }
		 
	 });
	 
 
}); 
// 
