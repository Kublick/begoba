import React from "react";
import { navigate } from "gatsby";

export default class IndexPage extends React.Component {
  state = {
    submit: false,
    error: "",
    fullname: "",
    email: "",
  };

  _handleChange = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.fullname === "" || this.state.email === "") {
      this.setState({
        error: "Por favor llene todos los campos",
      });
      return;
    }

    this.setState({
      error: "",
    });

    const data = new FormData(e.target);
    fetch("https://psicologaberenicebastidas.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        this.setState({ submit: true });
        response.json();

        setTimeout(() => {
          this.setState({ submit: false });
        }, 2000);

        if (this.state.submit === true) {
          navigate("/gracias");
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert(err);
      });
  };

  render() {
    return (
      <>
        <div className="container flex justify-center ">
          <div className="justify-content center flex flex-col items-center gap-2 rounded-xl bg-gray-100 px-8 py-4 shadow-md">
            <p className="font-3xl text-center font-semibold text-primary">
              Registrate
            </p>

            <form onSubmit={this._handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="u" value="35" />
              <input type="hidden" name="f" value="35" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="6a5cecc1c09be1b91d59478251ae64c5"
              />

              <input
                type="text"
                onChange={this._handleChange}
                className="font-sm w-auto rounded-md px-4 py-1 shadow-sm"
                name="fullname"
                placeholder="Escriba su nombre"
              />

              <input
                type="email"
                onChange={this._handleChange}
                className="font-sm w-auto rounded-md px-4 py-1 shadow-sm"
                name="email"
                placeholder="Correo Electronico"
              />

              <input
                type="submit"
                className="btn-main-mango"
                value="Apúntame a la lista de espera "
              />
            </form>

            {this.state.error ? (
              <div className="my-4 text-xl font-bold text-red-600">
                {this.state.error}
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
