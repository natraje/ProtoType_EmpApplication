
/** 
 * Trims all the spaces if any
 */

function rtrim(inString) {
  while (1) {
    if (inString.substring(inString.length - 1, inString.length) != " ")
      break;
    inString = inString.substring(0, inString.length - 1);
  }
  return inString;
}
 
 
 
function ltrim(inString) {
  while (1) {
    if (inString.substring(0, 1) != " ")
     break;
    inString = inString.substring(1, inString.length);
  }
    return inString;
}


 
function trim(inString) {
  var tmpStr = ltrim(inString);
  return rtrim(tmpStr);
}


/**
 * This function is check for the special characters 
 * if entered for a text box
 */
function checkForCharsForTextarea(itemName){
   var bool = true;
   var legalChars = '<>`~^=+"';
   
   for (var i=0;bool && i<itemName.length;i++){
         bool=true;      
         var testChar = itemName.charAt(i);
         for (var j=0; j<legalChars.length;j++) {
            if (testChar == legalChars.charAt(j)) {
               bool = false;
            }         
         }
         
         if(!(bool)) {  
            return bool;
         }
      }
   return bool;
}


/**
 * This function is check for the special characters 
 * if entered for a text box
 */
function checkForName(itemName){
   itemName = itemName.toUpperCase();
   var bool = true;
   var legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
         }         
      }
      
      if(!(bool)) {  
         return bool;
      }
   }
   return bool;
}


/**
 * This function is check for the special characters 
 * if entered for a text box
 */
/*function checkForName(itemName,name){
   itemName = itemName.toUpperCase();
   var bool = true;
   var legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
         }         
      }
      
      if(!(bool)) {  
         return bool;
      }
   }
   return bool;
}

*/


/**
 * This function is check for the special characters 
 * if entered for a text box
 */
function checkForSubDiv(itemName,name){
   itemName = itemName.toUpperCase();
   var bool = true;
   var legalChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ()/\\ ';
   
   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
         }         
      }
      
      if(!(bool)) {  
         return bool;
      }
   }
   return bool;
}



/**
 * This function is check for the special characters and 
 * Alphabets if entered for a text box
 */

function checkIfOnlyAlphabets(itemName,fieldName){
   var bool = true;
   var legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
	itemName=itemName.toUpperCase();
   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
	    break;
         }         
      }
      
      if(!(bool)) {  
      alert("Please enter only alphabets for "+fieldName+" field.");
         return bool;
      }
   }
   return bool;
}

function checkOnlyAlphabets(itemName){
   var bool = true;
   var legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);

      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
	    break;
         }         
      }
      
      if(!(bool)) {  

         return bool;
      }
   }

   return bool;
}

/**
 * This function is check for the special characters and 
 * Alphabets if entered for a text box
 */

function checkIfOnlyNumeric(itemName){
   var bool = true;
   var legalChars = '1234567890';

   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
	    break;
         }         
      }
      
      if(!(bool)) {  
         return bool;
      }
   }
   return bool;
}


/**
 * This function is check for the special characters and 
 * Alphabets if entered for a text box
 */

function checkForMilePost(itemName){
   itemName = itemName.toUpperCase();
   var bool = true;
   var legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890.';

   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
	    break;
         }         
      }
      
      if(!(bool)) {  
         return bool;
      }
   }
   return bool;
}



/**
 * Checking whether the time entered is  
 * in the format HH:MM:SS
 */
function chkFormatTime(time) {
	var colon = time.charAt(2);
	if(time.length != 5 ){
		return false;
	}
	if(colon != ':'){
		return false;
	}
	colon = time.charAt(5);
	if(colon != ':'){
		return false;
	}
	return true;
}

/**
 * Checking whether the time entered is  
 * in the format HH:MM
 */
function chkTimeFormat(time) {
	
	var colon = time.charAt(2);
	if(time.length != 5){
		return false;
	}
	if(colon != ':'){
		return false;
	}
	
	return true;
}



/**
 * This function is check if only alphabets and numbers are
 * entered for a text box
 */

function checkForAlphaNum(itemName){
   itemName = itemName.toUpperCase();
   var bool = true;
   var legalChars = "";
   legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- ';
   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
         }         
      }
      if(!(bool)) { 
         return bool;
      }
   }
   return bool;
}

/**
 * This function is check if only alphabets and numbers are
 * entered for a text box
 */

function checkForProActAlphaNum(itemName){
   itemName = itemName.toUpperCase();
   var bool = true;
   var legalChars = "";
   legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890. ';
   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
         }         
      }
      if(!(bool)) { 
         return bool;
      }
   }
   return bool;
}

/**
 * This function is to check for the some special characters and 
 * if entered for a text box
 */

function checkForSpecialChars(itemName){
   var bool = true;
   var legalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',.&()-/\ ";
   itemName = itemName.toUpperCase();
	
   for (var i=0;bool && i<itemName.length;i++){
      bool=false;      
      var testChar = itemName.charAt(i);
      for (var j=0; j<legalChars.length;j++) {
         if (testChar == legalChars.charAt(j)) {
            bool = true;
         }         
      }
      
      if(!(bool)) {  
         return bool;
      }
   }
   return bool;
}



/**
 * Checking whether the date entered is  
 * in the format MM/DD/YYYY
 */
function chkFormat(date) {
	var slash = date.charAt(2);
	if(date.length != 10){
		return false;
	}
	if(slash != '/'){
		return false;
	}
	slash = date.charAt(5);
	if(slash != '/'){
		return false;
	}
	return true;
}

/**
 * Calls the checkDate function by passing 
 * the date in the format MM/DD/YYYY
 */
function chkDate(date){
	
	var bool = checkDate(date);
	return bool;
}

/**
 * Check whether an entered date falls in
 * the selected  month.
 */
function chkDateInMonth(date,monthYr){

	var monthSel = monthYr.substring(0,2);
	var yearSel = monthYr.substring(3);
	var monthEnt = date.substring(0,2);
	var yearEnt = date.substring(6);
	
	if((monthSel!= monthEnt)||(yearSel!=yearEnt)){
		return false;
	}
	
	return true;
}


/**
 * This function is used to check whether that the entered date
 * is not greater than the current date.
 */
 
function compCurrAndEnteredDate(entDate, currDate) {
  	var eDate = entDate.substring(6,10)+entDate.substring(0,2)+entDate.substring(3,5);
  	var cDate = currDate.substring(6,10)+currDate.substring(0,2)+currDate.substring(3,5);
  	var ieDate = parseInt(eDate);
  	var icDate = parseInt(cDate);
  
  	if(ieDate > icDate) {
  		return false;
  	}
  	else {
  		return true;
  	}
}

/**
 * This function is used to check whether that the entered date
 * is between the current date and value date.
 */
 
 function compDateValAndEnteredDate(entDate, valDate){
 	var eDate = entDate.substring(6,10)+entDate.substring(0,2)+entDate.substring(3,5);
 	var vDate = valDate.substring(6,10)+valDate.substring(0,2)+valDate.substring(3,5);
// 	var cDate = currDate.substring(6,10)+currDate.substring(0,2)+currDate.substring(3,5);
 	var ieDate = parseInt(eDate);
 	var ivDate = parseInt(vDate);
// 	var icDate = parseInt(cDate);
 	
 	if(eDate < vDate){
 		return false;
 	}
 	else{
 		return true;
 	}
 }


/**
 * Checks whether a date is a valid date
 */
 function checkDate(date)
 {
   // Defining the variables for capturing the days
   // This function checks for a valid date which needs
   // to be entered in a proper format of MM/DD/YYYY
   var ErrorFlag=0;
   var iMonth=0;
   var vBreak=0;
   var iDate=0;
   var vBreakAgain=0;
   var iYear=0;
   var i = 0 ;
   var tmpStr = "" ;
   var strMonth="";
   var strDate="";
   DateData = date ;
   //Checking the validation for length of data entry
   if (DateData.length < 8 || DateData.length > 10)
   {
  ErrorFlag = 1 ; //return false ;
   }
   //Running the loop to check for usage anything other than
   //numbers and slashes
   for (i=0 ; i < DateData.length; i++)
   {
  tmpStr = DateData.substring(i,i+1) ;
  if (tmpStr != "/" && isNaN(tmpStr) != 0)
  {
    ErrorFlag = 1 ;
  }
   }
   //Parsing the valid input from the user to arrive
   //at the individual values
   iParse1 = DateData.substring(1,2);
   iParse2 = DateData.substring(3,4);
   iParse3 = DateData.substring(2,3);
   iParse4 = DateData.substring(5,6);
   iParse5 = DateData.substring(4,5);
   //Assigning the month, year and day value based on
   //the location of the divider
   if (iParse1 == '/'  && iParse2 == '/')
   {
    iMonth = parseInt(DateData.substring(0, 1),10);
    vBreak= DateData.substring(1, 2);
    iDate = parseInt(DateData.substring(2, 3),10);
    vBreakAgain = DateData.substring(3, 4);
    iYear = parseInt(DateData.substring(4, 10),10);

    strMonth = DateData.substring(0, 1) ;
    strDate = DateData.substring(2, 3) ;
    }
    else if (iParse3 == '/' && iParse4 == '/')
    {
        iMonth = parseInt(DateData.substring(0, 2),10);
    vBreak= DateData.substring(2, 3);
    iDate = parseInt(DateData.substring(3, 5),10);
      vBreakAgain = DateData.substring(5, 6);
    iYear = parseInt(DateData.substring(6, 10),10);

      strMonth = DateData.substring(0, 2) ;
    strDate = DateData.substring(3, 5) ;
    }
    else if (iParse1 == '/' && iParse5 == '/')
    {
    iMonth = parseInt(DateData.substring(0, 1),10);
      vBreak= DateData.substring(1, 2);
      iDate = parseInt(DateData.substring(2, 4),10);
      vBreakAgain = DateData.substring(4, 5);
    iYear = parseInt(DateData.substring(5, 10),10);

    strMonth = DateData.substring(0, 1) ;
    strDate = DateData.substring(2, 4) ;
    }
    else if (iParse3 == '/' && iParse5 == '/')
    {
      iMonth = parseInt(DateData.substring(0, 2),10);
    vBreak= DateData.substring(2, 3);
    iDate = parseInt(DateData.substring(3, 4),10);
    vBreakAgain = DateData.substring(4, 5);
    iYear = parseInt(DateData.substring(5, 10),10);

      strMonth = DateData.substring(0, 2) ;
    strDate = DateData.substring(3, 4) ;
    }
    //Checking for a valid month and a valid year
    if (iMonth < 1 || iMonth > 12 || iDate < 1 || iDate > 31 || iYear < 1000 || iYear > 9999)
    {
    ErrorFlag = 1 ;
    }
    //Checking for non existence of '/'
    if (vBreak!= '/')
    {
      ErrorFlag = 1;
    }
    //Checking for non existence of the second '/'
    if (vBreakAgain != '/')
    {
       ErrorFlag = 1 ;
    }
    //Checking for valid number of days for a month having a maximum of 31 days
    if (iMonth==4 || iMonth==6 || iMonth==9 || iMonth==11)
    {
       if (iDate==31)
       {
          ErrorFlag=1;
    }
     }
     //Validation for leap year
     if (iMonth==2)
     {
       if (iDate > 29)
       {
         ErrorFlag=1;
       }
       if (!(((iYear/4)== parseInt(iYear/4,10) && (iYear/100) != parseInt(iYear/100,10)) || ((iYear/400) == parseInt(iYear/400,10))))

       {
    if (iDate == 29)
    {
      ErrorFlag=1;
    }
       }
  }

  //Whenever an error is encountered, the flag is set to 1
  //If the flag value is found to be 1, an invalid date error
  //message is returned to the user.
   if (ErrorFlag==1)
   {
     return false;
   }
   else
   {
     return true;
   }
 }
 
 
 /*
   This function will check the length 
   of the string user enters in the text area
   and will allow only 565 characters
   */
  function checkLength(object){
  	var strVal = object.value;
  	var strLength = strVal.length;
  	if(strLength > 565){	
  		alert("Length of the description is limited to 565 characters.");
  		object.value = strVal.substring(0,565);	
  		return false;	
  	} else {
  		return true;
  	}
 }
 
 /*
  * This function checks the length of
  * the string user enters in the text area
  * and will allow only the total no of characters passed
  * into the function as count.
  */
 function checkLengthWhenSubmit(objectVal,count){
 	var strVal = objectVal;
 	var strLength = strVal.length;
 	var count = parseInt(count,10);
 	
 	if(strLength > count){
 		alert("Length of the description is limited to " + count +" characters.");
 		return false;
 	}
 	else{
 		return true;
 	}
 }
 
 //.All the functions from hereon was added for train rides//
 /**
	 * This function is check for the special characters 
	 * if entered for a text box
	 */
	function checkForChar(itemName,name){
	   itemName = itemName.toUpperCase();
	   var bool = true;
	   var legalChars = "";
	   if(name == "name"){
	   	legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.,- ';
	   }
	   else {
	   	legalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ(),/- ';
	   }
	   for (var i=0;bool && i<itemName.length;i++){
	      bool=false;      
	      var testChar = itemName.charAt(i);
	      for (var j=0; j<legalChars.length;j++) {
	         if (testChar == legalChars.charAt(j)) {
	            bool = true;
	         }         
	      }
	      
	      if(!(bool)) { 
	         return bool;
	      }
	   }
	   return bool;
	}
	/*
	  This function will replace 
	  the space by the "+" symbol
	 */
	function replaceSpace(strVal){
		var result = "";
		for (var i=0;i<strVal.length;i++){	           
		      var testChar = strVal.charAt(i);
		      if(testChar == " "){
		      	testChar = "+";
		      }
		      result = result+testChar;	              
	        }
		return result;
	}
	/*
	Function to validate the number
	*/
	function isValidNumber(objVal){
	
		var num="0123456789";
		var isValid = true;
	
		isValid = isValidVal(objVal,num);
		return isValid;
	}
	// Function to check a valid value.
	
	function isValidVal(objVal,arrch){
	
	 var isValid = true;
	 var i = 0;
		while(i< objVal.length){
			var ch= objVal.charAt(i);
			if(arrch.indexOf(ch) == -1){
				isValid=false;
				break;
			}else{
				i++;
				continue;
			}
		}
		return isValid;
	}


function checkForNumberTime(itemName){
      var bool = true;
      var legalChars = "1234567890: ";

      for (var i=0;bool && i<itemName.length;i++){
         bool=false;      
         var testChar = itemName.charAt(i);

         for (var j=0; j<legalChars.length;j++) {
        
            if (testChar == legalChars.charAt(j)) {
               bool = true;
            }         
         }
         if(!(bool)) {  

            return bool;

         }
      }
  return bool;
}
	
function checkForNumberFormat(itemName){

//  itemName = itemName.toUpperCase();
      var bool = true;
      var legalChars = "1234567890. ";
//		alert(itemName.length);
      for (var i=0;bool && i<itemName.length;i++){
         bool=false;      
         var testChar = itemName.charAt(i);
		 //alert(testChar);
         for (var j=0; j<legalChars.length;j++) {
        
            if (testChar == legalChars.charAt(j)) {
               bool = true;
            }         
         }
         if(!(bool)) {  
            return bool;

         }
      }
      return bool;
}

function checkForAlphabets(itemName){
//	alert(itemName);
	 itemName = itemName.toUpperCase();
      var bool = true;
      var legalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

      for (var i=0;bool && i<itemName.length;i++){
         bool=false;      
         var testChar = itemName.charAt(i);
   //      alert(testChar);

         for (var j=0; j<legalChars.length;j++) {
            if (testChar == legalChars.charAt(j)) {
               bool = true;
            }         
         }
         if(!(bool)) {  
            return bool;

         }
      }
      return bool;
}

function checkForAlphaNumeric(itemName){
	  itemName = itemName.toUpperCase();
      var bool = true;
      var legalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-/. ";

      for (var i=0;bool && i<itemName.length;i++){
         bool=false;      
         var testChar = itemName.charAt(i);
         for (var j=0; j<legalChars.length;j++) {
            if (testChar == legalChars.charAt(j)) {
               bool = true;
            }         
         }
         if(!(bool)) {  
            return bool;

         }
      }
      return bool;
}


function setValueForRadioOpt(itemName,itemValue){
	itemName.value=itemValue;
}

function checkForNumberFormatforTime(itemName,field){

     var bool = true;
     var k=0;
     var len=itemName.length;

      var legalChars = "1234567890:";
      for (var i=0;bool && i<len;i++){
         bool=false;      
         var testChar = itemName.charAt(i);
          k=k+1;
         for (var j=0; j<legalChars.length;j++) {
        
            if (testChar == legalChars.charAt(j)) {
               bool = true;
            } 
         }
        if(k%3==0 && testChar!=':'){
            	bool=false;
        }       
         
         if(!(bool)) {  
         alert("Special Characters and Alphabets are not allowed.Please enter a valid "+field+" time in HH:MM format.");
            return bool;
         }
      }
      	var flag=checkTimeValue(itemName,field);
      
        if(!flag){
      		return false;
        }
	    if(len>0 && len!=5){
			
	     	alert("Please enter a valid "+field+" time in HH:MM format.");
	    	return false;  
	    }    
      return bool;
}

function checkTimeValue(itemName, field){
	var hour= itemName.substring(0, 2);
	var min=  itemName.substring(3,5);
	var flag= false;
	if(hour>23 || min>59 ){
		alert("Please enter a valid "+field+" time in HH:MM format.");
		flag=false;
	}else{
		flag=true;
	}
	return flag;
}
	
function checkForNumberFormatForLatOrLong(field,itemName,place,num,format){
      var bool = true;
      var legalChars = "1234567890. ";
      var k=0;
      var q=0;
      var count=0;
      var dp=0;
      var len=itemName.length;
      if(len!=0){
	      for (var i=0;bool && i< len;i++){
		      k=k+1;
	         bool=false;      
	         var testChar = itemName.charAt(i);
	         for (var j=0; j<legalChars.length;j++) {
	        
	            if (testChar == legalChars.charAt(j)) {
	               bool = true;
	            }         
	         }
	         if(!(bool)) {  
	         alert("Alphabets and Special characters are not allowed for "+field+" field.");
	            return bool;
	
	         }
	      }
	      
	      if(len>=place && bool){
	      bool=false;
	      	for(var i=0;i<place;i++){
	      		var testChar = itemName.charAt(i);
	      		if(testChar=='.'){
	      			count=1;
	      			dp=i+1;
	      			bool=true;
	      		}
	      		
	      	}
	      	if(bool==false && count==0){
	      		//alert("Only "+(place-1)+" digits before decimal point are allowed for "+field+".");
	      	alert("Please enter a valid "+ field + " in "+format+" format.");
	      	}
	      	if(bool==true && dp<place && (len-dp)>num){
		      	bool=false;
		      	if(num==1){
		      			alert("Please enter a valid "+ field + " in "+format+" format.");
      		      		//alert("Only "+num+" digit after decimal point is allowed for "+field+".");
      		     } else{
      		     		alert("Please enter a valid "+ field + " in "+format+" format.");
      		       		//alert("Only "+num+" digits after decimal point are allowed for "+field+".");
      		      }
	      	}
	      }
	 }
      return bool;
}		 

function checkForPhoneNo(itemName,fieldName){
      var bool = true;
      var legalChars = "1234567890-";
      len=itemName.length;
      
	      for (var i=0;bool && i<itemName.length;i++){
	         bool=false;      
	         var testChar = itemName.charAt(i);
	         for (var j=0; j<legalChars.length;j++) {
	            if (testChar == legalChars.charAt(j)) {
	               bool = true;
	            }  
	         }
	         
	        if(i!=3 &&i!=7 && testChar=="-"){
	        	alert("Please enter a valid "+ fieldName+" in XXX-XXX-XXXX format.");
	        	bool= false;
	        	return bool;
	        }
	         if(!(bool)) {  
	         alert("Alphabets and special characters are not allowed for "+fieldName+" field.");
	            return bool;
	
	         }
	      }
      if(len!=0 && len!=12){
      	alert(fieldName +" is 12 characters length.\nPlease enter a valid "+ fieldName+" in XXX-XXX-XXXX format.");
      	bool=false;
	  }
	  
	  if(len==12 &&((itemName.charAt(3)!="-" || itemName.charAt(7)!="-") || itemName=="000-000-0000")){
	  	alert("Please enter a valid "+ fieldName+" in XXX-XXX-XXXX format.");
	  	bool=false;
	  }
      return bool;
}

function checkForPagerNo(itemName,fieldName){
      var bool = true;
      var legalChars = "1234567890";
      len=itemName.length;
      
	      for (var i=0;bool && i<itemName.length;i++){
	         bool=false;      
	         var testChar = itemName.charAt(i);
	         for (var j=0; j<legalChars.length;j++) {
	            if (testChar == legalChars.charAt(j)) {
	               bool = true;
	            }  
	         }
	         if(!(bool)) {  
	         alert("Alphabets and special characters are not allowed for "+fieldName+" field.");
	            return bool;
	
	         }
	      }
	      
      if(len!=0 && len!=10){
      	alert(fieldName +" is 10 characters length.\nPlease enter a valid "+ fieldName+" in XXXXXXXXXX format.");
      	bool=false;
	  }
	  if(len==10 &&itemName=="0000000000"){
	  	alert("Please enter a valid "+ fieldName+" in XXXXXXXXXX format.");
	  	bool=false;
	  }
	  
      return bool;
}


function isIncSubmitted(sucMess,mess,count)
{
       if (navigator.appName == 'Netscape') {
   	    window.captureEvents(Event.KEYPRESS);
   	}


	if(sucMess!='null'){
		alert(sucMess);
	}
	var ht = 460;
    var wt = 640;
	if(mess!='null') {
		var iLen=mess.length;
		var iCount=parseInt(count);
		//alert(iLen +"  "+count+"   "+iCount);
		if(iCount==1){
			if(iLen>900){
				ht = 260;
			}else if(iLen>650){
				 ht = 210;
			} else if(iLen>500){
				 ht = 180;
			} else {
				ht=140;
			}
			 wt=300;
		} else if(iCount==2){
		
			if(iLen>850){
				 ht = 250;
			} else if(iLen>500){
				 ht = 170;
			} else {
				ht=140;
			}
			 wt=400;
			 
		} else{
		
			if(iLen < 1000){
	    		 ht = 140;
	    		 
	    	} else if(iLen < 1500){
	    		ht = 230;
	    		
			} else if(iLen < 2000){
	    		 ht = 260;
	    		 
	    	} else if(iLen < 2500){
	    		ht = 290;
	    		
			} else if(iLen < 3000){
	    		 ht = 320;
	    		 
	    	} else if(iLen < 3500){
	    		 ht = 360;
	    		 
	    	} else if(iLen < 4000){
	    		 ht = 410;
	    		 
	    	} else if(iLen < 4200){
	    		 ht = 430;
	    	}
		}
	    var toppos = (window.screen.height/2)-ht/2;
	    var leftpos = (window.screen.width/2)-wt/2;
		
		document.forms[0].hSubmitValue.value=mess;
		document.forms[0].hColCount.value=count;
		
		window.open("/bnsf.was5/ir/IRCentralController?hAction=Search&hPerform=SubmitFailed",'',"status=no,height="+ht+",scrollbars=no,width="+wt+",top="+toppos+",left="+leftpos);
	}
}

function fnLimitLen(objElement,fieldName){
	elementValue = objElement.value; 
	elementValueLen = elementValue.length;
	if(elementValueLen > 565){
		alert("Please limit the "+fieldName+" to 565 characters");
		objElement.value = elementValue.substring(0,564);
		objElement.focus();
		return false;
	}

}


function compCurrAndEnteredDate(entDate, currDate) {

      var eDate = entDate.substring(6,10)+entDate.substring(0,2)+entDate.substring(3,5);
      var cDate = currDate.substring(6,10)+currDate.substring(0,2)+currDate.substring(3,5);
      var ieDate = parseInt(eDate);
      var icDate = parseInt(cDate);

      if(ieDate > icDate) {
            return false;
            
      } else {
            return true;

      }
}
