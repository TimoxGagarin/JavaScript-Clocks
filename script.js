window.onload = function(){
	window.setInterval(function(){
		var now = new Date();
		
		var row = document.getElementsByClassName("row-center")[0];
		
		var hours = row.getElementsByClassName("time")[0].getElementsByClassName("hours")[0];
		
		if(now.getHours() < 10)
			hours.innerHTML = "0" + now.getHours();
		else
			hours.innerHTML = now.getHours();
		
		var minutes = row.getElementsByClassName("time")[1].getElementsByClassName("minutes")[0];
		
		if(now.getMinutes() < 10)
			minutes.innerHTML = "0" + now.getMinutes();
		else
			minutes.innerHTML = now.getMinutes();
		
		var seconds = row.getElementsByClassName("time")[2].getElementsByClassName("seconds")[0];
		
		if(now.getSeconds() < 10)
			seconds.innerHTML = "0" + now.getSeconds();
		else
			seconds.innerHTML = now.getSeconds();
	}, 1000);
};