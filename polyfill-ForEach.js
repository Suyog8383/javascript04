let arr = [1, 2, 3, 4, 5];
let arr2 = arr.forEach((item) => console.log(item));

Array.prototype.suyog = function (callbackFun) {
  for (let i = 0; i < this.length; i++) {
    callbackFun(this[i], i, this);
  }
};
let arr3 = arr.suyog((item) => console.log(item));
