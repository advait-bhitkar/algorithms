import { speed } from "../general/general.js";

// Promise to swap two blocks
export function upAnimation(el1) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    // var temp = el1.style.transform;
    //el1.style.transform = null;
    //style.zIndex = "1"

    // el1.style.zIndex = "100";

    el1.style.transform += "translateY(-300px)";
    // el2.style.transform = temp;

    // var x = anime({
    //   targets: el1,
    //   translateY: -300,
    //   duration: 250 * speed(),
    //   easing: "linear",
    //   loop: false,
    // });

    // window.requestAnimationFrame(function () {
    //   // For waiting for .25 sec
    //   setTimeout(() => {
    //     //container.insertBefore(el2, el1);

    //     resolve();
    //   }, 750 * speed());
    // });
  });
}
