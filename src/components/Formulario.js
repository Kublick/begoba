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

    console.log(data);

    fetch("https://psicologaberenicebastidas.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        this.setState({ submit: true });
        response = "ok";
        console.log(response);

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
          <div className="flex flex-col items-center px-8 py-4 shadow-md min-w-3/4 justify-content center rounded-xl bg-secondary">
            <p className="mb-2 font-semibold text-white font-3xl">
              Regístrate al entrenamiento{" "}
              <span className="font-bold">Gratuito</span>
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
                value="6d188b09309ebb5b3d878ff976695951"
              />

              <input
                type="text"
                onChange={this._handleChange}
                className="w-auto px-4 py-1 rounded-md shadow-sm font-sm"
                name="fullname"
                placeholder="nombre"
              />

              <input
                type="email"
                onChange={this._handleChange}
                className="w-auto px-4 py-1 rounded-md shadow-sm font-sm"
                name="email"
                placeholder="email"
              />

              <input type="submit" className="btn-main" value="Regístrarme" />
            </form>
          </div>
        </div>
        <div className="my-4 text-xl font-bold text-red-600">
          {this.state.error}
        </div>
      </>
    );
  }
}
