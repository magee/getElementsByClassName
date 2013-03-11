// The browser comes with an utility function getElementById that returns an element whose id matches the input.
// Write a function that returns an array of all nodes that match a particular class name
// To get started, you may use jQuery, but try to refactor it out once you have it working

var getElementsByClassName = function(className){
var found_elements = [];
var dom_objects = document.getElementsByTagName("*");

console.log(dom_objects);
debugger;

var dom_object = {};

for (var i = 0; i < dom_objects.length; i++) {
dom_object = dom_objects[i];
if (dom_object.className === className) {
found_elements.push(dom_object).toString();
}
}
return found_elements;
};