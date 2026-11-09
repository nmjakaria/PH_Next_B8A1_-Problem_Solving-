"use strict";
function multiplyValue(value, multiplier) {
    return value * (multiplier ?? 2);
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }
    return value;
}
