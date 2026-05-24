/**hi**/
import * as model from "./game.model.js";

export const onAttackButton = () => {
    if (model.userTurn && model.hpEnemy > 0 && model.hpUser > 0) {
        document.getElementById("btn").addEventListener("click", () => {
            model.setHpEnemy()
            if (model.checkWinner(model.hpEnemy)) {
                model.setWinner("🏆 YOU")
                return;
            }
            model.setUserTurn()
            handleEnemyAttack()
        })
    }
}

export const handleEnemyAttack = () => {
    if (!model.userTurn && model.hpEnemy > 0 && model.hpUser > 0) {
        setTimeout(() => {
            model.setHpUser()
            if (model.checkWinner(model.hpUser)) {
                model.setWinner("☠️ ENEMY")
                return;
            }
            model.setUserTurn();
        }, 1000)
    }
}


