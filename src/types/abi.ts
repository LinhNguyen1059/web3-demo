export type IAbis = IAbi[];

export interface IAbi {
  inputs: IAbiInput[];
  stateMutability?: string;
  type: string;
  anonymous?: boolean;
  name?: string;
  outputs?: IAbiOutput[];
}

export interface IAbiInput {
  indexed?: boolean;
  internalType: string;
  name: string;
  type: string;
}

export interface IAbiOutput {
  internalType: string;
  name: string;
  type: string;
}
