<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }}, Status: {{ server.status }}</p>
        <button @click="resetServer">reset server</button>
    </div>
</template>

<script>
	import { serverBus } from '../../main';

	export default {
		data: function() {
			return {
				server: null
			}
		},
		methods: {
			resetServer() {
				this.server.status = 'Normal';
			}
		},
		created() {
			serverBus.$on('serverSelected', (server) => {
				this.server = server;
			});
		}
	}
</script>

<style>

</style>
