function BMIfunc()
    {
		var Groesse = document.Formular.Groesse.value / 100;
		var Gewicht = document.Formular.Gewicht.value;
		var BMI = Gewicht / (Groesse * Groesse);

		document.Formular.BMI.value = BMI.toFixed(1) ;
		if ( BMI < 18 ) {
		  document.getElementById("interpretation").innerHTML="Untergewicht";
		} else if ( BMI > 18 && BMI < 25 ) {
		  document.getElementById("interpretation").innerHTML = "Normalgewicht";
    } else if ( BMI > 25 && BMI < 30 ) {
      document.getElementById("interpretation").innerHTML = "Übergewicht";
    } else if ( BMI > 30 && BMI < 35 ) {
      document.getElementById("interpretation").innerHTML ="Adipositas I°";
    } else if ( BMI > 35 && BMI < 40 ) {
      document.getElementById("interpretation").innerHTML ="Adipositas II°";
    } else {
      document.getElementById("interpretation").innerHTML ="Adipositas III°";
    }
	}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("rechne").addEventListener('click', BMIfunc);
  document.getElementById("gewicht").addEventListener('change',BMIfunc);
  document.getElementById("groesse").addEventListener('change',BMIfunc);
});

