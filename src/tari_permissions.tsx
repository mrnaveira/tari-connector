const enum TariPermissions {
  RpcDiscover = 1 << 0,
  KeysCreate = 1 << 1,
  KeysList = 1 << 2,
  KeysSetActive = 1 << 3,
  KeysRead = KeysList,
  Keys = KeysRead | KeysCreate | KeysSetActive,
  TransactionsSubmit = 1 << 4,
  TransactionsGet = 1 << 5,
  TransactionsGetResult = 1 << 6,
  TransactionsWaitResult = 1 << 7,
  TransactionsRead = TransactionsGet | TransactionsGetResult | TransactionsWaitResult,
  Transactions = TransactionsRead | TransactionsSubmit,
  AccountsRevealFunds = 1 << 8,
  AccountsClaimBurn = 1 << 9,
  AccountsCreate = 1 << 10,
  AccountsList = 1 << 11,
  AccountsGetBalances = 1 << 12,
  AccountsInvoke = 1 << 13,
  AccountsGetByName = 1 << 14,
  AccountsConfidentialTransfer = 1 << 15,
  AccountsCreateFreeTestCoins = 1 << 16,
  AccountsRead = AccountsList | AccountsGetBalances | AccountsGetByName,
  Accounts = AccountsRead | AccountsRevealFunds | AccountsClaimBurn | AccountsCreate | AccountsInvoke | AccountsConfidentialTransfer | AccountsCreateFreeTestCoins,
  ConfidentialCreateTransferProof = 1 << 17,
  ConfidentialFinalize = 1 << 18,
  ConfidentialCancel = 1 << 19,
  ConfidentialCreateOutputProof = 1 << 20,
  ConfidentialRead = 0,
  Confidential = ConfidentialRead | ConfidentialCreateTransferProof | ConfidentialFinalize | ConfidentialCancel | ConfidentialCreateOutputProof,
  FIX_THIS_TO_PREVER_EQUAL_VALUES = 1
}
