
const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------\n';

//Only change code below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname} Owed R ${parseFloat(leoBalance).toFixed(2)}\n`;
const sarah = `${sarahName} ${sarahSurname} Owed R ${parseFloat(sarahBalance).toFixed(2)}\n`;
const total = `  Total amount owed: R ${Math.abs(owed).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}\n`;
const result = '\n' + leo + sarah + divider + total + divider;

console.log(result);


/* expected answer when console.logged:

Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
----------------------------------*/







/*const num = -7
console.log(Math.abs(num))*/