import './App.css'
import Login from './components/login/login'

import Error from './components/UI/Error'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import MainPage from './components/login/MainPage'
import Add from './components/todo/Add'
import Loading from './components/UI/Loading'
import { useSelector } from 'react-redux'
function App() {
	const loading = useSelector((state) => state.ui.isLoading)
	return (
		<div className='App'>
			{loading && <Loading />}

			<Routes>
				<Route
					path='/'
					element={<Navigate replace to={'/mainPage'} />}
				/>

				<Route path='/mainPage' element={<MainPage />} />

				<Route path='/login' replace element={<Login />} />

				<Route path='/trello' element={<Add />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	)
}

export default App
