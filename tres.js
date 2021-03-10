function mostrar()
{	
	let respuesta;
	let nombre;
	let cantidadDeLamparas;
	let marca;
	let precioUnidad;
	let preciocondescuentoF;
	let contF = 0;
	let contArgentina = 0;
	let contIluminati = 0;
	let acumF = 0;
	let acuArgentina = 0;
	let acuIlumintati = 0;
	let promedioArgentina = 0;
	let promedioFelipe = 0;
	let promedioIluminati = 0;
	let MarcamasVrealizo;
	let flagMasventas = 1;
	

	

	do
	{
		nombre = prompt("Ingrese un nombre del cliente");

		cantidadDeLamparas = parseInt(prompt("Ingrese cantidad de lamparas"));
		while(cantidadDeLamparas <= 0 )
		{
			cantidadDeLamparas = parseInt(prompt("Error.Esta ingresando una cantidad no valida"));
		}

		marca = prompt("Ingrese cursada felipelamparas / argentinaLuz / illuminatis: ").toUpperCase();
		while(marca != "felipelamparas" && marca !="argentinaLuz" && marca != "illuminatis")
		{
			marca = prompt("ERROR. Ingrese cursada felipelamparas / argentinaLuz / illuminatis ").toUpperCase();
		}
		precioUnidad = parseInt(prompt("Ingrese un precio para la unidad"));
		while(precioUnidad < 0 )
		{
			precioUnidad = parseInt(prompt("Esta ingresando un precio fuera del rango"));
		}

		if(marca == "felipelamparas" && cantidadDeLamparas > 5)
		{
			preciocondescuentoF = precioUnidad * 0.10; 
		}

		if(marca == "argentinaLuz" && cantidadDeLamparas >= 3)
		{
			preciocondescuentoF = precioUnidad * 0.05; 
		}






	}while(respuesta == 's');

	if(marca == "felipelamparas")
		{
			contF++;
			acumF += precioUnidad;
			
		}
		else if (marca == "argentinaLuz")
		{
			contArgentina++;
			acuArgentina += precioUnidad;
		}
		else
		{
			contIluminati++;
			acuIlumintati += precioUnidad;
		}

	if(contF !=0)
	{
		promedioFelipe = acumF / contF;
		
	}

	if(contArgentina !=0)
	{
		promedioArgentina = acuArgentina / contArgentina;
		
	}

	if(contIluminati !=0)
	{
		promedioIluminati = acuIlumintati / contIluminati;
		
	}

	//resulevo D

	if(flagMasventas || marca > MarcamasVrealizo)
	{
		MarcamasVrealizo = marca;
		flagMasventas = 0;
	}


	console.log(" C - El promedio de cada lampara es : " + " promedio Felipe " + promedioFelipe + "Promedio Argentina" + promedioArgentina + "Promedio Iluminati" + promedioArgentina);
	console.log("D - la marca que mas venta realizo = " + MarcamasVrealizo);
	


}
