//Problem 1:This code have several problem such as the problem of unit testing by providing dependency inside 
//dependency so image that if we have dependency inside dependency and so on ==> make complex dependency

//Problem 2:It's make hard maintain that if we update the constructor by adding the parameter 
//so that we have insert the same update on the Computer class
export class Computer {
    
    constructor(private processor: Processor) {
    }
}
export class Processor {
    constructor() {}
}
