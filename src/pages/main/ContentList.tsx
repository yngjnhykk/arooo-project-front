import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import ContentItem from './ContentItem';
import { infiniteContents } from '../../inifiniteQuery/contents';

function ContentList() {
  const [skip, setSkip] = useState(0);

  // inView 감지

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // 페이지별 데이터 요청

  const { data, status, fetchNextPage } = infiniteContents(skip, 10);

  // inView 감지 후, 다음 페이지 데이터 조회

  useEffect(() => {
    if (inView && data?.pages[0].length !== 0) {
      setSkip(skip + 1);
      fetchNextPage();
    }
  }, [inView]);

  // 2차원 -> 1차원 배열 전환
  const contents = (): Content[] | undefined => {
    if (data?.pages) {
      const copyData: Content[][] = [...data?.pages];
      if (copyData[copyData.length - 1] === undefined) {
        copyData.pop();
      }
      const result = copyData.reduce(function (acc, cur) {
        return acc.concat(cur);
      });
      return result;
    }
  };

  if (status === 'loading' || !data) {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error, please check console</div>;
  }

  return (
    <Wrap>
      {data && contents()?.map((c: any, i: number) => <ContentItem key={i} {...c} />)}
      <div ref={ref} />
    </Wrap>
  );
}

export default ContentList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
