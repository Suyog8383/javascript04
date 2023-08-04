let arr = [1, 2, 3, 4, 5];
let arr2 = arr.filter((item) => item > 2);
console.log("@SN ", arr2);

Array.prototype.suyog = function (callbackFun, context) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFun.call(context, this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};

let arr3 = arr.suyog((item) => item > 3);
console.log("@SN ", arr3);
