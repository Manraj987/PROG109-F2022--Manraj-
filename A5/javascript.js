var myImages =["https://www.imms.org/images/dolphin_presentation/dolphin1.jpg",
               "https://cdn.vox-cdn.com/thumbor/aO_ybFfmXJZx8Wehp_eyqIxIfok=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24154428/1437775563.jpg",
               "https://churchleaders-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/2021/09/DK-Metcalf.jpeg",
               "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzMjg3MDYzMzcyNTcyMjI3/usatsi_19288345-1.jpg",
               "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTkwNDEzODQ4ODQ4Mjg1/seattle-seahawks-super-bowl-xlix-sports-illustrated-coverjpg.jpg"];


var captionImages =["Geno smith"," Tyler Lockett","Dk Metcalf","Keaneth Waler III","The Legion of Boom"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); {}

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}



setInterval(autoSlide,2000); // Next
