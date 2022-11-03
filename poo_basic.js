//A: mostrar las particularodades de los tres celulares, cada uno debe tener, color, peso, resol pantalla, resol camara, memoria ram.
//deben poder prender, reiniciar, sacar fotos y grabar video.
//B: implemetar todas las cualidades anteriores en estos dos nuevos celulares, mas estas: graban en camara super lenta, reconocimiento facial, camara extra.
//C: crear un sistema para decidir que app descargar de las 7 que existen., deben tener la cantidad de descargas, puntuacion y peso, se deben poder instalar, abrir, cerrar y desinstalar.

class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color= color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolicuinDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    precionarBotonEncendido() {
        if(this.encendido == false) {
            alert('celular prendido');
            this.encendido = true;
        }else {
            alert('celular apagado')
            this.encendido = false
        }
    }
    
    reiniciar() {
        if(this.encendido == true) {
            alert('celular reiniciando');
        }else {
            alert('celular esta apagado')
        }
    }

    sacarFoto(){
        alert(`foto tomada en una resolucion de ${this.resolicuinDeCamara}`);
    }

    grabarVideo(){
        alert(`grabando video en ${this.resolicuinDeCamara}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        Resolucion Video: <b>${this.resolicuinDeCamara}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert('grabando en camara lenta');
    }
    
    reconocimientoFacial(){
        alert('iniciar reconocimiento facial');
    }

    infoALtaGama(){
        return this.mobileInfo() + `resolucion camara extra: ${this.resolucionCamaraExtra}`;
    }
}

celular1 = new Celular("rojo", "150g", "5'","full hd", "2GB");
celular2 = new Celular("negro", "150g", "8'","hd", "6GB");
celular3 = new Celular("azul", "350g", "9'","hd", "1GB");
celular4 = new CelularAltaGama("blanco", "200g", "10'","4k", "3Gb", "full hd");
celular5 = new CelularAltaGama("verde", "155g", "7'","4k", "6GB", "hd");


//celular1.precionarBotonEncendido();
//celular1.sacarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.precionarBotonEncendido();

document.write(`
<p>Celulares</p>
${celular1.mobileInfo()}<br>
${celular2.mobileInfo()}<br>
${celular3.mobileInfo()}<br>
<p>Celulares Alta gama</p>
${celular4.infoALtaGama()}<br><br>
${celular5.infoALtaGama()}<br><br>
`)

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar() {
        if(this.instalada == false){
            this.instalada = true;
            alert('app instalda');
        }
    }
    desinstalar() {
        if(this.instalada == true){
            this.instalada = false;
            alert('app desinstalda correctamente');
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert('abriendo app!')
        }
    }
    cerrar() {
        if(this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert('cerrando app!');
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b>
        `
    }

}

app = new App('16.000 downloads', '4 estrellas', '900mb');
app2 = new App('1.000 downloads', '2 estrellas', '100mb');
app3 = new App('2.000 downloads', '3 estrellas', '900mb');
app4 = new App('300 downloads', '1 estrella', '800mb');
app5 = new App('160 downloads', '2 estrellas', '150mb');
app6 = new App('1600 downloads', '4 estrellas', '900mb');
app7 = new App('56.000 downloads', '5 estrellas', '1gb');

document.write(
    `
    <p>Apps para descargar</p>
    ${app.appInfo()}<br><br>
    ${app2.appInfo()}<br><br>
    ${app3.appInfo()}<br><br>
    ${app4.appInfo()}<br><br>
    ${app5.appInfo()}<br><br>
    ${app6.appInfo()}<br><br>
    ${app7.appInfo()}<br><br>
    `
)


