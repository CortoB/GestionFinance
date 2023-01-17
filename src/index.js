const elApp = document.querySelector("#app");
elApp.classList.add("py-5");

const elAmount = document.createElement("h1");
elAmount.classList.add("float-left", "ml-28", "font-bold");
elApp.appendChild(elAmount);

const elAmountContent = document.createElement("h1");
elAmountContent.textContent = "Amount";
elAmountContent.classList.add("text-lg");
elAmount.appendChild(elAmountContent);

const elAmountInput = document.createElement("input");
elAmountInput.setAttribute("type", "number");
elAmountInput.id = "aminput";
elAmountInput.classList.add("border-2", "border-slate-400", "outline-none");
elAmount.appendChild(elAmountInput);
document.querySelector("#aminput").placeholder = "0";

let AmountNumberInput = document.querySelector("#aminput");
AmountNumberInput.addEventListener("keypress", OnlyNumber, false);

const elDesc = document.createElement("h1");
elDesc.classList.add("ml-96", "pl-36", "font-bold");
elApp.appendChild(elDesc);

const elDescContent = document.createElement("h1");
elDescContent.textContent = "Description";
elDescContent.classList.add("text-lg");
elDesc.appendChild(elDescContent);

const elDescInput = document.createElement("input");
elDescInput.setAttribute("type", "text");
elDescInput.id = "descinput";
elDescInput.classList.add("border-2", "border-slate-400", "outline-none");
elDesc.appendChild(elDescInput);
document.querySelector("#descinput").placeholder = "A short description";

const elOutcomeButton = document.createElement("button");
elOutcomeButton.id = "outcomebutton";
elOutcomeButton.classList.add(
  "float-right",
  "bg-red-500",
  "mr-40",
  "w-24",
  "font-bold"
);
elDesc.appendChild(elOutcomeButton);

const elOutcomeButtonContent = document.createElement("h1");
elOutcomeButtonContent.textContent = "Outcome";
elOutcomeButtonContent.classList.add("text-lg");
elOutcomeButton.appendChild(elOutcomeButtonContent);

const elIncomeButton = document.createElement("button");
elIncomeButton.id = "incomebutton";
elIncomeButton.classList.add(
  "float-right",
  "mr-12",
  "bg-blue-700",
  "mr-52",
  "w-20",
  "font-bold"
);
elDesc.appendChild(elIncomeButton);

const elIncomeButtonContent = document.createElement("h1");
elIncomeButtonContent.textContent = "Income";
elIncomeButtonContent.classList.add("text-lg");
elIncomeButton.appendChild(elIncomeButtonContent);

const elTable = document.createElement("table");
elTable.classList.add("table-auto", "w-full", "mt-5", "border-collapse");
elApp.appendChild(elTable);

const elTHead = document.createElement("thead");
elTHead.classList.add("bg-[#808080]");
elTable.appendChild(elTHead);
const elTBody = document.createElement("tbody");
elTable.appendChild(elTBody);
const elTFoot = document.createElement("tfoot");
elTable.appendChild(elTFoot);

const elHeaderInc = document.createElement("th");
elHeaderInc.textContent = "INCOME";
elHeaderInc.classList.add("p-5", "border-r-2", "border-slate-400");
elTHead.appendChild(elHeaderInc);

const elHeaderOut = document.createElement("th");
elHeaderOut.textContent = "OUTCOME";
elHeaderOut.classList.add("p-5");
elTHead.appendChild(elHeaderOut);

let TotalIncomeMoney = 0;
let TotalIncomeMoneyEUR = new Intl.NumberFormat("en-FR", {
  style: "currency",
  currency: "EUR",
}).format(TotalIncomeMoney);

let TotalOutcomeMoney = -0;
let TotalOutcomeMoneyEUR = new Intl.NumberFormat("en-FR", {
  style: "currency",
  currency: "EUR",
}).format(TotalOutcomeMoney);

let Balance = 0;
let BalanceEUR = new Intl.NumberFormat("en-FR", {
  style: "currency",
  currency: "EUR",
}).format(Balance);

const elRowFoot = document.createElement("tr");
elRowFoot.classList.add(
  "border-2",
  "border-slate-400",
  "bg-blue-100",
  "border-collapse"
);
elTFoot.appendChild(elRowFoot);

const elTotIncome = document.createElement("td");
elTotIncome.textContent = "TOTAL INCOME";
elTotIncome.classList.add("border-r-2", "border-slate-400", "text-green-600");
elRowFoot.appendChild(elTotIncome);

const elTotMoneyInc = document.createElement("td");
elTotMoneyInc.textContent = TotalIncomeMoneyEUR;
elTotMoneyInc.classList.add("font-bold");
elTotIncome.appendChild(elTotMoneyInc);

const elTotOutcome = document.createElement("td");
elTotOutcome.textContent = "TOTAL OUTCOME";
elTotOutcome.classList.add("text-red-600");
elRowFoot.appendChild(elTotOutcome);

const elTotMoneyOut = document.createElement("td");
elTotMoneyOut.textContent = TotalOutcomeMoneyEUR;
elTotMoneyOut.classList.add("font-bold");
elTotOutcome.appendChild(elTotMoneyOut);

const elBalance = document.createElement("h1");
elBalance.textContent = "BALANCE";
elBalance.classList.add("text-center", "text-slate-600", "mr-28", "font-bold");
elApp.appendChild(elBalance);

const elBalanceMoney = document.createElement("h1");
elBalanceMoney.textContent = BalanceEUR;
elBalanceMoney.classList.add("text-black", "font-bold");
elBalance.appendChild(elBalanceMoney);

function OnlyNumber(event) {
  if (
    (event.charCode < 48 || event.charCode > 57) &&
    (event.charCode < 44 || event.charCode > 44)
  ) {
    event.preventDefault();
  }
}

function CompteurBalance() {
  Balance = TotalIncomeMoney - TotalOutcomeMoney;
  let BalanceEUR = new Intl.NumberFormat("en-FR", {
    style: "currency",
    currency: "EUR",
  }).format(Balance);
  elBalanceMoney.textContent = BalanceEUR;
}

function AlternateColor(elTBody) {
  let RowNumbers = elTBody.getElementsByTagName("tr").length;
  let Row = [];
  Row = elTBody.getElementsByTagName("tr");
  for (var i = 0; i < RowNumbers; i++) {
    if (i % 2) {
      Row[i].classList.add("bg-blue-100");
    } else {
      Row[i].classList.add("bg-white");
    }
  }
}

function CompteurIncome() {
  let Inc = document.querySelector("#aminput");
  TotalIncomeMoney += Number(Inc.value);
  let TotalIncomeMoneyEUR = new Intl.NumberFormat("en-FR", {
    style: "currency",
    currency: "EUR",
  }).format(TotalIncomeMoney);
  elTotMoneyInc.textContent = TotalIncomeMoneyEUR;
  CompteurBalance();
}

function CompteurOutcome() {
  let Out = document.querySelector("#aminput");
  TotalOutcomeMoney += Number(Out.value);
  let TotalOutcomeMoneyEUR = new Intl.NumberFormat("en-FR", {
    style: "currency",
    currency: "EUR",
  }).format(-TotalOutcomeMoney);
  elTotMoneyOut.textContent = TotalOutcomeMoneyEUR;
  CompteurBalance();
}

function AddTabIncome() {
  const AmInput = document.querySelector("#aminput").value;
  const DescInput = document.querySelector("#descinput").value;
  let AmInputEUR = new Intl.NumberFormat("en-FR", {
    style: "currency",
    currency: "EUR",
  }).format(AmInput);
  let date = new Date();
  let Datefr = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    seconde: "2-digit",
    timeZoneName: "short",
  }).format(date);

  if (AmInput !== "" && DescInput !== "" && AmInput > 0) {
    CompteurIncome();

    const elRow = document.createElement("tr");
    elTBody.appendChild(elRow);
    AlternateColor(elTBody);
    let elDateTab = document.createElement("td");
    elDateTab.textContent = Datefr;
    elDateTab.classList.add("text-right", "text-slate-600");
    elRow.appendChild(elDateTab);
    const elIncomeAm = document.createElement("td");
    elIncomeAm.textContent = AmInputEUR;
    elIncomeAm.classList.add("text-green-600", "font-bold");
    elDateTab.appendChild(elIncomeAm);
    const elContentDesc = document.createElement("td");
    elContentDesc.textContent = DescInput;
    elContentDesc.classList.add("font-normal");
    elIncomeAm.appendChild(elContentDesc);
    const elOutcomeAm = document.createElement("td");
    elOutcomeAm.classList.add("border-l-2", "border-slate-400");
    elOutcomeAm.textContent = "";
    elRow.appendChild(elOutcomeAm);
    const elOutcomeDesc = document.createElement("td");
    elOutcomeDesc.textContent = "";
    elOutcomeAm.appendChild(elOutcomeDesc);
    document.querySelector("#aminput").value = "";
    document.querySelector("#descinput").value = "";
  } else {
    document.querySelector("#aminput").value = "";
    document.querySelector("#descinput").value = "";
    alert("Your amount value is empty/negatif or your description is empty !!");
  }
}

function AddTabOutcome() {
  const AmInput = document.querySelector("#aminput").value;
  const DescInput = document.querySelector("#descinput").value;
  let AmInputEUR = new Intl.NumberFormat("en-FR", {
    style: "currency",
    currency: "EUR",
  }).format(-AmInput);
  let date = new Date();
  let Datefr = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    seconde: "2-digit",
    timeZoneName: "short",
  }).format(date);

  if (AmInput !== "" && DescInput !== "" && AmInput > 0) {
    CompteurOutcome();
    const elRow = document.createElement("tr");
    elTBody.appendChild(elRow);
    AlternateColor(elTBody);
    const elIncomeAm = document.createElement("td");
    elIncomeAm.textContent = "";
    elIncomeAm.classList.add("border-r-2", "border-slate-400");
    elRow.appendChild(elIncomeAm);
    const elContentDesc = document.createElement("td");
    elContentDesc.textContent = "";
    elIncomeAm.appendChild(elContentDesc);
    let elDateTab = document.createElement("td");
    elDateTab.textContent = Datefr;
    elDateTab.classList.add("text-right", "text-slate-600");
    elRow.appendChild(elDateTab);
    const elOutcomeAm = document.createElement("td");
    elOutcomeAm.textContent = AmInputEUR;
    elOutcomeAm.classList.add("text-red-600", "font-bold");
    elDateTab.appendChild(elOutcomeAm);
    const elOutcomeDesc = document.createElement("td");
    elOutcomeDesc.textContent = DescInput;
    elOutcomeDesc.classList.add("font-normal");
    elOutcomeAm.appendChild(elOutcomeDesc);
    document.querySelector("#aminput").value = "";
    document.querySelector("#descinput").value = "";
  } else {
    document.querySelector("#aminput").value = "";
    document.querySelector("#descinput").value = "";
    alert("Your amount value is empty/negatif or your description is empty !!");
  }
}

document.querySelector("#incomebutton").addEventListener("click", AddTabIncome);

document
  .querySelector("#outcomebutton")
  .addEventListener("click", AddTabOutcome);
