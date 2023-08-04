let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((item) => item * 2);
console.log("@SN ", arr2);

Array.prototype.suyog = function (callbackFun) {
  let arr3 = [];
  for (let i = 0; i < this.length; i++) {
    arr3.push(callbackFun(this[i], i, this));
  }
  return arr3;
};
let newArr = arr.suyog((item) => item * 3);
console.log("@SN ", newArr);
