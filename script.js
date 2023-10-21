// JavaScript for handling form submissions and displaying schedules
document.addEventListener("DOMContentLoaded", function() {
    const scheduleForm = document.getElementById("schedule-form");
    const scheduleList = document.getElementById("schedule-list-items");

    scheduleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const subjectInput = document.getElementById("subject");
        const dayInput = document.getElementById("day");
        const timeInput = document.getElementById("time");
        const roomInput = document.getElementById("room");
        const instructorInput = document.getElementById("instructor");

        const newSchedule = document.createElement("li");
        newSchedule.innerHTML = `
            <strong>${subjectInput.value}</strong> | Day: ${dayInput.value} | Time: ${timeInput.value} | Room: ${roomInput.value} | Instructor: ${instructorInput.value}
        `;
        scheduleList.appendChild(newSchedule);

        // Clear the form inputs
        subjectInput.value = "";
        dayInput.value = "";
        timeInput.value = "";
        roomInput.value = "";
        instructorInput.value = "";
    });
})