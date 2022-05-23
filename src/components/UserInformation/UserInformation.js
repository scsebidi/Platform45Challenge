import React, { useState } from 'react';
import Card from '../../assets/img/card.svg';
import CardWhite from '../../assets/img/card--white.svg';
import Mars from '../../assets/img/mars-symbol.svg';
import MarsWhite from '../../assets/img/mars-symbol--white.svg';
import Venus from '../../assets/img/venus-symbol.svg';
import VenusWhite from '../../assets/img/venus-symbol--white.svg';



function UserInformation() {

  const [gender, setGender] = useState(null);
  const [card, setCard] = useState(null);

  const clearForm = () => {
    const inputs = document.getElementsByTagName('input');
    const totalInputs = inputs.length;
    for (let i = 0; i < totalInputs; i++) {
      inputs[i].value = "";
    }
    const unselectGender = document.getElementById(gender);
    unselectGender?.classList?.remove("selectedImgBackColor");
    if(gender=== "mars") {
      unselectGender.src = Mars;
    } else if (gender === "venus") {
      unselectGender.src = Venus;
    }

    const unselectCard = document.getElementById(card);
    unselectCard?.classList?.remove("selectedImgBackColor");
    unselectCard.src = Card
  }

  const saveForm = () => {
    alert("Data saved")
  }


  const selectCard = (e) => {
    if (e?.target?.id !== card) {
      const eleToAddClass = document.getElementById(e?.target?.id);
      const eleToRemoveClass = document.getElementById(card);
      eleToAddClass?.classList?.add("selectedImgBackColor");
      eleToRemoveClass?.classList?.remove("selectedImgBackColor");
      eleToAddClass.src = CardWhite;
      eleToRemoveClass && (eleToRemoveClass.src = Card);
      setCard(e?.target?.id)
    }
  }

  const selectGender = (e) => {
    if (e?.target?.id !== gender) {
      const eleToAddClass = document.getElementById(e?.target?.id);
      const eleToRemoveClass = document.getElementById(gender);
      eleToAddClass?.classList?.add("selectedImgBackColor");
      eleToRemoveClass?.classList?.remove("selectedImgBackColor");
      if(e?.target?.id === "mars") {
        eleToAddClass.src = MarsWhite;
      } else if (e?.target?.id === "venus") {
        eleToAddClass.src = VenusWhite;
      }

      if(gender=== "mars") {
        eleToRemoveClass.src = Mars;
      } else if (gender === "venus") {
        eleToRemoveClass.src = Venus;
      }
      setGender(e?.target?.id)
    }
  }

  return (
    <div id="form" data-testid="UserDetails">
      <table>
        <tbody>
          <tr>
            <td id="formName">Name</td>
            <td><input id="formNameInput" type="text" className="formInputFields" placeholder="" /></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td id="formGender">Gender</td>
            <td className="formOptionsCol"><img src={Mars} className="formGenderIcon" onClick={selectGender} id="mars"></img></td>
            <td className="formOptionsCol">Male</td>
            <td className="formOptionsCol"><img src={Venus} className="formGenderIcon" onClick={selectGender} id="venus"></img></td>
            <td className="formOptionsCol">Female</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td id="formDoB">Date of Birth</td>
            <td ><input type="date" className="formInputFields" /></td>
          </tr>
          <tr>
            <td id="formEmail">Email</td>
            <td><input type="email" className="formInputFields" /></td>
          </tr>
          <tr>
            <td id="formMobile">Mobile</td>
            <td><input type="tel" className="formInputFields" /></td>
          </tr>
          <tr>
            <td id="formCustomerID">Customer ID</td>
            <td><input type="text" className="formInputFields" /></td>
          </tr>
          <tr><td></td></tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td id="formMembership">Membership</td>
            <td className="formOptionsCol"><img src={Card} className="formCardIcon" onClick={selectCard} id="classic"></img></td>
            <td className="formOptionsCol">Classic</td>
            <td className="formOptionsCol"><img src={Card} className="formCardIcon" onClick={selectCard} id="silver"></img></td>
            <td className="formOptionsCol">Silver</td>
            <td className="formOptionsCol"><img src={Card} className="formCardIcon" onClick={selectCard} id="gold"></img></td>
            <td className="formOptionsCol">Gold</td>
          </tr>
        </tbody>
      </table>
      <div id="formNavButtonContainer">
        <div id="formCancel" className="formNavButtons" onClick={clearForm}>CANCEL</div>
        <div id="formSave" className="formNavButtons" onClick={saveForm}>SAVE</div>
      </div>
    </div>
    )
}

UserInformation.propTypes = {};

UserInformation.defaultProps = {};

export default UserInformation;
