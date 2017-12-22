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
			let max = damage.max;
			let min = damage.min;
			return Math.floor(Math.random() * (max - min)) + min;
		},
		attack: function(){
			return this.generateRandom(this.action.attack);
		},
		specialAttack: function(){
			return this.generateRandom(this.action.specialAttack);
		},
		heal: function(){
			return this.generateRandom(this.action.heal);
		},
		playerTurn: function(action){
			let damage;
			if(action === 'attack'){
				damage = this.attack();
				this.monster.health -= damage;
			}
			else if(action === 'specialAttack'){
				damage = this.specialAttack();
				this.monster.health -= damage;
			}
			else if(action === 'heal'){
				damage = this.heal();
				this.monster.health += damage;
			}
			this.healthLimit();
			this.actionLog(damage);
			this.monsterTurn();
		},
		monsterTurn: function(){
			let action = this.monsterAction(this.generateRandom([1,3]));
			let damage;
			if(action === 'attack'){
				damage = this.attack();
				this.player.health -= damage;
			}
			else if(action === 'specialAttack'){
				damage = this.specialAttack();
				this.player.health -= damage;
			}
			else if(action === 'heal'){
				damage = this.heal();
				this.player.health += damage;
			}
			this.healthLimit();
			this.actionLog(damage);
		},
		monsterAction: function(val){
			let action;
			console.log(val);
			if(val === 1){
				action = 'attack';
			}else if(val === 2){
				action = 'specialAttack';
			}else if(val === 3){
				action = 'heal';
			}
			return action;
		},
		healthLimit: function(){
			if(this.player.health >= this.player.healthMax){
				this.player.health = this.player.healthMax;
			}
			if(this.monster.health >= this.monster.healthMax){
				this.monster.health = this.monster.healthMax;
			}
			if(this.player.health <= 0){
				this.player.health = 0;
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