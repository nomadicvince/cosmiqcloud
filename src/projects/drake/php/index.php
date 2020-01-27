<?php
require_once "drake.php";
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Drake Equation Calculator (PHP version)</title>

    <!-- Styles -->
    <link rel="stylesheet" href="../css/phpform8.css">

  </head>
  <body>
    <div class="form-style-8">
      <h2>Drake Equation Calculator (PHP Version)</h2>
      <p>Enter values to solve the equation.</p>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <input type="text" id="R" name="R" value="<?php if(isset($_POST["R"])) echo $_POST["R"];?>" placeholder="R* - Annual formation rate of suitable stars in the Milky Way" />
        <p id="error"><?php echo $R_err; ?></p>
        <input type="text" id="Fp" name="Fp" value="<?php if(isset($_POST["Fp"])) echo $_POST["Fp"];?>" placeholder="Fp - Percentage of stars that have planets" />
        <p id="error"><?php echo $fp_err; ?></p>
        <input type="text" id="Ne" name="Ne" value="<?php if(isset($_POST["Ne"])) echo $_POST["Ne"];?>" placeholder="Ne - Number of planets per star that can support life" />
        <p id="error"><?php echo $ne_err; ?></p>
        <input type="text" id="Fl" name="Fl"  value="<?php if(isset($_POST["Fl"])) echo $_POST["Fl"];?>"placeholder="Fl - Percentage of planets where life emerges" />
        <p id="error"><?php echo $fl_err; ?></p>
        <input type="text" id="Fi" name="Fi" value="<?php if(isset($_POST["Fi"])) echo $_POST["Fi"];?>" placeholder="Fi - Percentage of planets where intelligent life evolves" />
        <p id="error"><?php echo $fi_err; ?></p>
        <input type="text" id="Fc" name="Fc" value="<?php if(isset($_POST["Fc"])) echo $_POST["Fc"];?>" placeholder="Fc - Percentage of civilizations that will develop communication" />
        <p id="error"><?php echo $fc_err; ?></p>
        <input type="text" id="L" name="L" value="<?php if(isset($_POST["L"])) echo $_POST["L"];?>" placeholder="L - Years a civilization will last" />
        <p id="error"><?php echo $L_err; ?></p>
        <input type="submit" value="Calculate" />
      </form>
      <p id="result"><?php echo $drake_output; ?></p>
      <p><a href="../index.html">Home</a></p>
    </div>
  </body>
</html>

