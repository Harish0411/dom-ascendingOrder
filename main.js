let form = document.querySelector("form");
form.addEventListener("submit", function(element){
     element.preventDefault();

	 let a = Number(document.querySelector("#num1").value);
	 let b = Number(document.querySelector("#num2").value);
	 let c = Number(document.querySelector("#num3").value);
	 
	 let result1 = document.querySelector("#result");
	 let result2 = document.querySelector("#result1");
	 let result3 = document.querySelector("#result2");
	 
	 let large, small, secondLarge;

if((a>b) && (a>c)){
     if(b>c){
	     large = a;
		 secondLarge = b;
		 small = c;
		 }
	 else{
	     large = a;
		 secondLarge = c;
		 small = b;
		 }
	 }
else if((b>a) && (b>c)){
     if(a>c){
	     large = b;
		 secondLarge = c;
		 small = a;
		 }
	 else{
	     large = b;
		 secondLarge = a;
		 small = c;
		 }
	}
else{
     if(b>a){
	     large = c;
		 secondLarge = b;
		 small = a;
		}
	 else{
	     large = c;
		 secondLarge = a;
		 small = b;
		}
   }
   
   result1.value = small;
   result2.value = secondLarge;
   result3.value = large;

	 

});