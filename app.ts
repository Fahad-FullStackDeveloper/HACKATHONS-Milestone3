// Get form elements and resume container elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;

const resumeName = document.getElementById('resumeName') as HTMLElement;
const resumeContact = document.getElementById('resumeContact') as HTMLElement;
const resumeSocial = document.getElementById('resumeSocial') as HTMLElement;

const resumeEducation = document.getElementById('resumeEducation') as HTMLElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLElement;
const resumeWorkExperience = document.getElementById('resumeWorkExperience') as HTMLElement;

const profilePicPreview = document.getElementById('profilePicPreview') as HTMLImageElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

// Form submit event
resumeForm.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Get values from form fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

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
    const file = profilePictureInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicPreview.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    // Scroll to resume section
    resumeContainer.scrollIntoView({ behavior: 'smooth' });
});
