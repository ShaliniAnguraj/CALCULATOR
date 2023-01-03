//create container
let container=document.createElement("div");
container.setAttribute("class","container");
//create calc
let calculator=document.createElement("div");
calculator.setAttribute("class","calc");

//create input
let input=document.createElement("input");
input.setAttribute("class","input");
input.setAttribute("type","text");
input.setAttribute("placeholder","0");

//create button
var b1=createbutton("button","class","button","C");
var b2=createbutton("button","class","button","DEL");
var b3=createbutton("button","class","button","%");
var b4=createbutton("button","class","button","/");
var b5=createbutton("button","class","button","7");
var b6=createbutton("button","class","button","8");
var b7=createbutton("button","class","button","9");
var b8=createbutton("button","class","button","*");
var b9=createbutton("button","class","button","4");
var b10=createbutton("button","class","button","5");
var b11=createbutton("button","class","button","6");
var b12=createbutton("button","class","button","-");
var b13=createbutton("button","class","button","1");
var b14=createbutton("button","class","button","2");
var b15=createbutton("button","class","button","3");
var b16=createbutton("button","class","button","+");
var b17=createbutton("button","class","button","0");
var b18=createbutton("button","class","button","00") 
var b19=createbutton("button","class","button",".");
var b20=createbutton("button","class","button","=");

//styles to apply on specific button
b1.style.background="orange";
b2.style.background="orange";
b3.style.background="orange";
b4.style.background="orange";
b8.style.background="orange";
b12.style.background="orange";
b16.style.background="orange";
b20.style.background="orange";

//functions to createbutton
function createbutton(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
//append elements to html
calculator.append(input,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20);
container.append(calculator);
document.body.append(container);

//condition for buttons
let result="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        
        if(e.target.innerHTML=="="){
            result = eval(result);
            document.querySelector("input").value=result;
        }
    
        else if(e.target.innerHTML=="C"){
            result ="";
            document.querySelector("input").value=result;
        }
        else if(e.target.innerHTML=="DEL"){
            result =result.slice(0,-1);
            document.querySelector("input").value=result;
        }
        else if(e.target.innerHTML=="DEL"){
            result =result.slice(0);
            document.querySelector("input").value=result;
        }
        else{
           
            result= result + e.target.innerHTML;
            document.querySelector("input").value= result;
        }
    
        
    })
})
