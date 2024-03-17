import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';

import { like } from '../api/content';
import grayHeart from '../assets/grayHeart.png';

interface Props {
  id: number;
}

function Heart(props: Props) {
  const queryClient = useQueryClient();

  const likeMutation = useMutation(like, {
    onSuccess: () => {
      // 쿼리 무효화 -> 데이터 동기화
      queryClient.invalidateQueries(['infiniteContents']);
      queryClient.invalidateQueries(['content']);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <Wrap
      src={grayHeart}
      onClick={(e) => {
        e.stopPropagation();
        console.log('click like');
        likeMutation.mutate(props.id);
      }}
    />
  );
}

export default Heart;

const Wrap = styled.img`
  width: 20px;
  transition: transform 300ms ease;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;
