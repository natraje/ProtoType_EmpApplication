function loadHelp(){
    var ht = 300;
    var wt = 700;
    var toppos = (window.screen.height/2)-ht/2;
    var leftpos = (window.screen.width/2)-wt/2;

	mywindow = window.open("HelpPage.html","mywindow","status=yes,height="+ht+",scrollbars=yes,width="+wt+",top="+toppos+",left="+leftpos);

}

function checkLogin(){
/*	if(!checkID()){
	  alert('Please enter valid id');
	  document.forms[0].empId.focus();
	} else if(!checkPasswd()){
	  alert('Please enter valid password');
	  document.forms[0].passWd.focus();
	} else {*/
	   document.forms[0].action='EmployeeDetPage.html';
	   document.forms[0].submit();
	//}
}


function checkID(){
var empId=trim(document.forms[0].empId.value);

	if(empId=="" || empId.length==0 || !checkIfOnlyNumeric(empId)){
		return false;
	} else {
		return true;
	}
}

function checkPasswd(){
var empId=trim(document.forms[0].passWd.value);

	if(empId=="" || empId.length==0){
		return false;
	} else {
		return true;
	}
}

function loadEmpDet(page){
   document.forms[0].action=page;
   document.forms[0].submit();
}

function addEmployee(){
 if(confirm("Do you really want to save the details?")){
  // document.getElementById("myIframe").src="AddSavePage.html";
  // document.getElementById(save).innerHTML="Test";
   document.forms[0].action='EmployeeDetPage.html';
   document.forms[0].submit();
 }
}

function srchEmployee(){
   document.forms[0].action='EmpUpdatePage.html';
   document.forms[0].submit();
}

function delEmployee(){
 if(confirm("Do you really want to delete the employee details?")){
  // document.getElementById("myIframe").src="AddSavePage.html";
  // document.getElementById(save).innerHTML="Test";
   document.forms[0].action='EmployeeDetPage.html';
   document.forms[0].submit();
 }
}
function searchEmployee(){
   document.forms[0].action='EmpSrchResultsPage.html';
   document.forms[0].submit();
}