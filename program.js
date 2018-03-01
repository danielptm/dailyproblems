

export class Program {

    static getRandomNumber(){
        return Math.floor(Math.random() * 100);
    }

    static getRandomNumbers(){

        let numbers = []

        for(let i=0; i< 100; i++){
            numbers.push(Math.floor(this.getRandomNumber()))
        }

        return numbers;
    }

    static calculateIfKAndReturnNumbersOnTrue(k, numbers){

        let result = {value: false, k: k, result: [] }

        for(let a = 0; a < numbers.length; a++){
            for(let b = 1; b <= numbers.length; b++){
                let sum = numbers[a] + numbers[b];
                if(sum === k){
                    result.value = true;
                    result.result.push(numbers[a]);
                    result.result.push(numbers[b]);
                    return result;
                }
            }
        }
        return result;
    }
}