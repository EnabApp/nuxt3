export default class App {
    title: string;
    icon: string;
    minimized: boolean;
    maximized: boolean;
    running: boolean;
    locked: boolean;
    size: string;

   
    constructor(title: string, icon: string, size: string) {
        this.title = title
        this.icon = icon
        this.minimized = false
        this.maximized = false
        this.running = false
        this.locked = false

        this.size = size ?? "min-w-7xl min-h-5xl"
    }

    toggleMinimize() {
        this.minimized = !this.minimized
    }

    
    toggleMaximize() {
        this.maximized = !this.maximized
    }
  }
   