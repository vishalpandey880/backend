function validateUser(data) {
    const errors = [];

    // Name validation
    if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
        errors.push("Name is required and must be a non-empty string.");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || typeof data.email !== "string" || !emailRegex.test(data.email.trim())) {
        errors.push("Email is required and must be a valid email address.");
    }

    // Age validation
    const age = Number(data.age);
    if (data.age === undefined || data.age === null || isNaN(age) || age <= 0 || age > 120) {
        errors.push("Age is required and must be a valid number between 1 and 120.");
    }

    // Course validation
    if (!data.course || typeof data.course !== "string" || data.course.trim() === "") {
        errors.push("Course is required and must be a non-empty string.");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

module.exports = { validateUser };
