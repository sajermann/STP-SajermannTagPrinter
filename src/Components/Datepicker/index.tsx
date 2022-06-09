import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

registerLocale('pt-BR', ptBr);

function ExampleCustomTimeInput() {
	return (
		<input
			// value={value}
			onChange={e => console.log(e.target.value)}
			style={{ border: 'solid 1px pink' }}
			className="h-24 text-black"
		/>
	);
}

export default function Datepicker() {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={date => setStartDate(date)}
			locale="pt-BR"
			timeFormat="HH:mm"
			timeInputLabel="Time:"
			dateFormat="dd/MM/yyyy hh:mm:ss"
			showTimeInput
			className="h-24 text-black"
			value={startDate}
			withPortal
			customTimeInput={<ExampleCustomTimeInput />}
		/>
	);
}
