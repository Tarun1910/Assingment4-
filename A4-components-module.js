//ASSIGNMENT 4 WEB COMPONENTS
//MODULE FILE
//IN THIS FILE YOU WILL CREATE YOUR CUSTOM MODULE FOR YOUR REQUIRED FUNCTIONALITY AND EXPOSE IT THROUGH A 'PUBLICLY' ACCESSIBLE METHOD.


//taken example from semester 1 math class
	var myModNS = (function(){
    var myDate1 = new Date(); 
	var lastDate1 = new Date("April 26,2019 17:00:00");
	var dueDate1 = lastDate1-myDate1;
	var remDate = dueDate1/86400000;
	var remDate1 =Math.round(remDate);
	var module = {
			citeMeFn : remDate1+" day(s) left in the semester"
    };
	return module;
})();