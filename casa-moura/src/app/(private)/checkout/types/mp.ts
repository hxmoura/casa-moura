type MPField =
  | "cardNumber"
  | "securityCode"
  | "expirationMonth"
  | "expirationYear";

export interface MPChangeEvent {
  field: MPField;
  group: string;
}

export interface MPBinChangeEvent {
  field: MPField;
  bin: string | null;
  group: string;
}

export interface MPValidityChangeEvent {
  field: MPField;
  errorMessages: {
    field: MPField;
    message: string;
    cause: string;
    details: object;
  }[];
  group: string;
}
