function Calculate() {
  var Length = document.getElementById("Length").value;
  var Width = document.getElementById("Width").value;
  var Depth = document.getElementById("Depth").value;
  var requiredquantity = Length * Width * Depth / 1000;
 

  document.getElementById("test").innerHTML = requiredquantity;
}