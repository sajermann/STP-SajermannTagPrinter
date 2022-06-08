import Drawler from '../Drawler';

export default function Header() {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Drawler side="left">
					<div>Aqui vai ficar o Menu</div>
				</Drawler>

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
					<Drawler side="right">
						<div>Aqui vai ficar o perfil</div>
					</Drawler>
					<div
						className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
						id="dropdown"
					>
						<div className="py-3 px-4">
							<span className="block text-sm text-gray-900 dark:text-white">
								Bonnie Green
							</span>
							<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-1" aria-labelledby="dropdown">
							<li>
								<a
									href="#sa"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#sa"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Settings
								</a>
							</li>
							<li>
								<a
									href="#s"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Earnings
								</a>
							</li>
							<li>
								<a
									href="#s"
									className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Sign out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
