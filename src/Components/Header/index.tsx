import DrawlerMenu from '../DrawlerMenu';
import DrawlerPerfil from '../DrawlerPerfil';

export default function Header() {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<DrawlerMenu />

				<a href="/" className="flex items-center">
					<img
						src="https://rodasdadiversao.files.wordpress.com/2018/07/fortnite-logo-ps4.png?w=512"
						className="mr-3 h-6 sm:h-9"
						alt="Fortnite Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						STP-SajermannTagPrinter
					</span>
				</a>
				<div className="flex items-center md:order-2">
					<DrawlerPerfil />
				</div>
			</div>
		</nav>
	);
}
