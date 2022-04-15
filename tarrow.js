

function pickone(){
  var response = prompt("what is your name");
  if (document.getElementById("ip").value=="Stars"){
      alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   You attract me like a sparkling star.")

  }else if (document.getElementById("ip").value=="Moon") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   You are as pure as the moon.")
  }
  else if (document.getElementById("ip").value=="Sunlight") {
    alert("hihihihi,  "+response+"!"+'\n'+"   The Tarot Hermit card meaning in a nutshell : "+'\n'+"   You are my pretty sunshine.")
  }
  else {
    document.write("Please type the correct word.")
  }
}
