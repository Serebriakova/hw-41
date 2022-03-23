"use strict";

function Student(firstName, lastName, yearOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.attendance = new Array(10);
  this.progress = new Array(10);
  this.attendanceCount = 0;
  this.progressCount = 0;

  this.calculateAge = function () {
    const date = new Date();
    const age = date.getFullYear() - this.yearOfBirth;
    return age;
  };

  this.averageScore = function () {
    if (this.progressCount === 0) throw new Error("no score yet");
    let allScore = 0;
    for (let i = 0; i < this.progressCount; i++) {
      allScore += this.progress[i];
    }

    return allScore / this.progressCount;
  };

  this.mark = function (currentMark) {
    if (this.progressCount === 10) throw new Error("to many marks");
    this.progress[this.progressCount++] = currentMark;
  };

  this.present = function () {
    if (this.attendanceCount === 10) throw new Error("attendance is full");
    this.attendance[this.attendanceCount++] = true;
  };

  this.absent = function () {
    if (this.attendanceCount === 10) throw new Error("attendance is full");
    this.attendance[this.attendanceCount++] = false;
  };

  this.summary = function () {
    let sumAttendance = 0;
    for (let i = 0; i < this.attendanceCount; i++) {
      sumAttendance += +this.attendance[i];
    }
    const averageAttendance = sumAttendance / this.attendanceCount;
    const averageScore = this.averageScore();
    if (averageScore > 9 && averageAttendance > 0.9) {
      return "Ути какой молодчинка!";
    } else if (averageScore < 9 || averageAttendance < 0.9) {
      return "Норм, но можно лучше";
    } else if (averageScore < 9 && averageAttendance < 0.9) {
      return "Редиска!";
    }
  };
}

let student1 = new Student("Dima", "Cat", 1994);
console.log(student1);
console.log(student1.calculateAge());
// console.log(student1.averageScore());
student1.present();
student1.present();
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(9);
student1.mark(8);
student1.mark(7);
// student1.mark(10);
// student1.mark(10);
// student1.mark(10);
// student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
// student1.absent();
// student1.absent();
console.log(student1.averageScore());
console.log(student1.summary());
