export default function getSpecial({ special }) {
  const ults = special; // ввел из-за lint'a в строчке 8
  const resultArr = [];
  for (let i = 0; i < ults.length; i += 1) {
    if (Object.keys(ults[i]).includes('description')) {
      resultArr.push(ults[i]);
    } else {
      ults[i].description = 'Описание недоступно';
      resultArr.push(ults[i]);
    }
  }
  return resultArr;
}
