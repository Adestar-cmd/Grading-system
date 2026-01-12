function calculateGrade() {
    // Get the values from HTML
    var school = document.getElementById("school").value;
    var score = document.getElementById("score").value;

    // Convert score to number
    score = Number(score);

    var grade = "";
    var remark = "";

    // Check if empty
    if (school === "" || score === "") {
        alert("Please select a school and enter a score!");
        return;
    }

    // Check if score is valid (0 - 100)
    if (score < 0 || score > 100) {
        alert("Please enter a valid score between 0 and 100!");
        return;
    }
    
    // Secondary School
    if (school === "Secondary") {
        if (score >= 70) {
            grade = "A";
            remark = "Excellent";
        } else if (score >= 60) {
            grade = "B";
            remark = "Very Good";
        } else if (score >= 50) {
            grade = "C";
            remark = "Good";
        } else if (score >= 45) {
            grade = "D";
            remark = "Fair";
        } else if (score >= 40) {
            grade = "E";
            remark = "Pass";
        } else {
            grade = "F";
            remark = "Fail";
        }

    } else if (school === "Polytechnic") {
        if (score >= 70) {
            grade = "Distinction";
            remark = "Excellent";
        } else if (score >= 60) {
            grade = "Upper Credit";
            remark = "Very Good";
        } else if (score >= 50) {
            grade = "Lower Credit";
            remark = "Good";
        } else if (score >= 45) {
            grade = "Pass";
            remark = "Fair";
        } else {
            grade = "F";
            remark = "Fail";
        }

    } else if (school === "University") {
        if (score >= 70) {
            grade = "A";
            remark = "Excellent";
        } else if (score >= 60) {
            grade = "B";
            remark = "Very Good";
        } else if (score >= 50) {
            grade = "C";
            remark = "Good";
        } else if (score >= 45) {
            grade = "D";
            remark = "Pass";
        } else if (score >= 40) {
            grade = "E";
            remark = "Weak Pass";
        } else {
            grade = "F";
            remark = "Fail";
        }
    }

    // Display results in HTML
    var gradeElement = document.getElementById("grade");
    var remarkElement = document.getElementById("remark");

    gradeElement.innerHTML = "Grade: " + grade;
    remarkElement.innerHTML = "Remark: " + remark;

    // Add flash animation
    gradeElement.className = "flash"; 
    remarkElement.className = "flash"; 

    // Remove the class after animation so it can flash again next time
    setTimeout(function() {
        gradeElement.className = "";
        remarkElement.className = "";
    }, 1800);
}
