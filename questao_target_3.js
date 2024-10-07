const csv = require('csv-parser');
const fs = require('fs');

function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => reject(error));
  });
}

function findSmallest(arr) {
    return Math.min(...arr);
}

function findBigger(arr) {
    return Math.max(...arr);
}

function findMean(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const mean = sum / arr.length;
    return mean;
}

function countAboveMean(arr) {
    
    const mean = findMean(arr)
  
    const count = arr.filter(value => value > mean).length;
  
    return count;
  }
  

async function main() {
  try {
    const data = await parseCSV('earnings.csv');
    let dailyEarnings = []
    for(var ind = 0; ind < data.length; ind++){
        dailyEarnings.push(Number(data[ind].value))
    }
    console.log(`Maior valor de faturamento: ${findBigger(dailyEarnings)}`)
    console.log(`Menor valor de faturamento: ${findSmallest(dailyEarnings)}`)
    console.log(`Qtd de dias que o faturamento superou a média: ${countAboveMean(dailyEarnings)}`)
  } catch (error) {
    console.error('Error reading CSV file:', error);
  }
}

main();
