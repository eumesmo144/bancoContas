class PessoaJuridica extends Pessoa {
    _cnpj;

    constructor( _name, _idade, _dataNasc, _cnpj) {
        super(_name + '- física', _idade, _dataNasc);
        this._cnpj = _cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    set cnpj(cnpj){
        this._cnpj = cnpj;
    }
}