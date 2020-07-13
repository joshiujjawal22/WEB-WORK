	var ab=document.querySelectorAll('a');


	document.getElementById('home').addEventListener("mouseenter",function(){
		for(var i=0;i<4;i++){
					ab[i].classList.remove('link_active');}
				document.getElementById('a_home').classList.add("link_active");
			

	});
	document.getElementById('nav').addEventListener("mouseenter",function(){
		for(var i=0;i<4;i++){
					ab[i].classList.remove('link_active');}
			document.getElementById('a_nav').classList.add("link_active");
			

	});
	document.getElementById('about').addEventListener("mouseenter",function(){
		for(var i=0;i<4;i++){
					ab[i].classList.remove('link_active');}
			document.getElementById('a_about').classList.add("link_active");
			

	});
	document.getElementById('contact').addEventListener("mouseenter",function(){
		for(var i=0;i<4;i++){
					ab[i].classList.remove('link_active');}
			document.getElementById('a_contact').classList.add("link_active");
			

	});