import { IForms } from '../../interfaces/ICardInterfaces';
import { useState } from 'react';
import Forms from '../../components/formsBlank/forms';
import UserCards from '../../components/userCards/userCards';

const FormsPage = () => {
  const [allData, setAllData] = useState<IForms[]>([]);

  const submit = (data: IForms) => {
    setAllData([...allData, data]);
  };

  return (
    <>
      <Forms onSubmitPage={submit}></Forms>
      <div>
        <UserCards allCards={allData} />
      </div>
    </>
  );
};

export default FormsPage;
