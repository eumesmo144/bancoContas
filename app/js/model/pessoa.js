class Pessoa {
    _name; 
    _idade;
    _dataNasc;
    
    constructor(name, idade, dataNasc) {
        this._name = name;
        this._idade = idade;
        this._dataNasc = dataNasc;        
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get idade(){
        return this._idade;
    }
    set idade(idade){
        this._idade = idade;
    }
    get dataNasc(){
        return this._dataNasc;

    }
    set dataNasc(dataNasc){
        this._dataNasc = dataNasc;
    }

}