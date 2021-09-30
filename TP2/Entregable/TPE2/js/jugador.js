class Jugador {
    constructor(num){
        this.turnoJugador=num;
        this.fichas =[];
    }

    getTurno(){
        return this.turnoJugador;
    }

    setTurno(num){
        this.turno =num; 
    }

    getFichas(){
        return this.fichas;
    }

    addFicha(ficha){
        this.fichas.push(ficha);
    }

    dibujarfichasJugador(ctx){
        for (let i = 0; i < this.getFichas().length; i++) {
            const element = this.getFichas()[i];
            element.reDibujarFicha(ctx);
        }
    }
    
}
