//your JS code here. If required.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  function multiplyByTwo(arr) {
    return arr.map(num => num * 2);
  }
  
  function updateOutput(text) {
    document.getElementById('output').innerText = text;
  }
  
  function processData(inputArr) {
    return new Promise((resolve, reject) => {
      delay(3000).then(() => {
        const evenNumbers = filterOddNumbers(inputArr);
        updateOutput(evenNumbers.join(', '));
        return delay(1000).then(() => {
          const doubledNumbers = multiplyByTwo(evenNumbers);
          updateOutput(doubledNumbers.join(', '));
          resolve(doubledNumbers);
        });
      }).catch(error => {
        reject(error);
      });
    });
  }
  
  const inputArr = [1, 2, 3, 4];
  processData(inputArr).then(result => {
    console.log('Final Result:', result);
  }).catch(error => {
    console.error('Error:', error);
  });
  