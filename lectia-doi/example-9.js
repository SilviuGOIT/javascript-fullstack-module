/* Example 9 - Project submission deadline (if...else)
Write a script to display the project deadline time. Use if...else construction.
If there are 0 days before the deadline - output the string "Today"
If it's 1 day before the deadline - output the string "Tomorrow"
If it's 2 days before the deadline - output the string "The day after tomorrow"
If it's 3+ days before the deadline - print the string "Date in the future"
*/

const dayUntillDeadline = 33;

if (dayUntillDeadline >= 0) {
  if (dayUntillDeadline === 0) {
    console.log("Today");
  } else if (dayUntillDeadline === 1) {
    console.log("Tomorrow");
  } else if (dayUntillDeadline === 2) {
    console.log("The day after tomorrow");
  } else {
    console.log("Date in the future");
  }
} else {
  console.log("Nr trebuie sa fie pozitiv");
}
