function BMIfunc()
    {
		var Groesse = document.Formular.Groesse.value / 100;
		var Gewicht = document.Formular.Gewicht.value;
		var BMI = Gewicht / (Groesse * Groesse);

		document.Formular.BMI.value = BMI.toFixed(1) ;
	}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("rechne").addEventListener('click', BMIfunc);
  document.getElementById("gewicht").addEventListener('change',BMIfunc);
  document.getElementById("groesse").addEventListener('change',BMIfunc);
});

