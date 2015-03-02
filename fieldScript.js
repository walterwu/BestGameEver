var awareness = .01;
var population = 100000;
var assets = 100000000;
var maxProducts = 5;
var currProducts = 1;
function myFunction() {
    var price = document.getElementById("price").value;
    var cost = document.getElementById("cost").value;
    var marketing = document.getElementById("marketing").value;
    var quantity = document.getElementById("quantity").value;
    awareness = (marketing/1000000000) + awareness;
    var accuracy;
    if (price/cost > 3) {
    	accuracy = 3/(price/cost);
    }
    else {
    	accuracy = (price/cost)/3;
    }
    var sales = population * awareness * (price/(3*accuracy));
    if (quantity < sales) {
    	sales = quantity;
    }
    var profit = (sales * price) - (cost * quantity) - marketing;
    assets += profit;    
    var formattedAssets = formatNumber(assets);
    document.getElementById("assetValue").innerHTML = formattedAssets;
}

function formatNumber(numb)
//Taken from Stack Overflow. Written by user455982
{
    var number = number.toFixed(2) + '';
    var x = number.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function addProduct() {
	if (currProducts < maxProducts) {
	    var myNewCode = '<div id= "product-item"><div class= "row"><div class= "col-lg-3"><h3> Product Name </h3></div></div><div class= "row"><div class= "col-lg-3">Price of Unit:<br>' +
					 '	<input type="text" id="price" name="Product Name">' +
						'</div>'+
						'<div class= "col-lg-3">'+
							'Cost per Unit:<br>'+
							'<input type="text" id="cost" name="Performance">'+
						'</div>'+
						'<div class= "col-lg-3">'+
							'Marketing Budget:<br>'+
							'<input type="text" id = "marketing" name="Size">'+
						'</div>'+
						'<div class= "col-lg-3">'+
							'Quantity Produced:<br>'+
							'<input type="text" id="quantity" name="MTBF">'+
						'</div>'+
						'<br>'+
				'</div>';
	    document.getElementById("temp-holder").innerHTML += myNewCode;
	    currProducts +=1;
	}
}