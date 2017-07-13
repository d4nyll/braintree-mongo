function createPayment(payment) {
  connect(insertPayment, payment)
    .catch((err) => { console.log(err.stack) });
}
