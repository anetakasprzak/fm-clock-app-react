import Background from "./components/Background/Background";
import Button from "./components/ButtonComponent/ButtonComponent";
import CurrentTimeComponent from "./components/CurrentTimeComponent/CurrentTimeComponent";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";

function App() {
  return (
    <div className="wrapper">
      <Background>
        <QuotesComponent />
        <CurrentTimeComponent />
        <Button />
      </Background>
    </div>
  );
}

export default App;
