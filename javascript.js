const searchForms = document.querySelectorAll(".search-form");
const courseItems = document.querySelectorAll(".course-item");
const courseSearchInput = document.querySelector("#course-search");

function applyCourseFilter(query) {
    if (!courseItems.length) {
        return;
    }

    const normalizedQuery = query.trim().toLowerCase();

    courseItems.forEach((item) => {
        const keywords = item.dataset.courseName || "";
        const visible = !normalizedQuery || keywords.includes(normalizedQuery);
        item.style.display = visible ? "" : "none";
    });
}

searchForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = form.querySelector('input[name="query"]');
        const query = input ? input.value.trim() : "";
        const onCoursesPage = window.location.pathname.toLowerCase().endsWith("courses.html");

        if (onCoursesPage) {
            applyCourseFilter(query);
            const url = new URL(window.location.href);
            if (query) {
                url.searchParams.set("query", query);
            } else {
                url.searchParams.delete("query");
            }
            window.history.replaceState({}, "", url);
            return;
        }

        const destination = query ? `courses.html?query=${encodeURIComponent(query)}` : "courses.html";
        window.location.href = destination;
    });
});

if (courseSearchInput) {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query") || "";
    courseSearchInput.value = query;
    applyCourseFilter(query);
}

// Auth form toggling for landing page
function toggleAuth(mode) {
    const loginContainer = document.getElementById('login-form-container');
    const signupContainer = document.getElementById('signup-form-container');
    
    if (!loginContainer || !signupContainer) return;

    if (mode === 'signup') {
        loginContainer.hidden = true;
        signupContainer.hidden = false;
    } else {
        loginContainer.hidden = false;
        signupContainer.hidden = true;
    }
}

// Export for use in HTML
window.toggleAuth = toggleAuth;
