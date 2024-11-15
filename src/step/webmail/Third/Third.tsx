import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const Third = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      세번째
      <button onClick={() => navigate('/auth/profile')}>다음</button>
    </>
  );
};
export default Third;
