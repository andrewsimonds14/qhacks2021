const Routes = {
	//Landing
	toLanding: () => '/',
	//Login + SignUp
	toLogin: () => '/login',
	toSignUp: () => '/signup',
	toOwnerSignUp: () => '/ownerSignUp',
	//Buddy Routes
	toBuddyDashboard: () => '/buddyDashboard',
	toBuddySearch: () => '/buddySearch',
	toBuddyAccount: () => '/buddyAccount',
	//Owner Routes
	toOwnerDashboard: () => '/ownerDashboard',
	toEditGym: () => '/editGym',
	toOwnerAccount: () => '/ownerAccount',
};

export default Routes;
