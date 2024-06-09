import { create } from "zustand";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "@/connectors/constant";

interface AccountState {
  isOpenConnectModal: boolean;
  selectedChain: E_NETWORK_ID;
  connectorName: E_CONNECTOR_NAMES;
  setProps: (props: Partial<AccountState>) => void;
  resetAllProps: () => void;
}

const initialState: Omit<AccountState, "setProps" | "resetAllProps"> = {
  isOpenConnectModal: false,
  connectorName: E_CONNECTOR_NAMES.METAMASK,
  selectedChain: E_NETWORK_ID.ETH_TESTNET,
};

const useAccountStore = create<AccountState>((set) => ({
  ...initialState,
  setProps: (props) => set((state) => ({ ...state, ...props })),
  resetAllProps: () => set(() => ({ ...initialState })),
}));

export default useAccountStore;
