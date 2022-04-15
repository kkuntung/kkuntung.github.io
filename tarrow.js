  var response = prompt("Welcome to the tarot puzzle ! "+'\n'+"May I have your name ?");
  var x =1;
  var objA=["pic1","pic4","pic7"]
  var objB=["pic2","pic5","pic8"]
  var objC=["pic3","pic6","pic9"]
  var curi=0;

function pickone(){

  if (document.getElementById("ip").value=="Stars"){
      alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   You attract me like a sparkling star.")

  }
  else if (document.getElementById("ip").value=="Moon") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   You are as pure as the moon.")
  }
  else if (document.getElementById("ip").value=="Sunlight") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   You are my pretty sunshine.")
  }
  else if (document.getElementById("ip").value=="Hermit") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   Sometimes you may need a shelter to obtain security, and someone will be there for you.")
  }
  else if (document.getElementById("ip").value=="High tower") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   Sometimes you may fall down from the height, so take care !")
  }
  else if (document.getElementById("ip").value=="Devil") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   Sometimes you may find yourself surrounded by devils, but just stick to yourself.")
  }
  else if (document.getElementById("ip").value=="Control") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   The ability to plan on your schedule helps to control your life.")
  }
  else if (document.getElementById("ip").value=="Chariot") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   It's not that bad to be aggresive.")
  }
  else if (document.getElementById("ip").value=="The wheel of fate") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   The wheel of fate never stops, and tomorrow is another day.")
  }
  else {
    alert("Please type the correct form.")
  }
}


  function nextone(){
      document.getElementById(objA[curi]).style.display="none";
      document.getElementById(objB[curi]).style.display="none";
      document.getElementById(objC[curi]).style.display="none";
      curi++;
      document.getElementById(objA[curi]).style.display="block";
      document.getElementById(objB[curi]).style.display="block";
      document.getElementById(objC[curi]).style.display="block";
      x=1;
}

function end(){
    alert("Goodbye and have a nice day ~")
  }
