//alert("Hello, world!");

window.onload = function () {
    document.getElementById("biggerButton").onclick = textArea;
    var x;
    function textArea() {
      if(!x)
      x = setInterval(makeItBigger,500);
      else
      {
     clearInterval(x);
     x=null;
      }
    }
    }
  function makeItBigger(){

    var font=parseInt(document.getElementById("colour").style.fontSize);
    font+=2;
    document.getElementById("colour").style.fontSize=font+"px";
  }
    // function myFun () {
    //       var checkbox = document.getElementById('fluency');
    //       //checkbox = document.getElementById("colour");
    //       if(checkbox.checked)
    //       {document.getElementById('colour').style.backgroundColor = "red";}
    //     }
   function myFun(){
      var checkbox = document.getElementById("fluency");
      var text = document.getElementById("colour");

      if(checkbox.checked == true){
        text.style.color ="green";
        text.style.fontWeight="bold";
        text.style.textDecoration = "underline overline";
      // alert("Hello world!");
      }else{
        text.style.display ="none";
      }
    }
    // function myFunction() {
    //   var elem = document.getElementById("colour");
    //   var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("font-size");
    //   var sizeconver = parseFloat(theCSSprop);
    //   elem.style.fontSize= (sizeconver + 2)+"px";
    //   alert(elem.style.fontSize);
    //  // document.getElementById("demo").innerHTML = theCSSprop;
    // }
  