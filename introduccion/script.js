// Variables Globales
var mes = 10;

// Nombre y # de Carné
const nombre = 'Julio Palencia', carne = 18001570;


// Metodo if, else if, else
function getEstacionUno( mesActual ) {
	if ( mesActual < 1 || mesActual > 12 ) {
		return 'Parece que vives en una realidad alterna, nuestro calendario solo cuenta con 12 meses 😵';
	} else if ( mesActual >= 3 && mesActual <= 5 ) {
		return 'Es Primavera 🌸';
	} else if( mesActual >= 6 && mesActual <= 8 ) {
		return 'Es Verano 😎';
	} else if( mesActual >= 9 && mesActual <= 11 ) {
		return 'Es Otoño 🍂';
	} else {
		return 'Es Invierno ⛄';
	}
}

// Metodo switch case
function getEstacionDos( mesActual ) {
	switch( mesActual ) {
		default:
			return 'Parece que vives en una realidad alterna, nuestro calendario solo cuenta con 12 meses 😵';
			break;
		case 12: case 1: case 2:
			return 'Es Invierno ⛄';
			break;
		case 3: case 4: case 5:
			return 'Es Primavera 🌸';
			break;
		case 6: case 7: case 8:
			return 'Es Verano 😎';
			break;
		case 9: case 10: case 11:
			return 'Es Otoño 🍂';
			break;
	}
}


// Imprimo la estacion del año, segun la variable mes
document.write( 'Metodo if, else if, else: ' + getEstacionUno( mes ) );
document.write( '<hr />Metodo switch case: ' + getEstacionDos( mes ) );

// Imprimo mi nombre y # de carné
document.write( '<hr />Nombre: ' + nombre + '<br />Carné: ' + carne );


// Mostrando la estacion del año en consola, segun la variable mes
console.log( 'Metodo if, else if, else: ' + getEstacionUno( mes ) );
console.log( 'Metodo switch case: ' + getEstacionDos( mes ) );

// Mostrando mi nombre y # de carné en consola
console.log( 'Nombre: ' + nombre );
console.log( 'Carné: ' + carne );