function bankRequests(accounts, requests) {
  for (let i = 0; i < requests.length; i++) {
    const requestArray = requests[i].split(' ');
    const command = requestArray[0];

    switch (command) {
      case 'withdraw': {
        const accountIndex = parseInt(requestArray[1]) - 1;
        const sum = parseInt(requestArray[2]);

        /*
        Validation check
          - invalid account number in the requests;
          - deposit / withdrawal of a larger amount of money than is currently available.
        */
        if (
          accounts[accountIndex] == null ||
          typeof accounts[accountIndex] === 'undefined' ||
          accounts[accountIndex] < sum
        )
          return [-(i + 1)];
        accounts[accountIndex] -= sum;
        break;
      }
      case 'transfer': {
        const transferFrom = parseInt(requestArray[1]) - 1;
        const transferTo = parseInt(requestArray[2]) - 1;

        const sum = parseInt(requestArray[3]);

        /*
        Validation check
          - invalid account number in the requests;
          - deposit / withdrawal of a larger amount of money than is currently available.
        */
        if (
          accounts[transferFrom] == null ||
          typeof accounts[transferFrom] === 'undefined' ||
          accounts[transferTo] == null ||
          typeof accounts[transferTo] === 'undefined' ||
          accounts[transferFrom] < sum
        )
          return [-(i + 1)];

        accounts[transferFrom] -= sum;
        accounts[transferTo] += sum;

        break;
      }
      case 'deposit': {
        const accountIndex = parseInt(requestArray[1]) - 1;
        const sum = parseInt(requestArray[2]);

        if (
          accounts[accountIndex] == null ||
          typeof accounts[accountIndex] === 'undefined'
        )
          return [-(i + 1)];
        accounts[accountIndex] += sum;
        break;
      }
    }
  }

  return accounts;
}

console.log(
  bankRequests(
    [261, 56616, 60279, 53365, 18657, 82840, 44790, 83941, 64953, 13422],
    [
      'transfer 1 3 68',
      'transfer 6 9 81881',
      'withdraw 90 80372',
      'transfer 4 5 2423',
      'withdraw 4 73899',
      'deposit 5 73905',
      'transfer 7 3 93623',
    ]
  )
);
