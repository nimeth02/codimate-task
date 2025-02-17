//create tree node
class Node {
    constructor(key){
        this.key=key
        this.left=null
        this.right=null
    }
}

let max=Number.MIN_VALUE //returns the smallest number possible in JavaScript
let secondMax=Number.MIN_VALUE //returns the smallest number possible in JavaScript

//find second largest number
function findSecondMaxNumber (root){
    if (root == null){
        return
    }

    if(root.key > max){
        secondMax=max
        max=root.key
    }
    else if(root.key > secondMax && root.key < max){
        secondMax=root.key
    }

    findSecondMaxNumber(root.left)
    findSecondMaxNumber(root.right)

}

//assumption there is more than two distinct numbers in tree
//example tree
const root=new Node(17)
root.left=new Node(32)
root.right=new Node(8)
root.left.left=new Node(25)
root.left.right=new Node(12)
root.right.left=new Node(43)
root.right.right=new Node(51)

findSecondMaxNumber(root)
console.log(secondMax)
