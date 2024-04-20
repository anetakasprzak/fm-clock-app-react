import Background from "./components/Background/Background";
import Button from "./components/ButtonComponent/ButtonComponent";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";

function App() {
  return (
    <div className="wrapper">
      <Background>
        <QuotesComponent />
        <Button />
      </Background>
    </div>
  );
}

export default App;
