import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

import Heart from '../../components/Heart';

dayjs.extend(relativeTime); // 상대적인 시간 처리(00분 전, 어제)
dayjs.locale('ko'); // 한국어 설정

interface Props extends Content {
  key: number;
}

function ContentItem(props: Props) {
  // 페이지 이동
  const navigate = useNavigate();

  // 경과 시간
  const betweenDayTime: string = dayjs(props.createdAt).fromNow();

  return (
    <Wrap
      onClick={(event) => {
        navigate(`/content/${props.id}`);
        event.stopPropagation(); // 버블링을 방지
      }}
    >
      <div style={{ fontWeight: '600' }}>
        {props.title} {props.id}
      </div>
      <InfoWrap>
        <div>{betweenDayTime}</div>
        <div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center', width: 30, justifyContent: 'space-between' }}>
            <Heart id={props.id} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{props.likes}</div>
          </div>
        </div>
      </InfoWrap>
    </Wrap>
  );
}

export default ContentItem;

const Wrap = styled.div`
  width: 80%;
  padding: 20px 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #737373;
  font-weight: 500;
`;
