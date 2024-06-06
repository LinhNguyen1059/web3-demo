import { chainIds } from "@/data/chainIds";
import { create } from "zustand";

interface AccountState {
  isOpenConnectModal: boolean;
  selectedChain: number;
  setProps: (props: Partial<AccountState>) => void;
  resetAllProps: () => void;
}

const initialState: Omit<AccountState, "setProps" | "resetAllProps"> = {
  isOpenConnectModal: false,
  selectedChain: chainIds.sepolia,
};

const useAccountStore = create<AccountState>((set) => ({
  ...initialState,
  setProps: (props) => set((state) => ({ ...state, ...props })),
  resetAllProps: () => set(() => ({ ...initialState })),
}));

export default useAccountStore;
