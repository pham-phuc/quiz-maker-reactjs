import { Container } from "@mui/material";
import { Setting } from "./page/Setting";
import { FinalPage } from "./page/FinalPage";

function App() {
  return (
    <div className="App">
      <Container>
        <h1> QUIZ MAKE </h1>
        <Setting />
        <FinalPage />
      </Container>
    </div>
  );
}

export default App;
