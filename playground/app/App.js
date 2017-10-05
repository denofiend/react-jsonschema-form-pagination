import React, { Component } from "react";
import applyNav from "../../src";
import Form from "react-jsonschema-form";
import CustomNav from "./CustomNav";
import conf from "./conf";

let FormWithNav = applyNav(Form, CustomNav);

export class App extends Component {
  handleChange = ({ formData }) => {
    this.setState({ formData });
  };

  handleTabChange = (nextTabs, prevTabs) => {
    console.log(`Tab changed`);
    console.log(`From ${prevTabs}`);
    console.log(`To ${nextTabs}`);
  };

  render() {
    let fullConf = Object.assign({}, conf, this.state);
    return (
      <FormWithNav
        {...fullConf}
        liveValidation={true}
        onSubmit={() => console.log("Submitting form data")}
        onChange={this.handleChange}
        onTabChange={this.handleTabChange}>
        <div className="col-md-12">
          <div className="form-group pull-right">
            <button className="btn btn-success" type="submit">
              Save
            </button>
          </div>
        </div>
      </FormWithNav>
    );
  }
}
