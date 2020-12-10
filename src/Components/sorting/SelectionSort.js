import sleep from "./Sleep";

async function SelectionSort(arr, set, time) {
  let array = arr.slice(0);
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let min_index = i;
    array[i].current = true;
    for (let j = i + 1; j < len; j++) {
      array[min_index].current = true;
      array[j].current = true;
      set(array);
      await sleep(time);
      let prev_min_index = min_index;
      if (array[min_index].height > array[j].height) {
        min_index = j;
      }
      if (prev_min_index != i) array[prev_min_index].current = false;
      array[j].current = false;
      set(array);
    }
    let temp = array[i];
    array[i] = array[min_index];
    array[min_index] = temp;
    array[min_index].current = false;
    set(array);
    await sleep(time);

    array.map((element, index) => {
      if (index <= i && element.sorted === false) element.sorted = true;
      if (index > i) return;
    });
    await sleep(time);
    set(array);
  }
  array.map((element) => {
    element.sorted = true;
  });
  set(array);
}
export default SelectionSort;
