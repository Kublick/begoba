import React from 'react';
import { navigate } from 'gatsby';

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
		fetch('https://psicologaberenicebastidas.activehosted.com/proc.php', {
			method: 'POST',
			body: data,
			mode: 'no-cors',
		})
			.then((response) => {
				this.setState({ submit: true });
				console.log(response);

				setTimeout(() => {
					this.setState({ submit: false });
				}, 2000);

				if (this.state.submit === true) {
					navigate('/gracias');
				}
			})
			.catch((err) => {
				console.log('err', err);
				alert(err);
			});
	};

	render() {
		return (
			<>
				<div className="container flex justify-center ">
					<div className="flex flex-col items-center gap-2 px-8 py-4 bg-gray-100 shadow-md rounded-xl justify-content center">
						<p className="font-semibold text-center text-primary font-3xl">
							Registrate
						</p>

						<form onSubmit={this._handleSubmit} className="flex flex-col gap-4">
							<input type="hidden" name="u" value="31" />
							<input type="hidden" name="f" value="31" />
							<input type="hidden" name="s" />
							<input type="hidden" name="c" value="0" />
							<input type="hidden" name="m" value="0" />
							<input type="hidden" name="act" value="sub" />
							<input type="hidden" name="v" value="2" />

							<input
								type="text"
								onChange={this._handleChange}
								className="w-auto px-4 py-1 rounded-md shadow-sm font-sm"
								name="fullname"
								placeholder="Escriba su nombre"
							/>

							<input
								type="email"
								onChange={this._handleChange}
								className="w-auto px-4 py-1 rounded-md shadow-sm font-sm"
								name="email"
								placeholder="Correo Electronico"
							/>

							<input
								type="submit"
								className="btn-main-mango"
								value="Apúntame a la lista de espera "
							/>
						</form>
					</div>
				</div>
			</>
		);
	}
}
