// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function to switch between login and register modals
function switchModal(currentModal, targetModal) {
    closeModal(currentModal);
    openModal(targetModal);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let loginModal = document.getElementById("loginModal");
    let registerModal = document.getElementById("registerModal");

    if (event.target === loginModal) {
        closeModal("loginModal");
    }
    if (event.target === registerModal) {
        closeModal("registerModal");
    }
};
