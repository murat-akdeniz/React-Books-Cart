let arr = [1, 2, 3, 4, 100];

let result = arr.find(item => item === 200) ? 'Görev tamamlanmıştır' : 'Görevin ağzına sıçtın';

console.log(result)