
	function fetchUserList(data) {
		getByClass("introduce1_con")[1].innerHTML=data.name;
		getByClass("introduce1_con")[3].innerHTML=data.url;
	}



	$.ajax({
	    url: 'data/list.json',
	    type: 'GET',
	    dataType: 'json',
	    success: function(data) {
	        fetchUserList(data);
	    }
	});

