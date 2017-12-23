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
				min: 16,
				max: 18
			}
		},
		turns: []
	},
	methods: {
		startGame: function(){
			this.startState = true;
			this.player.health = 100;
			this.monster.health = 100;
			this.turns = [];
		},
		giveup: function(){
			this.startState = false;
			this.turns = [];
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
				this.turns.unshift({
	                isPlayer: true,
	                text: 'Player hits Monster for ' + damage
	            });
			}
			else if(action === 'specialAttack'){
				damage = this.specialAttack();
				this.monster.health -= damage;
				this.turns.unshift({
	                isPlayer: true,
	                text: 'Player hits Monster hard for ' + damage
	            });
			}
			else if(action === 'heal'){
				damage = this.heal();
				this.player.health += damage;
				this.turns.unshift({
	                isPlayer: true,
	                text: 'Player heal for ' + damage
	            });
			}
			this.healthLimit();
			if(this.checkWin()){
				return;
			};
			this.monsterTurn();
		},
		monsterTurn: function(){
			let action = this.monsterAction(this.generateRandom({min: 1, max: 4}));
			let damage;
			if(action === 'attack'){
				damage = this.attack();
				this.player.health -= damage;
				this.turns.unshift({
	                isPlayer: false,
	                text: 'Monster hits Player for ' + damage
	            });
			}
			else if(action === 'specialAttack'){
				damage = this.specialAttack();
				this.player.health -= damage;
				this.turns.unshift({
	                isPlayer: false,
	                text: 'Monster hits Player Hard for ' + damage
	            });
			}
			else if(action === 'heal'){
				damage = this.heal();
				this.monster.health += damage;
				this.turns.unshift({
	                isPlayer: false,
	                text: 'Monster heal for ' + damage
	            });
			}
			this.healthLimit();
			if(this.checkWin()){
				return;
			};
		},
		monsterAction: function(val){
			let action;
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
		},
		checkWin:function(){
			if(this.player.health <= 0){
				this.player.health = 0;
				this.startGame();
				this.startState = false;
				alert('you lost');
				return true;
			}
			if(this.monster.health <= 0){
				if(confirm('You won! New Game?')){
					this.startGame();
					return true;
				}else{
					return true;
				}
			}
			return false;
		}
	}
});