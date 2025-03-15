import "./App.css";
import FaceCard from "./components/facecard/FaceCard";
import NavBar from "./features/navbar/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar name="Portfolio" />
			<FaceCard />
		</div>
	);
}

export default App;
