module.exports = {
  provider: {
    name: 'Joel Xavier Rocha',
    email: 'joelxr@gmail.com',
    registration: '',
    address: {
      firstLine: '',
      secondLine: '',
      country: ''
    },
  },
  invoice: {
    number: 1,
    date: new Date().toLocaleDateString(),
  },
  billingTo: {
    name: '',
    detail: '',
    address: {
      firstLine: '',
      secondLine: '',
      country: ''
    }
  },
  services: [
    {
      description: 'Software development services',
      cost: 1,
      quantity: 1,
      currency: 'USD'
    }
  ]
}
