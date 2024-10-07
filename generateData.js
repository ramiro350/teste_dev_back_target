const fs = require('fs');

function generateRandomEarningsCSV(startDate, endDate, outputFile) {
  const earningsData = [];

  const currentDate = new Date(startDate);
  const endDateDate = new Date(endDate);

  
  while (currentDate <= endDateDate) {
    const randomEarnings = Math.floor(Math.random() * 100000) + 1;
    earningsData.push({
      date: currentDate.toISOString().split('T')[0], 
      earnings: randomEarnings
    });
    currentDate.setDate(currentDate.getDate() + 1); 
  }

  const headers = 'date,value';
  
  const csvString = earningsData.map(row => `${row.date},${row.earnings}`).join('\n');

  const finalCSV = `${headers}\n${csvString}`;

  fs.writeFileSync(outputFile, finalCSV, 'utf8');
}

const startDate = '2023-01-01';
const endDate = '2023-12-31';
const outputFile = 'earnings.csv';

generateRandomEarningsCSV(startDate, endDate, outputFile);
