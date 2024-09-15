"use strict";
// Get form elements and resume container elements
const resumeForm = document.getElementById('resumeForm');
const resumeContainer = document.getElementById('resumeContainer');
const resumeName = document.getElementById('resumeName');
const resumeContact = document.getElementById('resumeContact');
const resumeSocial = document.getElementById('resumeSocial');
const resumeEducation = document.getElementById('resumeEducation');
const resumeSkills = document.getElementById('resumeSkills');
const resumeWorkExperience = document.getElementById('resumeWorkExperience');
const profilePicPreview = document.getElementById('profilePicPreview');
const profilePictureInput = document.getElementById('profilePicture');
// Form submit event
resumeForm.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split(',');
    const workExperience = document.getElementById('workExperience').value;
    // Display resume container
    resumeContainer.style.display = 'block';
    // Set resume content
    resumeName.innerText = name;
    resumeContact.innerHTML = `<b>Email:</b> ${email} | <b>Phone:</b> ${phone}`;
    resumeSocial.innerHTML = `<b>LinkedIn:</b> <a href="${linkedin}" target="_main">LinkedIn</a> | <b>GitHub:</b> <a href="${github}" target="_main">GitHub</a>`;
    resumeEducation.innerText = education;
    // Clear and populate skills list
    resumeSkills.innerHTML = ''; // Clear previous list
    skills.forEach((skill) => {
        const li = document.createElement('li');
        li.innerText = skill.trim();
        resumeSkills.appendChild(li);
    });
    resumeWorkExperience.innerText = workExperience;
    // Handle profile picture preview
    const file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
    // Scroll to resume section
    resumeContainer.scrollIntoView({ behavior: 'smooth' });
});
