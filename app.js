function loadMarkers(){
	// Get Query Parameters
	const urlParams = new URLSearchParams(window.location.search)
	let imageId = urlParams.get("image")
	let markerId = urlParams.get("marker")
	let markerType= urlParams.get("type")
	console.log(imageId);
	console.log(markerId);
	
	if( markerType == "3d"){
		load3dModles();
	}
	else if( markerType == "2d"){
		loadImages();
	}
	else
	{
	}
	
	// Upadate tracking image URL
	let baseUrl = "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/sandeepkronline/webar/main/track/";
	let nftUrl = baseUrl + imageId + "/" + imageId;
	console.log(nftUrl);
	var nftNode = document.getElementById("#marker");
	nftNode.setAttribute("url", nftUrl);


		
	//https://carnaux.github.io/NFT-Marker-Creator/
	//https://console.echo3d.co/#/pages/contentmanager
}

function load3dModles(){
	const urlParams = new URLSearchParams(window.location.search)
	let markerId = urlParams.get("marker")
	
	const markerDiv = document.createElement("a-gltf-model");
	if( markerId == "1"){
		markerDiv.setAttribute("gltf-model", "models/3D/melite.gltf");
		markerDiv.setAttribute("scale", "50 50 50");
		markerDiv.setAttribute("position", "100 -300 0" );	
	}
	else if (markerId == "2"){
		markerDiv.setAttribute("gltf-model", "models/3D/skyscraper.gltf");
		markerDiv.setAttribute("scale", "10 10 10");
		markerDiv.setAttribute("position", "100 -300 0" );
		markerDiv.setAttribute("rotation", "0 0 0" );	
	}
	else{
		markerDiv.setAttribute("gltf-model", "models/3D/valentim.gltf");
		markerDiv.setAttribute("scale", "10 10 10");
		markerDiv.setAttribute("position", "100 -300 0" );
		markerDiv.setAttribute("rotation", "0 45 45" );
		
	}
	var element = document.getElementById("#marker");
	element.appendChild(markerDiv);
}

function loadImages(){
	const urlParams = new URLSearchParams(window.location.search)
	let markerId = urlParams.get("marker")
	const markerDiv = document.createElement("a-image");
	if( markerId == "1"){
		markerDiv.setAttribute("src", "models/Image/love.png");
		markerDiv.setAttribute("scale", "100 100 100");
		markerDiv.setAttribute("rotation", "-90 0 0");	
	}else{
		
	}
	var element = document.getElementById("#marker");
	element.appendChild(markerDiv);	
}
