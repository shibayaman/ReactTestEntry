export const hasValidTodo = ({ task, due, priority }: any): boolean => {
  return(task && due && priority);
}

export const hasValidId = ({ id }: any): boolean => {
  //時間ないのでとりあえずregxで処理
  //TODO: numberのparse周りちゃんと調べる
  if(!/^\d+$/.test(id)) {
    return false;
  }

  return true;
}