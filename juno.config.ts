import { defineConfig } from '@junobuild/config';

export default defineConfig({
	satellite: {
		ids: {
			//development: '<DEV_SATELLITE_ID>',
			production: '3lv5v-2yaaa-aaaal-asd5a-cai'
		},
		source: 'build',
		predeploy: ['npm run build']
	}
});
