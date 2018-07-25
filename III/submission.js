// Q1
const bubble    = "quadratic";
const insertion = "quadratic";
const merge     = "quasilinear";
const quick     = "quadratic";
const selection = "quadratic";

// Q2
class Heap
{

    array;

    constructor()
    {
        this.array = [];
    }

    insert(value)
    {
        let pos = this.array.length;
        this.array[pos] = value;
        bubbleUp(pos);
    }

    bubbleUp(index){
        if(index == 0){
            return;
        }
        let parent = Math.floor((index-1)/2);
        if(this.array[index] < this.array[parent]){
            swap(index, parent);
            bubbleUp(parent);
        }
    }

    swap(a, b){
        let temp = a.value;
        a.value = b.value;
        b.value = temp;
    }
}

// Q3
const hashNames = ["dictionary", "associative array"];
const hashPairs = ["key","value"];
class HashTable
{

    array;
    size;
    load;
    threshold;

    constructor(size, threshold)
    {
        this.array = [];
        this.size = size;
        this.array.length = size;
        this.load = 0;
        this.threshold = threshold;
    }

    insert(key, value)
    {
        let pos = _hash(key);
        load++;
        // linear open addressing
        while(true){
            // if we hit end of table trying to add, or load factor becomes too large, resize
            if(pos > array.length || (this.load / this.array.length) > this.threshold){
                resize();
            }
            // otherwise, if space is empty / occupied by "deleted" node, place k,v pair there
            if(array[pos] == null || array[pos][2] == true){
                array[pos] = [key, value, false];
                // array position 2 = boolean for deleted nodes
                break;
            }
            // linear addressing: step forward by 1
            pos++;
        }
    }

    _hash(string){
        // copied from my data structures project, i swear it's the only thing i ganked :P
        let R = 31;
        let output = 0;
        for(let i=0; i < string.length; i++){
            output = (R*output + string.charCodeAt(i)) % this.array.length;
        }
    }

    resize(){
        // temp-ify the array as it stands
        let oldArray = Object.assign([], this.array);
        // create new blank array twice as big
        this.size *= 2;
        this.array = [];
        this.array.length = size;
        // re-hash and re-insert all previous k,v pairs
        for(let a of oldArray){
            this.insert(a.key, a.value);
        }
    }
}

// Q4
function Sort(arr)
{
    // selection sort!
    // starting from left
    for(let a in arr){
        // find position of minimum element in unsorted section
        let minPos = a;
        for(let i = a+1; i<arr.length; i++){
            if(arr[i]<arr[minPos]){
                minPos = i;
            }
        }
        // swap positions of first and minimum elements, unless we got lucky
        if(minPos != a){
            let temp = arr[minPos];
            arr[minPos] = arr[a];
            arr[a] = temp;
        }
        // advance sorted section by 1 and repeat
    }
    return arr;
}

// Q5
function CoinChanger(amt, legend)
{
    let values = [];
    // break open dictionary and push it into array "values"
    for((key, value) in legend){
        values.push([value, key]);
    }
    // sort values as above, i.e. low to high
    Sort(values);
    let output = {};
    // from largest to smallest value coins
    for(let i = legendArray.length-1; i>=0; i--){
        // how many of these coins can we use
        let numOf = Math.floor(amt/values[i][0]);
        // add that k,v pair to output dictionary
        output[values[i][1]] = numOf;
        // subtract accounted-for value from amt and repeat
        amt = amt % values[i][0];
    }
    return output;
}


module.exports = {
    "Q1": {
        'bubble': bubble,
        'insertion': insertion,
        'merge': merge,
        'quick': quick,
        'selection': selection,
    },
    "Q2": Heap,
    "Q3": {
        "names": hashNames,
        "pairs": hashPairs,
        "table": HashTable
    },
    "Q4": Sort,
    "Q5": CoinChanger
}