import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { apiSlice } from './api/apiSlice';
import { useAuth } from './firebase/auth';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import messagesReducer from './redux/slices/messagesSlice';
import { loadFromLocalStorage, saveToLocalStorage } from './redux/store';

function App() {
  const { authUser } = useAuth();
  const persistedStorage = loadFromLocalStorage(authUser?.uid);

  const store = configureStore({
    preloadedState: persistedStorage,
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      messages: messagesReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        apiSlice.middleware
      ),
  });

  store.subscribe(() => saveToLocalStorage(store.getState(), authUser?.uid));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/auth' element={<SignIn />} />
          <Route path='/chat' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
