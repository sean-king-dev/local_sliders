var tree = document.createDocumentFragment();

let main_wrapper = document.getElementById("main");

var link = document.createElement("a");
link.setAttribute("id", "id1");
link.setAttribute("href", "http://site.com");
link.appendChild(document.createTextNode("linkText"));

var div = document.createElement("div");
div.setAttribute("id", "id2");
div.appendChild(document.createTextNode("divText"));

tree.appendChild(link);
tree.appendChild(div);
// document.getElementById("main").appendChild(tree);

main_wrapper.appendChild(tree);