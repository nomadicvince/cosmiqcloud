<?php

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
N = R * fp * ne * fl * fi * fc * L (Drake Equation Formula)
*/

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  process_form();
}

// declare equation variables
$R = $fp = $ne = $fl = $fi = $fc = $L = "";
$R_err = $fp_err = $ne_err = $fl_err = $fi_err = $fc_err = $L_err = "";

//equation solution variable
$N ="";

//Drake equation output
$drake_output ="";

function process_form() {

      if (empty($_POST["R"])) {
        $R_err = "Please enter a value";
      } else {
        $R = htmlspecialchars($_POST["R"]);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$R)) {
            $R_err = "Please enter a number";
          }
        }

      if (empty($_POST["Fp"])) {
        $fp_err = "Please enter a value";
      } else {
        $fp = htmlspecialchars($_POST["Fp"]);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$fp)) {
          $fp_err = "Please enter a number";
        }
      }

      if (empty($_POST["Ne"])) {
        $ne_err = "Please enter a value";
      } else {
        $ne = htmlspecialchars($_POST["Ne"]);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$ne)) {
          $ne_err = "Please enter a number";
        }
      }

      if (empty($_POST["Fl"])) {
        $fl_err = "Please enter a value";
      } else {
        $fl = htmlspecialchars($_POST["Fl"] / 100);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$fl)) {
          $fl_err = "Please enter a number";
        }
      }

      if (empty($_POST["Fi"])) {
        $fi_err = "Please enter a value";
      } else {
        $fi = htmlspecialchars($_POST["Fi"] / 100);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$fi)) {
          $fi_err = "Please enter a number";
        }
      }

      if (empty($_POST["Fc"])) {
        $fc_err = "Please enter a value";
      } else {
        $fc = htmlspecialchars($_POST["Fc"] / 100);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$fc)) {
          $fc_err = "Please enter a number";
        }
      }

      if (empty($_POST["L"])) {
        $L_err = "Please enter a value";
      } else {
        $L = htmlspecialchars($_POST["L"] / 100);
        // check field only contains numbers
        if (!preg_match("/^\d+$/",$L)) {
          $L_err = "Please enter a number";
        }
      }
}

      if (isset($_POST["R"], $_POST["Fp"], $_POST["Ne"], $_POST["Fl"], $_POST["Fi"], $_POST["Fc"], $_POST["L"]))  {

        //Set variables
        $R = htmlspecialchars($_POST["R"]);
        if (!preg_match("/^\d+$/",$R)) {
          $R_err = "Please enter a number";
        }

        $fp = htmlspecialchars($_POST["Fp"]);
        if (!preg_match("/^\d+$/",$fp)) {
          $fp_err = "Please enter a number";
        }

        if ($fp > 100) {
          $fp_err = "Please enter a number smaller than 100";
        }

        $ne = htmlspecialchars($_POST["R"]);
        if (!preg_match("/^\d+$/",$ne)) {
          $ne_err = "Please enter a number";
        }

        $fl = htmlspecialchars($_POST["Fl"]);
        if (!preg_match("/^\d+$/",$fl)) {
          $fl_err = "Please enter a number";
        }

        if ($fl > 100) {
          $fl_err = "Please enter a number smaller than 100";
        }

        $fi = htmlspecialchars($_POST["Fi"]);
        if (!preg_match("/^\d+$/",$fi)) {
          $fi_err = "Please enter a number";
        }

        if ($fi > 100) {
          $fi_err = "Please enter a number smaller than 100";
        }

        $fc = htmlspecialchars($_POST["Fc"]);
        if (!preg_match("/^\d+$/",$fc)) {
          $fc_err = "Please enter a number";
        }

        if ($fc > 100) {
          $fc_err = "Please enter a number smaller than 100";
        }

        $R = $_POST["R"];
        $fp = $_POST["Fp"] / 100;
        $ne = $_POST["Ne"];
        $fl = $_POST["Fl"] / 100;
        $fi = $_POST["Fi"] / 100;
        $fc = $_POST["Fc"] / 100;
        $L = $_POST["L"];

        //Calculate Drake Equation
        $N = $R * $fp * $ne * $fl * $fi * $fc * $L;

        //Output Calculations
        if ($N < 1) {
          $drake_output = "N = " . number_format(floor($N)) . " detectable civilizations in the Milky Way.";
        } else if ($N == 1){
          $drake_output = "N = " . floor($N) . " detectable civilization in the Milky Way.";
        } else {
          $drake_output = "N = " . number_format(floor($N)) . " detectable civilizations in the Milky Way.";
        }

      }

?>
