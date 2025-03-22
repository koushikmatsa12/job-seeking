const jobCompanies = {
    "Software Engineer": [
        { company: "TechCorp", location: "New York, USA", description: "Looking for an experienced software engineer to develop innovative solutions." },
        { company: "Innovative Solutions", location: "San Francisco, USA", description: "Seeking a talented engineer to join our dynamic team." },
        { company: "CodeMasters", location: "Austin, USA", description: "Join our team to build cutting-edge applications." }
    ],
    "Data Scientist": [
        { company: "DataX", location: "San Francisco, USA", description: "Analyze complex data sets to drive business decisions." },
        { company: "AnalyzePro", location: "Boston, USA", description: "Use advanced statistics and machine learning techniques." },
        { company: "DeepMind", location: "Seattle, USA", description: "Create predictive models for business applications." }
    ],
    "Product Manager": [
        { company: "Productify", location: "Los Angeles, USA", description: "Lead product development and strategy for our SaaS platform." },
        { company: "TechEdge", location: "New York, USA", description: "Oversee product lifecycle from conception to launch." },
        { company: "InnovateInc", location: "Chicago, USA", description: "Drive innovation and product development." }
    ],
    "Web Developer": [
        { company: "WebWorks", location: "Chicago, USA", description: "Create responsive and accessible web applications." },
        { company: "CodeCraft", location: "San Francisco, USA", description: "Build modern web experiences with latest technologies." },
        { company: "TechNest", location: "Miami, USA", description: "Develop engaging websites for diverse clients." }
    ],
    "Graphic Designer": [
        { company: "CreativeVision", location: "Los Angeles, USA", description: "Design visually stunning materials for digital and print." },
        { company: "PixelCrafters", location: "New York, USA", description: "Create memorable brand experiences through design." },
        { company: "DesignWave", location: "Chicago, USA", description: "Develop creative solutions for marketing campaigns." }
    ],
    "UX/UI Designer": [
        { company: "DesignHub", location: "San Francisco, USA", description: "Design intuitive user experiences for web and mobile apps." },
        { company: "UXStudio", location: "Seattle, USA", description: "Create user-centered designs based on research and testing." },
        { company: "UIXperts", location: "New York, USA", description: "Develop engaging interfaces for enterprise applications." }
    ],
    "SEO Specialist": [
        { company: "SEOPro", location: "Chicago, USA", description: "Optimize website performance and search rankings." },
        { company: "BoostSearch", location: "Los Angeles, USA", description: "Implement SEO strategies to increase organic traffic." },
        { company: "RankX", location: "Miami, USA", description: "Improve digital presence through strategic SEO initiatives." }
    ],
    "Marketing Strategist": [
        { company: "Brandify", location: "New York, USA", description: "Develop comprehensive marketing strategies for growth." },
        { company: "MarketSpark", location: "Austin, USA", description: "Create and execute innovative marketing campaigns." },
        { company: "AdMasters", location: "San Francisco, USA", description: "Plan and implement multi-channel marketing strategies." }
    ],
    "Business Analyst": [
        { company: "DataInsights", location: "Boston, USA", description: "Analyze business processes and recommend improvements." },
        { company: "VisionaryConsult", location: "Chicago, USA", description: "Bridge the gap between business needs and technology solutions." },
        { company: "MarketScope", location: "Seattle, USA", description: "Provide insights and recommendations based on data analysis." }
    ],
    "Full Stack Developer": [
        { company: "TechBuild", location: "Los Angeles, USA", description: "Develop both frontend and backend components of web applications." },
        { company: "StackLab", location: "San Francisco, USA", description: "Build scalable and maintainable full-stack applications." },
        { company: "CodeFusion", location: "New York, USA", description: "Create end-to-end solutions for enterprise clients." }
    ]
};

let isLoggedIn = false;

// Helper function to check if we're on a specific page
function isOnPage(pageId) {
    return document.getElementById(pageId) !== null;
}

// Function to handle back button navigation
function goBack() {
    // Check if there's a previous page in the session history
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
        // Go back to the previous page in browser history
        window.history.back();
    } else {
        // If no referrer exists or it's from a different domain, go to home page
        window.location.href = 'home.html';
    }
}

// Check login status on page load
function checkLoginStatus() {
    isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Only update navigation if not on login page
    if (!isOnPage('login')) {
        updateNavigation();
    }
}

// Function to show random jobs on the jobs page
function showRandomJobs() {
    const randomJobs = [
        { title: "Software Engineer", company: "TechCorp", location: "New York, USA", description: "Looking for an experienced software engineer to develop innovative solutions.", badge: "Hot Job" },
        { title: "Data Scientist", company: "DataX", location: "San Francisco, USA", description: "Analyze complex data sets to drive business decisions.", badge: "New" },
        { title: "Product Manager", company: "Productify", location: "Los Angeles, USA", description: "Lead product development and strategy for our SaaS platform." },
        { title: "Web Developer", company: "WebWorks", location: "Chicago, USA", description: "Create responsive and accessible web applications.", badge: "Hot Job" },
        { title: "Graphic Designer", company: "CreativeVision", location: "Los Angeles, USA", description: "Design visually stunning materials for digital and print." },
        { title: "UX/UI Designer", company: "DesignHub", location: "San Francisco, USA", description: "Design intuitive user experiences for web and mobile apps.", badge: "New" },
        { title: "SEO Specialist", company: "SEOPro", location: "Chicago, USA", description: "Optimize website performance and search rankings." },
        { title: "Marketing Strategist", company: "Brandify", location: "New York, USA", description: "Develop comprehensive marketing strategies for growth.", badge: "Hot Job" },
        { title: "Business Analyst", company: "DataInsights", location: "Boston, USA", description: "Analyze business processes and recommend improvements." },
        { title: "Full Stack Developer", company: "TechBuild", location: "Los Angeles, USA", description: "Develop both frontend and backend components of web applications.", badge: "New" }
    ];

    const shuffledJobs = randomJobs.sort(() => 0.5 - Math.random()).slice(0, 6);
    const jobListElement = document.getElementById('job-listings');

    if (jobListElement) {
        jobListElement.innerHTML = '';

        shuffledJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job');

            // Create badge HTML if job has a badge
            const badgeHTML = job.badge ? `<div class="job-badge">${job.badge}</div>` : '';

            jobElement.innerHTML = `
                ${badgeHTML}
                <h3>${job.title}</h3>
                <p class="job-company">Company: ${job.company}</p>
                <p class="job-location">Location: ${job.location}</p>
                <div class="job-details">${job.description}</div>
                <button class="job-apply-btn" onclick="applyNow('${job.title}')">Apply Now</button>
            `;
            jobListElement.appendChild(jobElement);
        });
    }
}

// Function to handle search from home page
function handleSearchFromHome() {
    // Check for search terms in localStorage
    const searchTermsString = localStorage.getItem('searchTerms');
    if (searchTermsString) {
        const searchTerms = JSON.parse(searchTermsString);

        // Display a notification with the search terms
        if (searchTerms.keyword || searchTerms.location) {
            const notification = document.createElement('div');
            notification.className = 'notification success';
            notification.style.display = 'block';

            let message = '<strong>Showing results';
            if (searchTerms.keyword) message += ` for "${searchTerms.keyword}"`;
            if (searchTerms.location) message += ` in ${searchTerms.location}`;
            message += '</strong>';

            notification.innerHTML = message;

            // Add notification to the job listings section
            const jobSection = document.getElementById('job-page');
            if (jobSection) {
                jobSection.insertBefore(notification, jobSection.firstChild);

                // Remove the notification after 5 seconds
                setTimeout(() => {
                    notification.style.display = 'none';
                    notification.remove();
                }, 5000);
            }
        }

        // Clear the search terms so they don't persist on page reload
        localStorage.removeItem('searchTerms');
    }
}

function showJobLocations(select) {
    const selectedJob = select.value;
    const jobListings = jobCompanies[selectedJob] || [];
    const jobListElement = document.getElementById('job-listings');

    if (jobListElement) {
        jobListElement.innerHTML = '';

        if (jobListings.length > 0) {
            jobListings.forEach((job, index) => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');

                // Add a Hot Job badge to the first job listing
                const badgeHTML = index === 0 ? '<div class="job-badge">Hot Job</div>' : '';

                jobElement.innerHTML = `
                    ${badgeHTML}
                    <h3>${selectedJob}</h3>
                    <p class="job-company">Company: ${job.company}</p>
                    <p class="job-location">Location: ${job.location}</p>
                    <div class="job-details">${job.description}</div>
                    <button class="job-apply-btn" onclick="applyNow('${selectedJob}')">Apply Now</button>
                `;
                jobListElement.appendChild(jobElement);
            });
        }
    }
}

function handleJobSelection(select) {
    if (!isLoggedIn) {
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.style.display = 'block';
        notification.innerHTML = '<strong>Please log in to view job details.</strong>';

        // Insert at the top of the selectionProcess section
        const selectionProcess = document.getElementById('selectionProcess');
        if (selectionProcess) {
            selectionProcess.insertBefore(notification, selectionProcess.firstChild);

            // Remove the notification after 3 seconds
            setTimeout(() => {
                notification.style.display = 'none';
                notification.remove();
            }, 3000);
        }

        // Redirect to login page
        window.location.href = 'login.html';
        return;
    }
    showJobLocations(select);
}

function applyNow(jobTitle) {
    if (isLoggedIn) {
        // Store job title in localStorage to access it on the application form page
        localStorage.setItem('applyingForJob', jobTitle);
        window.location.href = 'application.html';
    } else {
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.style.display = 'block';
        notification.innerHTML = '<strong>Please log in to apply for this job.</strong>';

        // Insert at the top of the selectionProcess section
        const selectionProcess = document.getElementById('selectionProcess');
        if (selectionProcess) {
            selectionProcess.insertBefore(notification, selectionProcess.firstChild);

            // Remove the notification after 3 seconds
            setTimeout(() => {
                notification.style.display = 'none';
                notification.remove();
            }, 3000);
        }

        // Redirect to login page
        window.location.href = 'login.html';
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (emailInput && emailError) {
        const email = emailInput.value;

        if (!email.includes('@gmail.com')) {
            emailError.style.display = 'block';
            emailInput.setCustomValidity('Please enter a valid Gmail address.');
        } else {
            emailError.style.display = 'none';
            emailInput.setCustomValidity('');
        }
    }
}

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@gmail.com')) {
        document.getElementById('emailError').style.display = 'block';
        return;
    }

    if (email !== '' && password !== '') {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');

        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.style.display = 'block';
        notification.innerHTML = '<strong>Login successful! Welcome to Job Seeking.</strong>';

        // Insert at the top of the login section
        const loginSection = document.getElementById('login');
        if (loginSection) {
            loginSection.insertBefore(notification, loginSection.firstChild);
        }

        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    } else {
        const loginMessage = document.getElementById('loginMessage');
        if (loginMessage) {
            loginMessage.innerText = 'Please enter both email and password.';
        }
    }
}

function submitApplicationForm() {
    const requiredFields = {
        fullName: document.getElementById('fullName'),
        address: document.getElementById('address'),
        city: document.getElementById('city'),
        state: document.getElementById('state'),
        zip: document.getElementById('zip'),
        phone: document.getElementById('phone'),
        email: document.getElementById('applicationEmail'),
        position: document.getElementById('position'),
        startDate: document.getElementById('startDate'),
        eligible: document.querySelector('input[name="eligible"]:checked'),
        education: document.getElementById('education'),
        resume: document.getElementById('resume')
    };

    let missingFields = [];

    if (!requiredFields.fullName.value) missingFields.push('Full Name');
    if (!requiredFields.address.value) missingFields.push('Address');
    if (!requiredFields.city.value) missingFields.push('City');
    if (!requiredFields.state.value) missingFields.push('State');
    if (!requiredFields.zip.value) missingFields.push('Zip Code');
    if (!requiredFields.phone.value) missingFields.push('Phone Number');
    if (!requiredFields.email.value) missingFields.push('Email Address');
    if (!requiredFields.position.value) missingFields.push('Position Applied For');
    if (!requiredFields.startDate.value) missingFields.push('Start Date');
    if (!requiredFields.eligible) missingFields.push('Eligibility to Work');
    if (!requiredFields.education.value) missingFields.push('Education Background');
    if (!requiredFields.resume.files.length) missingFields.push('Resume Upload');

    const notificationArea = document.getElementById('notificationArea');

    if (missingFields.length > 0) {
        notificationArea.className = 'notification error';
        notificationArea.innerHTML = `
            <strong>Please fill in the following required fields:</strong><br>
            ${missingFields.join(', ')}
        `;
        notificationArea.style.display = 'block';
        window.scrollTo(0, 0);
    } else {
        notificationArea.className = 'notification success';
        notificationArea.innerHTML = '✅ Your application has been submitted successfully!';
        notificationArea.style.display = 'block';
        window.scrollTo(0, 0);

        // Create a new profile object
        const newProfile = {
            name: requiredFields.fullName.value,
            date: new Date().toLocaleDateString(),
            job: requiredFields.position.value
        };

        // Get existing profiles from localStorage
        let profiles = JSON.parse(localStorage.getItem('profiles')) || [];

        // Add the new profile to the array
        profiles.push(newProfile);

        // Save the updated profiles array back to localStorage
        localStorage.setItem('profiles', JSON.stringify(profiles));

        // Reset the form
        resetApplicationForm();

        // Redirect to the home page after 3 seconds
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 3000);
    }
}

// Function to reset the application form
function resetApplicationForm() {
    // Reset text and file inputs
    document.getElementById('fullName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('applicationEmail').value = '';
    document.getElementById('position').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('education').value = '';
    document.getElementById('resume').value = '';
    document.getElementById('notificationArea').style.display = 'none';

    // Reset radio buttons (tick box for eligibility)
    const eligibilityRadios = document.querySelectorAll('input[name="eligible"]');
    eligibilityRadios.forEach(radio => (radio.checked = false)); // Uncheck all radio buttons
}

function displayProfiles() {
    const profilesContainer = document.getElementById('profilesContainer');
    if (!profilesContainer) return;

    profilesContainer.innerHTML = ''; // Clear existing content

    // Get profiles from localStorage
    const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

    if (profiles.length === 0) {
        return;
    }

    // Add a section title before the profiles
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Recent Applications';
    titleElement.style.marginTop = '40px';
    titleElement.style.marginBottom = '20px';
    profilesContainer.appendChild(titleElement);

    // Loop through each profile and create a profile box
    profiles.forEach((profile) => {
        const profileBox = document.createElement('div');
        profileBox.className = 'profile-box';
        profileBox.innerHTML = `
            <h3>${profile.name}</h3>
            <div class="profile-detail">
                <span class="profile-detail-icon">📅</span>
                <p><strong>Application Date:</strong> ${profile.date}</p>
            </div>
            <div class="profile-detail">
                <span class="profile-detail-icon">💼</span>
                <p><strong>Position:</strong> ${profile.job}</p>
            </div>
        `;
        profilesContainer.appendChild(profileBox);
    });
}

// Function to update navigation based on login status
function updateNavigation() {
    console.log("Updating navigation, login status:", isLoggedIn ? "logged in" : "not logged in");
    const loginNavLink = document.querySelector('nav a[href="login.html"]');

    if (loginNavLink) {
        if (isLoggedIn) {
            console.log("User is logged in, changing login link to logout");
            loginNavLink.textContent = 'Logout';
            loginNavLink.href = '#';
            loginNavLink.onclick = function(e) {
                e.preventDefault();
                console.log("Logout link clicked");
                logout();
                return false;
            };
        } else {
            console.log("User is not logged in, keeping login link");
            loginNavLink.textContent = 'Login';
            loginNavLink.href = 'login.html';
            // Remove any onclick event
            loginNavLink.onclick = null;
        }
    }
}

// Function to handle logout
function logout() {
    console.log("Logging out user");
    localStorage.removeItem('isLoggedIn');
    isLoggedIn = false;

    // Show logout notification
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.style.display = 'block';
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.zIndex = '9999';
    notification.style.padding = '15px 30px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    notification.innerHTML = '<strong>You have been logged out successfully.</strong>';

    // Add notification to body
    document.body.appendChild(notification);

    // Remove the notification after 2 seconds
    setTimeout(() => {
        notification.style.display = 'none';
        notification.remove();
        window.location.href = 'home.html';
    }, 2000);
}

// Initialize chart for about us page
function initSuccessChart() {
    const ctx = document.getElementById("successChart");
    if (!ctx) return;

    const successData = {
        labels: ["Applications Sent", "Interviews", "Offers Received", "Hired"],
        datasets: [{
            data: [80, 50, 30, 20],
            backgroundColor: ["#3498db", "#2ecc71", "#f39c12", "#e74c3c"],
            borderColor: "#fff",
            borderWidth: 2,
            hoverOffset: 15
        }]
    };

    new Chart(ctx, {
        type: "pie",
        data: successData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        font: {
                            size: 14,
                            weight: "bold"
                        },
                        color: "#333",
                        boxWidth: 20,
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    titleFont: { size: 16 },
                    bodyFont: { size: 14 },
                    bodySpacing: 6,
                    callbacks: {
                        label: (tooltipItem) => {
                            let value = successData.datasets[0].data[tooltipItem.dataIndex];
                            return `${successData.labels[tooltipItem.dataIndex]}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

// Initialize the page based on its type
function initPage() {
    // Check login status first
    checkLoginStatus();

    console.log("Page initialized, login status:", isLoggedIn ? "logged in" : "not logged in");

    // Check which page we're on and initialize accordingly
    if (document.getElementById('home-page')) {
        console.log("Initializing home page");
        displayProfiles();

        // Add event listeners for search elements on the home page
        const heroSearchBtn = document.querySelector('.hero-search .btn');
        if (heroSearchBtn) {
            heroSearchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Get search inputs
                const inputs = document.querySelectorAll('.hero-search-input input');
                if (inputs.length > 0) {
                    // Store search terms in localStorage
                    const searchTerms = {
                        keyword: inputs[0].value,
                        location: inputs[1].value
                    };
                    localStorage.setItem('searchTerms', JSON.stringify(searchTerms));
                }
                window.location.href = 'job.html';
            });
        }
    } else if (document.getElementById('job-page')) {
        console.log("Initializing job page");
        showRandomJobs();
        handleSearchFromHome(); // Handle search terms if coming from home page
    } else if (document.getElementById('about-page')) {
        console.log("Initializing about page");
        initSuccessChart();
    } else if (document.getElementById('application-page')) {
        console.log("Initializing application page");
        // Verify user is logged in before allowing access to application page
        if (!isLoggedIn) {
            const notification = document.createElement('div');
            notification.className = 'notification error';
            notification.style.display = 'block';
            notification.innerHTML = '<strong>Please log in to access the application form.</strong>';

            document.body.insertBefore(notification, document.body.firstChild);

            // Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
            return;
        }

        // For application page, fill in the job position if coming from job page
        const jobPosition = localStorage.getItem('applyingForJob');
        const positionField = document.getElementById('position');
        if (positionField && jobPosition) {
            positionField.value = jobPosition;
        }
    } else if (document.getElementById('login-page')) {
        console.log("Initializing login page");
        // If user is already logged in and visits login page, redirect to home
        if (isLoggedIn) {
            const notification = document.createElement('div');
            notification.className = 'notification success';
            notification.style.display = 'block';
            notification.innerHTML = '<strong>You are already logged in.</strong>';

            document.body.insertBefore(notification, document.body.firstChild);

            // Redirect to home page after 2 seconds
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        }
    }
}

// Run initialization when page is loaded
document.addEventListener('DOMContentLoaded', initPage);
