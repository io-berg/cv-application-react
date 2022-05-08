import "../styles/styles.css";
import React from "react";
import { PersonalInfoForm } from "./PersonalInfo/PersonalInfoForm";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { Experience } from "./Experience/Experience";
import { Education } from "./Education/Education";
import uniqid from "uniqid";

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfoHidden: false,
      personalInfo: {
        firstName: "",
        lastName: "",
        adress: "",
        phonenr: "",
        email: "",
      },
      experience: [],
      education: [],
    };
  }

  handlePersonalInfo = (e) => {
    e.preventDefault();

    this.setState({
      personalInfo: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        adress: e.target.adress.value,
        phonenr: e.target.phonenr.value,
        email: e.target.email.value,
      },
      personalInfoHidden: true,
    });
  };

  editPersonalInfo = () => {
    this.setState({
      personalInfoHidden: false,
    });
  };

  saveExperienceHandler = (e) => {
    e.preventDefault();

    const newExperience = {
      company: e.target.company.value,
      city: e.target.city.value,
      dateStart: e.target.dateStart.value,
      dateEnd: e.target.dateEnd.value,
      role: e.target.role.value,
      details: e.target.details.value,
      id: uniqid(),
    };

    this.setState({
      experience: this.state.experience.concat(newExperience),
    });
  };

  deleteExperienceHandler = (e) => {
    this.setState({
      experience: this.state.experience.filter((item) => {
        return item.id !== e.target.value;
      }),
    });
  };

  saveEducationHandler = (e) => {
    e.preventDefault();

    const newEducation = {
      school: e.target.school.value,
      city: e.target.city.value,
      fromDate: e.target.fromDate.value,
      toDate: e.target.toDate.value,
      degree: e.target.degree.value,
      details: e.target.details.value,
      id: uniqid(),
    };

    this.setState({
      education: this.state.education.concat(newEducation),
    });
  };

  deleteEducationHandler = (e) => {
    this.setState({
      education: this.state.education.filter((item) => {
        return item.id !== e.target.value;
      }),
    });
  };

  printBtnHandler = () => {
    console.log(this.state);
  };

  render() {
    return (
      <main className="flex center">
        <div className="flex column container">
          <h4>Personal Information</h4>
          <PersonalInfoForm
            hidden={this.state.personalInfoHidden}
            saveHandler={this.handlePersonalInfo}
          />
          <PersonalInfo
            hidden={this.state.personalInfoHidden}
            info={this.state.personalInfo}
            editHandler={this.editPersonalInfo}
          />
          <Experience
            deleteHandler={this.deleteExperienceHandler}
            savedExperiences={this.state.experience}
            saveHandler={this.saveExperienceHandler}
          />
          <Education
            deleteHandler={this.deleteEducationHandler}
            savedEducations={this.state.education}
            saveHandler={this.saveEducationHandler}
          />
          <button onClick={this.printBtnHandler}>Print</button>
        </div>
      </main>
    );
  }
}
