let spriteLists = [];

window.addEventListener("load", () => {
    for (let i = 1; i <= 6; i++) {
        spriteLists.push(new Frame("#frame-" + i + "-evil"));
    }

    tick();
})

const tick = () => {

    for (let i = 0; i < spriteLists.length; i++) {
        const node = spriteLists[i];
        node.tick();
    }
    window.requestAnimationFrame(tick);
}