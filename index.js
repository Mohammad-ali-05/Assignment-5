// Reusable functions
function heartCountIncrease() {
    let heartCountIncrease = parseInt(
      document.getElementById("heart-count").innerText
    );
    heartCountIncrease += 1
    document.getElementById("heart-count").innerText = heartCountIncrease;
}

function copyAndIncreaseCount(id) {
    const textToCopy = document.getElementById(id).innerText;
    let copyCountIncrease = parseInt(
      document.getElementById("copy-count").innerText
    );
    navigator.clipboard.writeText(textToCopy);
    alert(`নম্বর কপি হয়েছে: ${textToCopy}`);
    copyCountIncrease += 1;
    document.getElementById("copy-count").innerText = copyCountIncrease;
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


// Copy button functionality
document.getElementById("copy-btn-1").addEventListener("click", function (e) {
    copyAndIncreaseCount("all-number")
});
document.getElementById("copy-btn-2").addEventListener("click", function (e) {
    copyAndIncreaseCount("police-number");
});
document.getElementById("copy-btn-3").addEventListener("click", function (e) {
    copyAndIncreaseCount("fire-number");
});
document.getElementById("copy-btn-4").addEventListener("click", function (e) {
    copyAndIncreaseCount("ambulance-number");
});
document.getElementById("copy-btn-5").addEventListener("click", function (e) {
    copyAndIncreaseCount("helpline-number");
});
document.getElementById("copy-btn-6").addEventListener("click", function (e) {
    copyAndIncreaseCount("anti-corruption-number");
});
document.getElementById("copy-btn-7").addEventListener("click", function (e) {
    copyAndIncreaseCount("electricity-number");
});
document.getElementById("copy-btn-8").addEventListener("click", function (e) {
    copyAndIncreaseCount("brac-number");
});
document.getElementById("copy-btn-9").addEventListener("click", function (e) {
    copyAndIncreaseCount("rail-number");
});