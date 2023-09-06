document.querySelector('.js-next-button')
  .addEventListener('click', () => {
    nextPage();
  });

document.querySelector('.js-back-button')
  .addEventListener('click', () => {
    backPage();
  });


function nextPage() {
  const title = document.querySelector('title').innerHTML;
  //console.log(title);

  const currSeason = title.substring(
    title.indexOf("S") + 1,
    title.lastIndexOf("E")
  );
  //console.log("current season" + currSeason);

  let nextEp = (Number(title.split('E')[1])); //val of next ep
  console.log("NExt Ep: " + nextEp);

  let nextSeason = Number(currSeason);
  const newSeasonEp = checkLastEp(nextSeason, nextEp);

  if (newSeasonEp != nextEp) {
    nextEp = newSeasonEp;
    nextSeason++;
  }
  // console.log("Next ep before ++: " + nextEp);
  nextEp++;


  const nextPg = "S" + nextSeason.toString() + "E" + nextEp.toString() + ".html";
  console.log(nextPg);
  location.href = nextPg;

}

function checkLastEp(numSeason, numEp) {
  console.log("ep in function: " + numEp);
  const lastEpArr = [24, 25, 23, 22, 22, 22, 8];
  console.log("ep in array: " + lastEpArr[numSeason - 1]);

  if (numEp === lastEpArr[numSeason - 1]) {
    console.log("last season");
    return 0;
  }
  else {
    console.log("not last");
    return (numEp);
  }
}


function backPage() {
  const title = document.querySelector('title').innerText;
  //console.log(title);

  const currSeason = title.substring(
    title.indexOf("S") + 1,
    title.lastIndexOf("E")
  );
  //console.log("current season" + currSeason);

  let nextEp = (Number(title.split('E')[1])); //val of next ep
  //console.log(typeof nextEp);

  let nextSeason = Number(currSeason);
  const newSeasonEp = checkFirstEp(nextSeason, nextEp);

  if (newSeasonEp != nextEp) {
    nextEp = newSeasonEp;
    nextSeason--;
  }
  nextEp--;

  const backPg = "S" + nextSeason.toString() + "E" + nextEp.toString() + ".html";
  console.log(backPg);
  location.href = backPg;

}

function checkFirstEp(numSeason, numEp) {
  console.log("ep in function" + numEp);
  const lastEpArr = [24, 25, 23, 22, 22, 22, 8];
  console.log("ep in array " + lastEpArr[numSeason - 1]);

  if (numEp === 1) {
    console.log("fist season:" + lastEpArr[numSeason - 1]);
    return lastEpArr[numSeason - 1];
  }
  else {
    console.log("not last");
    return numEp;
  }
}

