import "./App.css";
import MainBody from "./sections/body/MainBody";
import Footer from "./sections/footer/Footer";
import NavBar from "./sections/navbar/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar name="Portfolio" />
			<MainBody />
			<Footer />
		</div>
	);
}

export default App;
