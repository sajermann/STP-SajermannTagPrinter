import { useState } from 'react';
import { User, Users, UsersThree, UsersFour } from 'phosphor-react';
import UserType from '../../Types/UserType';
import styles from './styles.module.css';

type Props = {
	infos: UserType | null;
};

export default function Tabs({ infos }: Props) {
	const [tabOpened, setTabOpened] = useState(1);

	if (!infos) {
		return null;
	}
	return (
		<>
			<div className="border-b border-gray-200 dark:border-gray-700">
				<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
					<li className="mr-2 bg-gray-800 rounded-sm">
						<button
							type="button"
							onClick={() => setTabOpened(1)}
							className={
								tabOpened === 1 ? styles.activeButton : styles.normalButton
							}
						>
							<svg
								className={
									tabOpened === 1 ? styles.activeIcon : styles.normalIcon
								}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
									clipRule="evenodd"
								/>
							</svg>
							Perfil
						</button>
					</li>
					<li className="mr-2 bg-gray-800 rounded-sm">
						<button
							type="button"
							onClick={() => setTabOpened(2)}
							className={
								tabOpened === 2 ? styles.activeButton : styles.normalButton
							}
							aria-current="page"
						>
							<User
								className={
									tabOpened === 2 ? styles.activeIcon : styles.normalIcon
								}
							/>
							Solo
						</button>
					</li>
					<li className="mr-2 bg-gray-800 rounded-sm">
						<button
							type="button"
							onClick={() => setTabOpened(3)}
							className={
								tabOpened === 3 ? styles.activeButton : styles.normalButton
							}
						>
							<Users
								className={
									tabOpened === 2 ? styles.activeIcon : styles.normalIcon
								}
							/>
							Duo
						</button>
					</li>
					<li className="mr-2 bg-gray-800 rounded-sm">
						<button
							type="button"
							onClick={() => setTabOpened(4)}
							className={
								tabOpened === 4 ? styles.activeButton : styles.normalButton
							}
						>
							<UsersThree
								className={
									tabOpened === 2 ? styles.activeIcon : styles.normalIcon
								}
							/>
							Trio
						</button>
					</li>
					<li className="mr-2 bg-gray-800 rounded-sm">
						<button
							type="button"
							onClick={() => setTabOpened(5)}
							className={
								tabOpened === 5 ? styles.activeButton : styles.normalButton
							}
						>
							<UsersFour
								className={
									tabOpened === 2 ? styles.activeIcon : styles.normalIcon
								}
							/>
							Squad
						</button>
					</li>
				</ul>
			</div>
			<div>
				{tabOpened === 1 && (
					<div className={styles.content}>
						<div className={styles.row}>
							<span className={styles.label}>Nome:</span>
							<span className={styles.detail}>{infos.name}</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Nível:</span>
							<span className={styles.detail}>{infos.account.level}</span>
						</div>
					</div>
				)}
				{tabOpened === 2 && (
					<div className={styles.content}>
						<div className={styles.row}>
							<span className={styles.label}>KD:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.kd}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Kills:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.kills}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Partidas:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.matchesplayed}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Top 1:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop1}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 3:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop3}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 5:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop5}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 6:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop6}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 10:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop10}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 12:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop12}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 25:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.placetop25}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Pontuação:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.score}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>% Vitória:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.winrate}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Minutos Jogados:</span>
							<span className={styles.detail}>
								{infos.global_stats.solo.minutesplayed}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Horas Jogadas:</span>
							<span className={styles.detail}>
								{(infos.global_stats.solo.minutesplayed / 60).toFixed(2)}
							</span>
						</div>
					</div>
				)}
				{tabOpened === 3 && (
					<div className={styles.content}>
						<div className={styles.row}>
							<span className={styles.label}>KD:</span>
							<span className={styles.detail}>{infos.global_stats.duo.kd}</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Kills:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.kills}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Partidas:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.matchesplayed}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Top 1:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop1}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 3:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop3}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 5:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop5}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 6:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop6}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 10:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop10}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 12:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop12}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 25:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.placetop25}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Pontuação:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.score}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>% Vitória:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.winrate}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Minutos Jogados:</span>
							<span className={styles.detail}>
								{infos.global_stats.duo.minutesplayed}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Horas Jogadas:</span>
							<span className={styles.detail}>
								{(infos.global_stats.duo.minutesplayed / 60).toFixed(2)}
							</span>
						</div>
					</div>
				)}
				{tabOpened === 4 && (
					<div className={styles.content}>
						<div className={styles.row}>
							<span className={styles.label}>KD:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.kd}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Kills:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.kills}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Partidas:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.matchesplayed}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Top 1:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop1}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 3:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop3}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 5:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop5}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 6:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop6}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 10:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop10}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 12:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop12}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 25:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.placetop25}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Pontuação:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.score}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>% Vitória:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.winrate}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Minutos Jogados:</span>
							<span className={styles.detail}>
								{infos.global_stats.trio.minutesplayed}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Horas Jogadas:</span>
							<span className={styles.detail}>
								{(infos.global_stats.trio.minutesplayed / 60).toFixed(2)}
							</span>
						</div>
					</div>
				)}
				{tabOpened === 5 && (
					<div className={styles.content}>
						<div className={styles.row}>
							<span className={styles.label}>KD:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.kd}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Kills:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.kills}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Partidas:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.matchesplayed}
							</span>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>Top 1:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop1}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 3:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop3}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 5:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop5}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 6:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop6}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 10:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop10}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 12:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop12}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Top 25:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.placetop25}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>Pontuação:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.score}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}>% Vitória:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.winrate}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Minutos Jogados:</span>
							<span className={styles.detail}>
								{infos.global_stats.squad.minutesplayed}
							</span>
						</div>

						<div className={styles.row}>
							<span className={styles.label}> Horas Jogadas:</span>
							<span className={styles.detail}>
								{(infos.global_stats.squad.minutesplayed / 60).toFixed(2)}
							</span>
						</div>
					</div>
				)}
			</div>

			<div className="grid grid-cols-12 md:grid-cols-6">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 5, 5, 5, 5, 5].map(item => (
					<div className="">Bruno</div>
				))}
			</div>
		</>
	);
}
