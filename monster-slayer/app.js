new Vue({
	el: '#app',
	data: {
		player: {
			health: 0
		},
		monster: {
			health: 0
		}
	},
	methods: {
		startGame: function(){
			this.player.health = 100;
			this.monster.health = 100;
		}
	}
});