//ASSIGNMENT 4 WEB COMPONENTS
//LOGIC FILE
//IN THIS FILE YOU WILL SIMPLY GRAB YOUR CUSTOM ELEMENT AND ATTACH YOUR METHOD FROM YOUR MODULE TO IT.
window.onload = init;
function init()
{
// ========take example from in class lab 8
	var customTemplate = document.querySelector("#humber_template");
	var humberProto = Object.create(HTMLElement.prototype);
	humberProto.createdCallback = function(){
    var root = this.attachShadow({mode:'open'});
    root.appendChild(document.importNode(customTemplate.content,true));
	};
	var NameBadge = document.registerElement('humber-clock',{prototype:humberProto});
	
    //calling object from module.js myModNS.citeMeFn
   document.getElementById("showDate").innerHTML= myModNS.citeMeFn;

} 