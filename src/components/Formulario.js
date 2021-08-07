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
					navigate('/enviadoPDF');
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
				<div className="container flex justify-center mt-10">
					<div className="flex flex-col items-center gap-2 px-8 py-4 shadow-md min-w-3/4 rounded-xl justify-content center bg-secondary">
						<p className="font-semibold text-white font-3xl">
							Registrate <span className="font-bold">GRATIS</span>
						</p>
						<p className="font-semibold text-white font-3xl">
							Descubre como ofrecer <br /> y vender tu consulta online
						</p>

						<form onSubmit={this._handleSubmit} className="flex flex-col gap-4">
							<input type="hidden" name="u" value="29" />
							<input type="hidden" name="f" value="29" />
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
			</>
		);
	}
}
