<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
	export default {
		props: {
			myName: {
				type: String
				// default: 'Max'
				// type: Object,
				// default: function(){
				// 	return {
				// 		name: 'Max'
				// 	}
				// }
			},
			resetFn: Function
		},
		methods: {
			switchName(){
				return this.myName.split("").reverse().join("");
			},
			resetName(){
				this.myName = 'Max';
				this.$emit('nameWasReset', this.myName);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
