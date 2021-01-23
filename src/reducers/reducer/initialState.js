const initialState = {
	userName: "Mclovin'",
	userList: {
		buddies: [
			{
				name: 'Michael Kurdyla',
				uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
				dateAccountCreated: '22/1/2021',
				bookings: [
					{
						bid: '57ceee7d-71fc-4e20-b42b-8625547193e1',
						gym: "Ronnie's palace",
						gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
						date: '23/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 21.0,
					},
					{
						bid: 'e4fe9a6b-0fb5-4437-8de0-d84163d8a3bb',
						gym: "Ronnie's palace",
						gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
						date: '24/1/2021',
						startTime: 1900,
						timeDuration: 120,
						price: 42.0,
					},
					{
						bid: 'a84bab82-42a3-4aec-80ba-3aca242b49f8',
						gym: "Ronnie's palace",
						gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
						date: '25/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 21.0,
					},
					{
						bid: '7a792542-e267-4642-951d-cc587ffc6ee0',
						gym: 'The Meat Factory',
						gid: '6eb1d45b-2fb3-42ab-a560-5a3c33ed6920',
						date: '26/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 19.0,
					},
				],
			},
		],
		owners: [
			{
				name: 'Andrew Simonds',
				gymName: 'The Meat Factory',
				gid: '6eb1d45b-2fb3-42ab-a560-5a3c33ed6920',
				dateAccountCreated: '22/1/2021',
				pricePerHour: 19.0,
				bookings: [
					{
						bid: '7a792542-e267-4642-951d-cc587ffc6ee0',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '26/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 19.0,
					},
				],
			},
			{
				name: 'Matthew Tanel',
				gymName: "Ronnie's palace",
				gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
				dateAccountCreated: '22/1/2021',
				pricePerHour: '21.00',
				bookings: [
					{
						bid: '57ceee7d-71fc-4e20-b42b-8625547193e1',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '23/1/2021',
						startTime: '1900',
						timeDuration: '60',
						price: '21.00',
					},
					{
						bid: 'e4fe9a6b-0fb5-4437-8de0-d84163d8a3bb',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '24/1/2021',
						startTime: '1900',
						timeDuration: '120',
						price: '42.00',
					},
					{
						bid: 'a84bab82-42a3-4aec-80ba-3aca242b49f8',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '25/1/2021',
						startTime: '1900',
						timeDuration: '60',
						price: '21.00',
					},
				],
			},
		],
	},
};

export default initialState;
