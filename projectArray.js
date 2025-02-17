//assumption there is atleast  two distinct numbers otherwise it result same in max and secondMax
//find second largest number
function findSecondMaxNumber(arr){
    let max = arr[0]
    let secondMax= arr[0]

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max
            max=arr[i]
        }
        else if (arr[i] > secondMax && arr[i] < max){
            secondMax=arr[i];
        }

    }
    return secondMax
}

const arr = [17,32,8,25,12,43,51]
console.log(findSecondMaxNumber(arr))