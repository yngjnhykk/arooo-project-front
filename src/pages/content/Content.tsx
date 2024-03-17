import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Header from '../../components/Header';
import ContentItem from './ContentItem';
import { getContent } from '../../api/content';
import Title from '../../components/Title';

function Content() {
  const { id } = useParams<{ id: string }>();

  // 타입 좁히기
  const contentId = id ? parseInt(id) : 0;

  const { status, data }: { status: string; data?: Content } = useQuery<Content>(['content', contentId], () => getContent(contentId), {});

  if (status === 'loading' || !data) {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error, please check console</div>;
  }

  return (
    <Wrap>
      <Title keywords='Arooo' description='Arooo 상세페이지입니다.' title='Arooo | 상세페이지' />

      <Header />
      <ContentItem data={data} />
    </Wrap>
  );
}

export default Content;

const Wrap = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
