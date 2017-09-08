var judge = 0;
var pageSize = 6;
var currentPage = 1;
var totalPage = 0;
var keyword_;

/*
This function will be exucted instantly as the window has been loaded.
The new page get the parameter from index.html and new page will show different content
*/
window.onload = function () {
	"use strict";
	var par = window.location.search.substring(window.location.search.lastIndexOf('=') + 1, window.location.search.length);
	switch (par) {
		case "1":
		document.getElementById("barofmen").setAttribute("class","active");
		showMenTshirts();
		break;
		case "2":
		document.getElementById("barofmen").setAttribute("class","active");
		showMenShirts();
		break;
		case "3":
		document.getElementById("barofmen").setAttribute("class","active");
		showMenPants();
		break;
		case "4":
		document.getElementById("barofmen").setAttribute("class","active");
		showMenBags();
		break;
		case "5":
		document.getElementById("barofmen").setAttribute("class","active");
		showMenBelts();
		break;
		case "6":
		document.getElementById("baroflady").setAttribute("class","active");
		showLadyTshirts();
		break;
		case "7":
		document.getElementById("baroflady").setAttribute("class","active");
		showLadyShirts();
		break;
		case "8":
		document.getElementById("baroflady").setAttribute("class","active");
		showLadyPants();
		break;
		case "9":
		document.getElementById("baroflady").setAttribute("class","active");
		showLadyBags();
		break;
		case "10":
		document.getElementById("baroflady").setAttribute("class","active");
		showLadyBelts();
		break;
		case "11":
		document.getElementById("barofmen").setAttribute("class","active");
		showMenProducts();
		break;
		case "12":
		document.getElementById("baroflady").setAttribute("class","active");
		showLadyProducts();
		break;
	}
};

// Functin below will be exucted immediately when a new event happen

/*
This function will be exucted when user click the apply button for brand filter
*/
function changeBrand() {
	"use strict";
	findPosition();
}

/*
This function will be exucted when user click clear button for brand filter
*/
function clearChoose() {
	"use strict";
	document.getElementById("armani").checked = false;
	document.getElementById("versace").checked = false;
	document.getElementById("carlo").checked = false;
	document.getElementById("jack").checked = false;
	changeOrder();
}

/*
This function will be exucted when user change the way of sorting
*/
function changeOrder() {
	"use strict";
	findPosition();
}

/*
This function will be exucted when user change the page size by clicking 6/12/all
*/
function choosePageSize(num) {
	"use strict";
	currentPage = 1;

	var n = document.getElementsByClassName("btn btn-default page btn-sm");
	for (var i = 0; i < n.length; i++) {
		n[i].setAttribute("class", "btn btn-default page btn-sm");
	}
	switch (num) {
		case 6:
		document.getElementById("six").setAttribute("class", "btn btn-default page btn-sm page btn-primary");
		document.getElementById("first").setAttribute("class", "active");
		document.getElementById("second").setAttribute("class", "unactive");
		document.getElementById("third").setAttribute("class", "unactive");
		document.getElementById("forth").setAttribute("class", "unactive");
		document.getElementById("fifth").setAttribute("class", "unactive");
		break;
		case 12:
		document.getElementById("twelve").setAttribute("class", "btn btn-default page btn-sm page btn-primary");
		document.getElementById("first").setAttribute("class", "active");
		document.getElementById("second").setAttribute("class", "unactive");
		document.getElementById("third").setAttribute("class", "unactive");
		document.getElementById("forth").setAttribute("class", "unactive");
		document.getElementById("fifth").setAttribute("class", "unactive");
		break;
		case 1000:
		document.getElementById("alll").setAttribute("class", "btn btn-default page btn-sm page btn-primary");
		document.getElementById("first").setAttribute("class", "active");
		document.getElementById("second").setAttribute("class", "unactive");
		document.getElementById("third").setAttribute("class", "unactive");
		document.getElementById("forth").setAttribute("class", "unactive");
		document.getElementById("fifth").setAttribute("class", "unactive");
		break;
	}
	pageSize = parseInt(num);
	findPosition();
}

/*
This function will be exucted when user change the current page by clicking page number
*/
function chooseCurrentPage(num) {
	"use strict";
	document.getElementById("first").setAttribute("class", "unactive");
	document.getElementById("second").setAttribute("class", "unactive");
	document.getElementById("third").setAttribute("class", "unactive");
	document.getElementById("forth").setAttribute("class", "unactive");
	document.getElementById("fifth").setAttribute("class", "unactive");

	switch (num) {
		case 1:
		currentPage = 1;
		document.getElementById("first").setAttribute("class", "active");
		break;
		case 2:
		currentPage = 2;
		document.getElementById("second").setAttribute("class", "active");
		break;
		case 3:
		currentPage = 3;
		document.getElementById("third").setAttribute("class", "active");
		break;
		case 4:
		currentPage = 4;
		document.getElementById("forth").setAttribute("class", "active");
		break;
		case 5:
		currentPage = 5;
		document.getElementById("fifth").setAttribute("class", "active");
		break;
		case 0:
		if (currentPage > 1) {
			currentPage--;
		}
		switch (currentPage) {
			case 1:
			document.getElementById("first").setAttribute("class", "active");
			break;
			case 2:
			document.getElementById("second").setAttribute("class", "active");
			break;
			case 3:
			document.getElementById("third").setAttribute("class", "active");
			break;
			case 4:
			document.getElementById("forth").setAttribute("class", "active");
			break;
			case 5:
			document.getElementById("fifth").setAttribute("class", "active");
			break;
		}
		break;
		case 1000:
		if (currentPage < totalPage) {
			currentPage++;
		}
		switch (currentPage) {
			case 1:
			document.getElementById("first").setAttribute("class", "active");
			break;
			case 2:
			document.getElementById("second").setAttribute("class", "active");
			break;
			case 3:
			document.getElementById("third").setAttribute("class", "active");
			break;
			case 4:
			document.getElementById("forth").setAttribute("class", "active");
			break;
			case 5:
			document.getElementById("fifth").setAttribute("class", "active");
			break;
		}
		break;
	}

	findPosition();
}
// END - Functin above will be exucted immediately when a new event happen



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
This function transforms XML elements to DOM
After that, all items from men/lady will be retun
*/
function getItems(gender) {
	"use strict";
	var xmlDoc = loadXMLDoc("products.xml");
	var items = xmlDoc.getElementsByTagName(gender);
	document.getElementById("rowproducts").innerHTML = "";
	return items;
}

function getSearchItems(resultsStr) {
	"use strict";
	var xmlDoc = loadXMLDoc("products.xml");
	document.getElementById("rowproducts").innerHTML = "";
	var itemsResulted = new Array();
	var m=0;
	var menItems = xmlDoc.getElementsByTagName("men_product");
	var ladyItems = xmlDoc.getElementsByTagName("lady_product");

	var results = resultsStr.split(",");

	for(var index in results){
		for (var i = 0; i < menItems.length; i++) {
			if ((menItems[i].getElementsByTagName("name")[0].childNodes[0].nodeValue) === results[index]) {
				itemsResulted[m] = menItems[i];
				m++;
			}
		}
		for (var i = 0; i < ladyItems.length; i++) {
			if ((ladyItems[i].getElementsByTagName("name")[0].childNodes[0].nodeValue) === results[index]) {
				itemsResulted[m] = ladyItems[i];
				m++;
			}
		}
	}

	return itemsResulted;
}

/*
This function chooses type for products
After that, products from specific type will be return
*/
function chooseType(items, type) {
	"use strict";
	var itemsTypeChoosed = new Array();
	var m = 0;
	for (var i = 0; i < items.length; i++) {
		if (items.item(i).attributes[0].value === type) {
			itemsTypeChoosed[m] = items[i];
			m++;
		}
	}
	return itemsTypeChoosed;
}

/*
This function shows counts for different brands on the category page.
*/
function showBrandCounts(items){
	"use strict";
	var brand1=  0;
	var brand2 = 0;
	var brand3 = 0;
	var brand4 = 0;
	for (var i = 0; i < items.length; i++) {
		if ((items[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Armani") {
			brand1++;
		}
		if ((items[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Versace") {
			brand2++;
		}
		if ((items[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Carlo Bruni") {
			brand3++;
		}
		if ((items[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Jack Honey") {
			brand4++;
		}
	}
	document.getElementById("brand1").innerHTML = brand1;
	document.getElementById("brand2").innerHTML = brand2;
	document.getElementById("brand3").innerHTML = brand3;
	document.getElementById("brand4").innerHTML = brand4;
}

/*
This function chooses brand for products
After that, products from specific brand will be return
*/
function chooseBrand(y) {
	"use strict";
	var n = 0;
	var itemsBrandChoosed = new Array();
	for (var i = 0; i < y.length; i++) {
		if (document.getElementById("armani").checked) {
			if ((y[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Armani") {
				itemsBrandChoosed[n] = y[i];
				n++;
			}
		}
		if (document.getElementById("versace").checked) {
			if ((y[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Versace") {
				itemsBrandChoosed[n] = y[i];
				n++;
			}
		}
		if (document.getElementById("carlo").checked) {
			if ((y[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Carlo Bruni") {
				itemsBrandChoosed[n] = y[i];
				n++;
			}
		}
		if (document.getElementById("jack").checked) {
			if ((y[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue) === "Jack Honey") {
				itemsBrandChoosed[n] = y[i];
				n++;
			}
		}
		if ((document.getElementById("armani").checked === false) && (document.getElementById("versace").checked === false) && (document.getElementById("carlo").checked === false) && (document.getElementById("jack").checked === false)) {
			itemsBrandChoosed[n] = y[i];
			n++;
		}
	}
	return itemsBrandChoosed;
}

/*
This function sorts products by price
After that, products from required order will be return
*/
function sortItems(items) {
	"use strict";
	var itemsSorted;
	var y = document.getElementById("priceOrder").selectedIndex;
	var state = document.getElementsByTagName("option")[y].id;
	if (state === "low") {
		itemsSorted = sortFromLow(items);
	} else if (state === "high") {
		itemsSorted = sortFromHigh(items);
	}
	return itemsSorted;
}

/*
This function sorts all items from low price to high
*/
function sortFromLow(items) {
	"use strict";
	var temp;
	for (var i = 0; i < items.length - 1; i++) {
		for (var j = 0; j < items.length - 1 - i; j++) {
			var p1 = parseInt(items[j].getElementsByTagName("price")[0].childNodes[0].nodeValue.substring(3));
			var p2 = parseInt(items[j + 1].getElementsByTagName("price")[0].childNodes[0].nodeValue.substring(3));
			if (p1 > p2) {
				temp = items[j];
				items[j] = items[j + 1];
				items[j + 1] = temp;
			}
		}
	}
	return items;
}

/*
This function sorts all items from high price to low
*/
function sortFromHigh(items) {
	"use strict";
	var temp;
	for (var i = 0; i < items.length - 1; i++) {
		for (var j = 0; j < items.length - 1 - i; j++) {
			var p1 = parseInt(items[j].getElementsByTagName("price")[0].childNodes[0].nodeValue.substring(3));
			var p2 = parseInt(items[j + 1].getElementsByTagName("price")[0].childNodes[0].nodeValue.substring(3));
			if (p1 <= p2) {
				temp = items[j];
				items[j] = items[j + 1];
				items[j + 1] = temp;
			}
		}
	}
	return items;
}

/*
This function moves one item from XML to a DOM element.
After that, a new item will be created dynamically
*/
function showOneItem(x, i) {
	var item = document.createElement("div");
	item.setAttribute("class", "col-md-4 col-sm-6");

	var product = document.createElement("div");
	product.setAttribute("class", "product");
	item.appendChild(product);

	var flip_container = document.createElement("div");
	flip_container.setAttribute("class", "flip-container");
	product.appendChild(flip_container);
	var flipper = document.createElement("div");
	flipper.setAttribute("class", "flipper");
	flip_container.appendChild(flipper);
	var front = document.createElement("div");
	front.setAttribute("class", "front");
	flipper.appendChild(front);
	var frontlink = document.createElement("a");
	frontlink.setAttribute("href", "detail.html");
	front.appendChild(frontlink);
	var frontpic = document.createElement("img");
	frontpic.setAttribute("src", x[i].getElementsByTagName("front")[0].childNodes[0].nodeValue);
	frontpic.setAttribute("alt", x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
	frontpic.setAttribute("class", "img-responsive");
	frontlink.appendChild(frontpic);
	var back = document.createElement("div");
	back.setAttribute("class", "back");
	flipper.appendChild(back);
	var backlink = document.createElement("a");
	backlink.setAttribute("href", "detail.html?name=" + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + "");
	back.appendChild(backlink);
	var backpic = document.createElement("img");
	backpic.setAttribute("src", x[i].getElementsByTagName("back")[0].childNodes[0].nodeValue);
	backpic.setAttribute("alt", x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
	backpic.setAttribute("class", "img-responsive");
	backlink.appendChild(backpic);

	var invisiblelink = document.createElement("a");
	invisiblelink.setAttribute("href", "detail.html?name=" + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + "");
	invisiblelink.setAttribute("class", "invisible");
	product.appendChild(invisiblelink);
	var invisiblepic = document.createElement("img");
	invisiblepic.setAttribute("src", x[i].getElementsByTagName("front")[0].childNodes[0].nodeValue);
	invisiblepic.setAttribute("alt", x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
	invisiblepic.setAttribute("class", "img-responsive");
	invisiblelink.appendChild(invisiblepic);

	var text = document.createElement("div");
	text.setAttribute("class", "text");
	product.appendChild(text);
	var title = document.createElement("h3");
	text.appendChild(title);
	var name_link = document.createElement("a");
	name_link.setAttribute("href", "detail.html?name=" + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + "");
	title.appendChild(name_link);
	var product_name = document.createTextNode(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
	name_link.appendChild(product_name);
	var price_p = document.createElement("p");
	price_p.setAttribute("class", "price");
	text.appendChild(price_p);
	var product_price = document.createTextNode(x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
	price_p.appendChild(product_price);
	var buttons_p = document.createElement("p");
	buttons_p.setAttribute("class", "buttons");
	text.appendChild(buttons_p);
	var link1 = document.createElement("a");
	link1.setAttribute("class", "btn btn-default");
	link1.setAttribute("href", "detail.html?name=" + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + "");
	var link1_text = document.createTextNode("View detail");
	link1.appendChild(link1_text);
	buttons_p.appendChild(link1);
	var link2 = document.createElement("a");
	link2.style.marginLeft = "3px";
	link2.setAttribute("class", "btn btn-primary");
	link2.setAttribute("href", "basket.html");
	var link2_text = document.createTextNode("Add to cart");
	buttons_p.appendChild(link2);
	var link2_i = document.createElement("i");
	link2_i.setAttribute("class", "fa fa-shopping-cart");
	link2.appendChild(link2_i);
	link2.appendChild(link2_text);

	return item;
}

/*
This function moves all items after filtering from XML to DOM elements.
After that, all items after filtering will be created dynamically
*/
function CreateItems(items) {
	"use strict";
	var itemsCreated = new Array();
	for (var i = 0; i < items.length; i++) {
		itemsCreated[i] = showOneItem(items, i);
	}
	return itemsCreated;
}

/*
This function moves all items created to web page after choosing the page size
It also makes the page number below work.
*/
function showItems(itemsCreated) {
	"use strict";
	var num = itemsCreated.length;
	if (num / pageSize > parseInt(num / pageSize)) {
		totalPage = parseInt(num / pageSize) + 1;
	} else if (num / pageSize === parseInt(num / pageSize)) {
		totalPage = 1;
	} else {
		totalPage = parseInt(num / pageSize);
	}
	var startItem = (currentPage - 1) * pageSize + 1;
	var endItem = currentPage * pageSize;
	endItem = (endItem > num) ? num : endItem;

	for (var i = 1; i < (num + 1); i++) {
		if (i >= startItem && i <= endItem) {
			document.getElementById("rowproducts").appendChild(itemsCreated[i - 1]);
		}
	}

	document.getElementById("totalNum").innerHTML = itemsCreated.length;
	document.getElementById("currentNum").innerHTML = parseInt(endItem - startItem +1);

	var second = document.getElementById("second");
	var thid = document.getElementById("thid");
	var fifth = document.getElementById("fifth");
	var forth = document.getElementById("forth");

	second.style.display = "none";
	third.style.display = "none";
	forth.style.display = "none";
	fifth.style.display = "none";

	switch (totalPage) {
		case 2:
		second.style.display = "inline";
		break;
		case 3:
		second.style.display = "inline";
		third.style.display = "inline";
		break;
		case 4:
		second.style.display = "inline";
		third.style.display = "inline";
		forth.style.display = "inline";
		break;
		case 5:
		second.style.display = "inline";
		third.style.display = "inline";
		forth.style.display = "inline";
		fifth.style.display = "inline";
		break;
	}
}

/*
This function can know the latest page content by using cookies
After that, it can show different products on the same page
*/
function findPosition() {
	"use strict";
	switch (judge) {
		case 1:
		showMenTshirts();
		break;
		case 2:
		showMenShirts();
		break;
		case 3:
		showMenPants();
		break;
		case 4:
		showMenBags();
		break;
		case 5:
		showMenBelts();
		break;
		case 6:
		showLadyTshirts();
		break;
		case 7:
		showLadyShirts();
		break;
		case 8:
		showLadyPants();
		break;
		case 9:
		showLadyBags();
		break;
		case 10:
		showLadyBelts();
		break;
		case 11:
		showMenProducts();
		break;
		case 12:
		showLadyProducts();
		break;
		default:
		showSearchProducts(keyword_)
		break;
	}
}


//**********************************************
//Functions below show different products for men
//***********************************************
function showSearchProducts(_keyword){
	keyword_ = _keyword;
	var resultsStr;

	$.ajax({
		type: "GET",
		url: "lib/func_search.php",
		data: {
			keyword:_keyword
		},
		async : false,
		success: function(data){
			resultsStr = data.replace(/<.*?>/ig," ");
			resultsStr = resultsStr.trim();
			resultsStr = resultsStr.replace(/\s{3}/g,",");
		},
	});

	var itemsGotten = getSearchItems(resultsStr);
	showBrandCounts(itemsGotten);
	var itemsBrandChoosed = chooseBrand(itemsGotten);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 13;
	document.cookie = "";
	document.cookie = "13";
}


function showMenProducts() {
	"use strict";
	var itemsGotten = getItems("men_product");
	showBrandCounts(itemsGotten);
	var itemsBrandChoosed = chooseBrand(itemsGotten);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 11;
	document.cookie = "";
	document.cookie = "11";
}

function showMenTshirts() {
	"use strict";
	var itemsGotten = getItems("men_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "T-shirt");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 1;
	document.cookie = "";
	document.cookie = "1";
}

function showMenShirts() {
	"use strict";
	var itemsGotten = getItems("men_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "shirt");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 2;
	document.cookie = "";
	document.cookie = "2";
}

function showMenPants() {
	"use strict";
	var itemsGotten = getItems("men_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "pants");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 3;
	document.cookie = "";
	document.cookie = "3";
}

function showMenBags() {
	"use strict";
	var itemsGotten = getItems("men_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "bag");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 4;
	document.cookie = "";
	document.cookie = "4";
}

function showMenBelts() {
	"use strict";
	var itemsGotten = getItems("men_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "belt");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 5;
	document.cookie = "";
	document.cookie = "5";
}


//**********************************************
//Functions below show different products for lady
//***********************************************
function showLadyProducts() {
	"use strict";
	var itemsGotten = getItems("lady_product");
	showBrandCounts(itemsGotten);
	var itemsBrandChoosed = chooseBrand(itemsGotten);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 12;
	document.cookie = "";
	document.cookie = "12";
}

function showLadyTshirts() {
	"use strict";
	var itemsGotten = getItems("lady_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "T-shirt");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 6;
	document.cookie = "";
	document.cookie = "6";
}

function showLadyShirts() {
	"use strict";
	var itemsGotten = getItems("lady_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "shirt");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 7;
	document.cookie = "";
	document.cookie = "7";
}

function showLadyPants() {
	"use strict";
	var itemsGotten = getItems("lady_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "pants");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 8;
	document.cookie = "";
	document.cookie = "8";
}

function showLadyBags() {
	"use strict";
	var itemsGotten = getItems("lady_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "bag");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 9;
	document.cookie = "";
	document.cookie = "9";
}

function showLadyBelts() {
	"use strict";
	var itemsGotten = getItems("lady_product");
	var itemsTypeChoosed = chooseType(itemsGotten, "belt");
	showBrandCounts(itemsTypeChoosed);
	var itemsBrandChoosed = chooseBrand(itemsTypeChoosed);
	var itemsSorted = sortItems(itemsBrandChoosed);
	var itemsCreated = CreateItems(itemsSorted);
	showItems(itemsCreated);
	judge = 10;
	document.cookie = "";
	document.cookie = "10";
}
