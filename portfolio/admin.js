/* ============================================
   Admin Dashboard JavaScript
   ============================================ */

// Check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('portfolio_admin_session')) {
        // Not logged in, redirect to main page
        window.location.href = 'index.html';
        return;
    }

    initDashboard();
});

// Portfolio Data Structure
let portfolioData = {
    profile: {
        name: 'Nithin Datta Guttula',
        title: 'AI/ML Engineer',
        bio: 'Highly motivated and analytical AI/ML Engineer seeking to apply my strong background in Machine Learning algorithm development, predictive modeling, and AI principles to solve complex business problems and create impactful solutions.',
        city: 'Rajahmundry',
        state: 'Andhra Pradesh',
        country: 'India'
    },
    contact: {
        email: 'nithindattaguttula@gmail.com',
        phone: '+91 7981799926',
        linkedin: 'https://www.linkedin.com/in/nithin-datta-g-ba9831287/',
        location: 'Rajahmundry, Andhra Pradesh'
    },
    experience: [
        {
            id: 1,
            title: 'AI/ML Engineer',
            company: 'Rugged Monitoring',
            startDate: 'Sep 2024',
            endDate: 'Present',
            location: 'Hyderabad, Telangana',
            description: 'Developed predictive analytics solutions, automated data extraction using LLMs, and built asset simulators.',
            icon: '💼'
        },
        {
            id: 2,
            title: 'Internship',
            company: 'Rugged Monitoring',
            startDate: 'July 2024',
            endDate: 'Sep 2024',
            location: 'Hyderabad, Telangana',
            description: 'Gained experience with Python, data manipulation, and building RESTful APIs for ML models.',
            icon: '📚'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'Bone Cancer Detection',
            description: 'Developed a deep learning model using CNNs to detect bone cancer from medical imaging data.',
            tags: ['Deep Learning', 'CNN', 'Medical Imaging', 'Python'],
            icon: '🦴'
        },
        {
            id: 2,
            name: 'Noise Reduction using GAN',
            description: 'Designed a GAN to reduce noise in audio and image data with minimal distortion.',
            tags: ['GAN', 'Signal Processing', 'Deep Learning', 'Python'],
            icon: '🔊'
        },
        {
            id: 3,
            name: 'Motor Health Predictor',
            description: 'Built a predictive analytics solution for electric motor health using LightGBM.',
            tags: ['LightGBM', 'REST API', 'Predictive Analytics', 'FastAPI'],
            icon: '⚙️'
        }
    ],
    skills: {
        languages: [
            { name: 'Python', level: 95 },
            { name: 'SQL', level: 85 }
        ],
        aiml: [
            { name: 'ML Models', level: 90 },
            { name: 'Pandas & NumPy', level: 92 },
            { name: 'Gen AI & LLMs', level: 85 },
            { name: 'NLP', level: 80 },
            { name: 'REST APIs', level: 88 }
        ],
        tools: [
            { name: 'OpenAI APIs', level: 88 },
            { name: 'LLM (Mistral)', level: 82 },
            { name: 'Git', level: 85 },
            { name: 'Postman', level: 90 }
        ],
        other: [
            { name: 'PDF Parsing', level: 85 },
            { name: 'Data Cleaning', level: 90 },
            { name: 'Time Series', level: 78 },
            { name: 'Weather APIs', level: 82 }
        ]
    }
};

// Initialize Dashboard
function initDashboard() {
    loadSavedData();
    setupNavigation();
    setupLogout();
    setupSaveAll();
    setupModals();

    populateAboutForm();
    populateContactForm();
    populateExperienceList();
    populateProjectsList();
    populateSkillsList();

    setupFormAutoSave();
}

// Load saved data from localStorage
function loadSavedData() {
    const saved = localStorage.getItem('portfolio_admin_data');
    if (saved) {
        try {
            portfolioData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// Save all data to localStorage
function saveAllData() {
    try {
        // Collect form data first
        collectFormData();

        localStorage.setItem('portfolio_admin_data', JSON.stringify(portfolioData));
        showToast('All changes saved!', 'success');

        // Also update the portfolio HTML data
        updatePortfolioData();
    } catch (e) {
        showToast('Error saving data', 'error');
        console.error(e);
    }
}

// Collect form data into portfolioData
function collectFormData() {
    // Profile
    portfolioData.profile.name = document.getElementById('profile-name')?.value || portfolioData.profile.name;
    portfolioData.profile.title = document.getElementById('profile-title')?.value || portfolioData.profile.title;
    portfolioData.profile.bio = document.getElementById('profile-bio')?.value || portfolioData.profile.bio;
    portfolioData.profile.city = document.getElementById('profile-city')?.value || portfolioData.profile.city;
    portfolioData.profile.state = document.getElementById('profile-state')?.value || portfolioData.profile.state;
    portfolioData.profile.country = document.getElementById('profile-country')?.value || portfolioData.profile.country;

    // Contact
    portfolioData.contact.email = document.getElementById('contact-email')?.value || portfolioData.contact.email;
    portfolioData.contact.phone = document.getElementById('contact-phone')?.value || portfolioData.contact.phone;
    portfolioData.contact.linkedin = document.getElementById('contact-linkedin')?.value || portfolioData.contact.linkedin;
    portfolioData.contact.location = document.getElementById('contact-location')?.value || portfolioData.contact.location;
}

// Update portfolio HTML with saved data
function updatePortfolioData() {
    localStorage.setItem('portfolio_content_json', JSON.stringify(portfolioData));
}

// ============================================
// Navigation
// ============================================
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.admin-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;

            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show corresponding section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(`section-${sectionId}`)?.classList.add('active');
        });
    });
}

// Setup logout
function setupLogout() {
    document.getElementById('logout-btn')?.addEventListener('click', () => {
        sessionStorage.removeItem('portfolio_admin_session');
        window.location.href = 'index.html';
    });
}

// Setup save all
function setupSaveAll() {
    document.getElementById('save-all-btn')?.addEventListener('click', saveAllData);
}

// Auto-save on form changes
function setupFormAutoSave() {
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('change', () => {
            // Auto-save after 2 seconds of no changes
            clearTimeout(window.autoSaveTimeout);
            window.autoSaveTimeout = setTimeout(saveAllData, 2000);
        });
    });
}

// ============================================
// Populate Forms
// ============================================
function populateAboutForm() {
    document.getElementById('profile-name').value = portfolioData.profile.name || '';
    document.getElementById('profile-title').value = portfolioData.profile.title || '';
    document.getElementById('profile-bio').value = portfolioData.profile.bio || '';
    document.getElementById('profile-city').value = portfolioData.profile.city || '';
    document.getElementById('profile-state').value = portfolioData.profile.state || '';
    document.getElementById('profile-country').value = portfolioData.profile.country || '';
}

function populateContactForm() {
    document.getElementById('contact-email').value = portfolioData.contact.email || '';
    document.getElementById('contact-phone').value = portfolioData.contact.phone || '';
    document.getElementById('contact-linkedin').value = portfolioData.contact.linkedin || '';
    document.getElementById('contact-location').value = portfolioData.contact.location || '';
}

// ============================================
// Experience Management
// ============================================
function populateExperienceList() {
    const list = document.getElementById('experience-list');
    if (!list) return;

    list.innerHTML = portfolioData.experience.map(exp => `
        <div class="item-card" data-id="${exp.id}">
            <div class="item-icon">${exp.icon || '💼'}</div>
            <div class="item-content">
                <div class="item-title">${exp.title}</div>
                <div class="item-subtitle">${exp.company} • ${exp.startDate} - ${exp.endDate}</div>
            </div>
            <div class="item-actions">
                <button class="item-btn edit" onclick="editExperience(${exp.id})" title="Edit">✏️</button>
                <button class="item-btn delete" onclick="deleteExperience(${exp.id})" title="Delete">🗑️</button>
            </div>
        </div>
    `).join('');
}

document.getElementById('add-experience-btn')?.addEventListener('click', () => {
    showModal('Add Experience', getExperienceForm());
    window.currentEditType = 'experience';
    window.currentEditId = null;
});

function editExperience(id) {
    const exp = portfolioData.experience.find(e => e.id === id);
    if (!exp) return;

    showModal('Edit Experience', getExperienceForm(exp));
    window.currentEditType = 'experience';
    window.currentEditId = id;
}

function deleteExperience(id) {
    if (!confirm('Are you sure you want to delete this experience?')) return;

    portfolioData.experience = portfolioData.experience.filter(e => e.id !== id);
    populateExperienceList();
    saveAllData();
}

function getExperienceForm(data = {}) {
    return `
        <div class="form-group">
            <label>Job Title</label>
            <input type="text" id="modal-exp-title" value="${data.title || ''}" placeholder="e.g., AI/ML Engineer">
        </div>
        <div class="form-group">
            <label>Company</label>
            <input type="text" id="modal-exp-company" value="${data.company || ''}" placeholder="Company name">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Start Date</label>
                <input type="text" id="modal-exp-start" value="${data.startDate || ''}" placeholder="e.g., Sep 2024">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="text" id="modal-exp-end" value="${data.endDate || ''}" placeholder="e.g., Present">
            </div>
        </div>
        <div class="form-group">
            <label>Location</label>
            <input type="text" id="modal-exp-location" value="${data.location || ''}" placeholder="City, State">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea id="modal-exp-desc" rows="3" placeholder="Brief description of your role...">${data.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>Icon (emoji)</label>
            <input type="text" id="modal-exp-icon" value="${data.icon || '💼'}" placeholder="💼">
        </div>
    `;
}

function saveExperience() {
    const expData = {
        id: window.currentEditId || Date.now(),
        title: document.getElementById('modal-exp-title').value,
        company: document.getElementById('modal-exp-company').value,
        startDate: document.getElementById('modal-exp-start').value,
        endDate: document.getElementById('modal-exp-end').value,
        location: document.getElementById('modal-exp-location').value,
        description: document.getElementById('modal-exp-desc').value,
        icon: document.getElementById('modal-exp-icon').value || '💼'
    };

    if (window.currentEditId) {
        const idx = portfolioData.experience.findIndex(e => e.id === window.currentEditId);
        if (idx !== -1) portfolioData.experience[idx] = expData;
    } else {
        portfolioData.experience.push(expData);
    }

    populateExperienceList();
    hideModal();
    saveAllData();
}

// ============================================
// Projects Management
// ============================================
function populateProjectsList() {
    const list = document.getElementById('projects-list');
    if (!list) return;

    list.innerHTML = portfolioData.projects.map(proj => `
        <div class="item-card" data-id="${proj.id}">
            <div class="item-icon">${proj.icon || '🚀'}</div>
            <div class="item-content">
                <div class="item-title">${proj.name}</div>
                <div class="item-subtitle">${proj.tags?.slice(0, 3).join(', ') || ''}</div>
            </div>
            <div class="item-actions">
                <button class="item-btn edit" onclick="editProject(${proj.id})" title="Edit">✏️</button>
                <button class="item-btn delete" onclick="deleteProject(${proj.id})" title="Delete">🗑️</button>
            </div>
        </div>
    `).join('');
}

document.getElementById('add-project-btn')?.addEventListener('click', () => {
    showModal('Add Project', getProjectForm());
    window.currentEditType = 'project';
    window.currentEditId = null;
});

function editProject(id) {
    const proj = portfolioData.projects.find(p => p.id === id);
    if (!proj) return;

    showModal('Edit Project', getProjectForm(proj));
    window.currentEditType = 'project';
    window.currentEditId = id;
}

function deleteProject(id) {
    if (!confirm('Are you sure you want to delete this project?')) return;

    portfolioData.projects = portfolioData.projects.filter(p => p.id !== id);
    populateProjectsList();
    saveAllData();
}

function getProjectForm(data = {}) {
    return `
        <div class="form-group">
            <label>Project Name</label>
            <input type="text" id="modal-proj-name" value="${data.name || ''}" placeholder="Project name">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea id="modal-proj-desc" rows="4" placeholder="Describe your project...">${data.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>Tags (comma separated)</label>
            <input type="text" id="modal-proj-tags" value="${data.tags?.join(', ') || ''}" placeholder="e.g., Python, Machine Learning, CNN">
        </div>
        <div class="form-group">
            <label>Icon (emoji)</label>
            <input type="text" id="modal-proj-icon" value="${data.icon || '🚀'}" placeholder="🚀">
        </div>
    `;
}

function saveProject() {
    const projData = {
        id: window.currentEditId || Date.now(),
        name: document.getElementById('modal-proj-name').value,
        description: document.getElementById('modal-proj-desc').value,
        tags: document.getElementById('modal-proj-tags').value.split(',').map(t => t.trim()).filter(t => t),
        icon: document.getElementById('modal-proj-icon').value || '🚀'
    };

    if (window.currentEditId) {
        const idx = portfolioData.projects.findIndex(p => p.id === window.currentEditId);
        if (idx !== -1) portfolioData.projects[idx] = projData;
    } else {
        portfolioData.projects.push(projData);
    }

    populateProjectsList();
    hideModal();
    saveAllData();
}

// ============================================
// Skills Management
// ============================================
function populateSkillsList() {
    const container = document.getElementById('skills-categories');
    if (!container) return;

    const categories = {
        languages: { name: 'Languages', icon: '💻' },
        aiml: { name: 'AI / ML', icon: '🤖' },
        tools: { name: 'Tools', icon: '🛠️' },
        other: { name: 'Other', icon: '⚡' }
    };

    container.innerHTML = Object.entries(categories).map(([key, cat]) => `
        <div class="skill-category-card">
            <div class="skill-category-header">
                <span>${cat.icon}</span>
                <h4>${cat.name}</h4>
                <button class="item-btn" onclick="addSkill('${key}')" title="Add Skill">➕</button>
            </div>
            <div class="skill-items-list" id="skills-${key}">
                ${(portfolioData.skills[key] || []).map((skill, idx) => `
                    <div class="skill-item" data-category="${key}" data-index="${idx}">
                        <input type="text" value="${skill.name}" onchange="updateSkill('${key}', ${idx}, 'name', this.value)" placeholder="Skill name">
                        <input type="number" class="skill-level" value="${skill.level}" min="0" max="100" onchange="updateSkill('${key}', ${idx}, 'level', this.value)" placeholder="%">
                        <button class="item-btn delete" onclick="deleteSkill('${key}', ${idx})" title="Delete">🗑️</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function addSkill(category) {
    if (!portfolioData.skills[category]) portfolioData.skills[category] = [];
    portfolioData.skills[category].push({ name: 'New Skill', level: 75 });
    populateSkillsList();
}

function updateSkill(category, index, field, value) {
    if (portfolioData.skills[category] && portfolioData.skills[category][index]) {
        portfolioData.skills[category][index][field] = field === 'level' ? parseInt(value) : value;
    }
}

function deleteSkill(category, index) {
    if (!confirm('Delete this skill?')) return;
    portfolioData.skills[category].splice(index, 1);
    populateSkillsList();
    saveAllData();
}

// ============================================
// Modal Management
// ============================================
function setupModals() {
    document.getElementById('modal-close')?.addEventListener('click', hideModal);
    document.getElementById('modal-cancel')?.addEventListener('click', hideModal);
    document.getElementById('modal-save')?.addEventListener('click', handleModalSave);

    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') hideModal();
    });
}

function showModal(title, bodyContent) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyContent;
    document.getElementById('modal-overlay').classList.add('active');
}

function hideModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    window.currentEditType = null;
    window.currentEditId = null;
}

function handleModalSave() {
    switch (window.currentEditType) {
        case 'experience':
            saveExperience();
            break;
        case 'project':
            saveProject();
            break;
        default:
            hideModal();
    }
}

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${type === 'success' ? '✓' : '⚠️'} ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Make functions globally accessible
window.editExperience = editExperience;
window.deleteExperience = deleteExperience;
window.editProject = editProject;
window.deleteProject = deleteProject;
window.addSkill = addSkill;
window.updateSkill = updateSkill;
window.deleteSkill = deleteSkill;
