var likes =0;
function like() {
    if(likes===0)
    {
      document.getElementById("like").innerHTML ='<i class="fas fa-thumbs-up"></i>&nbsp;Liked!';    
        likes++;
        document.getElementById("liketxt").innerHTML = likes+' person liked this!';
    }
    else 
    {
            likes++;
        document.getElementById("liketxt").innerHTML = likes +' people have liked this!';
    }
}
function comments(cmt){
    var par = document.createElement("div");
    var lis = document.createTextNode(cmt.value);
   par.appendChild(lis);
   // par.prepend(lis);
    var vs = document.getElementById("listcomments");
    //vs.appendChild(par);
    vs.prepend(par);
    par.classList.add("cmntdiv");
    vs.style.padding ="10px 20px 20px 20px";
}
var c=0;
function func()
{
  c=c+1;
   if((c%2)!=0)
   {
     document.getElementById('blogBody').contentEditable = true;
     document.getElementById('btn').innerHTML='Save';
   }
   else if((c%2)==0)
   {
     document.getElementById('blogBody').contentEditable = false;
     document.getElementById('btn').innerHTML='Edit';
   }
}