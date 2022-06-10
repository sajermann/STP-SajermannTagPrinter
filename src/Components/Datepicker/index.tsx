import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

registerLocale('pt-BR', ptBr);

function ExampleCustomTimeInput() {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={hour => console.log({ hour })}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={15}
			dateFormat="h:mm aa"
		/>
	);
}

export default function Datepicker() {
	const [startDate, setStartDate] = useState<string | undefined>(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={date => console.log(date)}
			locale="pt-BR"
			timeFormat="HH:mm"
			timeInputLabel="Time:"
			dateFormat="dd/MM/yyyy hh:mm:ss"
			showTimeInput
			className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full grid grid-cols-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
			value={startDate}
			withPortal
			customTimeInput={<ExampleCustomTimeInput />}
		/>
	);
}
