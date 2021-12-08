export default class Options {
    constructor(simulation, canvas) {
        this.simulation = simulation;
        this.canvas = canvas;
        // bind the context for the 'handleClick' function
        this.handleClick = this.handleClick.bind(this);
        this.bindEvents();
    }
}