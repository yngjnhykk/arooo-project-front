import styled from 'styled-components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Content from './pages/content/Content';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/content/:id' element={<Content />} />
      </Routes>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 768px;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
    'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

  @media only screen and (max-width: 768px) {
    /* width: 100%; */
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
