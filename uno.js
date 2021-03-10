
function mostrar()
{	
	let respuesta;
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let nombreFmsueldo;
	let EmpleadoFmSueldo;

	let acumP = 0; //acumulador Programadores
	let acumA = 0; //acumulador analistas
	let acumQA = 0; //acumulador QA
	let contP = 0; //contador programador
	let contA = 0; //contador Aanalista
	let contQA = 0; //contador QA
	let promedioP = 0;
	let promedioA = 0;
	let promedioQA =0;

	let mayorSF;
	let mayorSM;
	let acumSMasculino = 0; // acumulador de  mayor sueldo Masculino
	let acumSFemenino = 0; // acumulador de mayor sueldo F

	let flagFmasSueldo = 1;
	
	let promedioanalista = 0;
	
	let acumAnalista = 0;
	let contAnalista = 0;
	let contQ = 0;
	let promA = 0;
	let promQa = 0;
	let acumQ = 0;
	let contQ = 0;
	let flagdelsexomayorsueldo = 0;
	let flagdemayorsueldofemenino = 0;
	let  sexoconM;
	let nombreEfemeninoconMs;
	let CantidadNBinariosP = 0;



	do
	{
		nombre = prompt("Ingrese un nombre");

		edad = parseInt(prompt("Ingrese una edad mayor a 18 : "));
		while(edad < 18)
		{
		edad = parseInt(prompt("Error.Esta ingresando una edad fuera de rango"));
		}

		sexo = prompt("Ingrese sexo M / F ").toUpperCase();
		while(sexo != "M" && sexo != "F" && sexo != "NO BINARIO")
		{
			sexo = prompt("ERROR. Ingrese sexo M /F/NO BINARIO ").toUpperCase();
		}

		puesto = prompt("Ingrese puesto programador / analista / qa: ");
		while(puesto != "programador" && puesto !="analista" && puesto != "QA")
		{
			puesto = prompt("ERROR. Ingrese un puesto correcto PROGRAMADOR / ANALISTA / QA ");
		}

		sueldo = parseInt(prompt("Ingrese un sueldo entre 15000 y 70000"));
		while(sueldo < 15000 && sueldo > 70000)
		{
			sueldo = parseInt(prompt("ERROR. Ingrese un sueldo entre 15000 y 70000"));
		}



		//resuelvo punto B

		if(sexo == "F")
		{
			acumSFemenino += sueldo;
			
		}
		else
		{
			acumSMasculino += sueldo;
		}

		//resuelvo punto C

		if(sexo == "F")
		{
			if(flagFmasSueldo || sueldo > EmpleadoFmSueldo)
			{
				nombreFmsueldo = nombre;
				EmpleadoFmSueldo = sueldo;
				flagFmasSueldo =0;
			}
		}

		










		respuesta = prompt("Desea ingresar otros Empleados");
	}while(respuesta == 's'); //estamos fuera del while


	// A Resuelvo el promedio por cada puesto

	if(puesto == "programador")
		{
			contP++;
			acumP += sueldo;
			
		}
		else if (puesto == "analista")
		{
			contA++;
			acumA += sueldo;
		}
		else
		{
			contQA++;
			acumQA += sueldo;
		}

	if(contP !=0)
	{
		promedioP = acumP / contP;
		
	}

	if(contA !=0)
	{
		promedioA = acumA / contA;
		
	}

	if(contQA !=0)
	{
		promedioQA = acumQA / contQA;
		
	}

	//Resuelvo el que percibe el mayor sueldo

	if(acumSMasculino > acumSFemenino)
	{
		mayorSM = "Masculino";
	}
	else
	{
		mayorSF = "Femenino";
	}

	//resulevo C
	if(contA !=0)
	{
		promA=acumAnalista/contAnalista;
		console.log("promedioanalista"+"" +promedioanalista+ "<br>");
	}
	else
	{
	 console.log("no se ingresaron analista");
	}


	if(contQ !=0)
	{
		promQa = acumQ/contQ;
		console.log("promQ"+"" +promQ);
	}
	else
	{
		console.log("no se ingresaron datos q");
	}


	if(flagdelsexomayorsueldo ==1)
	{
		console.log("el sexo con mayor sueldo es"+"" + sexoconM);
	
	}

	if(flagdemayorsueldofemenino ==1)
	{
		console.log("el femenino con mayoreldo es su"+"" + nombreEfemeninoconMs );
	}
	else
	{
		console.log("no se ingresaron qfemeninos");
	}


	console.log("A- El promedio de sueldos para cada puesto es:  " + "Promedio programadores: "+" "+promedioP + "Promedio Analistas : " + " " + promedioA + "Promedio QA: " + " "+promedioQA );
	console.log("B-El sexo que percibe el mayor sueldo es: " + "Sexo Masculino: "+ mayorSM + " " + "Sexo Femenino: " + mayorSF);
	console.log("El nombre del empleado femenino con mas sueldo es: " + nombreFmsueldo + " " + EmpleadoFmSueldo);
	console.log("cantidad de programador no binarios con sueldo entre 20000 y 55000" + " " + CantidadNBinariosP );


}
