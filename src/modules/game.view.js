let buttonFun = document.getElementById("btn")
let hpEnemy = document.getElementById("hpEnemy")
let hpUser = document.getElementById("hpUser")
let enemyBar = document.getElementById("computerHpBar")
let userBar = document.getElementById("userHpBar")

export const randerButton = (userTurn) => {
    userTurn ? randerToUser() : randerWaitToEnemy()
}

const randerWaitToEnemy = () => {
    buttonFun.innerHTML = "Waiting..."
    buttonFun.disabled = true
}

const randerToUser = () => {
    buttonFun.innerHTML = "Attack!"
    buttonFun.disabled = false
}

export const randerEnemyHp = (hp) => {
    hpEnemy.innerHTML = `HP ${hp}`
}
export const randerUserHp = (hp) => {
    hpUser.innerHTML = `HP ${hp}`
}
export const randerEnemyHpBar = (hp) => {
    enemyBar.style.width = `${hp}%`;
}
export const randerUserHpBar = (hp) => {
    userBar.style.width = `${hp}%`;
}