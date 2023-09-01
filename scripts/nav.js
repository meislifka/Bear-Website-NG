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
      poop('Season1','dropD-1');" 
      class="dropdown-btn Season1" 
      >Season 1 >
    </button>

    <div id="dropD-1" class="dropdown-container" style="">
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

    <button onclick="
    poop('Season2','dropD-2');" 
    class="dropdown-btn Season2" 
    >Season 2 >
  </button>

  <div id="dropD-2" class="dropdown-container" style="">
    <a href="S2E1">1: Re-Launch</a>
    <a href="S2E2">2: Katie</a>
    <a href="S2E3">3: Fluffer</a>
    <a href="S2E4">4: Neighbors</a>
    <a href="S2E5">5: Models</a>
    <a href="S2E6">6: Halloween</a>
    <a href="S2E7">7: Menzies</a>
    <a href="S2E8">8: Parents</a>
    <a href="S2E9">9: Eggs</a>
    <a href="S2E10">10: Bathtub</a>
    <a href="S2E11">11: Santa</a>
    <a href="S2E12">12: Cabin</a>
    <a href="S2E13">13: A Father's Love</a>
    <a href="S2E14">14: Pepperwood</a>
    <a href="S2E15">15: Cooler</a>
    <a href="S2E16">16: Table 34</a>
    <a href="S2E17">17: Parking Spot</a>
    <a href="S2E18">18: TinFinity</a>
    <a href="S2E19">19: Quick Hardening Caulk</a>
    <a href="S2E20">20: Chicago</a>
    <a href="S2E21">21: First Date</a>
    <a href="S2E22">22: Bachelorette Party</a>
    <a href="S2E23">23: Virgins</a>
    <a href="S2E24">24: Winston's Birthday (Part 1)</a>
    <a href="S2E25">24: Elaine's Big Day</a>
  </div>

  </nav>
</body>

</html>` + body;

function poop(season, id) {
  const s = '.' + season;
  const inText = addSpace(season) + ' v';
  //console.log(s);
  const buttonElement = document.querySelector(s);
  //console.log(buttonElement.innerText);
  if (buttonElement.innerText.includes('>')) {
    buttonElement.innerText = (`${inText}`);
    //console.log("HHH");
    //console.log(buttonElement.innerText);
    buttonElement.classList.add('active');
    document.getElementById(id).style.display = 'block';

  } else {
    const inTextClose = addSpace(season) + ' >';
    buttonElement.innerText = (`${inTextClose}`)
    buttonElement.classList.remove('active');
    document.getElementById(id).style.display = '';

  }
}

function addSpace(str) {
  return str.split('n').join('n ');
}