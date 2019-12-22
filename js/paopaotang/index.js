function Player(name, teamColor) {
    this.enemies = []; // 敌人
    this.partners = []; // 队友
    this.name = name;
    this.teamColor = teamColor;
    this.state = 'live';    
}

Player.prototype.win = function () {
    // kill all
    console.log(`${this.name}win`)
}
Player.prototype.lose = function () {
    console.log(`${this.name}输了`)
}

Player.prototype.die = function () {
    console.log(`${this.name} die`)
    this.state = 'die';
    let all_dead = true; // 假设都死了
    for (let i = 0, partner; partner = this.partners[i++];) {
        if (partner.state === 'live') {
            all_dead = false;
            break;
        }
    }
    if (all_dead) {
        this.lose();
        for (var i = 0, partner; partner = this.partners[i++];) {
            partner.lose();
        }
        for (var i = 0, enemie; enemie = this.enemies[i++];) {
            enemie.win();
        }
    }
}

// 组队 生成玩家，工厂类来负责
var players = [];
var playerFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor);
    for(var i = 0, player; player = players[i++];){
        if(player.teamColor === newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }else {
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
var player1 = playerFactory('aa', 'red');
var player2 = playerFactory('bb', 'blue');
var player3 = playerFactory('cc', 'red');
var player4 = playerFactory('dd', 'blue');
var player5 = playerFactory('aa', 'red');
var player6 = playerFactory('bb', 'blue');
var player7 = playerFactory('cc', 'red');
var player8 = playerFactory('dd', 'blue');
console.log(player1.partners);
// 队友是谁？敌人是谁？交给工厂去做

player1.die();
player3.die();
player5.die();
player7.die();