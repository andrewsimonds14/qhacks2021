const initialState = {
	userName: "Mclovin'",
	userList: {
		buddies: [
			{
				name: 'Michael Kurdyla',
				uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
				dateAccountCreated: '22/1/2021',
				img: "https://media-exp1.licdn.com/dms/image/C4D03AQFLA1Hf8M-sLA/profile-displayphoto-shrink_800_800/0/1591143186571?e=1616630400&v=beta&t=HIH9MNUD-jzl_4d_FI60PY7PaH0wm5LdlSIVhoqa3kQ",
				bookings: [
					{
						bid: '57ceee7d-71fc-4e20-b42b-8625547193e1',
						gym: "Ronnie's palace",
						gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
						date: '23/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 21.0,
						img:
							'https://www.muscleandfitness.com/wp-content/uploads/2019/02/ronnie-coleman-squat-barbell-1109.jpg?quality=86&strip=all',
					},
					{
						bid: 'e4fe9a6b-0fb5-4437-8de0-d84163d8a3bb',
						gym: "Ronnie's palace",
						gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
						date: '24/1/2021',
						startTime: 1900,
						timeDuration: 120,
						price: 42.0,
						img:
							'https://www.muscleandfitness.com/wp-content/uploads/2019/02/ronnie-coleman-squat-barbell-1109.jpg?quality=86&strip=all',
					},
					{
						bid: '7a792542-e267-4642-951d-cc587ffc6ee0',
						gym: 'The Meat Factory',
						gid: '6eb1d45b-2fb3-42ab-a560-5a3c33ed6920',
						date: '26/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 19.0,
						img:
							'https://p6r9a9v8.stackpathcdn.com/wp-content/uploads/2018/09/RoveFit-Katie-Rodgers-Cover-Photo.jpg',
					},
				],
				pastBookings: [
					{
						bid: '57ceee7d-71fc-4e20-b42b-8625547193e1',
						gym: "Ronnie's palace",
						gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
						date: '20/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 21.0,
						img:
							'https://www.muscleandfitness.com/wp-content/uploads/2019/02/ronnie-coleman-squat-barbell-1109.jpg?quality=86&strip=all',
					},
					{
						bid: '7a792542-e267-4642-951d-cc587ffc6ee0',
						gym: 'The Meat Factory',
						gid: '6eb1d45b-2fb3-42ab-a560-5a3c33ed6920',
						date: '21/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 19.0,
						img:
							'https://p6r9a9v8.stackpathcdn.com/wp-content/uploads/2018/09/RoveFit-Katie-Rodgers-Cover-Photo.jpg',
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
				pricePerHour: '19.00',
				description: 'Beat ya',
				img:
					'https://p6r9a9v8.stackpathcdn.com/wp-content/uploads/2018/09/RoveFit-Katie-Rodgers-Cover-Photo.jpg',
				bookings: [
					{
						bid: '7a792542-e267-4642-951d-cc587ffc6ee0',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '26/1/2021',
						startTime: 1900,
						timeDuration: 60,
						price: 19.0,
						img: "https://media-exp1.licdn.com/dms/image/C4D03AQFLA1Hf8M-sLA/profile-displayphoto-shrink_800_800/0/1591143186571?e=1616630400&v=beta&t=HIH9MNUD-jzl_4d_FI60PY7PaH0wm5LdlSIVhoqa3kQ",
					},
				],
			},
			{
				name: 'Matthew Tanel',
				gymName: "Ronnie's palace",
				gid: 'aa3268e9-351a-47a1-a2bf-8e9efd8e6473',
				dateAccountCreated: '22/1/2021',
				pricePerHour: '21.00',
				description: 'Light Weight BABY',
				img:
					'https://www.muscleandfitness.com/wp-content/uploads/2019/02/ronnie-coleman-squat-barbell-1109.jpg?quality=86&strip=all',
				bookings: [
					{
						bid: '57ceee7d-71fc-4e20-b42b-8625547193e1',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '23/1/2021',
						startTime: '1900',
						timeDuration: '60',
						price: '21.00',
						img: "https://media-exp1.licdn.com/dms/image/C4D03AQFLA1Hf8M-sLA/profile-displayphoto-shrink_800_800/0/1591143186571?e=1616630400&v=beta&t=HIH9MNUD-jzl_4d_FI60PY7PaH0wm5LdlSIVhoqa3kQ",
					},
					{
						bid: 'e4fe9a6b-0fb5-4437-8de0-d84163d8a3bb',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '24/1/2021',
						startTime: '1900',
						timeDuration: '120',
						price: '42.00',
						img: "https://media-exp1.licdn.com/dms/image/C4D03AQFLA1Hf8M-sLA/profile-displayphoto-shrink_800_800/0/1591143186571?e=1616630400&v=beta&t=HIH9MNUD-jzl_4d_FI60PY7PaH0wm5LdlSIVhoqa3kQ",
					},
					{
						bid: 'a84bab82-42a3-4aec-80ba-3aca242b49f8',
						name: 'Michael Kurdyla',
						uid: '193c8f28-8536-4792-812c-70b1e1915ba8',
						date: '25/1/2021',
						startTime: '1900',
						timeDuration: '60',
						price: '21.00',
						img: "https://media-exp1.licdn.com/dms/image/C4D03AQFLA1Hf8M-sLA/profile-displayphoto-shrink_800_800/0/1591143186571?e=1616630400&v=beta&t=HIH9MNUD-jzl_4d_FI60PY7PaH0wm5LdlSIVhoqa3kQ",
					},
				],
			},
		],
	},
};

export default initialState;
