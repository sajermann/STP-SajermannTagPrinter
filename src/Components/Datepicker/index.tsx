import DatePicker, { registerLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import masks from '../../Utils/Masks';

registerLocale('pt-BR', ptBr);

type PropsHours = {
	startDate: Date | undefined;
	setStartDate: (date: Date | undefined) => void;
};
function ExampleCustomTimeInput({ startDate, setStartDate }: PropsHours) {
	function handleChangeHourInternal(hour: Date | null) {
		console.log(hour);
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

export default function Datepicker() {
	const [startDate, setStartDate] = useState<Date | undefined>(new Date());

	function handleChange(date: Date | null) {
		if (date) {
			setStartDate(date);
		}
	}

	return (
		<DatePicker
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
				<ExampleCustomTimeInput
					startDate={startDate}
					setStartDate={setStartDate}
				/>
			}
		/>
	);
}
