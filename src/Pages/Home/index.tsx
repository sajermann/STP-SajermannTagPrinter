/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { toast } from 'react-toastify';
import { Trash } from 'phosphor-react';
import update from 'immutability-helper';
import Button from '../../Components/Button';
import TagType from '../../Types/TagType';
import styles from './styles.module.css';
import Datepicker from '../../Components/Datepicker';
import { formatDateAndHour } from '../../Utils/Masks/DateAndHour';
import { generateGuid } from '../../Utils/Random';
import postTagPrinter from '../../Services/TagPrinter';
import Card from '../../Components/Card';

const defaultValue = {
	id: generateGuid(),
	date: '2022-10-10',
	product: 'Test',
	quantity: '60',
	username: 'Sajermann',
	isSelected: false,
};

export default function Home() {
	const [tagForAdd, setTagForAdd] = useState<TagType>({ ...defaultValue });

	const [tagsAddeds, setTagsAddeds] = useState<TagType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	function handleDelete(id: string) {
		const tasgTemp = tagsAddeds.filter(tag => tag.id !== id);
		setTagsAddeds(tasgTemp);
	}

	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setTagsAddeds((prevCards: TagType[]) =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex] as TagType],
				],
			})
		);
	}, []);

	const renderCard = useCallback(
		(card: TagType, index: number) => (
			<Card
				key={card.id}
				index={index}
				id={card.id}
				text={card.product}
				moveCard={moveCard}
				quantity={card.quantity}
				date={card.date}
				handleDelete={handleDelete}
			/>
		),
		[]
	);

	useEffect(() => console.log(tagForAdd), [tagForAdd]);
	useEffect(() => console.log({ tagsAddeds }), [tagsAddeds]);

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
		setTagForAdd({ ...defaultValue, id: generateGuid() });
		setIsLoading(false);
	}

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.target;
		const valueTrated = value.replace(',', '.');
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
					{tagsAddeds.map((card, i) => renderCard(card, i))}
				</div>
				{/* <div className="flex flex-wrap">
					{tagsAddeds.map(tag => (
						<div className={`${styles.card}`} key={tag.id}>
							<button
								className={`${styles.buttonDelete}`}
								onClick={() => handleDelete(tag.id)}
							>
								<Trash size={24} />
							</button>
							<div className=" border-gray-500 border-solid border-2  flex flex-col">
								<span>{tag.product}</span>
								<span>{tag.quantity}</span>
								<span>{formatDateAndHour(new Date(tag.date))}</span>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</div>
	);
}
