const firebaseConfig = {
    apiKey: "AIzaSyC2eju3w9TimSmY6HOPxl4qFdwGS5Dxvj0",
    authDomain: "learnify-f7b22.firebaseapp.com",
    projectId: "learnify-f7b22",
    storageBucket: "learnify-f7b22.firebasestorage.app",
    messagingSenderId: "85562448397",
    appId: "1:85562448397:web:d7756f016446ce75605344",
    measurementId: "G-Z9Q4YTQ90C",
};

const firebaseModuleUrls = {
    app: "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js",
    auth: "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js",
};

let firebaseAuth = null;
let firebaseModulesPromise = null;
const authCookieName = "learnify_auth_state";
const authCookieMaxAge = 60 * 60 * 24 * 30;

function setCookie(name, value, maxAgeSeconds) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

function clearCookie(name) {
    document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}

function getCookie(name) {
    const prefix = `${name}=`;
    const match = document.cookie
        .split(";")
        .map((item) => item.trim())
        .find((item) => item.startsWith(prefix));

    return match ? decodeURIComponent(match.slice(prefix.length)) : "";
}

function getStoredAuthState() {
    const rawState = getCookie(authCookieName);

    if (!rawState) {
        return null;
    }

    try {
        return JSON.parse(rawState);
    } catch (error) {
        clearCookie(authCookieName);
        return null;
    }
}

function storeAuthState(user) {
    if (!user) {
        clearCookie(authCookieName);
        return;
    }

    const state = {
        displayName: getDisplayName(user),
        email: user.email || "",
        photoURL: user.photoURL || "",
    };

    setCookie(authCookieName, JSON.stringify(state), authCookieMaxAge);
}

function getStoredUser() {
    const state = getStoredAuthState();

    if (!state?.email) {
        return null;
    }

    return {
        displayName: state.displayName || "",
        email: state.email,
        photoURL: state.photoURL || "",
    };
}

function setStatus(message, type = "info") {
    const statusNodes = document.querySelectorAll("[data-auth-status]");
    if (!statusNodes.length) {
        return;
    }

    statusNodes.forEach((statusEl) => {
        statusEl.textContent = message;
        statusEl.dataset.statusType = type;
    });
}

function getDisplayName(user) {
    const rawName = user?.displayName?.trim();

    if (rawName) {
        return rawName;
    }

    const emailPrefix = user?.email?.split("@")[0] || "Guest";
    return emailPrefix
        .replace(/[._-]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getUserInitials(user) {
    const displayName = getDisplayName(user);
    const parts = displayName.split(/\s+/).filter(Boolean);

    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }

    return displayName.slice(0, 2).toUpperCase();
}

function getAvatarColor(seed) {
    const palette = ["0f766e", "2563eb", "d97706", "7c3aed", "c2410c", "0ea5e9"];
    let hash = 0;

    for (let index = 0; index < seed.length; index += 1) {
        hash = (hash * 31 + seed.charCodeAt(index)) % palette.length;
    }

    return palette[hash];
}

function createAvatarDataUrl(user) {
    const initials = getUserInitials(user);
    const color = getAvatarColor(user?.email || initials);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#${color}" />
                    <stop offset="100%" stop-color="#17322e" />
                </linearGradient>
            </defs>
            <rect width="160" height="160" rx="80" fill="url(#bg)" />
            <circle cx="80" cy="68" r="30" fill="rgba(255,255,255,0.18)" />
            <path d="M40 132c9-21 28-34 40-34s31 13 40 34" fill="rgba(255,255,255,0.18)" />
            <text x="80" y="92" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="52" font-weight="700">${initials}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}`;
}

function setLoggedInState(user) {
    const guestActions = document.querySelectorAll("[data-auth-guest]");
    const userStateNodes = document.querySelectorAll("[data-auth-user]");
    const userNameNodes = document.querySelectorAll("[data-user-name]");
    const userEmailNodes = document.querySelectorAll("[data-user-email]");
    const userAvatarNodes = document.querySelectorAll("[data-user-avatar]");
    const logoutLinks = document.querySelectorAll("[data-logout-link]");
    const displayName = user ? getDisplayName(user) : "Guest";
    const email = user?.email || "Guest";
    const avatarSrc = user ? (user.photoURL || createAvatarDataUrl(user)) : "";

    guestActions.forEach((node) => {
        node.hidden = !!user;
        node.classList.toggle("is-hidden", !!user);
    });

    userStateNodes.forEach((node) => {
        node.hidden = !user;
        node.classList.toggle("is-hidden", !user);
    });

    userNameNodes.forEach((node) => {
        node.textContent = displayName;
    });

    userEmailNodes.forEach((node) => {
        node.textContent = email;
    });

    userAvatarNodes.forEach((node) => {
        if (user) {
            node.src = avatarSrc;
            node.alt = `${displayName} profile picture`;
            node.hidden = false;
            return;
        }

        node.removeAttribute("src");
        node.alt = "Guest profile picture";
        node.hidden = true;
    });

    logoutLinks.forEach((link) => {
        link.hidden = !user;
    });
}

function getFriendlyAuthMessage(error) {
    const code = error?.code || "";

    switch (code) {
        case "auth/invalid-api-key":
            return "Authentication is not configured correctly.";
        case "auth/network-request-failed":
            return "Could not reach the network. Please check your internet connection.";
        case "auth/operation-not-allowed":
            return "This sign-in method is not currently enabled.";
        case "auth/popup-blocked":
            return "The sign-in popup was blocked. Redirecting to Google sign-in...";
        case "auth/popup-closed-by-user":
            return "Google sign-in was closed before it finished.";
        case "auth/account-exists-with-different-credential":
            return "An account already exists with this email using another sign-in method.";
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
            return "Invalid email or password.";
        case "auth/email-already-in-use":
            return "That email is already registered. Try logging in instead.";
        case "auth/weak-password":
            return "Use a stronger password with at least 6 characters.";
        case "auth/unauthorized-domain":
            return "This site is not authorized for sign in.";
        default:
            return error?.message || "Authentication failed.";
    }
}

async function loadFirebaseModules() {
    if (!firebaseModulesPromise) {
        firebaseModulesPromise = Promise.all([
            import(firebaseModuleUrls.app),
            import(firebaseModuleUrls.auth),
        ]);
    }

    return firebaseModulesPromise;
}

async function initFirebaseAuth() {
    if (firebaseAuth) {
        return firebaseAuth;
    }

    let appModule;
    let authModule;

    try {
        [appModule, authModule] = await loadFirebaseModules();
    } catch (error) {
        console.error("Unable to load Firebase SDK modules:", error);
        setStatus("Authentication service could not load. Check your connection.", "error");
        throw error;
    }

    const { initializeApp, getApp, getApps } = appModule;
    const {
        browserLocalPersistence,
        getAuth,
        onAuthStateChanged,
        setPersistence,
    } = authModule;

    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    firebaseAuth = getAuth(app);

    try {
        await setPersistence(firebaseAuth, browserLocalPersistence);
    } catch (error) {
        console.warn("Firebase persistence setup failed:", error);
    }

    onAuthStateChanged(firebaseAuth, (user) => {
        storeAuthState(user);
        setLoggedInState(user);

        if (user) {
            setStatus(`Signed in as ${user.email}.`, "success");
            return;
        }

        setStatus("Please enter your details to sign in.", "info");
    });

    try {
        const { getRedirectResult } = authModule;
        const redirectCredential = await getRedirectResult(firebaseAuth);

        if (redirectCredential?.user) {
            storeAuthState(redirectCredential.user);
            setLoggedInState(redirectCredential.user);
            setStatus(`Signed in with Google as ${redirectCredential.user.email}.`, "success");
        }
    } catch (error) {
        setStatus(getFriendlyAuthMessage(error), "error");
    }

    return firebaseAuth;
}

async function handleLogin(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.querySelector('input[name="email"]')?.value.trim();
    const password = form.querySelector('input[name="password"]')?.value;

    if (!email || !password) {
        setStatus("Enter both email and password.", "error");
        return;
    }

    try {
        const auth = await initFirebaseAuth();
        const { signInWithEmailAndPassword } = await loadFirebaseModules().then(([, authModule]) => authModule);

        await signInWithEmailAndPassword(auth, email, password);
        setStatus("Login successful.", "success");
        form.reset();
    } catch (error) {
        setStatus(getFriendlyAuthMessage(error), "error");
    }
}

async function handleSignup(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const username = form.querySelector('input[name="signup-username"]')?.value.trim();
    const email = form.querySelector('input[name="signup-email"]')?.value.trim();
    const password = form.querySelector('input[name="signup-password"]')?.value;

    if (!email || !password) {
        setStatus("Enter email and password to create an account.", "error");
        return;
    }

    try {
        const auth = await initFirebaseAuth();
        const { createUserWithEmailAndPassword, updateProfile } = await loadFirebaseModules().then(([, authModule]) => authModule);

        const credential = await createUserWithEmailAndPassword(auth, email, password);

        if (username) {
            await updateProfile(credential.user, { displayName: username });
        }

        setLoggedInState(auth.currentUser || credential.user);
        setStatus("Account created successfully.", "success");
        form.reset();
    } catch (error) {
        setStatus(getFriendlyAuthMessage(error), "error");
    }
}

async function handleGoogleAuth(event) {
    event.preventDefault();
    setStatus("Opening Google sign-in...", "info");

    try {
        const auth = await initFirebaseAuth();
        const {
            GoogleAuthProvider,
            signInWithPopup,
            signInWithRedirect,
        } = await loadFirebaseModules().then(([, authModule]) => authModule);
        const provider = new GoogleAuthProvider();

        provider.setCustomParameters({
            prompt: "select_account",
        });

        try {
            const credential = await signInWithPopup(auth, provider);

            storeAuthState(credential.user);
            setLoggedInState(credential.user);
            setStatus(`Signed in with Google as ${credential.user.email}.`, "success");
        } catch (popupError) {
            if (popupError?.code !== "auth/popup-blocked") {
                throw popupError;
            }

            setStatus(getFriendlyAuthMessage(popupError), "info");
            await signInWithRedirect(auth, provider);
        }
    } catch (error) {
        setStatus(getFriendlyAuthMessage(error), "error");
    }
}

async function handleLogout(event) {
    event.preventDefault();

    try {
        const auth = await initFirebaseAuth();
        const { signOut } = await loadFirebaseModules().then(([, authModule]) => authModule);

        await signOut(auth);
        setStatus("Signed out.", "info");
    } catch (error) {
        setStatus(getFriendlyAuthMessage(error), "error");
    }
}

function wireAuthForms() {
    const loginForm = document.querySelector("[data-login-form]");
    const signupForm = document.querySelector("[data-signup-form]");
    const googleAuthButtons = document.querySelectorAll("[data-google-auth]");

    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener("submit", handleSignup);
    }

    googleAuthButtons.forEach((button) => {
        button.addEventListener("click", handleGoogleAuth);
    });

    document.querySelectorAll("[data-logout-link]").forEach((link) => {
        link.addEventListener("click", handleLogout);
    });
}

async function boot() {
    wireAuthForms();

    if (!document.querySelector("[data-auth-guest], [data-auth-user], [data-login-form], [data-signup-form], [data-google-auth], [data-logout-link]")) {
        return;
    }

    setLoggedInState(getStoredUser());

    try {
        await initFirebaseAuth();
    } catch (error) {
        console.error("Firebase auth boot failed:", error);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
} else {
    boot();
}
