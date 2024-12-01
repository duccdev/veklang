export enum TokenType {
  Keyword = 0,
  Identifier = 1,
  Operator = 2,
  OperatorCompound = 3,
  String = 4,
  Integer = 5,
  Float = 6,
  True = 7,
  False = 8,
  Null = 9,
  Punctuation = 10,
  Delimiter = 11,
  Whitespace = 12,
}

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  column: number;
}
