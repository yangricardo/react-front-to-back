import React, { Component } from "react";
import { Consumer } from "../../providers/Context";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    addContact: false,
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name é obrigatório" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Telefone é obrigatório" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email é obrigatório" } });
      return;
    }

    // Create Contact object
    const newContact = {
      name,
      email,
      phone
    };
    // call Context API Add Contact action
    //dispatch({ type: "ADD_CONTACT", payload: newContact });
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // Clear Form Fields
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    //redirect to the home page with the new contact
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div
                className="card-header"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  this.setState({
                    addContact: !this.state.addContact
                  })
                }
              >
                <i
                  className="fas fa-address-card"
                  style={{
                    cursor: "pointer",
                    float: "left",
                    color: "#076BFF"
                  }}
                />{" "}
                Add Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Nome"
                    name="name"
                    placeholder="Insira o nome... "
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Telefone"
                    name="phone"
                    placeholder="Insira o Telefone... "
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Insira o email... "
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
