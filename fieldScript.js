var awareness = .01;
var population = 100000;
var assets = 100000000;
function myFunction() {
	var id = "1";
    var price = document.getElementById("price").value;
    var cost = document.getElementById("cost").value;
    var marketing = document.getElementById("marketing").value;
    var quantity = document.getElementById("quantity").value;
    awareness = (marketing/1000000000) + awareness;

    var new_url = "http://localhost:3000/" + id + "?price=" + price.toString() + "cost=" + cost.toString() + "marketing=" + marketing.toString() + "quantity=" + quantity.toString();
    alert(new_url);
    document.getElementById("direct").href=new_url;
}

function addProduct() {
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
}