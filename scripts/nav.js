const body = document.body.innerHTML;

document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>

<style>
body {
  text-align: center;
  /* Same as the width of the sidenav */
  font-size: 20px;
  /* Increased text to enable scrolling */
  padding: 0px 10px;
  margin-left: 250px;
  font-weight:bold;
  font-family: Arial, "Helvetica Neue", Helvetica;
}

</style>
</head>
<body>
  <header> Where's the Bear?</header>
  <nav id="nav-placeholder" class="sidenav">
    <li><a href="index.html">Home</a></li>
    <button onclick="
      poop();
    " 
    class="dropdown-btn" 
    >Season 1 >
      <i class="fa-solid fa-caret-down" style="color: #0a0000;"></i>
    </button>

    <div id="dropD" class="dropdown-container" style="">
      <a href="S1E1.html">1: Pilot</a>
      <a href="S1E2.html">2: Kyptonite</a>
      <a href="S1E3.html">3: Wedding</a>
      <a href="S1E4.html">4: Naked</a>
      <a href="S1E5.html">5: Cece Crashes</a>
      <a href="S1E6.html">6: Thanksgiving</a>
      <a href="S1E7.html">7: Bells</a>
      <a href="S1E8.html">8: Bad in Bed</a>
      <a href="S1E9.html">9: The 23rd</a>
      <a href="S1E10.html">10: The Story of the 50</a>
      <a href="S1E11.html">11: Jess and Julia</a>
      <a href="S1E12.html">12: The Landlord</a>
      <a href="S1E13.html">13: Valentine's Day</a>
      <a href="S1E14.html">14: Bully</a>
      <a href="S1E15.html">15: Injured</a>
      <a href="S1E16.html">16: Control</a>
      <a href="S1E17.html">17: Fancyman</a>
      <a href="S1E18.html">18: Fancyman II</a>
      <a href="S1E19.html">19: Secrets</a>
      <a href="S1E20.html">20: Normal</a>
      <a href="S1E21.html">21: Kids</a>
      <a href="S1E22.html">22: Tomatoes</a>
      <a href="S1E23.html">23: Backslide</a>
      <a href="S1E24.html">24: See Ya</a>
    </div>
  </nav>
</body>

</html>` + body;

function poop() {
  const buttonElement = document.querySelector('.dropdown-btn');
  console.log(buttonElement.innerText);
  if (buttonElement.innerText.includes('>')) {
    buttonElement.innerText = ('Season 1 v')
    buttonElement.classList.add('active');
    document.getElementById('dropD').style.display = 'block';

  } else {
    buttonElement.innerText = ('Season 1 >')
    buttonElement.classList.remove('active');
    document.getElementById('dropD').style.display = '';

  }



}