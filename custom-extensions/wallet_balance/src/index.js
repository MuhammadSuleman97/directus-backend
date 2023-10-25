export default (router, { services } ) => {
	const { ItemsService } = services;

	router.get('/:id', async (req, res) => {
		try {
			const { id } = req.params;
			if (!id || isNaN(id)) return res.status(400).json({ message: 'id is required' });
			
			// create a new instance of the investors service
			const investorsService = new ItemsService('investors', { schema: req.schema, accountability: req.accountability } );

			// get the investor by id
			investorsService.readByQuery({fileds: ['*'], filter: {id}}).then((investors) => {
				if (!investors.length) return res.status(404).json({ message: 'investor not found' });
				if (investors.length > 1) return res.status(400).json({ message: 'multiple investors found with same id' });
				
				let investor = investors[0];
				return res.json({ 
					message: 'success',
					data: {
						id: investor.id,
						name: investor.name,
						wallet_balance: investor.wallet_amount
				} });
			}
			);

		} catch (e) {
			return res.status(500).json({ message: e?.message });
		}

	});

	// return invalid request for all other requests
	router.all('*', (req, res) => res.status(400).json({ message: 'invalid request' }));

};
