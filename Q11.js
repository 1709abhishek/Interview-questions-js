
// Stack class.
class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
}

//push: Insert an Element to the Top of Stack
push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
 }

 //length: Returns the Length of the Stack
 length() {
    return this.top;
 }

 //peek: Get the Top Element of the Stack
 peek() {
    return this.data[this.top -1 ];
 }

 //isEmpty: Checks If the Stack Is Empty
 isEmpty() {
    return this.top === 0;
  }

//pop: Deletes an Element at the Top of the Stack
  pop() {
    this.top = this.top -1;
    return this.data.pop(); // removes the last element
}

pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
}

//print: Print the Elements of the Stack
function print() {
    var top = this.top - 1; // because top points to index where new    element to be inserted
    while(top >= 0) { // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
  }

//Reverse the Stack
function reverse() {
    this._reverse(this.top - 1 );
 }
 function _reverse(index) {
    if(index != 0) {
       this._reverse(index-1);
    }
    console.log(this.data[index]);
 }