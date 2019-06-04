// window.onload = function(){
//     (function(){
//         var turbo = document.getElementById("turbo");
//         var myArea = document.getElementById("myArea");
//         var mySize = document.getElementById("mySize");
//         var myAnimation = document.getElementById("myAnimation");
//         var start = document.getElementById("btStart");
//         var stop = document.getElementById("btStop");

//         var isStart = false, speed = 200, interval = 0, index = 0, tab;

//         start.onclick= function(member){
//             if(tab === undefined){
//                 return;
//             }
//             startAnimation();
//             desableButton(true);
//         };
//         //stop function
//         stop.onclick = function(){
//             stopEvent();
//         };
//         //initialisation
//         var initialisation = function(val1){
//             tab = val1.split("=======\n");
//             console.log(tab);
//             index = 0;
//             areaValue(tab[index]);
//         };
//         //animation
//         var startAnimation = function(){
//             if(tab.length == 0){
//                 return;
//             }
//             isStart = true;
//             interval = setInterval(iteration,speed);
//         };
//         myAnimation.onchange = function(){
//             stopEvent();
//             var val = ANIMATIONS[this.value];
//             initialisation(val);
//         };
//         var stopEvent = function(){
//             if(isStart === false){
//                 return;
//             }
//             if(interval !== 0){
//                 clearInterval(interval);
//                 desableButton(false);
//                 isStart = false;
//             }
//         };
//         //iterate
//         var iteration = function(){
//             index++;
//             if(index >= tab.length){
//                 index =0;
//             }
//             areaValue(tab[index]);
//         };
//         var areaValue = function(val){
//             myArea.value = val;
//         };
//         //desactivation button

//         var desableButton = function(desac){
//             start.disabled = desac;
//             stop.disabled = !desac;
//             myAnimation.disabled = desac;
//         };
//         var reset = function(){
//             if(isStart === false){  return;}
//             if(interval !== 0){
//                 clearInterval(interval);
//                 startAnimation();
//             }
//         };
//         turbo.onchange = function(){
//             console.log(speed);
//             if(this.checked){
//                 speed = speed/2;
//             }else{
//                 speed = speed * 2;
//             }
//             reset();
//         };
//         // event size
//         mySize.onchange = function(){
//             var font = 12;
//             switch(this.value){
//                 case "Tiny":
//                     font = 7;
//                     break;
//                 case "Small":
//                     font = 10;
//                     break;
//                 case "Large":
//                     font = 16;
//                     break;
//                 case "Extra Large":
//                     font = 24;
//                     break;
//                 case "XXL":
//                     font = 32;
//                     break;
//                 default:
//                     font = 12;

//             }
//             myArea.style.fontSize = font + 'pt';
//         };
//     })();
// };
 window.onload = function(){
    (function(){
   var turbo=document.getElementById("turbo");
   var size=document.getElementById("mySize");
   var animation=document.getElementById("myAnimation");
   var start=document.getElementById("btStart");
   var stop=document.getElementById("btStop");
   var textarea=document.getElementById("myArea");

        var isStarted = false,
            speed = 200,arr,intervalId = 0,     index = 0;

        start.onclick = function(e){
            if(arr===undefined) {return;}
            moveAnimation();
            setModeOpt(true);
        } ;

        stop.onclick = function(e){
            stopAction();
        } ;
        var initialize = function(val){
            arr = val.split("=====\n");
            console.log(arr);
            index = 0;
            setAre(arr[index]);
        } ;

        var setAre = function(val){
            textarea.value = val;
        } ;

        var moveAnimation = function(){
            if(arr.length == 0) {return; }
            isStarted = true;
            intervalId = setInterval(iterate, speed) ;
        };

        var setModeOpt = function(bool){

            start.disabled = bool;
            stop.disabled = !bool;
            animation.disabled = bool;
        } ;

       
        animation.onchange = function(){
            stopAction();
            var val = ANIMATIONS[this.value];
            initialize(val);
        } ;
//      Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
        size.onchange = function(){
            var font = 12; //pt
            switch(this.value){
                case "Tiny":
                    font = 7;
                    break;
                case "Small":
                    font = 10;
                    break;
                
                case "Large":
                    font = 16;
                    break;
                case "Extra Large":
                    font = 24;
                    break;
                case "XXL":
                    font = 32;
                    break;
                default:
                    font = 12;
            }

            textarea.style.fontSize = font+'pt';
        } ;

        turbo.onchange = function(){
            console.log(speed);
            if( this.checked ){
                speed = speed/2;
            }else{
                speed = speed * 2;
            }

            resetSpd();
        } ;

        

        var iterate = function(){
            index++;
            if(index >= arr.length) { index = 0;}

                setAre(arr[index]);
        } ;

          var stopAction = function(){
            if(isStarted === false) {return; }

            if(intervalId!==0){
                clearInterval(intervalId);
                setModeOpt(false);
                isStarted = false;
            }
        } ;

        var resetSpd = function(){
            if(isStarted === false) {return; }
          if(intervalId!==0){
                clearInterval(intervalId);
                moveAnimation();
            }
        } ;

    })();
} ;
