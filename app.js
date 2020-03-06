function solve(num) {
    let input = Number(num);
    let arr = num.toString().split('').map(Number);
    let n = arr[0] + arr[1];
    let m = arr[0] + arr[2];
    let result = "";

    if(input > 99 && input < 1000){
        for(let i = 0; i < n; i++){
            result = "";
            for(let j = 0; j < m; j++){
                if(input % 5 == 0){
                    input -= arr[0];
                }else if(input % 3 == 0){
                    input -= arr[1];
                }else{
                    input += arr[2];
                }
                result += input + " ";
            }
            console.log(result);
        }
    }else{
        console.log("Error! The input must be between 100 and 1000!")
    }
}
solve(132);