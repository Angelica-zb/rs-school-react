import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Header from './components/header/header';
import AboutUs from './pages/aboutUs/aboutUs-page';
import Main from './pages/main/main-page';
import FormsPage from './pages/forms/forms-page';
import Error from './pages/error/error-page';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
