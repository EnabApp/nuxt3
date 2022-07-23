export default class App {
    title: string;
    icon: string;
    minimized: boolean;
    maximized: boolean;
    running: boolean;
    locked: boolean;

   
    constructor(title: string, icon: string) {
        this.title = title
        this.icon = icon
        this.minimized = false
        this.maximized = false
        this.running = false
        this.locked = true
    }

    toggleMinimize() {
        this.minimized = !this.minimized
    }

    
    toggleMaximize() {
        this.maximized = !this.maximized
    }
  }
   