/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useState } from 'react';
import Button from '../../Components/Button';
import Tabs from '../../Components/Tabs';
import getStatsUser from '../../Services/Stats';
import TagType from '../../Types/TagType';
import UserType from '../../Types/UserType';
import styles from './styles.module.css';

export default function Home() {
	const [tagForAdd, setTagForAdd] = useState<TagType>({
		date: '',
		product: '',
		quantity: 0,
	});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => console.log(tagForAdd), [tagForAdd]);

	async function load() {
		setIsLoading(true);
		// const result = await getStatsUser(userName);
		// setUserSelected(result);
		// setIsLoading(false);
	}

	function handleSubmit(event: FormEvent) {
		console.log('Submit');
		event.preventDefault();
		load();
	}

	return (
		<>
			<form className="w-full max-w-sm flex m-2 gap-1" onSubmit={handleSubmit}>
				<label className=" text-white text-sm font-bold" htmlFor="product">
					Produto
					<input
						id="product"
						className={styles.input}
						type="text"
						data-testid="inputNewItem"
						placeholder="Produto"
						value={tagForAdd.product}
						onChange={e =>
							setTagForAdd({ ...tagForAdd, product: e.target.value })
						}
					/>
				</label>
				<label className=" text-white text-sm font-bold" htmlFor="product">
					Quantidade
					<input
						id="quantity"
						className={styles.input}
						type="number"
						data-testid="inputQuantity"
						placeholder="Quantidade"
						value={tagForAdd.quantity}
						onChange={e =>
							setTagForAdd({ ...tagForAdd, quantity: Number(e.target.value) })
						}
					/>
				</label>
				<div className="flex justify-center">
					<div className="timepicker relative form-floating mb-3 xl:w-96">
						<input
							type="text"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							placeholder="Select a date"
						/>
						<label htmlFor="floatingInput" className="text-gray-700">
							Select a time
						</label>
					</div>
				</div>
				<Button isLoading={isLoading} disabled={isLoading} type="submit">
					Pesquisar
				</Button>
			</form>
			<div
				id="carouselExampleCaptions"
				className="carousel slide relative"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner relative w-full overflow-hidden">
					<div className="carousel-item active relative float-left w-full">
						<img
							src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
							className="block w-full"
							alt="..."
						/>
						<div className="carousel-caption hidden md:block absolute text-center">
							<h5 className="text-xl">First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
							className="block w-full"
							alt="..."
						/>
						<div className="carousel-caption hidden md:block absolute text-center">
							<h5 className="text-xl">Second slide label</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
							className="block w-full"
							alt="..."
						/>
						<div className="carousel-caption hidden md:block absolute text-center">
							<h5 className="text-xl">Third slide label</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon inline-block bg-no-repeat"
						aria-hidden="true"
					/>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon inline-block bg-no-repeat"
						aria-hidden="true"
					/>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{isLoading && (
				<div
					className="bg-red-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
					id="static-example"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
					data-mdb-autohide="true"
				>
					<div className="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-red-500 rounded-t-lg">
						<p className="font-bold text-white flex items-center">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="times-circle"
								className="w-4 h-4 mr-2 fill-current"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
								/>
							</svg>
							MDBootstrap
						</p>
						<div className="flex items-center">
							<p className="text-white opacity-90 text-xs">11 mins ago</p>
							<button
								type="button"
								className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
								data-mdb-dismiss="toast"
								aria-label="Close"
							/>
						</div>
					</div>
					<div className="p-3 bg-red-600 rounded-b-lg break-words text-white">
						Hello, world! This is a toast message.
					</div>
				</div>
			)}
		</>
	);
}
