import React from "react";
import { navigate } from "gatsby";

export default class IndexPage extends React.Component {
	state = {
		submit: false,
	};

	_handleChange = (e) => {
		this.setState({
			[`${e.target.name}`]: e.target.value,
		});
	};

	_handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);

		fetch("https://psicologaberenicebastidas.activehosted.com/proc.php", {
			method: "POST",
			body: data,
			mode: "no-cors",
		})
			.then((response) => {
				this.setState({ submit: true });
				console.log(response);

				setTimeout(() => {
					this.setState({ submit: false });
				}, 2000);

				if (this.state.submit === true) {
					navigate("/enviadoPDF");
				}
			})
			.catch((err) => {
				console.log("err", err);
				alert(err);
			});
	};

	render() {
		return (
			<div>
				<div>
					<form onSubmit={this._handleSubmit} className="mx-4">
						<input type="hidden" name="u" value="27" />
						<input type="hidden" name="f" value="27" />
						<input type="hidden" name="s" />
						<input type="hidden" name="c" value="0" />
						<input type="hidden" name="m" value="0" />
						<input type="hidden" name="act" value="sub" />
						<input type="hidden" name="v" value="2" />

						<label htmlFor="nombre" className="block font-bold">
							Nombre
						</label>
						<input
							type="text"
							onChange={this._handleChange}
							className="block mb-4 lg:w-64"
							name="fullname"
						/>
						<label htmlFor="email" className="block font-bold">
							Email
						</label>
						<input
							type="email"
							onChange={this._handleChange}
							className="block mb-4 lg:w-64"
							name="email"
						/>

						<input
							type="submit"
							className="px-4 py-2 text-white bg-black rounded-lg outline-none hover:bg-gray-500"
							value="Enviar"
						/>
					</form>
					<button onClick={() => navigate("/enviadoPDF")}> Navigate </button>
				</div>
			</div>
		);
	}
}
