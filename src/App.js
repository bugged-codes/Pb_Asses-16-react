import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Store from './app/Store';
import Home from './components/Home';
import StuTable from './components/StuTable';
import StuHeader from './components/StuHeader';
import AddNewStu from './components/AddNewStu';
import EditStu from './components/EditStu';
import './App.css';
import Navbar from './components/navigation/Navbar';

function App() {
	return (
		<>
			<Provider store={Store}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/Students"
						element={
							<>
								<StuHeader />
								<StuTable />
							</>
						}
					/>
					<Route path="/AddNewStudent" element={<AddNewStu />} />
					<Route path="/EditStudent" element={<EditStu />} />
				</Routes>
			</Provider>
		</>
	);
}

export default App;
