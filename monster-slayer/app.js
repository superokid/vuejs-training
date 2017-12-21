new Vue({
	el: '#app',
	data: {
		startState: false,
		player: {
			health: 0,
			healthMax: 100
		},
		monster: {
			health: 0,
			healthMax: 100
		},
		action: {
			attack: {
				min: 6,
				max: 12
			},
			specialAttack: {
				min: 10,
				max: 22
			},
			heal: {
				min: 18,
				max: 32
			}
		},
		logs: {
			[9,11],
			[12,7]
		},
		logs: [
			{player: 9, enemy: 11},
			{player: 12, enemy: 7}
		]
	},
	methods: {
		startGame: function(){
			this.startState = !this.startState;
			this.player.health = 100;
			this.monster.health = 100;
		},
		giveup: function(){
			this.startState = !this.startState;
			this.player.health = 0;
			this.monster.health = 0;
		},
		generateRandom: function(damage){
			max = damage.max;
			min = damage.min;
			return Math.floor(Math.random() * (max - min)) + min;
		},
		attack: function(){
			this.monster.health -= this.generateRandom(this.action.attack);
			this.healthLimit();
			this.actionLog();
		},
		specialAttack: function(){
			this.monster.health -= this.generateRandom(this.action.specialAttack);
			this.healthLimit();
		},
		heal: function(){
			this.monster.health += this.generateRandom(this.action.heal);
			this.healthLimit();
		},
		healthLimit: function(){
			if(this.monster.health >= this.monster.healthMax){
				this.monster.health = this.monster.healthMax;
			}
			if(this.monster.health <= 0){
				this.monster.health = 0;
			}
		},
		actionLog: function(){
			this.log.push('')
		}
	}
});