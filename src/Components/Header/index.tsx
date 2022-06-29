import DarkModeOption from '../DarkModeOption';
import DrawlerMenu from '../DrawlerMenu';
import DrawlerPerfil from '../DrawlerPerfil';

export default function Header() {
	return (
		<nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<DrawlerMenu />

				<a href="/" className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap text-white">
						STP-SajermannTagPrinter
					</span>
				</a>
				<DarkModeOption />
				<div className="flex items-center md:order-2">
					<DrawlerPerfil />
				</div>
			</div>
		</nav>
	);
}
