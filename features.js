
const historyTab = document.getElementById("history-btn");
const donationTab = document.getElementById("donation-btn");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-black",
    "bg-lime-300",
    "font-semibold",
  );

  historyTab.classList.remove("text-slate-600");
  donationTab.classList.remove(
    "text-black",
    "bg-lime-300",
    "font-semibold",
  );
  donationTab.classList.add("text-slate-600");

  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

donationTab.addEventListener("click", function () {
  donationTab.classList.add(
    "text-black",
    "bg-lime-300",
    "font-semibold",
  );

  donationTab.classList.remove("text-slate-600");
  historyTab.classList.remove(
    "text-black",
    "bg-lime-300",
    "font-semibold",
  );
  historyTab.classList.add("text-slate-600");

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("main-section").classList.remove("hidden");
});