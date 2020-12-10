import sleep from "./Sleep";

async function BubbleSort(arr, set, time) {
  let array = arr.slice(0);
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      array[j].current = true;
      array[j + 1].current = true;
      set(array);
      await sleep(time);
      if (array[j].height > array[j + 1].height) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
      array[j].current = false;
      array[j + 1].current = false;
      await sleep(time);
      set(array);
    }

    array.map((element, index) => {
      if (index >= len - i - 1 && element.sorted === false)
        element.sorted = true;
    });
    await sleep(time);
    if (swapped === false) break;
  }
  array.map((element) => {
    element.sorted = true;
  });
  set(array);
}
export default BubbleSort;
