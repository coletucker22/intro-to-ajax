
var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];
var promiseT = $.get(urls[0])
.then($.get(urls[1]))
.then($.get(urls[2]))
.then($.get(urls[3]))
.then($.get(urls[4]))
.then(console.log('data was fetched!'))

Promise.all([promiseT]).then(function (data) {
    console.log(data)
})

addNumbers (x, y)
  .then(function (answer) {
      console.log(answer)
  })
  .catch(function (error) {
      console.log(error)
  })

function addNumbers(x, y) {
  return new Promise(function(resolve, reject) {
      if(typeof x === 'number' && typeof y === 'number') {
          resolve (x+y)
      } else {
          reject('input were not numbers')
      }
  })
}