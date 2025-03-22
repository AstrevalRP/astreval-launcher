exports.isAdmin = function(selectedAccount) {
  console.log('selectedAccount.uuid', selectedAccount.uuid)
  const whitelist = [
    'e3515af6c0434f4f84b7a20b37fd32e3', // Cle_61
    'a64c0b24ebc84c0b9e07b9d2edc91d15', // Lexioltyy
    'f1a9d1be705b46188698faff09106188', // Pilepoile
  ];

  return whitelist.includes(selectedAccount.uuid);
};
