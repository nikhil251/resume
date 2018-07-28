	function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
           callback(xhr.responseText);
        }
    }
    xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
    console.log(data);
    basic(data.details);
    car(data.carrier);
    edu(data.education);
    skill(data.skills);
}) 
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(detail){
var image=document.createElement("img");
image.src=detail.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=detail.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=detail.email;
left.appendChild(email);
var phone=document.createElement("h2");
phone.textContent=detail.phone;
left.appendChild(phone);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education1){
	var e=document.createElement("h1");
    e.textContent="Educational Details";
    right.appendChild(e);
		var un=document.createElement("ul");
	right.appendChild(un);
	e.appendChild(document.createElement("HR"));
	e.appendChild(un);
	for(var i=0;i<education1.length;i++){
		var l=document.createElement("li");
		l.textContent=education1[i].course;
		un.appendChild(l);
		 var l1=document.createElement("li");
	 	l1.textContent=education1[i].college;
		un.appendChild(l1);
		var l2=document.createElement("li");
		l2.textContent=education1[i].per;
		un.appendChild(l2);
		
	}	
}
function skill(skilldata){
	var s=document.createElement("div");
	s.classList.add("sset");
	right.appendChild(s);
	var head=document.createElement("h1");
	head.textContent="Skill Set";
	s.appendChild(head);
	s.appendChild(document.createElement("HR"));
	var t=document.createElement("table");
	var tabledata="";
	for(var i=0;i<skilldata.length;i++){
		tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
		t.innerHTML=tabledata;
	}	
head.appendChild(t);
}
function car(carrier)
{
	var d=document.createElement("div");
	d.classList.add("carrier");
	right.appendChild(d);
	var e=document.createElement("h1");
	e.textContent="carrier Objective";
	d.appendChild(e);
	var para=document.createElement("p");
	para.textContent="I want to be CRICKETER.but it was diificult to get it";
	e.appendChild(para);
}
