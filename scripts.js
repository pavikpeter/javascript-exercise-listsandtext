

let names=["András","Béla", "Cecil","Dóra","Zoltán", "Géza","Franciska"];

$("body").append('<ul id="jsAdded"></ul>');   //body alatt új ul-t létrehoz jsAdded id-vel
$("#jsAdded").append("<li class='underline'> Added by JavaSript </li>");    //"fejléc"
$("#jsAdded").append("<ul id='jsAdded_2'></ul>");   //jsAdded alatt új ul jsAdded_2 id-vel

names.forEach(constructListItem);    //names tömb minden elemére constructListItem fv-t meghív

function constructListItem(item) {   
    if (item!=="Zoltán") {    
        $("#jsAdded_2").append("<li style='list-style-type: square'>" + item + "</li>");
    }else{
        $("#jsAdded_2").append("<li style='list-style-type: square'><strong>"+ item + "</strong></li>");
    }
  } 
  
let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

let title = $("<h2></h2>").text(additionalBlock.title);
let content= $("<p></p>").text(additionalBlock.text);
$("body").append(title, content); 
