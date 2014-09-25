

$(document).ready(function() {

	$("#get-started-panel").show();
	$("#events-panel").hide();	
	$("#future-panel").hide();

	$("#newButton").click(function() {
		console.log("adding the row");
		var myevent = new RecurringEvent("Taxes", "bill", 200, "09", "yearly");
		console.log(myevent)

		a.add_event(myevent);
		$("#myjsontable").empty();
		$.jsontotable(a.events, { id: '#myjsontable', header: true,  className: 'table table-striped'  });
		//console.log("Added. Did it work? Should be "+a.events.length+" rows.");
	});

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


	var a = {
		start_date: moment(),
		start_balance: 826.45,
		events: [],
		add_event: function(e) {
			this.events.push(e)
			//console.log(this.events)
		}
	};

	function RecurringEvent(name, type, amount, date, frequency){
		this.name = name;
		this.type = type;
		this.amount = amount;
		this.date = date;
		this.frequency = frequency;
		console.log("made a RecurringEvent");
	};

	function init_mydata(){
		a.add_event(new RecurringEvent("Name", "Type", "Amount", "Date", "Frequency"));
		a.add_event(new RecurringEvent("Rent", "bill", 1200, "01", "monthly"));
		a.add_event(new RecurringEvent("Car Loan", "payment", 200, "07", "monthly"));
		a.add_event(new RecurringEvent("Paycheck", "income", 200, "06, 21", "bi-monthly"));
		a.add_event(new RecurringEvent("Loan from Dad", "payment", 300, "15", "monthly"));
	}
	
	/* create some test data */
	init_mydata();


	$.jsontotable(a.events, { id: '#myjsontable', header: true,  className: 'table table-striped'  });
	/* make fields editable
	$("#myjsontable").editableTableWidget({cloneProperties: ['background', 'border', 'outline']});
	*/
	
	function build_future (a) {

		var index;
		for(index = 0; index<a.length; ++index){
			console.log(a[index]);
		}
		
	};

	//build_future(a.event_tabledata);

});



