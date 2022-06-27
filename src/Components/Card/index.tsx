/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import type { Identifier, XYCoord } from 'dnd-core';
import { Trash } from 'phosphor-react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import TagType from '../../Types/TagType';
import { formatDateAndHour } from '../../Utils/Masks/DateAndHour';
import styles from './styles.module.css';

export interface CardProps {
	item: TagType;
	index: number;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
	handleDelete: (data: string) => void;
}

interface DragItem {
	index: number;
	id: string;
	type: string;
}

export default function Card({
	item,
	index,
	moveCard,
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
		hover(itemNow: DragItem, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = itemNow.index;
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
			itemNow.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: 'card',
		item: () => ({ id: item.id, index }),
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
				onClick={() => handleDelete(item.id)}
			>
				<Trash size={24} />
			</button>
			<div className=" border-gray-500 flex flex-col">
				<span>{item.product}</span>
				<span>{item.quantity}</span>
				<span>{formatDateAndHour(new Date(item.date))}</span>
			</div>
		</div>
	);
}
