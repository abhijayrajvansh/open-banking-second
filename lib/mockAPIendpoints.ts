import { EndpointResponse } from '@/types/endpointResponse.types'

export const defaultStatusMsg = `{ 
  "status": 403,
  "message": "missing subscription key, login to generate key"
}`

export const mockEndpoints: Record<string, EndpointResponse> = {
  "/api/corporate-collections": {
    method: "GET",
    response: {
      collections: [
        { "status": 200, "message": "success" },
        {
          "collectionId": "col-1234",
          "payerName": "ABC Corp",
          "AccountName": "John Doe",
          "StartDate": "26052022",
          "EndDate": "05062022",
          "Currency": "KES",
          "AvailableBalance": "519735.83",
          "OpeningBalance": "0.00",
          "ClosingBalance": "0.00",
          "TotalDebit": "201140.00",
          "TotalCredit": "2000000.00",
          "TotalTxn": 8,
          "amount": 1500.75,
          "currency": "USD",
          "status": "Completed",
          "date": "2024-11-05T08:00:00Z"
        }
      ],
    },
  },
  
  "/api/corporate-payments": {
    method: "GET",
    response: {
      accounts: [
        { "status": 200, "message": "success" },
        {
          "id": "bgfh-jjds-23kj-74de",
          "AccountNo": "1234567890",
          "AccountName": "John Doe",
          "AccountCcy": "GBP",
          "AvailableBalance": 592676.32
        }
      ],
    },
  },
  
  "/api/transactions": {
    method: "GET",
    response: {
      transactions: [
        { "status": 200, "message": "success" },
        {
          "transactionId": "txn-7890",
          "accountNo": "1234567890",
          "type": "Debit",
          "amount": 200.50,
          "currency": "GBP",
          "description": "Purchase at Store",
          "date": "2024-11-05T10:30:00Z"
        }
      ],
    },
  },
  
  "/api/account-balance": {
    method: "GET",
    response: {
      balance: [
        { "status": 200, "message": "success" },
        {
          "accountNo": "1234567890",
          "balance": 592676.32,
          "currency": "GBP",
          "lastUpdated": "2024-11-05T12:00:00Z"
        }
      ],
    },
  },
  
  "/api/payment-status": {
    method: "GET",
    response: {
      paymentStatus: [
        { "status": 200, "message": "success" },
        {
          "paymentId": "pay-4567",
          "status": "Completed",
          "amount": 1000.00,
          "currency": "USD",
          "beneficiary": "XYZ Corp",
          "date": "2024-11-05T14:00:00Z"
        }
      ],
    },
  },
};
