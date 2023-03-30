// Define needed constants
// Input email function needed constants/variables
const formInputEmail = document.querySelector(".form-input-email");
const emailInput = document.getElementById("email-input");
const inputVerification = document.getElementById("input-verification");
const emailSubmit = document.getElementById("email-submit");
const personalInfoDetails = document.querySelector(".personal-info-details");
const myEmail = "longnhfx21613@funix.edu.vn";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// View more/less function needed constants
const jobInfo = document.querySelectorAll(".job-info-headers")
const jobDetails = document.querySelectorAll(".job-info-details")
const viewButton = document.querySelectorAll(".view-button");
const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");



// Input email function
let isEmail = false;

// handle event for submit button of Email Submission form
const submitForm = function () {
    isEmail = regex.test(emailInput.value);
    console.log(isEmail)
    if (emailInput.value !== "") {
        if (isEmail === true && emailInput.value === myEmail) {
            personalInfoDetails.classList.remove("hidden");
            formInputEmail.classList.add("hidden");
        } else if (isEmail === false) {
            inputVerification.textContent = "Email không hợp lệ!";
            inputVerification.style.color = "red";
        } else {
            inputVerification.textContent = "Không đúng địa chỉ email!";
            inputVerification.style.color = "red";
        }
    } else {
        inputVerification.textContent = "Không được để trống địa chỉ email!";
        inputVerification.style.color = "yellow";
    }
};

emailSubmit.addEventListener("click", submitForm);



// View more/less function

// handle when the mouse hovers on the header of experience, hobbies, activities,...
// if hovering on those, the view more button appears by remove class = "hidden" from it
for (let i = 0; i < jobInfo.length; i++) {
    jobInfo[i].addEventListener("mouseover", function () {
        viewButton[i].classList.remove("hidden");
        }
    );
// handle when the mouse leaves the header
// if leaving, add the class = "hidden" back to the button
    jobInfo[i].addEventListener("mouseleave", function () {
        viewButton[i].classList.add("hidden");
        }
    );
}
// handle event of view-more button 
for (let i = 0; i < viewMore.length; i++) {
    viewButton[i].addEventListener("click", function () {
        viewMore[i].classList.toggle("hidden");
        viewLess[i].classList.toggle("hidden");
        jobDetails[i].classList.toggle("hidden");
        }
    );
}
