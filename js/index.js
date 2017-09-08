function validate(_value,_type){
  if(_value == ""){
    // Fields that are checked for completeness
    switch(_type){
      case  'name':
      $("#userName").html("name is required");
      break;
      case  'email':
      $("#userEmail").html("email is required");
      break;
      case  'password':
      $("#userPassword").html("password is required");
      break;
      case  'firstname':
      $("#userFirstname").html("firstname is required");
      break;
      case  'lastname':
      $("#userLastname").html("lastname is required");
      break;
      case  'address':
      $("#userAddress").html("address is required");
      break;
      case  'company':
      $("#userCompany").html("company is required");
      break;
      case  'city':
      $("#userCity").html("city is required");
      break;
      case  'postcode':
      $("#userPostcode").html("postcode is required");
      break;
      case  'phone':
      $("#userPhone").html("phone is required");
      break;
      case  'email2':
      $("#userEmail2").html("email2 is required");
      break;
      case  'cardname':
      $("#userCardname").html("cardname is required");
      break;
      case  'cardnumber':
      $("#userCardnumber").html("cardnumber is required");
      break;
      case  'expirymonth':
      $("#userExpirymonth").html("expirymonth is required");
      break;
      case  'expiryyear':
      $("#userExpiryyear").html("expiryyear is required");
      break;
      case  'cvv':
      $("#userCvv").html("cvv is required");
      break;
      case  'password_old':
      $("#userOldpassword").html("please input old password");
      break;
      case  'password_1':
      $("#userNewpassword").html("please input new password");
      break;
    }
  }else{
    //Validate data formats/information
    $.ajax({
      type: "POST",
      url: "lib/func_validate.php",
      data: {
        value:_value,
        type: _type
      },
      success: function(data){
        if(data == 1){
          switch(_type){
            case  'name':
            $("#userName").html("");
            break;
            case  'email':
            $("#userEmail").html("");
            break;
            case  'password':
            $("#userPassword").html("");
            break;
            case  'firstname':
            $("#userFirstname").html("");
            break;
            case  'lastname':
            $("#userLastname").html("");
            break;
            case  'address':
            $("#userAddress").html("");
            break;
            case  'company':
            $("#userCompany").html("");
            break;
            case  'city':
            $("#userCity").html("");
            break;
            case  'postcode':
            $("#userPostcode").html("");
            break;
            case  'phone':
            $("#userPhone").html("");
            break;
            case  'email2':
            $("#userEmail2").html("");
            break;
            case  'cardname':
            $("#userCardname").html("");
            break;
            case  'cardnumber':
            $("#userCardnumber").html("");
            break;
            case  'expirymonth':
            $("#userExpirymonth").html("");
            break;
            case  'expiryyear':
            $("#userExpiryyear").html("");
            break;
            case  'cvv':
            $("#userCvv").html("");
            break;
            case  'password_old':
            $("#userOldpassword").html("");
            break;
            case  'password_1':
            $("#userNewpassword").html("");
            break;
          }
        }else{
          switch(_type){
            case  'name':
            $("#userName").html(data);
            break;
            case  'email':
            $("#userEmail").html(data);
            break;
            case  'password':
            $("#userPassword").html(data);
            break;
            case  'firstname':
            $("#userFirstname").html(data);
            break;
            case  'lastname':
            $("#userLastname").html(data);
            break;
            case  'address':
            $("#userAddress").html(data);
            break;
            case  'company':
            $("#userCompany").html(data);
            break;
            case  'city':
            $("#userCity").html(data);
            break;
            case  'postcode':
            $("#userPostcode").html(data);
            break;
            case  'phone':
            $("#userPhone").html(data);
            break;
            case  'email2':
            $("#userEmail2").html(data);
            break;
            case  'cardname':
            $("#userCardname").html(data);
            break;
            case  'cardnumber':
            $("#userCardnumber").html(data);
            break;
            case  'expirymonth':
            $("#userExpirymonth").html(data);
            break;
            case  'expiryyear':
            $("#userExpiryyear").html(data);
            break;
            case  'cvv':
            $("#userCvv").html(data);
            break;
            case  'password_old':
            $("#userOldpassword").html(data);
            break;
            case  'password_1':
            $("#userNewpassword").html(data);
            break;
          }
        }
      },
    });
  }
}

function validatePassword(_value){
  var Password1 = document.getElementById("password_1").value;

  if(_value == ""){
    $("#userRenewpassword").html("please retype new password");
    return false;
  }else{
    if(_value == Password1){
      $("#userRenewpassword").html("");
      return true;
    }
    else{
      $("#userRenewpassword").html("Passwords you input is different");
      return false;
    }
  }
}

function isComplete(_value){
  if(_value != ""){
    return true;
  }else{
    return false;
  }
}

function isCorrect(_value,_type){
  var correct;
  $.ajax({
    type: "POST",
    url: "lib/func_validate.php",
    data: {
      value:_value,
      type: _type
    },
    async : false,
    success: function(data){
      if(data == 1){
        correct =  true;
      }else{
        correct =  false;
      }
    },
  });
  return correct;
}

function submitRegister(){
  var nameCompleteness  =  isComplete($("#name").val());
  if(!nameCompleteness){
    $("#userName").html("name is required");
  }
  var emailCompleteness  =  isComplete($("#email").val());
  if(!emailCompleteness){
    $("#userEmail").html("email is required");
  }
  var passwordCompleteness  =  isComplete($("#password").val());
  if(!passwordCompleteness){
    $("#userPassword").html("password is required");
  }

  var nameCorrectness  =  isCorrect($("#name").val(),"name");
  var emailCorrectness  =  isCorrect($("#email").val(),"email");
  var passwordCorrectness  =  isCorrect($("#password").val(),"password");

  if(nameCompleteness && emailCompleteness && passwordCompleteness&&nameCorrectness&&emailCorrectness&&passwordCorrectness){
    return true;
  }else{
    return false;
  }
}

function submitCheckout1(){
  var firstnameCompleteness = isComplete($("#firstname").val());
  if(!firstnameCompleteness){
    $("#userFirstname").html("firstname is required");
  }
  var lastnameCompleteness= isComplete($("#lastname").val());
  if(!firstnameCompleteness){
    $("#userLastname").html("lastname is required");
  }
  var addressCompleteness= isComplete($("#address").val());
  if(!addressCompleteness){
    $("#userAddress").html("address is required");
  }
  var companyCompleteness= isComplete($("#company").val());
  if(!companyCompleteness){
    $("#userCompany").html("company is required");
  }
  var cityCompleteness= isComplete($("#city").val());
  if(!cityCompleteness){
    $("#userCity").html("city is required");
  }
  var postcodeCompleteness= isComplete($("#postcode").val());
  if(!postcodeCompleteness){
    $("#userPostcode").html("postcode is required");
  }
  var phoneCompleteness= isComplete($("#phone").val());
  if(!phoneCompleteness){
    $("#userPhone").html("phone number is required");
  }
  var email2Completeness= isComplete($("#email2").val());
  if(!email2Completeness){
    $("#userEmail2").html("email is required");
  }
  var countryCompleteness = isComplete($("#country").val());
  if(!countryCompleteness){
    $("#userCountry").html("Please to choose your country");
  }
  var stateCompleteness = isComplete($("#state").val());
  if(!stateCompleteness){
    $("#userState").html("Please to choose your state");
  }

  var firstnameCorrectness = isCorrect($("#firstname").val(),"firstname");
  var lastnameCorrectness= isCorrect($("#lastname").val(),"lastname");
  var addressCorrectness= isCorrect($("#address").val(),"address");
  var companyCorrectness= isCorrect($("#company").val(),"company");
  var cityCorrectness= isCorrect($("#city").val(),"city");
  var postcodeCorrectness= isCorrect($("#postcode").val(),"postcode");
  var phoneCorrectness= isCorrect($("#phone").val(),"phone");
  var email2Correctness= isCorrect($("#email2").val(),"email2");

  if(countryCompleteness&&stateCompleteness&&firstnameCompleteness&&lastnameCompleteness &&addressCompleteness &&companyCompleteness && cityCompleteness&& postcodeCompleteness&& phoneCompleteness&& email2Completeness&&firstnameCorrectness && lastnameCorrectness&&addressCorrectness && companyCorrectness&& cityCorrectness&& postcodeCorrectness&& phoneCorrectness&& email2Correctness){
    return true;
  }else{
    return false;
  }
}

function select(){
  if(isComplete($("#state").val())){
    $("#userState").html("");
  }
}

function ClickOpt(){
  if(isComplete($("#country").val())){
    $("#userCountry").html("");
  }

  //Country Select
  var parent = $("#country");
  var par_val = parent.val();

  //State Select
  var child = document.getElementById("state");

  //Delete the States
  var ch_len = child.options.length;
  for(var index = 0; index < ch_len; index++){
    child.options.remove(0);
  }

  //Add the states
  if(par_val == "1"){
    addOption("","");
    addOption("1","WA");
    addOption("2","VIC");
    addOption("3","TAS");
    addOption("4","SA");
    addOption("5","QLD");
    addOption("6","NSW");
  }

  function addOption(value,text){
    var option = document.createElement("option");
    option.text = text;
    option.value = value;
    child.add(option,null);
  }
}

function submitCheckout2(){
  var de1 = document.getElementById("delivery1").checked;
  var de2 = document.getElementById("delivery2").checked;
  var de3 = document.getElementById("delivery3").checked;

  if(de1 || de2 || de3){
    return true;
  }else{
    alert("Please choose the delivery.");
    return false;
  }
}

function submitCheckout3(){
  var pay1 = document.getElementById("payment1").checked;
  var pay2 = document.getElementById("payment2").checked;

  if(pay1){
    return true;
  }else if(pay2){
    var cardnameCompleteness = isComplete($("#cardname").val());
    if(!cardnameCompleteness){
      $("#userCardname").html("cardname is required");
    }
    var cardnumberCompleteness = isComplete($("#cardnumber").val());
    if(!cardnumberCompleteness){
      $("#userCardnumber").html("cardnumber is required");
    }
    var expirymonthCompleteness = isComplete($("#expirymonth").val());
    if(!expirymonthCompleteness){
      $("#userExpirymonth").html("expirymonth is required");
    }
    var expiryyearCompleteness = isComplete($("#expiryyear").val());
    if(!expiryyearCompleteness){
      $("#userExpiryyear").html("expiryyear is required");
    }
    var cvvCompleteness = isComplete($("#cvv").val());
    if(!cvvCompleteness){
      $("#userCvv").html("cvv is required");
    }

    var cardnameCorrectness = isCorrect($("#cardname").val(),"cardname");
    var cardnumberCorrectness = isCorrect($("#cardnumber").val(),"cardnumber");
    var expirymonthCorrectness = isCorrect($("#expirymonth").val(),"expirymonth");
    var expiryyearCorrectness = isCorrect($("#expiryyear").val(),"expiryyear");
    var cvvCorrectness = isCorrect($("#cvv").val(),"cvv");

    if(cardnameCompleteness&&cardnumberCompleteness&&expirymonthCompleteness&&expiryyearCompleteness&&expiryyearCompleteness&&cvvCompleteness&&cardnameCorrectness&&cardnumberCorrectness&&expirymonthCorrectness&&expiryyearCorrectness&&cvvCorrectness){
      return true;
    }else{
      return false;
    }
  }else{
    alert("Please choose payment method.");
    return false;
  }
}

function submitPassword(){
  var password_oldCompleteness = isComplete($("#password_old").val());
  if(!password_oldCompleteness){
    $("#userOldpassword").html("old password is required");
  }
  var password_1Completeness = isComplete($("#password_1").val());
  if(!password_1Completeness){
    $("#userNewpassword").html("new password is required");
  }
  var password_2Completeness = isComplete($("#password_2").val());
  if(!password_2Completeness){
    $("#puserRenewpassword").html("retyped password is required");
  }

  var password_oldCorrectness = isCorrect($("#password_old").val(),"password_old");
  var password_1Correctness = isCorrect($("#password_1").val(),"password_1");
  var password_2Correctness = validatePassword($("#password_2").val());

  if(password_oldCompleteness&&password_1Completeness&&password_2Completeness&&password_oldCorrectness&&password_1Correctness&&password_2Correctness){
    console.log("Correct");
    return true;
  }else{
    return false;
  }
}

function getDetails(){
  $("#firstname").val("abc");
  $("#lastname").val("abc");
  $("#address").val("abc");
  $("#company").val("abc");
  $("#city").val("abc");
  $("#postcode").val("abc");
  $("#phone").val("abc");
  $("#email").val("abc");
}

function submitDetails(){
  var firstnameCompleteness = isComplete($("#firstname").val());
  if(!firstnameCompleteness){
    $("#userFirstname").html("firstname is required");
  }
  var lastnameCompleteness = isComplete($("#lastname").val());
  if(!lastnameCompleteness){
    $("#userLastname").html("lastname is required");
  }
  var addressCompleteness = isComplete($("#address").val());
  if(!addressCompleteness){
    $("#userAddress").html("address is required");
  }
  var companyCompleteness = isComplete($("#company").val());
  if(!companyCompleteness){
    $("#userCompany").html("company is required");
  }
  var cityCompleteness = isComplete($("#city").val());
  if(!cityCompleteness){
    $("#userCity").html("city is required");
  }
  var postcodeCompleteness = isComplete($("#postcode").val());
  if(!postcodeCompleteness){
    $("#userPostcode").html("postcode is required");
  }
  var phoneCompleteness = isComplete($("#phone").val());
  if(!phoneCompleteness){
    $("#userPhone").html("phone is required");
  }
  var emailCompleteness = isComplete($("#email").val());
  if(!emailCompleteness){
    $("#userEmail").html("email is required");
  }

  var firstnameCorrectness = isCorrect($("#firstname").val(),"firstname");
  var lastnameCorrectness = isCorrect($("#lastname").val(),"lastname");
  var addressCorrectness = isCorrect($("#address").val(),"address");
  var companyCorrectness = isCorrect($("#company").val(),"company");
  var cityCorrectness = isCorrect($("#city").val(),"city");
  var postcodeCorrectness = isCorrect($("#postcode").val(),"postcode");
  var phoneCorrectness = isCorrect($("#phone").val(),"phone");
  var emailCorrectness = isCorrect($("#email").val(),"email");

  if(firstnameCompleteness&&lastnameCompleteness&&addressCompleteness&&companyCompleteness&&cityCompleteness&&postcodeCompleteness&&phoneCompleteness&&emailCompleteness&&firstnameCorrectness&&lastnameCorrectness&&addressCorrectness&&companyCorrectness&&cityCorrectness&&postcodeCorrectness&&phoneCorrectness&&emailCorrectness){
    return true;
  }else{
    return false;
  }
}

function showResult(_keyword){
  if (_keyword.length==0)
  {
    $('#livesearch').css("display","none");
    $("#livesearch").innerHTML="";
    return;
  }

  $.ajax({
    type: "GET",
    url: "lib/func_search.php",
    data: {
      keyword:_keyword
    },
    async : false,
    success: function(data){
      $('#livesearch').css("display","block");
      $("#livesearch").html(data);
    },
  });
}

function clickHint(){
  $("#livesearch").css("display","none");
}
