// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

class Clock {
  // Define a class named Clock
  constructor({ template }) {
    // Constructor receives an object with a 'template' property
    this.template = template; // Save the template string to the instance
    this.timer = null; // Initialize timer property (will hold setInterval ID)
  }

  render() {
    // Method to display the current time
    let date = new Date(); // Create a Date object for current date and time

    let hours = date.getHours(); // Get current hour (0–23)
    if (hours < 10) hours = "0" + hours; // Pad with '0' if less than 10

    let mins = date.getMinutes(); // Get current minutes
    if (mins < 10) mins = "0" + mins; // Pad with '0' if less than 10

    let secs = date.getSeconds(); // Get current seconds
    if (secs < 10) secs = "0" + secs; // Pad with '0' if less than 10

    let output = this.template // Format the time string based on the template
      .replace("h", hours) // Replace 'h' with hours
      .replace("m", mins) // Replace 'm' with minutes
      .replace("s", secs); // Replace 's' with seconds

    console.log(output); // Print the formatted time string to the console
  }

  stop() {
    // Method to stop the clock
    clearInterval(this.timer); // Clear the interval using the stored timer ID
  }

  start() {
    // Method to start the clock
    this.render(); // Render the time immediately
    this.timer = setInterval(() => this.render(), 1000); // Update the time every 1 second
  }
}

let clock = new Clock({ template: "h:m:s" }); // Create a new Clock instance with format 'h:m:s'
clock.start(); // Start the clock
