class PessoaFisica extends Pessoa {
    _cpf;
    constructor( _name, _idade, _dataNasc, _cpf) {
        super(_name + '- física', _idade, _dataNasc);
        this._cpf = _cpf;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
}