module.exports = function reverse (n) {
    let a = Math.abs(n)
    return a.toString().split('').reverse().join('');
}
