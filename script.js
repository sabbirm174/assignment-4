// ticket count incress and decress
function handleTicketChange(ticket, isIncrease){
    const ticketInput = elementId(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketPrice = 0;
    if(ticket == 'first-class'){
        ticketPrice = ticketNewCount * 150;
    }
    if(ticket == 'economy'){
        ticketPrice = ticketNewCount * 100;
    }
    calculatTotal();
}

// total ticket price with vat
function calculatTotal(){
    const ticketCount = getInputValue("first-class-count");
    const economyCount = getInputValue("economy-count");
    const totalPrice = ticketCount * 150 + economyCount * 100;
    elementId("total-price").innerText = '$' + totalPrice;
    const vat = totalPrice * .1;
    elementId("vat").innerText = "$" + vat;
    const grandTotal = totalPrice + vat;
    elementId("grandTotal").innerText = "$" + grandTotal;
    
}

// popup alertbox
function popUp(){
    const wrap = elementId("wrap");
    wrap.style.display = "none";
    const totalFirstClassTicket = parseInt(elementId("first-class-count").value);
    const totalEconomyClassTicket = parseInt(elementId("economy-count").value);
    const totalTicket = totalFirstClassTicket + totalEconomyClassTicket;
    // Purches at least 1 ticket
    if(totalTicket > 0){
        const alert = elementId("alert-box2");
        alert.style.display = "block";
        elementId("alert-total-ticket").innerText = totalTicket;
        elementId("alert-first-class-ticket").innerText = totalFirstClassTicket;
        elementId("alert-economy-class-ticket").innerText = totalEconomyClassTicket;
        const ticketPrice = elementId("total-price").innerText;
        elementId("alert-ticket-price").innerText = ticketPrice;
        const totalVat = elementId("vat").innerText;
        elementId("alert-total-vat").innerText = totalVat;
        const includeVat = elementId("grandTotal").innerText;
        elementId("alert-grand-total").innerText = includeVat;
        elementId("empty-ticket").innerText = "";
    }
    // if tickst value 0
    else{
        const alert = elementId("alert-box1");
        alert.style.display = "block";
    }
    
}

// purchase alert box close
function closeAlert(){
    alert("alert-box2");
}

// empty alert box close
function closeAlertEmp(){
    alert("alert-box1");
}

// common alert box close
function alert(id){
    const closAlert = elementId(id);
    closAlert.style.display = "none";
    const wrap = elementId("wrap");
    wrap.style.display = "block";
}

// input value for common id
function getInputValue(ticketClass){
    const ticketInput = elementId(ticketClass);
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// change all document.getElementById to elemntid for shortcut
function elementId(id){
    const inputId = document.getElementById(id);
    return inputId;
}