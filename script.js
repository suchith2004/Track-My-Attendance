function calculate() {
    // Get values from inputs
    let totalClasses = document.getElementById("totalClasses").value;
    let attendedClasses = document.getElementById("attendedClasses").value;
    let calculateBtn = document.getElementById("calculateBtn");

    // Check if values are entered correctly
    if (totalClasses == "" || attendedClasses == "") {
        alert("Please enter both values!");
        return;
    }

    totalClasses = parseInt(totalClasses);
    attendedClasses = parseInt(attendedClasses);

    // Calculate attendance percentage
    let attendancePercentage = (attendedClasses / totalClasses) * 100;

    // Calculate required attended classes for 75% attendance
    let requiredClasses = Math.ceil((75 / 100) * totalClasses);

    // Calculate remaining bunkable days or extra classes needed
    let bunkableDays = attendedClasses - requiredClasses;

    // Display results
    document.getElementById("percentage").innerText = attendancePercentage.toFixed(2) + "%";

    if (attendancePercentage >= 75) {
        document.getElementById("bunkDays").innerText = `You can bunk ${bunkableDays} more classes.`;
    } else {
        let extraClassesNeeded = Math.abs(bunkableDays);
        document.getElementById("bunkDays").innerText = `You need to attend ${extraClassesNeeded} more classes to reach 75%.`;
    }

    // Change button color to green after click
    calculateBtn.classList.add("clicked");
}
