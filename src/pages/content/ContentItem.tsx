import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기

import Heart from '../../components/Heart';

dayjs.extend(relativeTime); // 상대적인 시간 처리(00분 전, 어제)
dayjs.locale('ko'); // 한국어 설정

interface Props {
  data: Content;
}

function ContentItem(props: Props) {
  // 페이지 이동
  const navigate = useNavigate();

  // 경과 시간
  const betweenDayTime = dayjs(props.data.createdAt).fromNow();

  return (
    <Wrap
      onClick={() => {
        navigate(`/content/${props.data.id}`);
      }}
    >
      <Title>
        <div style={{ fontSize: 30, fontWeight: '600', padding: '20px 0px' }}>
          {props.data.title} {props.data.id}
        </div>
      </Title>
      <div style={{ height: 300, padding: 20, borderBottom: '1px solid #f2f2f2' }}>{props.data.content}</div>
      <InfoWrap>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Heart id={props.data.id} />
          <div style={{ color: 'black', fontWeight: '500', fontSize: 18, marginTop: 10 }}>좋아요 {props.data.likes}개</div>
          <div>{betweenDayTime}</div>
        </div>
      </InfoWrap>
    </Wrap>
  );
}

export default ContentItem;

const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: white;
`;

const InfoWrap = styled.div`
  width: 100%;
  color: #737373;
  font-weight: 500;
  background-color: white;
`;
