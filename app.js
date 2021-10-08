function loadMarkers(){
	// Get Query Parameters
	const urlParams = new URLSearchParams(window.location.search)
	let imageId = urlParams.get("image")
	let modelId = urlParams.get("model")
	let modelType= urlParams.get("type")
	console.log(imageId);
	console.log(modelId);
	console.log(modelType);
	

	
	// Upadate tracking image URL
	let baseUrl = "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/sandeepkronline/arcamera-app/main/track/";
	let imageSample = baseUrl + imageId + "/" + imageId + ".mind;";
	imageSample = "imageTargetSrc: "
	console.log(imageSample);
	var sceneNode = document.getElementById("#scene");
	sceneNode.setAttribute("mindar-image", imageSample);
	
	if( modelType == "3d"){
		load3dModles();
	}
	else if( modelType == "2d"){
		loadImages();
	}
	else if( modelType == "text")
	{
		loadText()
	}


		
	//https://carnaux.github.io/NFT-Marker-Creator/
	//https://console.echo3d.co/#/pages/contentmanager
}

function load3dModles(){
	const urlParams = new URLSearchParams(window.location.search)
	let modelId = urlParams.get("model")
	
	const markerDiv = document.createElement("a-gltf-model");
	markerDiv.setAttribute("material","transparent:true;shader:flat;side:double;");
	markerDiv.setAttribute("rotation", "0 0 0" );
	markerDiv.setAttribute("position", "0 0 0" );
	if( modelId == "1"){
		markerDiv.setAttribute("gltf-model", "models/3D/melite.gltf");
		markerDiv.setAttribute("scale", "50 50 50");
		//markerDiv.setAttribute("position", "100 -300 0" );	
	}
	else if (modelId == "2"){
		markerDiv.setAttribute("gltf-model", "models/3D/skyscraper.gltf");
		markerDiv.setAttribute("scale", "10 10 10");
		//markerDiv.setAttribute("position", "100 -300 0" );
		//markerDiv.setAttribute("rotation", "0 0 0" );	
	}
	else{
		markerDiv.setAttribute("gltf-model", "models/3D/valentim.gltf");
		markerDiv.setAttribute("scale", "10 10 10");
		//markerDiv.setAttribute("position", "100 -300 0" );
		//markerDiv.setAttribute("rotation", "0 45 45" );
		
	}
	var element = document.getElementById("#marker");
	element.appendChild(markerDiv);
}

function loadImages(){
	const urlParams = new URLSearchParams(window.location.search)
	let modelId = urlParams.get("model")
	const markerDiv = document.createElement("a-image");
	markerDiv.setAttribute("rotation", "0 0 0" );
	markerDiv.setAttribute("position", "0 0 0" );
	if( modelId == "1"){
		markerDiv.setAttribute("src", "models/Image/butterflies.gif");
		markerDiv.setAttribute("scale", "100 100 100");
		//markerDiv.setAttribute("rotation", "-90 0 0");	
		//markerDiv.setAttribute("position", "100 -300 0" );
	}else{
		markerDiv.setAttribute("src", "models/Image/love.png");
		markerDiv.setAttribute("scale", "100 100 100");
		//markerDiv.setAttribute("rotation", "-90 0 0");	
		//markerDiv.setAttribute("position", "100 -300 0" );
	}
	var element = document.getElementById("#marker");
	element.appendChild(markerDiv);	
}


function loadText(){
	const urlParams = new URLSearchParams(window.location.search)
	let modelId = urlParams.get("model")
	const markerDiv = document.createElement("a-text");
	markerDiv.setAttribute("value", modelId);
	markerDiv.setAttribute("scale", "500 500 500");
	markerDiv.setAttribute("color", "black");
	//markerDiv.setAttribute("rotation", "0 0 45");
	//markerDiv.setAttribute("position", "100 -100 50" );
	markerDiv.setAttribute("rotation", "0 0 0" );
	markerDiv.setAttribute("position", "0 0 0" );
	var element = document.getElementById("#marker");
	element.appendChild(markerDiv);	
}

