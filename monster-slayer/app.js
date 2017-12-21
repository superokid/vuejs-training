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
		logs: []
	},
	methods: {
		startGame: function(){
			this.startState = !this.startState;
			this.player.health = 100;
			this.monster.health = 100;
		},
		giveup: function(){
			this.startState = !this.startState;
			this.logs = [];
		},
		generateRandom: function(damage){
			max = damage.max;
			min = damage.min;
			return Math.floor(Math.random() * (max - min)) + min;
		},
		attack: function(){
			return this.generateRandom(this.action.attack);
		},
		specialAttack: function(){
			let damage = this.generateRandom(this.action.specialAttack);
			this.monster.health -= damage;
			this.healthLimit();
			this.actionLog(damage);
		},
		heal: function(){
			let damage = this.generateRandom(this.action.heal);
			this.monster.health += damage;
			this.healthLimit();
			this.actionLog(damage);
		},
		playerTurn: function(action){
			if(action === 'attack'){
				let damage = this.attack;
				this.monster.health -= damage;
				this.healthLimit();
				this.actionLog(damage);
			}
		},
		monsterTurn: function(){

		},
		healthLimit: function(){
			if(this.monster.health >= this.monster.healthMax){
				this.monster.health = this.monster.healthMax;
			}
			if(this.monster.health <= 0){
				this.monster.health = 0;
			}
		},
		actionLog: function(damage){
			this.logs.push(damage);
		}
	}
});