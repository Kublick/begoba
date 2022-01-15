import React from 'react';
import { navigate } from 'gatsby';

export default class IndexPage extends React.Component {
	state = {
		submit: false,
		error: '',
		fullname: '',
		email: '',
	};

	_handleChange = (e) => {
		this.setState({
			[`${e.target.name}`]: e.target.value,
		});
	};

	_handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		if (this.state.fullname === '' || this.state.email === '') {
			this.setState({
				error: 'Por favor llene todos los campos',
			});
			return;
		}

		this.setState({
			error: '',
		});

		const data = new FormData(e.target);

		console.log(data);

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
					<div className="flex flex-col items-center gap-2 px-8 py-4 shadow-md min-w-3/4 rounded-xl justify-content center bg-secondary">
						<p className="font-semibold text-white font-3xl">
							Registrate <span className="font-bold">GRATIS</span>
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
								type="hidden"
								name="or"
								value="4ee6b45a84624ee02d43217b0311cd5a"
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

							<input type="submit" className="btn-main" value="Registrarme" />
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
