function checkBalance() {
    let pin = document.getElementById("pin").value;

    fetch('/atm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pin: pin,
            action: 'balance'
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.message;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = "Error in checking balance!";
    });
}

function withdraw() {
    let pin = document.getElementById("pin").value;
    let withdrawAmount = parseInt(document.getElementById("withdrawAmount").value);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        document.getElementById('result').innerHTML = "Please enter a valid withdrawal amount.";
        return;
    }

    fetch('/atm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pin: pin,
            action: 'withdraw',
            amount: withdrawAmount
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.message;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = "Error in withdrawing!";
    });
}

function deposit() {
    let pin = document.getElementById("pin").value;
    let depositAmount = parseInt(document.getElementById("withdrawAmount").value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        document.getElementById('result').innerHTML = "Please enter a valid deposit amount.";
        return;
    }

    fetch('/atm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pin: pin,
            action: 'deposit',
            amount: depositAmount
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.message;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = "Error in depositing!";
    });
}
