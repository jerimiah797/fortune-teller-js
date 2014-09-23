

$(document).ready(function() {

	$("#get-started-panel").show();
	$("#events-panel").hide();	
	$("#future-panel").hide();

	// $("#newButton").click(function() {
	// 	console.log("adding the row");
	// 	var event = new RecurringEvent("Taxes", "bill", 200, "09", "yearly");
	// 	console.log(event)
	// 	mydata.push(event);
	// 	$("#myjsontable").empty();
	// 	$.jsontotable(data, { id: '#myjsontable', header: true,  className: 'table table-striped'  });
	// 	console.log("Added. Did it work?  "+data.length);
	// });
	$("#newButton").click(add_event())

	$("#get-started-nav").click(function() {
		console.log("activating get started panel");
		$("#get-started-panel").show();
		$("#events-panel").hide();
		$("#future-panel").hide();
		$("#get-started-nav").addClass("active");
		$("#events-nav").removeClass("active");
		$("#show-future-nav").removeClass("active");
	});

	$("#events-nav").click(function() {
		console.log("activating events panel");
		$("#get-started-panel").hide();
		$("#events-panel").show();
		$("#future-panel").hide();
		$("#get-started-nav").removeClass("active");
		$("#events-nav").addClass("active");
		$("#show-future-nav").removeClass("active");
	});

	$("#show-future-nav").click(function() {
		console.log("activating future panel");
		$("#get-started-panel").hide();
		$("#events-panel").hide();
		$("#future-panel").show();
		$("#get-started-nav").removeClass("active");
		$("#events-nav").removeClass("active");
		$("#show-future-nav").addClass("active");
	});


	// jQuery.fn.extend({
	// 	Event: function(name, type, amount, date, frequency){
	// 		this.name = name;
	// 		this.type = type;
	// 		this.amount = amount;
	// 		this.date = date;
	// 		this.frequency = frequency;
	// 		console.log("made a new Event")
	// 	}
	// 	return this;
	// })

	function RecurringEvent(name, type, amount, date, frequency){
		this.name = name;
		this.type = type;
		this.amount = amount;
		this.date = date;
		this.frequency = frequency;
		console.log("made a RecurringEvent");
	};

	function init_mydata(){
		var a = {};
		a.headers = ["Name", "Type", "Amount", "Date", "Frequency"]
		a.start_date = moment();
		console.log(a.start_date.format("dddd, MMMM Do YYYY"));
		a.start_balance = 826.45;
		console.log(a.start_balance);
		a.events = [];

		var event1 = new RecurringEvent("Rent", "bill", 1200, "01", "monthly");
		var event2 = new RecurringEvent("Car Loan", "payment", 200, "07", "monthly");
		var event3 = new RecurringEvent("Paycheck", "income", 200, "06, 21", "bi-monthly");
		var event4 = new RecurringEvent("Loan from Dad", "payment", 300, "15", "monthly");
		a.events.push(event1, event2, event3, event4);
		return a;
	}
	
	function add_event(event){
		a.events.push(event)
	}

	/* create some test data */
	mydata = init_mydata();


	mydata.event_tabledata = [mydata.headers, mydata.events[0], mydata.events[1], mydata.events[2], mydata.events[3]];


	$.jsontotable(mydata.event_tabledata, { id: '#myjsontable', header: true,  className: 'table table-striped'  });
	/* make fields editable
	$("#myjsontable").editableTableWidget({cloneProperties: ['background', 'border', 'outline']});
	*/
	
	function build_future (a) {

		var index;
		for(index = 0; index<a.length; ++index){
			console.log(a[index]);
		}
		
	};

	build_future(mydata.event_tabledata);

});