class Sejour {
    constructor (private _nom : string, private _prix : number){
    }

    getNom():string{
        return this._nom;
    }
    getPrix():number{
        return this._prix;
    }
}

class SejourService{
    private _sejour: Sejour[] = [];

    constructor(){
        this._sejour.push(new Sejour('Barcelona', 120));
        this._sejour.push(new Sejour('Bali', 150));
        this._sejour.push(new Sejour('Milan', 200));
        this._sejour.push(new Sejour('Yerevan', 190));
    }

    searchByName(city : string) : Sejour | void {
        for (let dest of this._sejour){
            if(dest.getNom() == city) {
                return dest;           
            } 
        }
    }
}
const destinnation1 = new SejourService();
console.log(destinnation1.searchByName("Barcelona"));
console.log(destinnation1.searchByName("Montpellier"));
