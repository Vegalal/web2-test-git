let spriteList = [];

window.addEventListener("load", () => {
    for (let i = 1; i <= 6; i++) {
        spriteList.push(new Frame("#frame-" + i + "-evil"));
    }

    tick();
})

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i];
        node.tick();
    }

    window.requestAnimationFrame(tick);

}