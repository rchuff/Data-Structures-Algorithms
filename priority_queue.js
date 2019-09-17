class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length,100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
    return total;
    }
    set(key, value){
        let setArr = [key, value];
        let idx = this._hash(key);
        if (!this.keyMap[idx]) this.keyMap[idx] = [setArr]
        else this.keyMap[idx].push(setArr);
        return this;
    }
    get(key){
        let idx = this._hash(key);
        //Grab containing array at idx
        let idxVals = this.keyMap[idx];
        if (idxVals){
           for (let subArr of idxVals){
               //Return value
               if (subArr[0] === key) return subArr[1];
           }
        }

        return undefined;
    }
    keys(){
        let keys = [];
        for (let index of this.keyMap){
            if(index){
                for (let pair of index){
                    keys.push(pair[0]);
                }
            }
        }
        return keys;
    }
    values(){
        let values = [];
        for (let index of this.keyMap){
            if (index){
                for (let pair of index){
                    values.push(pair[1]);
                }
            }
        }
        return values;
    }
}
let hashtable = new HashTable(7);
hashtable.set("blue","this is blue");
hashtable.set("cyan","cyan color");
hashtable.set("pink","pink color");
hashtable.set("orangered","what is this color?");
