
class Clock {
  constructor() {
    this.time = this.getToday();
    this._tick();
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }
  
  getToday() {
    let today = new Date();
    let hour  = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    
    return [hour,minute,second];
  }

  printTime() {
    console.log(this.time);
    let formatter = `${this.time[0]}:${this.time[1]}:${this.time[2]}`;
    console.log(formatter);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  increment(){
    this.time[2]++;
    if (this.time[2] >= 60){
      this.time[2] = 0;
      this.time[1]++;
    }
    if (this.time[1] >= 60){
      this.time[1] = 0;
      this.time[0]++;
    }
    if (this.time[0]>=24){
      this.time[0] = 0;
    }
  }
  _tick() {
    
    this.increment();
    setTimeout(el => {
      this._tick();
    },1000);
    this.printTime();

    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
  
}

// const clock = new Clock();
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback){
  let num1;
  if (numsLeft>0){
  reader.question('Give me a Number', (result) => {
    num1 = parseInt(result);
    sum += num1;
    numsLeft--;
    console.log(sum);
    addNumbers (sum, numsLeft, completionCallback);
  });
  }
  else{
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => {
//   console.log(`Total Sum: ${sum}`);
// });

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} > ${el2} ?`, (result) => {
    if(result === "yes"){
      callback(true);
    } else {
      callback(false);
    }
  });
  
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if(isGreaterThan){
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
        madeAnySwaps = true;
      }
      
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
    // reader.close();
  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}
function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){

    if (madeAnySwaps == true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
      reader.close();  
    }
  }
  outerBubbleSortLoop(true);
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
});

// innerBubbleSortLoop([1,8,2,6,3], 0, false);





