const hasValidTodo = ({ task, due, priority }) => {
  return(task && due && priority);
}

const hasValidId = ({ id }) => {
  //時間ないのでとりあえずregxで処理
  //TODO: numberのparse周りちゃんと調べる
  if(!/^\d+$/.test(id)) {
    return false;
  }

  return true;
}

module.exports = {
  hasValidTodo,
  hasValidId,
}