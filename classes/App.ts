export default class App {
    title: string;
    icon: string;
    minimized: boolean;
    maximized: boolean;
    maximizable: boolean;
    running: boolean;
    locked: boolean;
    size: string;
    zIndex: string;

    solid: boolean;

   
    constructor(args) {
        this.title = args?.title
        this.icon = args?.icon
        this.minimized = args.minimized ?? false
        this.maximized = args.maximized ?? false
        this.maximizable = args.maximizable ?? true
        this.running = args.running ?? false
        this.zIndex = args.zIndex ?? 20
        this.locked = args.locked ?? false

        this.solid = args.solid ?? false

        this.size = args.size ?? "min-w-7xl min-h-5xl"
    }

    toggleMinimize() {
        this.minimized = !this.minimized
    }

    
    toggleMaximize() {
        if (this.maximizable)
            this.maximized = !this.maximized
    }
  }
   