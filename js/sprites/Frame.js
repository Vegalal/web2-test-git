class Frame {
    constructor(id) {
        this.id = id;
        this.node = document.querySelector(this.id)
        this.opacity = 0.000
        this.tmpop = 0
        this.speed = 0.002

        this.node.onmouseover = () => {
           this.speed = -this.speed
           
        }

        this.node.onmouseout = () => {
            this.speed = -this.speed
         }
    }

    tick() {

        this.opacity += this.speed
        if(this.opacity < 1 || this.opacity > 0){
            this.node.style.opacity = this.opacity;
        }
    }
}