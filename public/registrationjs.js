var a= document.getElementById('bgimg');
var i = 0;
var myimages=["img2.jpg","img3.jpg","img4.jpg","img5.jpg","img1.jpg"];
var len=myimages.length;
function slider(){
  if(i>len-1){
    i=0;
  }
  a.src=myimages[i];
  i++;
  setTimeout('slider()',5000);
}