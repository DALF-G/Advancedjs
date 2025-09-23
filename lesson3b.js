// create a js program that checks two parameters i.e attendance and grade to give the output. if a student has Not attained 75% of class attendance, it prints out "failed Due to low attendance". Else, given three subjects, calculate their average grade and show the output accordingly. if the average of the three subject is grater than or equal to 90, print "garade A"
// 80 TO 90 -> "grade B"
// 70 TO 80 -> "grade C"
// 60 TO 70 -> "grade D"
// else grade E. The three subjects are English, kiswahili and science.

let attendance = 80;
let English = 80;
let Kiswahili = 90;
let Science = 95;

if (attendance < 75) {
    console.log("Failed Due to low attendance")
} else {
    let average = (English + Kiswahili + Science) / 3;
    if (average >= 90) {
        console.log("Grade A")
    } else if (average >= 80 && average < 90) {
        console.log("Grade B")
    } else if (average >= 70 && average < 80) {
        console.log("Grade C")
    } else if (average >= 60 && average < 70) {
        console.log("Grade D")
    } else {
        console.log("Grade E")
    }
}
