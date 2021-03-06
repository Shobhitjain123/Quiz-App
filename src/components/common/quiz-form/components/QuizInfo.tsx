import { TextFieldCategory } from 'components/common/textfields';
import TextFieldCommon from './TextFieldCommon';
import ImageInput from './ImageInput';

const QuizInfo = () => (
  <section className="Quiz-form__section Quiz-form__section-two">
    <h6 className="Quiz-form__title">Quiz Info</h6>
    <div className="Quiz-form__container">
      <ImageInput />
    </div>
    <TextFieldCommon
      minLength={4}
      type="name"
      label="Quiz name"
      required
      maxLength={35}
    />
    <TextFieldCommon
      type="description"
      label="Description"
      maxLength={120}
      multiline
    />
    <TextFieldCategory create />
  </section>
);
export default QuizInfo;
