<?php
header("Content-Type: text/plain;charset=utf-8");
$value = $_POST["value"];
$type = $_POST["type"];

switch ($type) {
  case 'name':
  $pattern = "/^[a-zA-Z0-9_.-]{4,20}$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Create Username should contain 4-20 characters long and only allow characters:_ . -";
  break;
  case 'email':
  $pattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/';
  if (preg_match($pattern,$value)) echo true;
  else echo "Email Address is invalid, please enter a valid email address. e.g. john@demo.us";
  break;
  case 'password':
  $pattern = "/^[a-zA-Z0-9_.-]{4,20}$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Create password should contain 4-20 characters long and only allow characters:_ . -";
  break;
  case  'firstname':
  $pattern = "/^([a-zA-Z]{3,30}\s*)+$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Firstname is invalid, please enter a valid firstname. e.g. Alex";
  break;
  case  'lastname':
  $pattern = "/^[a-zA-Z]{3,30}$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Lastname is invalid, please enter a valid lastname. e.g. Smith";
  break;
  case  'address':
  $pattern = "/^\d+\s[A-z]+\s[A-z]+/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Address is invalid, please enter a valid address. e.g. 10 Glengarry Ave";
  break;
  case  'company':
  $pattern = "/^[A-Z]([a-zA-Z0-9]|[- @\.#&!])*$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Company name is invalid, please enter a valid company. e.g. Obaju";
  break;
  case  'city':
  $pattern = "/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Please enter a valid city. e.g. Melbourne";
  break;
  case  'postcode':
  $pattern = "/^[0-9]{4}$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Postcode should have 4 digital numbers from 0-9";
  break;
  case  'phone':
  $pattern = "/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Phone number is invalid, please enter a valid phone. e.g. 0412843987";
  break;
  case  'email2':
  $pattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/';
  if (preg_match($pattern,$value)) echo true;
  else echo "Email address is invalid, please enter a valid email address. e.g. john@demo.us";
  break;
  case  'cardname':
  $pattern = "/([a-zA-Z]{3,30}\s*)+ [a-zA-Z]{3,30}/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Card name is invalid, please enter a valid card name. e.g. Alex Smith";
  break;
  case  'cardnumber':
  $pattern = '/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/';
  if (preg_match($pattern,$value)) echo true;
  else echo "Card number is invalid, please enter a valid card number. e.g. 4622387628372982";
  break;
  case  'expirymonth':
  $pattern = '/^(0?[1-9]|1[012])$/';
  if (preg_match($pattern,$value)) echo true;
  else echo "Expirymonth should range from 01-12";
  break;
  case  'expiryyear':
  $pattern = '/^(1[789]|[2-9][0-9])$/';
  if (preg_match($pattern,$value)) echo true;
  else echo "Expiryyear is last 2 digital number, from 17";
  break;
  case  'cvv':
  $pattern = '/^[0-9]{3}$/';
  if (preg_match($pattern,$value)) echo true;
  else echo "Cvv is invalid, please input a valid Cvv";
  break;
  case  'password_old':
  if ($value == "1") echo true;
  else echo "Old password is not correct";
  break;
  case  'password_1':
  $pattern = "/^[a-zA-Z0-9_.-]{4,20}$/";
  if (preg_match($pattern,$value)) echo true;
  else echo "Create password should contain 4-20 characters long and only allow characters:_ . -";
  break;
}
?>
