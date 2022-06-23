/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import type { Identifier, XYCoord } from 'dnd-core';
import { Trash } from 'phosphor-react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { formatDateAndHour } from '../../Utils/Masks/DateAndHour';
import styles from './styles.module.css';

export interface CardProps {
	id: string;
	text: string;
	index: number;
	quantity: string;
	date: string;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
	handleDelete: (data: string) => void;
}

interface DragItem {
	index: number;
	id: string;
	type: string;
}

export default function Card({
	id,
	text,
	index,
	moveCard,
	quantity,
	date,
	handleDelete,
}: CardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [{ handlerId }, drop] = useDrop<
		DragItem,
		void,
		{ handlerId: Identifier | null }
	>({
		accept: 'card',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item: DragItem, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();

			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%

			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: 'card',
		item: () => ({ id, index }),
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));
	return (
		<div
			ref={ref}
			style={{ opacity }}
			className={`${styles.card}`}
			data-handler-id={handlerId}
		>
			<button
				className={`${styles.buttonDelete}`}
				onClick={() => handleDelete(id)}
			>
				<Trash size={24} />
			</button>
			<div className=" border-gray-500 border-solid border-2  flex flex-col">
				<span>{text}</span>
				<span>{quantity}</span>
				<span>{formatDateAndHour(new Date(date))}</span>
			</div>
		</div>
	);
}
