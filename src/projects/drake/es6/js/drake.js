/* 
Drake Equation Calculator version 2.0 authored by Vincent Moore
Refactored Feb 3, 2018 

*/

//Drake Equation explanation
//https://www.kevinabarnes.com/drake-equation/

const fire = document.getElementById("equation");

fire.addEventListener('submit', drakeEq);

function drakeEq(e) {

  e.preventDefault();

/*
Values of the Equation
N = The number of civilizations in the Milky Way Galaxy whose electromagnetic emissions are detectable.
R = formation rate of suitable stars in the galaxy
fp = pct of stars that have planets
ne = number of planets per planet star that can have life
fl = pct of planets that will have life
fi = pct of those that will have intelligent life
fc = pct of those that will develop communication
L  = years civilizations will last
lT = years a star will exist
N = R * fp * ne * fl * fi * fc * L (Drake Equation Formula)
*/

// equation value variables

    const regex=/[0-9]/,
          R = document.getElementById("R").value,
          fp = document.getElementById("Fp").value / 100,
          Ne = document.getElementById("Ne").value,
          fl = document.getElementById("Fl").value / 100,
          fi = document.getElementById("Fi").value / 100,
          fc = document.getElementById("Fc").value / 100,
          L = document.getElementById("L").value;

    //r values   

    if (!R.match(regex)) {
      document.getElementById("r_error").innerHTML = "<p>Please enter a number</p>";
    } else {
      document.getElementById("r_error").innerHTML = "";
    };


    //fp values
    if (document.getElementById("Fp").value > 100) {
      document.getElementById("fp_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fp_error").innerHTML = "";
    }

    //ne values
    if (!Ne.match(regex)) {
      document.getElementById("ne_error").innerHTML = "<p>Please enter a number</p>";
    } else {
      document.getElementById("ne_error").innerHTML = "";
    }

    //Fl values
    if (document.getElementById("Fl").value > 100) {
      document.getElementById("fl_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fl_error").innerHTML = "";
    }

    //Fi values
    if (document.getElementById("Fi").value > 100) {
      document.getElementById("fi_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fi_error").innerHTML = "";
    }

    //Fc values
    if (document.getElementById("Fc").value > 100) {
      document.getElementById("fc_error").innerHTML = "<p>Enter a number lower than 100</p>";
    } else {
      document.getElementById("fc_error").innerHTML = "";
    }

    //L values
    if (!L.match(regex)) {
      document.getElementById("L_error").innerHTML = "<p>Please enter a number</p>";
    } else {
      document.getElementById("L_error").innerHTML = "";
    }

    //Equation calculations
    function mult(N) {
        N = Math.floor(R * fp * Ne * fl * fi * fc * L);
        
        if (N === 0) {
          return false;
        } else if (N > 0) {
          return N.toLocaleString();
        } else {
          return N.toLocaleString();
        }
                
    }

    const calculate = document.querySelector('#calculate');

    if (mult() == false) {
      calculate.innerHTML = `Unable to solve equation. Please try again.`;
    } else if (mult() == 1) {
      calculate.innerHTML = `N = ${mult()} detectable civilization in the Milky Way.`;
    } else {
      calculate.innerHTML = `N = ${mult()} detectable civilizations in the Milky Way.`;
    }

    console.log(mult());
    
}
 