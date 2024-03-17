import styled from 'styled-components';

import Header from '../../components/Header';
import ContentList from '../main/ContentList';
import Title from '../../components/Title';

function Main() {
  return (
    <Wrap>
      <Title keywords='Arooo' description='Arooo 목록입니다.' title='Arooo | 목록' />
      <Header />
      <ContentList />
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  width: 100%;
  padding: 30px;
`;
