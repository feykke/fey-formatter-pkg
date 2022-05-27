function formatCep(value) {
    return String(value)
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, "$1-$2")
}

function formatCpf(value) {
    return String(value)
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
}

module.exports = {
    formatCep,
    formatCpf
}