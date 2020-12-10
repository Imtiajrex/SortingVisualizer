import sleep from "./Sleep";

async function InsertionSort(arr, set, time) {
  let array = arr.slice(0);
  let len = array.length;
  for (let i = 1; i < len; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0) {
      if (array[j].height <= key.height) break;
      array[j].current = true;
      array[j + 1].current = true;
      set(array);
      await sleep(time);
      array[j].current = false;
      array[j + 1].current = false;
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      set(array);
      await sleep(time);
      j--;
    }

    array.map((element, index) => {
      if (index <= i) element.notsure = true;
      else return;
    });
    array[j + 1] = key;
  }
  array.map((element) => {
    element.current = false;
    element.sorted = true;
  });
  set(array);
}
export default InsertionSort;
