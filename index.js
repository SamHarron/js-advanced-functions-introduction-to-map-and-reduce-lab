// Your code here
const sourceArray = [1, 2, 3, 4, 5];

function mapToNegativize(sourceArray){
    return sourceArray.map(element => element * -1);
};

function mapToNoChange(sourceArray){
    return sourceArray
};

function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2)
};

function mapToSquare(sourceArray){
    return sourceArray.map(x => x * x)
};

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
  