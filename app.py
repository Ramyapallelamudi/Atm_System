from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Global variable for balance
balance = 1000

# Route to render the ATM HTML page
@app.route('/')
def index():
    return render_template('index.html')

# API route to handle ATM operations
@app.route('/atm', methods=['POST'])
def atm():
    global balance
    data = request.get_json()  # Get data from the frontend
    pin = data.get('pin')
    action = data.get('action')
    amount = data.get('amount', 0)

    # Debugging to check received data
    print("Received PIN:", pin)
    print("Action:", action, "Amount:", amount)

    # PIN Verification
    if int(pin) == 2003:
        # Handle user actions
        if action == 'balance':
            return jsonify({"status": "success", "message": f"Your current balance is {balance}"})
        elif action == 'withdraw':
            if amount <= balance:
                balance -= amount
                return jsonify({"status": "success", "message": f"{amount} withdrawn. Remaining balance: {balance}"})
            else:
                return jsonify({"status": "error", "message": "Insufficient balance"})
        elif action == 'deposit':
            balance += amount
            return jsonify({"status": "success", "message": f"{amount} deposited. New balance: {balance}"})
        else:
            return jsonify({"status": "error", "message": "Invalid action"})
    else:
        return jsonify({"status": "error", "message": "Invalid pin"})

if __name__ == '__main__':
    app.run(debug=True)
