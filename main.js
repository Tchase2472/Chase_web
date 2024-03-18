
var aText = new Array(
    "SUBJECT:   Todd Chase",
    " ",
    "DOB : Unknown",
    " ", "TITLE: Web Application Dev "," ",
    "CURRENT OCCUPATION: Web Applications Development",
    "   ","HOBBIES: Guitars  Airplanes  Computers", " ", "EXPERIENCE: 20 years in senior management. 3 Years Web Dev.", " ", "NUMBER OF DOGS: 1", " ", "GOAL: Begin a successful career in computer technology"," "," ","PROCEED TO DETAILED DOSSIER" 
)

var iSpeed = 10;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

const typewriter = () => {

    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex){
        sContents += aText[iRow++] + '<br/>';
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";

        if(iTextPos++ == iArrLength){
            iTextPos = 0;
            iIndex++;
           if(iIndex != aText.length){
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
       } else {
        setTimeout("typewriter()", iSpeed);
       }
      }

typewriter();