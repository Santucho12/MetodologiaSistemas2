
class Reserva {
	constructor({ id, cliente, mesa, fechaHora, cantidadPersonas, turno, estado }) {
		this.id = id; 
		this.cliente = cliente; 
		this.mesa = mesa; 
		this.fechaHora = fechaHora; 
		this.cantidadPersonas = cantidadPersonas; 
		this.turno = turno; // cena o almuerzo
		this.estado = estado; 
	}
}

module.exports = Reserva;
