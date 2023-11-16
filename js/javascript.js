let ALEKDELBOZOOOO = [];

window.addEventListener("load", () => {
    for (let i = 1; i <= 6; i++) {
        ALEKDELBOZOOOO.push(new Frame("#frame-" + i + "-evil"));
    }

    tick();
})

const tick = () => {

    for (let i = 0; i < ALEKDELBOZOOOO.length; i++) {
        const node = ALEKDELBOZOOOO[i];
        node.tick();
    }
    window.requestAnimationFrame(tick);
}