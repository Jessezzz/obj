/*
This function will be exucted instantly as the window has been loaded.
*/
window.onload = function () {
	"use strict";
	getDeatils();
};

/*
This function loads XMLDoc, prepared for parsing XML document
*/
function loadXMLDoc(dname) {
	"use strict";
	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET", dname, false);
	xhttp.send();
	return xhttp.responseXML;
}

/*
This function shows gender hint of banner
*/
function showBannerGender(gender) {
	"use strict";
	document.getElementById("gender").innerHTML = gender;
	if (gender === "Men") {
		document.getElementById("gender").setAttribute("href", "category-man.html?g=11");
	} else {
		document.getElementById("gender").setAttribute("href", "category-lady.html?g=12");

	}
}

/*
This function shows pruduct name hint of banner
*/
function showBannerName(name){
	"use strict";
	document.getElementById("productName").innerHTML = name;
}

/*
This function transforms a specific XML item to a DOM element
After that, all details of one specific product will be retun
*/
function getDeatils() {
	"use strict";
	var nameFromLink = window.location.search.substring(window.location.search.lastIndexOf('=') + 1, window.location.search.length);
	while (nameFromLink.match("%20")) {
		nameFromLink = nameFromLink.replace("%20", " ");
	}
	var productName = nameFromLink;
	var productPrice = "";
	var productPic = "";
	var productDetails = "";
	var productMaterial = "";
	var productCare = "";
	var productSize = "";
	var productFit = "";
	var productFeature = "";
	var gender = "";
	var xmlDoc = loadXMLDoc("products.xml");
	var itemsMen = xmlDoc.getElementsByTagName("men_product");
	for (var i = 0; i < itemsMen.length; i++) {
		if (itemsMen[i].getElementsByTagName("name")[0].childNodes[0].nodeValue === productName) {
			gender = "Men";
			productPrice = itemsMen[i].getElementsByTagName("price")[0].childNodes[0].nodeValue.substring(2);
			productPic = itemsMen[i].getElementsByTagName("front")[0].childNodes[0].nodeValue;
			productDetails = itemsMen[i].getElementsByTagName("details")[0].childNodes[0].nodeValue;
			productMaterial = itemsMen[i].getElementsByTagName("material")[0].childNodes[0].nodeValue;
			productCare = itemsMen[i].getElementsByTagName("care")[0].childNodes[0].nodeValue;
			productSize = itemsMen[i].getElementsByTagName("size")[0].childNodes[0].nodeValue;
			productFit = itemsMen[i].getElementsByTagName("fit")[0].childNodes[0].nodeValue;
			productFeature = itemsMen[i].getElementsByTagName("feature")[0].childNodes[0].nodeValue;
		}
	}

	var itemsLady = xmlDoc.getElementsByTagName("lady_product");
	for (i = 0; i < itemsLady.length; i++) {
		if (itemsLady[i].getElementsByTagName("name")[0].childNodes[0].nodeValue === productName) {
			gender = "Ladies";
			productPrice = itemsLady[i].getElementsByTagName("price")[0].childNodes[0].nodeValue.substring(2);
			productPic = itemsLady[i].getElementsByTagName("front")[0].childNodes[0].nodeValue;
			productDetails = itemsLady[i].getElementsByTagName("details")[0].childNodes[0].nodeValue;
			productMaterial = itemsLady[i].getElementsByTagName("material")[0].childNodes[0].nodeValue;
			productCare = itemsLady[i].getElementsByTagName("care")[0].childNodes[0].nodeValue;
			productSize = itemsLady[i].getElementsByTagName("size")[0].childNodes[0].nodeValue;
			productFit = itemsLady[i].getElementsByTagName("fit")[0].childNodes[0].nodeValue;
			productFeature = itemsLady[i].getElementsByTagName("feature")[0].childNodes[0].nodeValue;
		}
	}
	showDetails(productName, productPrice, productPic, productDetails, productMaterial, productCare, productSize, productFit, productFeature);
	showBannerGender(gender);
	showBannerName(productName);
}

/*
This function moves one item from XML to a DOM element and showed on the web page.
After that, a new item will be created dynamically
*/
function showDetails(productName, productPrice, productPic, productDetails, productMaterial, productCare, productSize, productFit, productFeature) {
	"use strict";
	var top = document.createElement("div");
	top.setAttribute("class", "row");
	top.setAttribute("id", "productMain");
	document.getElementById("detailss").appendChild(top);

	var pic = document.createElement("div");
	pic.setAttribute("class", "col-sm-6");
	top.appendChild(pic);
	var image = document.createElement("div");
	image.setAttribute("id", "mainImage");
	pic.appendChild(image);
	var img = document.createElement("img");
	img.setAttribute("src", productPic);
	img.setAttribute("alt", productName);
	img.setAttribute("class", "img-responsive");
	image.appendChild(img);

	var text = document.createElement("div");
	text.setAttribute("class", "col-sm-6");
	top.appendChild(text);
	var box = document.createElement("div");
	box.setAttribute("class", "box");
	text.appendChild(box);
	var Name = document.createElement("h1");
	Name.setAttribute("class", "text-center");
	box.appendChild(Name);
	var name = document.createTextNode(productName);
	Name.style.fontSize = "30px";
	Name.appendChild(name);
	var p = document.createElement("p");
	box.appendChild(p);
	p.setAttribute("class", "goToDescription");
	var pa = document.createElement("a");
	p.appendChild(pa);
	pa.setAttribute("href", "#details");
	pa.setAttribute("class", "scroll-to");
	var atext = document.createTextNode("Scroll to product details, material & care and sizing");
	pa.appendChild(atext);
	var Price = document.createElement("p");
	Price.setAttribute("class", "price");
	box.appendChild(Price);
	var price = document.createTextNode(productPrice);
	Price.appendChild(price);

	var basket = document.createElement("p");
	box.appendChild(basket);
	basket.setAttribute("class","text-center buttons");
	var li1 = document.createElement("a");
	li1.setAttribute("href","basket.html");
	li1.setAttribute("class","btn btn-primary");
	var ia1 = document.createElement("i");
	li1.appendChild(ia1);
	ia1.setAttribute("class","fa fa-shopping-cart");
	li1.appendChild(document.createTextNode("Add to cart"));
	basket.appendChild(li1);
	// var li2 = document.createElement("a");
	// li2.setAttribute("href","basket.html");
	// li2.setAttribute("class","btn btn-default");
	// li2.appendChild(document.createTextNode("Add to wishlist"));
	// var ia2 = document.createElement("i");
	// li2.appendChild(ia2);
	// ia2.setAttribute("class","fa fa-heart");
	// basket.appendChild(li2);


	var details = document.createElement("div");
	details.setAttribute("class", "box");
	details.setAttribute("id", "details");
	document.getElementById("detailss").appendChild(details);
	var p1 = document.createElement("div");
	details.appendChild(p1);
	var h1 = document.createElement("h4");
	h1.appendChild(document.createTextNode("Product details"));
	var p2 = document.createElement("p");
	p2.appendChild(document.createTextNode(productDetails));
	var h2 = document.createElement("h4");
	h2.appendChild(document.createTextNode("Material & care"));
	var ul1 = document.createElement("ul");
	var material = document.createElement("li");
	material.appendChild(document.createTextNode(productMaterial));
	var care = document.createElement("li");
	care.appendChild(document.createTextNode(productCare));
	ul1.appendChild(material);
	ul1.appendChild(care);
		if(productCare === " "){
		ul1.removeChild(ul1.childNodes[1]);
	}
	var h3 = document.createElement("h4");
	h3.appendChild(document.createTextNode("Size & Fit"));
	var ul2 = document.createElement("ul");
	var fit = document.createElement("li");
	fit.appendChild(document.createTextNode(productFit));
	var size = document.createElement("li");
	size.appendChild(document.createTextNode(productSize));
	ul2.appendChild(fit);
	ul2.appendChild(size);
		if(productFit === " "){
		ul2.removeChild(ul2.childNodes[0]);
	}
	var feature = document.createElement("blockquote");
	var p3 = document.createElement("p");
	feature.appendChild(p3);
	var em = document.createElement("em");
	p3.appendChild(em);
	em.appendChild(document.createTextNode(productFeature));
	p1.appendChild(h1);
	p1.appendChild(p2);
	p1.appendChild(h2);
	p1.appendChild(ul1);
	p1.appendChild(h3);
	p1.appendChild(ul2);
	p1.appendChild(feature);
	p1.appendChild(document.createElement("hr"));

	var social = document.createElement("div");
	social.setAttribute("class", "social");
	p1.appendChild(social);
	var h4 = document.createElement("h4");
	social.appendChild(h4);
	h4.appendChild(document.createTextNode("Show it to your friends"));
	var p4 = document.createElement("p");
	social.appendChild(p4);
	var a1 = document.createElement("a");
	p4.appendChild(a1);
	a1.setAttribute("class", "external facebook");
	a1.setAttribute("data-animate-hover", "pulse");
	var i1 = document.createElement("i");
	a1.appendChild(i1);
	i1.setAttribute("class", "fa fa-facebook");
	var a2 = document.createElement("a");
	p4.appendChild(a2);
	a2.setAttribute("class", "external gplus");
	a2.setAttribute("data-animate-hover", "pulse");
	var i2 = document.createElement("i");
	a2.appendChild(i2);
	i2.setAttribute("class", "fa fa-google-plus");
	var a3 = document.createElement("a");
	p4.appendChild(a3);
	a3.setAttribute("class", "external twitter");
	a3.setAttribute("data-animate-hover", "pulse");
	var i3 = document.createElement("i");
	a3.appendChild(i3);
	i3.setAttribute("class", "fa fa-twitter");
	var a4 = document.createElement("a");
	p4.appendChild(a4);
	a4.setAttribute("class", "email");
	a4.setAttribute("data-animate-hover", "pulse");
	var i4 = document.createElement("i");
	a4.appendChild(i4);
	i4.setAttribute("class", "fa fa-envelope");
}
