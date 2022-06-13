/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useState } from 'react';
import Button from '../../Components/Button';
import TagType from '../../Types/TagType';
import styles from './styles.module.css';
import tagsFixture from '../../Data/tags.json';
import Datepicker from '../../Components/Datepicker';

export default function Home() {
	const [tagForAdd, setTagForAdd] = useState<TagType>({
		id: '',
		date: '',
		product: '',
		quantity: 0,
	});

	const [tagsAddeds, setTagsAddeds] = useState<TagType[]>([...tagsFixture]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => console.log(tagForAdd), [tagForAdd]);

	async function load() {
		setIsLoading(true);
		const tagsTemp = [...tagsAddeds];
		const datesTemp = tagForAdd.date.split('/');
		tagsTemp.push({
			...tagForAdd,
			date: new Date(
				`${datesTemp[2]}-${datesTemp[1]}-${datesTemp[0]}`
			).toISOString(),
			id: Math.random().toString(),
		});
		setTagsAddeds(tagsTemp);
		setIsLoading(false);
	}

	function handleSubmit(event: FormEvent) {
		console.log('Submit');
		event.preventDefault();
		load();
	}

	return (
		<div className="min-h-screen flex flex-col batata">
			<div className="p-10">
				<form
					className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-1"
					onSubmit={handleSubmit}
				>
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

					<label className=" text-white text-sm font-bold" htmlFor="quantity">
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

					<label className=" text-white text-sm font-bold" htmlFor="date">
						Data
						<Datepicker />
					</label>
					<div className="flex items-end justify-center ">
						<Button isLoading={isLoading} disabled={isLoading} type="submit">
							Adicionar
						</Button>
					</div>
				</form>
			</div>
			<div>
				<div className="flex flex-wrap">
					{tagsAddeds.map(tag => (
						<div
							className="b-2 border-gray-500 border-solid border-2 p-2 m-2 flex flex-col w-[220px] batata2"
							key={tag.id}
						>
							<span>{tag.id}</span>
							<span>{tag.product}</span>
							<span>{tag.quantity}</span>
							<span>{tag.date}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
