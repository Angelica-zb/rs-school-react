import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Forms from '../../components/formsBlank/forms';
import UserCards from '../../components/userCards/userCards';
import { IForms } from '../../interfaces/ICardInterfaces';
import { formSlice } from '../../store/reducers/formSlice';

const FormsPage = () => {
  const { dataForm } = useAppSelector((state) => state.formReducer);
  const { saveForm } = formSlice.actions;
  const dispatch = useAppDispatch();

  const submit = (data: IForms) => {
    dispatch(saveForm(data));
  };

  return (
    <>
      <Forms onSubmitPage={submit}></Forms>
      <div>
        <UserCards allCards={dataForm} />
      </div>
    </>
  );
};

export default FormsPage;
