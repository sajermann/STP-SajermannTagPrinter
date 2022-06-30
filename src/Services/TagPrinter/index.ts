import TagType from '../../Types/TagType';

async function postTagPrinter(tag: TagType): Promise<boolean> {
	try {
		const allTags = await sessionStorage.getItem('@TagPrinter:All');
		if (allTags) {
			const tags: TagType[] = JSON.parse(allTags);
			tags.push(tag);
			sessionStorage.setItem('@TagPrinter:All', JSON.stringify(tags));
		} else {
			sessionStorage.setItem('@TagPrinter:All', JSON.stringify([tag]));
		}
		return true;
	} catch {
		return false;
	}
}

async function getAllTagPrinter(): Promise<TagType[]> {
	try {
		const allTags = await sessionStorage.getItem('@TagPrinter:All');
		if (allTags) {
			const tags: TagType[] = JSON.parse(allTags);
			return tags;
		}
		return [];
	} catch {
		return [];
	}
}

export default { postTagPrinter, getAllTagPrinter };
