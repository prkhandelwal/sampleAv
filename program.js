const canSell = (arr) => {
    if(arr == null) {
        return false;
    }
    let count25 = 0;
    let count50 = 0;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(item == 25) {
            count25++
        } else if (item == 50) {
            if(count25 < 1) {
                return false;
            }
            count25--;
            count50++;
        } else if(item == 100) {
            if(count50 > 0 && count25 > 0) {
                count50--;
                count25--;
            } else if(count25 >= 3) {
                count25 -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}

let arr = [25,25,50,100];
let result = canSell(arr);

console.log(result);