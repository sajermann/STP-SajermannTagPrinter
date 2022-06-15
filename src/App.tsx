import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import Home from './Pages/Home';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				role="alert"
				theme="dark"
			/>
		</div>
	);
}

export default App;
