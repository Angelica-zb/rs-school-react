import { IErrors, IForms } from '../../interfaces/ICardInterfaces';
import React from 'react';
import Forms from '../../components/formsBlank/forms';
import UserCards from '../../components/userCards/userCards';

interface IDataFormsValid {
  dataValid: Array<IForms>;
  clear: boolean;
  errors: IErrors;
}

class FormsPage extends React.Component<object, IDataFormsValid> {
  constructor(prop: object) {
    super(prop);
    this.state = {
      dataValid: [],
      clear: false,
      errors: {
        name: false,
        foto: false,
        birth: false,
        fruit: false,
        male: false,
        agreement: false,
      },
    };
  }

  sendValid = (objData: IForms) => {
    const { errors, isValid } = this.validation(objData);

    if (isValid) {
      alert('Вы в списке');
      const copyDataValid = [...this.state.dataValid];
      copyDataValid.push(objData);
      this.setState({
        errors: errors,
      });

      setTimeout(() => {
        this.setState({
          dataValid: copyDataValid,
          clear: true,
        });
      }, 1000);
    } else {
      this.setState({
        errors: errors,
      });
    }
  };

  validation = (objData: IForms) => {
    let isValid = true;
    const errors: IErrors = {
      name: true,
      foto: true,
      birth: true,
      fruit: true,
      male: true,
      agreement: true,
    };

    if (objData.name.length > 2) {
      errors.name = false;
    } else {
      isValid = false;
    }
    if (objData.foto) {
      errors.foto = false;
    } else {
      isValid = false;
    }
    if (objData.fruit) {
      errors.fruit = false;
    } else {
      isValid = false;
    }
    if (objData.male) {
      errors.male = false;
    } else {
      isValid = false;
    }
    if (objData.agreement) {
      errors.agreement = false;
    } else {
      isValid = false;
    }
    if (new Date(objData.birth).getTime() < new Date().getTime()) {
      errors.birth = false;
    } else {
      isValid = false;
    }

    return {
      errors,
      isValid: isValid,
    };
  };

  render() {
    return (
      <>
        <Forms onClick={this.sendValid} clear={this.state.clear} errors={this.state.errors} />
        <div>
          <UserCards allCards={this.state.dataValid} />
        </div>
      </>
    );
  }
}

export default FormsPage;
