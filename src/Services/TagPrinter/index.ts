import TagType from '../../Types/TagType';

export default async function postTagPrinter(tag: TagType): Promise<boolean> {
	try {
		const allTags = await sessionStorage.getItem('@TagPrinter:All');
		if (allTags) {
			const tags: TagType[] = JSON.parse(allTags);
			tags.push(tag);
			sessionStorage.setItem('@TagPrinter:All', JSON.stringify(tags));
		} else {
			sessionStorage.setItem('@TagPrinter:All', JSON.stringify([tag]));
		}
		return false;
	} catch {
		return false;
	}
}
