// import UserCard from '../../components/userCard/userCard';
import { IErrors, IForms } from '../../interfaces/ICardInterfaces';
import React from 'react';
import Forms from '../../components/formsBlank/forms';
import UserCards from '../../components/userCards/userCards';

interface IDataFormsValid {
  dataValid: Array<IForms>;
  clear: boolean;
  errors: IErrors;
  // showMessage: boolean;
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
      //   showMessage: false,
    };
  }

  sendValid = (objData: IForms) => {
    const { errors, isValid } = this.valedation(objData);

    if (isValid) {
      alert('Вы в списке');
      const copyState = this.state.dataValid;
      copyState.push(objData);
      this.setState({
        errors: errors,
      });

      setTimeout(() => {
        this.setState({
          dataValid: copyState,
          clear: true,
        });
      }, 1000);
    } else {
      this.setState({
        errors: errors,
      });
    }
  };

  valedation = (objData: IForms) => {
    let isValid = true;
    const errors: IErrors = {
      name: true,
      foto: true,
      birth: true,
      fruit: true,
      male: true,
      agreement: true,
    };

    if (objData.name.length > 3) {
      errors.name = false;
    } else {
      isValid = false;
    }
    if (objData.foto !== '') {
      errors.foto = false;
    } else {
      isValid = false;
    }
    if (objData.fruit !== '') {
      errors.fruit = false;
    } else {
      isValid = false;
    }
    if (objData.male !== '') {
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
