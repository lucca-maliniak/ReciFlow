class WasteCollectionRepository {
	private url = 'https://dados.pbh.gov.br/api/3/action/datastore_search';
	
	constructor() {}

	async getGreenPoints() {
		const response = await fetch(this.url + '?resource_id=ee629320-1a5b-4d5a-8323-8bf73561027d', {
				headers: { 'Content-type': 'application/json', }
		})
		return await response.json();
	}
}

export default new WasteCollectionRepository();