var a= document.getElementById('bgimg');
var i = 0;
var myimages=["images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img1.jpg"];
var len=myimages.length;
function slider(){
  if(i>len-1){
    i=0;
  }
  a.src=myimages[i];
  i++;
  setTimeout('slider()',5000);
}
