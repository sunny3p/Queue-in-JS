// // Queue class 
// class Queue 
// { 
//     // Array is used to implement a Queue 
//     constructor() 
//     { 
//         this.items = []; 
//     } 
                  
//     // Functions to be implemented 
//     // enqueue(item) 
//     // dequeue() 
//     // front() 
//     // isEmpty() 
//     // printQueue() 
// } 

// Queue class

class Queue{
	// Array is used to implement a Queue 
	constructor() { 
		this.items = []; 
	}
    // Functions to be implemented 
    // number of items in queue
    get length(){
        return this.items.length
    }
    //Get all the elements
    get queue() {
        return this.items;
    }
    // enqueue function: Adds an element to the queue
	enqueue(item){
        return this.items.push(item);
    }
    // dequeue function: Removes an element from the queue
    dequeue(){ 
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) 
            return console.log("Underflow");
        return this.items.shift(); 
    }
    // front function 
    front(){ 
        // returns the Front element of  
        // the queue without removing it. 
        if(this.isEmpty()) 
            return console.log("No elements in Queue");
        return this.items[0]; 
    }
    //Boolean function: returns true if an item is found (first occurnace); false otherwise
    inQueue(item) {
        let i = 0;
        let isFound = false;
        while (i < this.items.length && !isFound) {
            if (this.items[i] === item) {
                isFound = true;
            } else
                i++;
        }
        return (isFound);
    }
	// isEmpty function:Returns true if the queue is empty
    isEmpty(){ 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    } 
    // printQueue():Returns all the elements of an queue.
    printQueue(){ 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
    // function to remove all elements in queue
    remove(){
        return this.items = [];
    }
    // function to add a set of items in a queue
    addAll(elements){
        elements.forEach( item=> {
            return this.items.push(item);
        });
    }
    //function that pops (dequeues) N elements from the queue.
    dequeueN(numberOfelements){
        if(this.isEmpty()) 
           return console.log("Underflow");
        if(this.items.length>=numberOfelements){
            return this.items.splice(0,numberOfelements)
        }else return console.log("there is no enough element to be removed.");
    }
    //function that prints the content of the queue with their indexes.
    get printIndex(){
        //console.log(this.items);
        this.items.forEach((element,index) => {
            console.log(`${index} -> ${element}`);
        });
    }

    set addNewItem(item){
        this.items.push(item);
    }

    // Create a function which adds all the odd numbers divisable by 2 or 3 from 0 to N (inclusive) to the queue.
    addOddTill(m,n) {
        for (let index = m; index < n; index++) {
            if (index & 1) { // index % 2 === 1
                this.items.push(index);
            }
        }
    }

    // Create a function that prints queue backwards
    get printBackwards(){
        // Method 1
        // let arr = [];
        // for (let index = this.items.length-1; index >=0; index--){
        //     arr.push(this.items[index]);
        // }
        // return arr;
        //Method 2
        return this.items.reverse();
    }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.length);
console.log(queue.items);
queue.dequeue();
queue.enqueue(33);
console.log(queue.items);
console.log(queue.inQueue(33));
console.log(queue.inQueue(88));
console.log(queue.items);
queue.remove();
console.log(queue.items);
queue.addAll([3,7,1,9,10]);
console.log(queue.items);
queue.dequeueN(2);
console.log(queue.items);
console.log(queue.printQueue());
console.log(queue.printIndex());
