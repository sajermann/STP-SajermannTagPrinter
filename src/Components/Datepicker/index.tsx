import DatePicker, { registerLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import masks from '../../Utils/Masks';

registerLocale('pt-BR', ptBr);

type PropsHours = {
	startDate: Date | undefined;
	setStartDate: (date: Date | undefined) => void;
};
function CustomTimeInput({ startDate, setStartDate }: PropsHours) {
	function handleChangeHourInternal(hour: Date | null) {
		if (!hour) {
			return;
		}

		const hourFormated = hour.toISOString().split('T')[1];
		const newDate = new Date(
			`${startDate?.toISOString().split('T')[0]}T${hourFormated}`
		);
		setStartDate(newDate);
	}

	return (
		<DatePicker
			selected={startDate}
			onChange={handleChangeHourInternal}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={5}
			timeFormat="HH:mm"
			className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full grid grid-cols-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
			value={masks.formatHour(startDate as Date)}
		/>
	);
}

type Props = {
	startDate: Date | undefined;
	setStartDate: (value: Date | undefined) => void;
	placeholder?: string;
};

export default function Datepicker({
	startDate,
	setStartDate,
	placeholder,
}: Props) {
	// const [startDate, setStartDate] = useState<Date | undefined>(() => {
	// 	try {
	// 		if (value) {
	// 			return new Date(value as string);
	// 		}
	// 		return undefined;
	// 	} catch {
	// 		return undefined;
	// 	}
	// });

	function handleChange(date: Date | null) {
		if (date) {
			setStartDate(date);
		} else {
			setStartDate(undefined);
		}
	}

	return (
		<DatePicker
			placeholderText={placeholder}
			selected={startDate}
			onChange={handleChange}
			locale="pt-BR"
			timeFormat="HH:mm"
			timeInputLabel="Hora:"
			showTimeInput
			className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full grid grid-cols-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
			value={masks.formatDateAndHour(startDate as Date)}
			withPortal
			customTimeInput={
				<CustomTimeInput startDate={startDate} setStartDate={setStartDate} />
			}
		/>
	);
}
