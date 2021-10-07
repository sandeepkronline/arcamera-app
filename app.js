function loadMarkers(){
	// Get Query Parameters
	const urlParams = new URLSearchParams(window.location.search)
	let imageId = urlParams.get("image")
	let markerId = urlParams.get("marker")
	console.log(imageId);
	console.log(markerId);
	
	// Upadate tracking image URL
	let baseUrl = "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/sandeepkronline/webar/main/track/";
	let nftUrl = baseUrl + imageId + "/" + imageId;
	console.log(nftUrl);
	var nftNode = document.getElementById("#marker");
	nftNode.setAttribute("url", nftUrl);

	const markerDiv = document.createElement("a-gltf-model");
	if( markerId == "1"){
		markerDiv.setAttribute("gltf-model", "models/3D/melite.gltf");
		markerDiv.setAttribute("scale", "50 50 50");
		markerDiv.setAttribute("position", "0 0 0" );	
	}
	else if (markerId == "2"){
		markerDiv.setAttribute("gltf-model", "models/3D/skyscraper.gltf");
		markerDiv.setAttribute("scale", "5 5 5");
		markerDiv.setAttribute("position", "0 0 0" );
		markerDiv.setAttribute("rotation", "0 0 0" );	
	}
	else{
		markerDiv.setAttribute("gltf-model", "models/3D/valentim.gltf");
		markerDiv.setAttribute("scale", "10 10 10");
		markerDiv.setAttribute("position", "50 50 0" );
		markerDiv.setAttribute("rotation", "90 0 90" );
		
	}
	var element = document.getElementById("#marker");
	element.appendChild(markerDiv);
		
	//https://carnaux.github.io/NFT-Marker-Creator/
	//https://console.echo3d.co/#/pages/contentmanager
}

