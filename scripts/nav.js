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
    <a href="S2E1.html">1: Re-Launch</a>
    <a href="S2E2.html">2: Katie</a>
    <a href="S2E3.html">3: Fluffer</a>
    <a href="S2E4.html">4: Neighbors</a>
    <a href="S2E5.html">5: Models</a>
    <a href="S2E6.html">6: Halloween</a>
    <a href="S2E7.html">7: Menzies</a>
    <a href="S2E8.html">8: Parents</a>
    <a href="S2E9.html">9: Eggs</a>
    <a href="S2E10.html">10: Bathtub</a>
    <a href="S2E11.html">11: Santa</a>
    <a href="S2E12.html">12: Cabin</a>
    <a href="S2E13.html">13: A Father's Love</a>
    <a href="S2E14.html">14: Pepperwood</a>
    <a href="S2E15.html">15: Cooler</a>
    <a href="S2E16.html">16: Table 34</a>
    <a href="S2E17.html">17: Parking Spot</a>
    <a href="S2E18.html">18: TinFinity</a>
    <a href="S2E19.html">19: Quick Hardening Caulk</a>
    <a href="S2E20.html">20: Chicago</a>
    <a href="S2E21.html">21: First Date</a>
    <a href="S2E22.html">22: Bachelorette Party</a>
    <a href="S2E23.html">23: Virgins</a>
    <a href="S2E24.html">24: Winston's Birthday (Part 1)</a>
    <a href="S2E25.html">25: Elaine's Big Day</a>
  </div>

  <button onclick="
      poop('Season3','dropD-3');" 
      class="dropdown-btn Season3" 
      >Season 3 >
    </button>

  <div id="dropD-3" class="dropdown-container" style="">
    <a href="S3E1.html">1: All In</a>
    <a href="S3E2.html">2: Nerd</a>
    <a href="S3E3.html">3: Double Date</a>
    <a href="S3E4.html">4: The Captain</a>
    <a href="S3E5.html">5: The Box</a>
    <a href="S3E6.html">6: Keaton</a>
    <a href="S3E7.html">7: Coach</a>
    <a href="S3E8.html">8: Menus</a>
    <a href="S3E9.html">9: Longest Night Ever</a>
    <a href="S3E10.html">10: Thanksgiving III</a>
    <a href="S3E11.html">11: Clavado En Un Bar</a>
    <a href="S3E12.html">12: Basketball</a>
    <a href="S3E13.html">13: Birthday</a>
    <a href="S3E14.html">14: Prince</a>
    <a href="S3E15.html">15: Exes</a>
    <a href="S3E16.html">16: Sister</a>
    <a href="S3E17.html">17: Sister II</a>
    <a href="S3E18.html">18: Sister III</a>
    <a href="S3E19.html">19: Fired Up</a>
    <a href="S3E20.html">20: Mars Landing</a>
    <a href="S3E21.html">21: Big News</a>
    <a href="S3E22.html">22: Dance</a>
    <a href="S3E23.html">23: Cruise</a>
  </div>

  <button onclick="
      poop('Season4','dropD-4');" 
      class="dropdown-btn Season4" 
      >Season 4 >
    </button>

  <div id="dropD-4" class="dropdown-container" style="">
    <a href="S4E1.html">1: The Last Wedding</a>
    <a href="S4E2.html">2: Dice</a>
    <a href="S4E3.html">3: Julie Berkman's Older Sister</a>
    <a href="S4E4.html">4: Micro</a>
    <a href="S4E5.html">5: Landline</a>
    <a href="S4E6.html">6: Background Check</a>
    <a href="S4E7.html">7: Goldmine</a>
    <a href="S4E8.html">8: Teachers</a>
    <a href="S4E9.html">9: Thanksgiving IV</a>
    <a href="S4E10.html">10: Thanksgiving III</a>
    <a href="S4E11.html">11: Girl Fight</a>
    <a href="S4E12.html">12: LAXmas</a>
    <a href="S4E13.html">13: Coming Out</a>
    <a href="S4E14.html">14: Swuit</a>
    <a href="S4E15.html">15: The Crawl</a>
    <a href="S4E16.html">16: Oregon</a>
    <a href="S4E17.html">17: Spiderhunt</a>
    <a href="S4E18.html">18: Walk of Shame</a>
    <a href="S4E19.html">19: The Right Thing</a>
    <a href="S4E20.html">20: Par 5</a>
    <a href="S4E21.html">21: Panty Gate</a>
    <a href="S4E22.html">22: Clean Break</a>
  </div>

  <button onclick="
      poop('Season5','dropD-5');" 
      class="dropdown-btn Season5" 
      >Season 5 >
    </button>

  <div id="dropD-5" class="dropdown-container" style="">
    <a href="S5E1.html">1: Big Mama P</a>
    <a href="S5E2.html">2: What About Fred</a>
    <a href="S5E3.html">3: Jury Duty</a>
    <a href="S5E4.html">4: No Girl</a>
    <a href="S5E5.html">5: Bob & Carol & Nick & Schmidt</a>
    <a href="S5E6.html">6: Reagan</a>
    <a href="S5E7.html">7: Wig</a>
    <a href="S5E8.html">8: The Decision</a>
    <a href="S5E9.html">9: Heat Wave</a>
    <a href="S5E10.html">10: Goosebumps Walkaway</a>
    <a href="S5E11.html">11: The Apartment</a>
    <a href="S5E12.html">12: D-Day</a>
    <a href="S5E13.html">13: Sam, Again</a>
    <a href="S5E14.html">14: 300 Feet</a>
    <a href="S5E15.html">15: Jeff Day</a>
    <a href="S5E16.html">16: Helmet</a>
    <a href="S5E17.html">17: Road Trip</a>
    <a href="S5E18.html">18: A Chill Day In</a>
    <a href="S5E19.html">19: Dress</a>
    <a href="S5E20.html">20: Return to Sender</a>
    <a href="S5E21.html">21: Wedding Eve</a>
    <a href="S5E22.html">22: Landing Gear</a>
  </div>

  <button onclick="
      poop('Season6','dropD-6');" 
      class="dropdown-btn Season6" 
      >Season 6 >
    </button>

  <div id="dropD-6" class="dropdown-container" style="">
    <a href="S6E1.html">1: House Hunt</a>
    <a href="S6E2.html">2: Hubbedy Bubby</a>
    <a href="S6E3.html">3: Single and Sufficient</a>
    <a href="S6E4.html">4: Homecoming</a>
    <a href="S6E5.html">5: Jaipur Aviv</a>
    <a href="S6E6.html">6: Ready</a>
    <a href="S6E7.html">7: Last Thanksgiving</a>
    <a href="S6E8.html">8: James Wonder</a>
    <a href="S6E9.html">9: Es Good</a>
    <a href="S6E10.html">10: Christmas Eve Eve</a>
    <a href="S6E11.html">11: Raisin's Back</a>
    <a href="S6E12.html">12: The Cubicle</a>
    <a href="S6E13.html">13: Cece's Boys</a>
    <a href="S6E14.html">14: The Hike</a>
    <a href="S6E15.html">15: Glue</a>
    <a href="S6E16.html">16: Operation: Bobcat</a>
    <a href="S6E17.html">17: Rumspringa</a>
    <a href="S6E18.html">18: Young Adult"</a>
    <a href="S6E19.html">19: Socalyalcon VI</a>
    <a href="S6E20.html">20: Misery</a>
    <a href="S6E21.html">21: San Diego</a>
    <a href="S6E22.html">22: Five Stars for Beezus</a>
  </div>

  <button onclick="
      poop('Season7','dropD-7');" 
      class="dropdown-btn Season7" 
      >Season 7 >
    </button>

  <div id="dropD-7" class="dropdown-container" style="">
    <a href="S7E1.html">1: About Three Years Later</a>
    <a href="S7E2.html">2: Tuesday Meeting</a>
    <a href="S7E3.html">3: Lillypads</a>
    <a href="S7E4.html">4: Where the Road Goes</a>
    <a href="S7E5.html">5: Godparents</a>
    <a href="S7E6.html">6: Mario</a>
    <a href="S7E7.html">7: The Curse of the Pirate Bride</a>
    <a href="S7E8.html">8: Engram Pattersky</a>
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