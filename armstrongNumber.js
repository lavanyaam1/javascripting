// 1. Create a function that prints out armstrong numbers till a given integer N
// E.g armstrong - 153 = 1*1*1 + 5*5*5 + 3*3*3
function orderOfDigit(x)
    {
        let n = 0;
        while (x != 0)
        {
            n++;
            x = parseInt(x / 10, 10);
        }
        return n;
    }

function isArmstrongNum(n){
    y = order(n);
    let temp = n, sum = 0;
        while (temp != 0)
        {
            let r = temp % 10;
            sum = sum + Math.pow(r, y);
            temp = parseInt(temp / 10, 10);
        }
        return sum === n;
}
for(let i = 0; i <=153;i++)
{
    if(isArmstrongNum(i)){
        console.log(i)
        console.log('Its a armstrong number');
    }
}