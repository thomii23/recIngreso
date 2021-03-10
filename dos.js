function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let materias;
    let promedio;
    let edad;
    
    let nombrempfisica;
    let mejorPfisica = 0;
    let flagMpromedio = 1;

    let edadAJ;
    let FlagAj = 1;
    let nombreAj;

    let estudianteMasM;
    let nombreMasM;
    let edadMasM;
    let flagestudianteMasMaterias = 1;

    for(let i= 0; i < 500; i++)
    {
        nombre = prompt("Ingrese un nombre");

        carrera = prompt("Ingrese cursada Quimica / Fisica / sistemas: ").toUpperCase();
		while(carrera != "QUIMICA" && carrera !="FISICA" && carrera != "SISTEMAS")
		{
			carrera = prompt("ERROR. Ingrese cursada quimica / fisica / sistemas ").toUpperCase();
		}

        sexo = prompt("Ingrese sexo M / F / NO BINARIO ").toUpperCase();
		while(sexo != "M" && sexo != "F" && sexo != "NO BINARIO")
		{
			sexo = prompt("ERROR. Ingrese sexo M /F/NO BINARIO ").toUpperCase();
		}

        materias = parseInt(prompt("Ingrese cantidad de materias mas de 0 y menos de 8: "));
        while(materias < 1 && materias > 5 && isNaN(materias))
        {
        materias = parseInt(prompt("Error. Esta ingresando una materia fuera de rango"));
        }

        promedio = parseInt(prompt("Ingrese promedio entre 0 y 10: "));
		while(promedio < 0 || promedio > 10|| isNaN(promedio))
		{
			promedio = parseInt(prompt("Error. esta ingresando un promedio fuera de rango."));
		}

        edad = parseInt(prompt("Ingrese una edad mayor o igual a 18 : "));
        while(edad < 18)
        {
        edad = parseInt(prompt("Error.Esta ingresando una edad fuera de rango"));
        }

         // resuelvo el A

        if(carrera == "fisica")
        {
            if(flagMpromedio || promedio > mejorPfisica)
            {
                nombrempfisica = nombre;
                mejorPfisica = promedio;
                flagMpromedio = 0;
            }
        }

        //resuelvo B
        
        if(sexo !="M")
        {
            if(FlagAj|| edad > edadAJ)
            {
                edadAJ = edad;
                nombreAj = nombre
                FlagAj = 0;
            }
        }

        //resuelvo D

        if(carrera !="QUIMICA")
        {
            if(flagestudianteMasMaterias || materias > estudianteMasM )
            {
                nombreMasM = nombre;
                edadMasM = edad;
                estudianteMasM = materias;
                flagestudianteMasMaterias = 0;
            }
        }
    }



    console.log("A- elnombre del mejor promedio de los alumnos que estudian fisica es: " + nombrempfisica + " "+ promedio);
    console.log("B- el nombre de la alumna mas joven es: "+nombreAj + " "+ "y tiene años"+edadAJ);
    console.log("D- la edad y nombre del estudiante que cursa mas materias que no sean quimica es : "+ " " + nombreMasM + " " + edadMasM + " " + estudianteMasM);


}
