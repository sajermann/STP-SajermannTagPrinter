/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../Components/Button';
import TagType from '../../Types/TagType';
import styles from './styles.module.css';
import tagsFixture from '../../Data/tags.json';
import Datepicker from '../../Components/Datepicker';
import { formatDateAndHour } from '../../Utils/Masks/DateAndHour';
import { generateGuid } from '../../Utils/Random';
import postTagPrinter from '../../Services/TagPrinter';

export default function Home() {
	const [tagForAdd, setTagForAdd] = useState<TagType>({
		id: generateGuid(),
		date: '',
		product: '',
		quantity: '',
		username: 'Sajermann',
	});

	const [tagsAddeds, setTagsAddeds] = useState<TagType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => console.log(tagForAdd), [tagForAdd]);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setIsLoading(true);
		const result = await postTagPrinter(tagForAdd);
		if (!result) {
			toast.error('Falha ao salvar registro!');
			setIsLoading(false);
			return;
		}
		setTagsAddeds([...tagsAddeds, tagForAdd]);
		setTagForAdd({
			id: generateGuid(),
			date: '',
			product: '',
			quantity: '',
			username: 'Sajermann',
		});
		setIsLoading(false);
	}

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.target;
		const valueTrated = value.replace(',', '.');
		console.log(valueTrated);
		console.log(Number.isNaN(Number(valueTrated)));
		if (Number.isNaN(Number(valueTrated))) {
			return;
		}
		setTagForAdd({ ...tagForAdd, quantity: valueTrated });
	}

	function verifyDate() {
		try {
			const timestamp = Date.parse(tagForAdd.date);
			if (Number.isNaN(timestamp) === false) {
				return new Date(tagForAdd.date);
			}
			return undefined;
		} catch {
			return undefined;
		}
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
							type="number"
							className={styles.input}
							data-testid="inputQuantity"
							placeholder="Quantidade"
							value={tagForAdd.quantity}
							onChange={handleInput}
						/>
					</label>

					<label className=" text-white text-sm font-bold" htmlFor="date">
						Data
						<Datepicker
							placeholder="Data"
							startDate={verifyDate()}
							setStartDate={(e: Date | undefined) => {
								if (e) {
									return setTagForAdd({ ...tagForAdd, date: e.toISOString() });
								}
								return setTagForAdd({ ...tagForAdd, date: '' });
							}}
						/>
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
							<span>{tag.product}</span>
							<span>{tag.quantity}</span>
							<span>{formatDateAndHour(new Date(tag.date))}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
