import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Logo src={logo} style={{ width: 66, height: 66 }} onClick={() => navigate('/')} />
      <div style={{ fontSize: 25, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          AROOO
        </div>
        <div>
          <a href='https://web-resume-phi.vercel.app/' target='_blank' style={{ color: 'black' }}>
            양진혁
          </a>
        </div>
      </div>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  cursor: pointer;
  /* &:hover {
    scale: 1.2;
  } */
`;

// const SearchInput = styled.div`
//   width: 100%;
// `;
