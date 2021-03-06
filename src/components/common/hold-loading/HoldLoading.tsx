import './hold-loading.scss';
import { ClipLoader } from 'react-spinners';
import { ThunkResponses } from 'types';

type Props = {
  isLoading: ThunkResponses | ThunkResponses[];
};

const HoldLoading = ({ isLoading }: Props) =>
  (Array.isArray(isLoading) && isLoading.some((el) => el === 'pending')) ||
  isLoading === 'pending' ? (
    <div className="hold-loading">
      <ClipLoader loading color="white" size={35} />
    </div>
  ) : null;

export default HoldLoading;
