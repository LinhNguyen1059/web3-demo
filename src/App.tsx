import "@/styles/global.css";
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/headers/header";
import Body from "@/components/bodies/body";

function App() {
  return (
    <main className="h-screen bg-gray-100">
      <Header />
      <Body />
      <Toaster />
    </main>
  );
}

export default App;
