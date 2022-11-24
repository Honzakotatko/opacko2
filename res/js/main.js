const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const playerhp = document.getElementById("playerhp");
const enemyhp = document.getElementById("enemyhp");
const attack = document.getElementById("attack");
const info = document.getElementById("info");

attack.onmousedown = () => {
if (playerhp.innerHTML > 0 && enemyhp.innerHTML > 0) {
    enemyhp.innerHTML--;
    player.style.left = "150px"
}
if (enemyhp.innerHTML <= 0){
    info.innerHTML = "Info: Nepritel zemrel"
}
}
attack.onmouseup = () => {
    player.style.left = 0;
}
const playerDmgInterval = setInterval(() => {
    playerhp.innerHTML--;
    if(playerhp)
})