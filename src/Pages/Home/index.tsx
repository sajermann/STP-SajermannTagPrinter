/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../Components/Button';
import TagType from '../../Types/TagType';
import styles from './styles.module.css';
import Datepicker from '../../Components/Datepicker';
import { generateGuid } from '../../Utils/Random';
import tagPrinterServices from '../../Services/TagPrinter';
import Card from '../../Components/Card';
import DrawlerListTags from '../../Components/DrawlerListTags';

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

	function moveCard(dragIndex: number, hoverIndex: number) {
		const tagsTemp = [...tagsAddeds];
		const tagDrag = tagsTemp[dragIndex];
		const tagForMoviment = tagsTemp[hoverIndex];
		tagsTemp[dragIndex] = { ...tagForMoviment };
		tagsTemp[hoverIndex] = { ...tagDrag };
		setTagsAddeds(tagsTemp);
	}

	const renderCard = useCallback(
		(item: TagType, index: number) => (
			<Card
				key={item.id}
				index={index}
				moveCard={moveCard}
				item={item}
				handleDelete={handleDelete}
			/>
		),
		[tagsAddeds]
	);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setIsLoading(true);
		const result = await tagPrinterServices.postTagPrinter(tagForAdd);
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
					<label
						className="text-black text-sm font-bold dark:text-white"
						htmlFor="product"
					>
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

					<label
						className="text-black text-sm font-bold dark:text-white"
						htmlFor="quantity"
					>
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

					<label
						className="text-black text-sm font-bold dark:text-white"
						htmlFor="date"
					>
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
					<div className="flex items-end justify-evenly ">
						<Button
							isLoading={isLoading}
							disabled={isLoading}
							type="submit"
							variant="Success"
						>
							Adicionar
						</Button>
						<DrawlerListTags
							tagsAddeds={tagsAddeds}
							setTagsAddeds={setTagsAddeds}
						/>
					</div>
				</form>
			</div>
			<div>
				<div className="flex flex-wrap">
					{tagsAddeds.map((card, i) => renderCard(card, i))}
				</div>
			</div>
		</div>
	);
}
