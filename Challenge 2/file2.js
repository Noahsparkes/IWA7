const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning, ${firstname}!`);
} else {
  console.log("Good Morning");
}

/*alt answer
if (`!${firstname} || !${nickname}`){
  console.log(firstname || nickname);
} else {
 console.log('Good Morning')
}
*/

/*Was originally not working because this operation does not work in console.log without (``) backticks, 
the second reason Firstname wasn't displaying was because of the missing '$' that puts this logical operator together.*/



