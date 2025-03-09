import Dwarf from './Dwarf';
import Crossbowman from './Crossbowman';
import Demourge from './Demourge';
import Warrior from './Warrior';
import Archer from './Archer';
import Mage from './Mage';

function logEvent(message) {
  const logElement = document.getElementById('game-log');
  const newLog = document.createElement('p');
  newLog.textContent = message;
  logElement.appendChild(newLog);
}

export default function play(players) {
  logEvent('| Начало игры |');
  while (players.filter(player => !player.isDead()).length > 1) {
    players.forEach(player => {
      if (!player.isDead()) {
        player.turn(players);
        logEvent(`${player.name} совершил ход.`);
      }
    });
  }
  const winner = players.find(player => !player.isDead());
  logEvent(`Победитель: ${winner.name}`);
}