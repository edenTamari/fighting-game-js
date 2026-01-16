import * as view from "./game.view.js";

const MAX_ATTACK = 30;
export let hpUser = 100;
export let hpEnemy = 100;
export let userTurn = true;

export const chooseRandomNumber = () => {
    return Math.floor(Math.random() * MAX_ATTACK);
}

export const setHpUser = () => {
    hpUser = Math.max(hpUser - chooseRandomNumber(), 0);
    view.randerUserHp(hpUser);
    view.randerUserHpBar(hpUser)
    console.log("user hp:", hpUser);
}

export const setHpEnemy = () => {
    hpEnemy = Math.max(hpEnemy - chooseRandomNumber(), 0);
    view.randerEnemyHp(hpEnemy);
    view.randerEnemyHpBar(hpEnemy)
    console.log("enemy hp:", hpEnemy);
}
export const setUserTurn = () => {
    userTurn = !userTurn;
    view.randerButton(userTurn)
}

export const checkWinner = (hp) => {
    return hp <= 0;
}

export const setWinner = (winner) => {
    setTimeout(() => {
        alert(winner + " WON!")
        resetGame()
    }, 1000)
}

export const resetGame = () => {
    console.log("resetGame")
    hpUser = 100;
    hpEnemy = 100;
    userTurn = true;
    view.randerButton(userTurn)
    view.randerEnemyHp(hpEnemy);
    view.randerUserHp(hpUser);
    view.randerEnemyHpBar(hpEnemy)
    view.randerUserHpBar(hpUser)
}