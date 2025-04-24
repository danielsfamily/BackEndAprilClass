const identity = function (value) {
return value
};

const first = function (arr, n) {
  //console.log("arr", arr, "n",n)
if(n == undefined){
  return arr[0]
}else if (n > arr.length){
  return arr
}

for( let i = 0; i< n; i++){

  result.push(arr[i])

}
return result
};

//console.log(first([1,2,3,4], 2))
  
const last = function (arr, n) {
  
};

const each = function () {
  
};

const indexOf = function () {
  
};

const map = function () {

}

const filter = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(callback(item)){
      result.push(item)
    }
  }
  return result
}

const reject = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(!callback(item)){
      result.push(item)
    }
  }
  return result
}

const uniq = (collection) =>{
  let result = []
  for (let item of collection){
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}

const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal
  for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};