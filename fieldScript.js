function myFunction() {
    // var prod = document.getElementById("product").value;
    var perf = document.getElementById("performance").value;
    var size = document.getElementById("size").value;
    var MTBF = document.getElementById("MTBF").value;
    var num = (perf * MTBF) / size;
    var result = document.createElement("p");
    var node = document.createTextNode("hi");
    result.appendChild(node);
    var element = document.getElementById("div1");
	element.appendChild(result);
}