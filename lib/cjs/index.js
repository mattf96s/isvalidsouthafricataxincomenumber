"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTaxNumber = void 0;
const Luhn_1 = __importDefault(require("./Luhn"));
function isValidTaxNumber(taxNumber) {
    taxNumber = taxNumber.trim();
    const numbersRegex = /^\d+$/;
    const isNumbers = numbersRegex.test(taxNumber);
    if (!isNumbers) {
        return { error: !0, msg: "Must only contain numbers" };
    }
    if (taxNumber.length !== 10) {
        return { error: !0, msg: "Must be 10 digits long" };
    }
    const firstDigit = taxNumber.slice(0, 1);
    if (!["0", "1", "2", "3", "9"].includes(firstDigit)) {
        return { error: !0, msg: "Must begin with one of 0, 1, 2, 3, 9" };
    }
    const isValid = Luhn_1.default(taxNumber);
    if (isValid) {
        return { error: !1, msg: "" };
    }
    return { error: !0, msg: "Not a valid tax number" };
}
exports.isValidTaxNumber = isValidTaxNumber;
