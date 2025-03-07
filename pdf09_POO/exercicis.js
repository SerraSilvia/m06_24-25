class TarjetaCredito {
    #chipId;
    #numTarjeta;
    tipoTarjeta;
    #nombreUsuario;
    #apellidosUsuario;
    credito;
    debito;
    #caducidad;
    #cvc;
    #saldo;
    #estado;

    constructor(chipId, numTarjeta, tipoTarjeta, nombreUsuario, apellidosUsuario,
        credito, debito, caducidad, cvc, saldo, estado) {
        this.#chipId = chipId;
        this.#numTarjeta = numTarjeta;
        this.tipoTarjeta = tipoTarjeta;
        this.#nombreUsuario = nombreUsuario;
        this.credito = credito;
        this.debito = debito;
        this.#caducidad = caducidad;
        this.#cvc = cvc;
        this.#saldo = saldo;
        this.#estado = estado;
    }

    activar() {
        return this.#estado = true;
    }

    anular() {
        return this.#estado = false;
    }

    pagar() {
        return this.#saldo = saldo;
    }

    cambiarPin() {
        return this.#cvc = cvc;
    }

    renovarTarjeta() {
        if (this.#caducidad == true) {
            return this.#estado = true;
        } else {
            return this.#estado = false;
        }
    }

    ingresarSaldo(importe) {
        return this.#saldo + importe;
    }

    extraerSaldo() {
        if (this.#saldo > 0) {
            return this.#saldo - importe;
        }
    }

}

const TarjetaCredito = new TarjetaCredito()