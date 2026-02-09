header = document.getElementById("header");
header.style.backgroundColor = "lightblue";
header.style.padding = "10px";
header.style.textAlign = "center";
header.innerText = "Welcome to My Website";
header.style.fontSize = "24px";
header.style.fontWeight = "bold";
header.style.borderBottom = "2px solid navy";
header.style.marginBottom = "20px";
header.style.fontFamily = "Arial, sans-serif";
header.style.color = "navy";
header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
console.log("Header styled successfully.");
console.log(header);

li = document.getElementsByTagName("li");
console.log("List items:", li);

subHeader = document.getElementsByClassName("sub-header");
console.log("Sub-headers:", subHeader);

section = document.querySelector("section");
console.log("Section element:", section);

li2 = document.querySelectorAll("li");
console.log("All list items (querySelectorAll):", li2);

newElement = document.createElement("p");
newText = document.createTextNode("halo nama saya kurt cobain");
newElement.append(newText);
console.log("New element created:", newElement);
section.append(newElement);
