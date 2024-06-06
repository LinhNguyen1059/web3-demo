import ConnectAccount from "../accounts/connectAccount";

export default function Header() {
  return (
    <div className="container px-4 py-2 mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Web3</div>
        <ConnectAccount />
      </div>
    </div>
  );
}
