export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},

		},
		aside: {
			self: {},
			items: [
				
				{
					title: 'Activation Activities',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Create Corporate Account',
							page: '/bulk/activation-activities/create-corporate-acceount'
						},
						{
							title: 'Create Fixed Corporate Account',
							// page: '/user-management/roles'
						},
						{
							title: 'Create Customized Corporate Account',
							// page: '/user-management/roles'
						},
						{
							title: 'Create Flat Account',
							// page: '/user-management/roles'
						},
						{
							title: 'Create ADSL Account',
							// page: '/user-management/roles'
						},
						{
							title: 'Create MNP Account',
							// page: '/user-management/roles'
						},
						{
							title: 'Create New Corporate Account (Promotion)',
							// page: '/user-management/roles'
						},
						{
							title: 'Create New Lego Corporate Account',
							// page: '/user-management/roles'
						},
						{
							title: 'Create New Flat Account',
							// page: '/user-management/roles'
						}
					]
				},
				
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
