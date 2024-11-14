import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const Fourth = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      네번쨰
      <button onClick={() => navigate('/auth/summary')}>다음</button>
    </>
  );
};
export default Fourth;
