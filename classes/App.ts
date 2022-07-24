export default class App {
    title: string;
    icon: string;
    minimized: boolean;
    maximized: boolean;
    running: boolean;
    locked: boolean;
    size: string;
    zIndex: string;

   
    constructor(args) {
        this.title = args?.title
        this.icon = args?.icon
        this.minimized = args.minimized ?? false
        this.maximized = args.maximized ?? false
        this.running = args.running ?? false
        this.zIndex = args.zIndex ?? 20
        this.locked = false

        this.size = args.size ?? "min-w-7xl min-h-5xl"
    }

    toggleMinimize() {
        this.minimized = !this.minimized
    }

    
    toggleMaximize() {
        this.maximized = !this.maximized
    }
  }
   