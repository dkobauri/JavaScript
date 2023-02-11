// Counts specific characters in str

function printerError(s) {
    return s.match(/[\.!@#$%^&*()_+-=,./<>?;:'"{}|]/g).length + "/" + s.length;
}

console.log(printerError("%!w#rt|yuiop"));