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

function callHistoryAndCoinDecrease(idServiceNameBangla, idServiceNameEnglish, idServiceNumber) {
    const serviceNameBangla =
      document.getElementById(idServiceNameBangla).innerText;
    const serviceNameEnglish =
      document.getElementById(idServiceNameEnglish).innerText;
    const serviceNumber = document.getElementById(idServiceNumber).innerText;
    const timeWhenCalled = new Date().toLocaleTimeString();
    const historyContainer = document.getElementById("history-container");
    let coinBalance = parseInt(
      document.getElementById("coin-balance").innerText
    );
    if (coinBalance < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    } else {
      alert(`📞 Calling ${serviceNameEnglish} ${serviceNumber}...`);
      coinBalance -= 20;
      document.getElementById("coin-balance").innerText = coinBalance;
      const createHistoryBox = `<div class="flex justify-between items-center bg-[#fafafa] rounded-lg p-4 m-2">
                        <div>
                            <h1 class="text-[18px] font-semibold">${serviceNameBangla}</h1>
                            <p class="text-[18px] font-medium text-[#5c5c5c]">${serviceNumber}</p>
                        </div>
                        <p class="text-[18px] font-medium">${timeWhenCalled}</p>
                    </div>
        `;
      historyContainer.insertAdjacentHTML("beforeend", createHistoryBox);
    }
}

//Call button functionality
document.getElementById("call-btn-1").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-1",
      "service-name-english-1",
      "all-number"
    );


});
document.getElementById("call-btn-2").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-2",
      "service-name-english-2",
      "police-number"
    );
});
document.getElementById("call-btn-3").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-3",
      "service-name-english-3",
      "fire-number"
    );
});
document.getElementById("call-btn-4").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-4",
      "service-name-english-4",
      "ambulance-number"
    );
});
document.getElementById("call-btn-5").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-5",
      "service-name-english-5",
      "helpline-number"
    );
});
document.getElementById("call-btn-6").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-6",
      "service-name-english-6",
      "anti-corruption-number"
    );
});
document.getElementById("call-btn-7").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-7",
      "service-name-english-7",
      "electricity-number"
    );
});
document.getElementById("call-btn-8").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-8",
      "service-name-english-8",
      "brac-number"
    );
});
document.getElementById("call-btn-9").addEventListener("click", function (e) {
    callHistoryAndCoinDecrease(
      "service-name-9",
      "service-name-english-9",
      "rail-number"
    );
});


// Clear button functionality
document.getElementById("history-clear-btn").addEventListener("click", function (e) {
    let historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = ""
});


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