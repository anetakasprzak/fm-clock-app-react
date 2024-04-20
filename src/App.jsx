import Background from "./components/Background/Background";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";

function App() {
  return (
    <div className="wrapper">
      <Background>
        <QuotesComponent />
      </Background>
    </div>
  );
}

export default App;
