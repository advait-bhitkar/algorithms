import { speed } from "../general/general.js";

// Promise to swap two blocks
export function swap2(el1, el2, container) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    var x = anime({
      targets: el1,
      keyframes: [{ translateY: -100 }, { translateY: 0 }],
      duration: 250 * speed(),
      easing: "linear",
      loop: false,
    });

    var y = anime({
      targets: el2,
      keyframes: [{ translateY: 200 }, { translateY: 0 }],
      duration: 125 * speed(),
      easing: "linear",
      loop: false,
    });

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        //container.insertBefore(el2, el1);
        if (el1 != el2) {
          var tmp = el1.cloneNode(true);
          el1.parentNode.replaceChild(tmp, el1);
          el2.parentNode.replaceChild(el1, el2);
          tmp.parentNode.replaceChild(el2, tmp);
        }

        resolve();
      }, 750 * speed());
    });
  });
}
