<?php

$xmlDoc=new DOMDocument();
$xmlDoc->load("../products.xml");

$product_name=$xmlDoc->getElementsByTagName('name');

$keyword=$_GET["keyword"];

if (strlen($keyword)>0)
{
  $hint="";
  for($i=0; $i<($product_name->length); $i++)
  {
      if (stristr($product_name->item($i) ->nodeValue,$keyword))
      {
        if ($hint=="")
        {
          $hint="<a href='detail.html?name=".$product_name->item($i) ->nodeValue."' target='_blank'>".$product_name->item($i) ->nodeValue."</a>";
        }
        else
        {
          $hint=$hint . "<br /><a href='detail.html?name=".$product_name->item($i)->nodeValue."' target='_blank'>".$product_name->item($i)->nodeValue."</a>";
        }
      }
  }
}

if ($hint=="")
{
  $response="no suggestion";
}
else
{
  $response=$hint;
}

//output the response
echo $response;


?>
