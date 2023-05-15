const enddate = "12 Jun 2023 01:58:54 PM";

const namee = "We Are  coming soon  !!!!!!!!";

document.getElementById("endddate").innerText = enddate;

document.getElementById("na").innerText = namee;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(enddate);
  const now = new Date();
  // console.log(end);
  // console.log(now);
  const diifer = (end - now) / 1000;
  console.log(diifer);

  //convert into days
  inputs[0].value = Math.floor(diifer / 3600 / 24);

  //convert into hours
  inputs[1].value = Math.floor(diifer / 3600) % 24;

  //convert into minutes
  inputs[2].value = Math.floor(diifer / 60) % 60;

  //convert into seconds
  inputs[3].value = Math.floor(diifer % 24);
}

clock();

setInterval(clock, 1000);

// 1 day =24 hrs;
// 1 hr =60mins;
