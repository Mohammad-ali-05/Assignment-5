// Reusable functions
function heartCountIncrease() {
    let heartCountIncrease = parseInt(
      document.getElementById("heart-count").innerText
    );
    heartCountIncrease += 1
    document.getElementById("heart-count").innerText = heartCountIncrease;
}
// Heart icon functionality
document.getElementById("heart-btn-1").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-2").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-3").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-4").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-5").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-6").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-7").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-8").addEventListener("click", function (e) {
    heartCountIncrease()
});
document.getElementById("heart-btn-9").addEventListener("click", function (e) {
    heartCountIncrease()
});