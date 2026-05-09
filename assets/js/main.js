const searchForms = document.querySelectorAll(".search-form");
const courseItems = document.querySelectorAll(".course-item");
const courseSearchInput = document.querySelector("#course-search");
const courseCount = document.querySelector("[data-course-count]");
const courseEmptyState = document.querySelector("[data-course-empty]");
const admissionForm = document.querySelector("[data-admission-form]");
const paymentStatus = document.querySelector("[data-payment-status]");
let selectedPaymentMethod = "UPI transaction";

const storageKeys = {
    admission: "learnify_admission",
    selectedCourse: "learnify_selected_course",
    payment: "learnify_payment_confirmation",
};

function markActiveNavigation() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".menu a").forEach((link) => {
        const linkPage = new URL(link.href, window.location.href).pathname.split("/").pop() || "index.html";
        const isActive = linkPage === currentPage;

        link.classList.toggle("is-active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        }
    });
}

function readJson(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || "null");
    } catch (error) {
        console.warn(`Unable to read ${key} from local storage:`, error);
        return null;
    }
}

function writeJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Unable to save ${key} to local storage:`, error);
    }
}

function getSearchTokens(query) {
    return query
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
}

function applyCourseFilter(query) {
    if (!courseItems.length) {
        return;
    }

    const queryTokens = getSearchTokens(query);
    let visibleCount = 0;

    courseItems.forEach((item) => {
        const keywords = (item.dataset.courseName || "").toLowerCase();
        const visible = !queryTokens.length || queryTokens.every((token) => keywords.includes(token));
        item.style.display = visible ? "" : "none";
        visibleCount += visible ? 1 : 0;
    });

    if (courseCount) {
        courseCount.textContent = queryTokens.length
            ? `${visibleCount} course${visibleCount === 1 ? "" : "s"} for "${query}"`
            : `Showing all ${courseItems.length} courses`;
    }

    if (courseEmptyState) {
        courseEmptyState.classList.toggle("is-hidden", visibleCount !== 0);
    }

    syncCourseQueryButtons(query);
}

function updateCourseUrl(query) {
    const url = new URL(window.location.href);

    if (query) {
        url.searchParams.set("query", query);
    } else {
        url.searchParams.delete("query");
    }

    window.history.replaceState({}, "", url);
}

function syncCourseQueryButtons(query) {
    document.querySelectorAll("[data-course-query]").forEach((button) => {
        const isSelected = (button.dataset.courseQuery || "") === query;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
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
            updateCourseUrl(query);
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

document.querySelectorAll("[data-course-query]").forEach((button) => {
    button.addEventListener("click", () => {
        const query = button.dataset.courseQuery || "";

        if (courseSearchInput) {
            courseSearchInput.value = query;
        }

        applyCourseFilter(query);
        updateCourseUrl(query);
    });
});

function toggleAuth(mode, options = {}) {
    const loginContainer = document.getElementById("login");
    const signupContainer = document.getElementById("signup");

    if (!loginContainer || !signupContainer) {
        return;
    }

    const showSignup = mode === "signup";
    loginContainer.hidden = showSignup;
    signupContainer.hidden = !showSignup;

    const activeContainer = showSignup ? signupContainer : loginContainer;
    const activeInput = activeContainer.querySelector("input");
    activeInput?.focus();

    if (options.updateHash !== false) {
        window.history.replaceState({}, "", `#${showSignup ? "signup" : "login"}`);
    }
}

document.querySelectorAll("[data-auth-toggle]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        toggleAuth(link.dataset.authToggle || "login");
    });
});

if (window.location.hash === "#signup") {
    toggleAuth("signup", { updateHash: false });
}

function getCardCourseName(link) {
    const card = link.closest(".course-card, .info-card, .payment-card");
    return card?.querySelector("h3")?.textContent.trim() || "";
}

document.querySelectorAll('a[href="payments.html"]').forEach((link) => {
    link.addEventListener("click", () => {
        const courseName = getCardCourseName(link);

        if (courseName) {
            writeJson(storageKeys.selectedCourse, {
                course: courseName,
                selectedAt: new Date().toISOString(),
            });
        }
    });
});

function setInlineStatus(node, message, type = "info") {
    if (!node) {
        return;
    }

    node.textContent = message;
    node.dataset.statusType = type;
}

function formatStoredDate(dateValue) {
    if (!dateValue) {
        return "";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

function getPaymentAmountForCourse(courseName) {
    return courseName === "Job Ready Web Developer Course" ? "Free" : "Rs. 2,999";
}

function renderOrderSummary() {
    const orderSummary = document.querySelector("[data-order-summary]");

    if (!orderSummary) {
        return;
    }

    const orderTitle = orderSummary.querySelector("[data-order-title]");
    const orderDetails = orderSummary.querySelector("[data-order-details]");
    const orderStatus = orderSummary.querySelector("[data-order-status]");
    const cancelButton = orderSummary.querySelector("[data-cancel-order]");
    const payment = readJson(storageKeys.payment);

    orderSummary.hidden = false;

    if (!payment?.transactionId) {
        orderTitle.textContent = "No confirmed order yet";
        orderDetails.textContent = "Confirm your purchase to create an order.";
        orderStatus.textContent = "Pending";
        orderStatus.dataset.orderState = "pending";
        cancelButton.hidden = true;
        return;
    }

    const isCanceled = payment.status === "canceled";
    const statusText = isCanceled ? "Canceled" : "Confirmed";
    const statusDate = formatStoredDate(isCanceled ? payment.canceledAt : payment.confirmedAt);
    const amountText = payment.amount ? ` Amount: ${payment.amount}.` : "";
    const dateText = statusDate ? ` ${statusText} on ${statusDate}.` : "";

    orderTitle.textContent = payment.course || "Selected course";
    orderDetails.textContent = `${payment.method || "Payment"} reference ${payment.transactionId}.${amountText}${dateText}`;
    orderStatus.textContent = statusText;
    orderStatus.dataset.orderState = isCanceled ? "canceled" : "confirmed";
    cancelButton.hidden = isCanceled;
}

function hydrateAdmissionForm() {
    if (!admissionForm) {
        return;
    }

    const savedAdmission = readJson(storageKeys.admission);

    if (!savedAdmission) {
        return;
    }

    Object.entries(savedAdmission).forEach(([name, value]) => {
        const field = admissionForm.elements[name];

        if (field && typeof value === "string") {
            field.value = value;
        }
    });
}

function wireAdmissionForm() {
    if (!admissionForm) {
        return;
    }

    const status = admissionForm.querySelector("[data-form-status]");
    hydrateAdmissionForm();

    admissionForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!admissionForm.reportValidity()) {
            return;
        }

        const admission = Object.fromEntries(new FormData(admissionForm).entries());
        const submittedAt = new Date().toISOString();

        writeJson(storageKeys.admission, { ...admission, submittedAt });
        writeJson(storageKeys.selectedCourse, {
            course: admission.course,
            selectedAt: submittedAt,
        });

        setInlineStatus(status, "Admission details saved. Redirecting to payment...", "success");
        window.location.href = admissionForm.getAttribute("action") || "payments.html";
    });
}

function hydratePaymentSummary() {
    const selectedCourseNode = document.querySelector("[data-selected-course]");

    if (!selectedCourseNode) {
        return;
    }

    const admission = readJson(storageKeys.admission) || {};
    const selectedCourse = readJson(storageKeys.selectedCourse) || {};
    const courseName = admission.course || selectedCourse.course;
    const selectedSummary = document.querySelector("[data-selected-summary]");
    const amountNodes = document.querySelectorAll("[data-payment-amount]");
    const amountText = getPaymentAmountForCourse(courseName);

    if (courseName) {
        selectedCourseNode.textContent = courseName;
    }

    if (selectedSummary && admission.fullName) {
        selectedSummary.textContent = `${admission.fullName}, your ${courseName || "selected course"} admission details are saved for the ${admission.batch || "selected batch"} in ${admission.mode || "your selected mode"}.`;
    }

    amountNodes.forEach((amountNode) => {
        amountNode.textContent = amountText;
    });

    const qrImage = document.querySelector('.qr-frame img');
    if (qrImage) {
        const upiId = "mohdsaifshekh400@okhdfcbank";
        const upiName = "Mohd saif Shekh";
        
        let numericMatch = amountText.match(/\d+[.,\d]*/);
        let amountValue = numericMatch ? numericMatch[0].replace(/,/g, '') : '';
        
        if (amountValue && !amountValue.includes('.')) {
            amountValue += ".00";
        }
        
        let upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&cu=INR`;
        if (amountValue) {
            upiUrl += `&am=${amountValue}`;
        }
        
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(upiUrl)}`;
    }

    if (courseName) {
        setInlineStatus(paymentStatus, `Payment is ready for ${courseName}. Use your name as the payment note.`, "success");
    }

    renderOrderSummary();
}

function setPaymentMethod(method) {
    selectedPaymentMethod = method || "UPI transaction";

    document.querySelectorAll("[data-payment-method]").forEach((button) => {
        const isSelected = button.dataset.paymentMethod === selectedPaymentMethod;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });

    if (paymentStatus) {
        setInlineStatus(paymentStatus, `${selectedPaymentMethod} selected. Enter the transaction ID or payment note after paying.`, "info");
    }
}

function wirePaymentMethods() {
    document.querySelectorAll("[data-payment-method]").forEach((button) => {
        button.addEventListener("click", () => {
            setPaymentMethod(button.dataset.paymentMethod);
        });
    });
}

async function copyUpiId() {
    const upiId = document.querySelector("[data-upi-id]")?.textContent.trim() || "mohdsaifshekh400@okhdfcbank";

    try {
        await navigator.clipboard.writeText(upiId);
        setInlineStatus(paymentStatus, `Copied ${upiId}.`, "success");
    } catch (error) {
        setInlineStatus(paymentStatus, `UPI ID: ${upiId}`, "info");
    }
}

function wireCopyUpi() {
    const copyButton = document.querySelector("[data-copy-upi]");

    if (!copyButton) {
        return;
    }

    copyButton.addEventListener("click", copyUpiId);
}

function wirePaymentConfirmation() {
    const paymentForm = document.querySelector("[data-payment-form]");

    if (!paymentForm) {
        return;
    }

    const transactionInput = paymentForm.querySelector("[data-transaction-id]");
    const previousPayment = readJson(storageKeys.payment);

    if (previousPayment?.transactionId && transactionInput) {
        transactionInput.value = previousPayment.transactionId;
    }

    if (previousPayment?.method) {
        setPaymentMethod(previousPayment.method);
    }

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!paymentForm.reportValidity()) {
            return;
        }

        const admission = readJson(storageKeys.admission) || {};
        const courseName = document.querySelector("[data-selected-course]")?.textContent.trim() || "selected course";
        const transactionId = transactionInput?.value.trim() || "";
        const amount = getPaymentAmountForCourse(courseName);

        writeJson(storageKeys.payment, {
            course: courseName,
            student: admission.fullName || "",
            method: selectedPaymentMethod,
            transactionId,
            amount,
            status: "confirmed",
            confirmedAt: new Date().toISOString(),
        });

        setInlineStatus(paymentStatus, `Payment confirmation saved for ${selectedPaymentMethod}. Transaction ID: ${transactionId}.`, "success");
        renderOrderSummary();
    });
}

function wireOrderCancellation() {
    const cancelButton = document.querySelector("[data-cancel-order]");

    if (!cancelButton) {
        return;
    }

    cancelButton.addEventListener("click", () => {
        const payment = readJson(storageKeys.payment);

        if (!payment?.transactionId || payment.status === "canceled") {
            renderOrderSummary();
            return;
        }

        writeJson(storageKeys.payment, {
            ...payment,
            status: "canceled",
            canceledAt: new Date().toISOString(),
        });

        setInlineStatus(paymentStatus, `Order canceled for ${payment.course || "selected course"}.`, "success");
        renderOrderSummary();
    });
}

markActiveNavigation();
wireAdmissionForm();
hydratePaymentSummary();
wirePaymentMethods();
wireCopyUpi();
wirePaymentConfirmation();
wireOrderCancellation();

window.toggleAuth = toggleAuth;
