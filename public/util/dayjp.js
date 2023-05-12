class dayjp {
  constructor(date = new Date() + 0, dayNumber = new Date().getDay()) {
    // this.date = this.today = this.date.slice(0, 10);
    this.date = date.slice(0, 15);
    this.day = this.date.slice(0, 3);
    this.month = this.date.slice(4, 7);
    this.dayOfWeek = dayNumber;
  }
  add(days) {
    const date = new Date() + 0;
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    const finalDate = new Date(newDate) + 0;
    return finalDate.slice(0, 15);
  }
  getNewDate() {
    const date = new Date();
    const dayNumber = date.getDay();
    const newDate = new dayjp(date);
    console.log("newDate: ");

    // const date = new Date() + 0;
    // const newDate = new Date(date);
    // newDate.setDate(newDate.getDate() + days);
    // const slicedDate = newDate + 0;
    // return slicedDate.slice(0, 15);
  }

  number() {
    const date = new Date();
    const day = date.getDay();
  }
}

const dayjs = new dayjp();
console.log("Todays Date: ", dayjs.date);
console.log("Today's Day: ", dayjs.day);
console.log("Current Month: ", dayjs.month);
const fiveDays = dayjs.add(5);
const five = new Date() + 5;
console.log("fiveDays: ", fiveDays);
console.log("Number of the day: ", dayjs.dayOfWeek);

dayjs.getNewDate();

// console.log("newdate: ", newdate);
