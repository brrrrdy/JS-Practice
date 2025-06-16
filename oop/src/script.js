import logMessage from "./logger.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("gell");
    }
  }
}

const tracker = new CalorieTracker(2500);
tracker.trackCalories(500);
tracker.trackCalories(1000);
tracker.trackCalories(700);
