import Widget from "./Widget";

export default class App {
    title: string;
    icon: string;
    minimized: boolean;
    maximized: boolean;
    maximizable: boolean;
    resizeable: boolean;
    running: boolean;
    locked: boolean;
    size: string;
    zIndex: string;

    utility: boolean;

    solid: boolean;

    parentApp: string;

    widgets: Widget[];

    // children: App[];

   
    constructor(args) {
        this.title = args?.title
        this.icon = args?.icon
        this.minimized = args.minimized ?? false
        this.maximized = args.maximized ?? false
        this.maximizable = args.maximizable ?? true
        this.resizeable = args.resizeable ?? true
        this.running = args.running ?? false
        this.zIndex = args.zIndex ?? 20
        this.locked = args.locked ?? false

        this.utility = args.utility ?? false

        this.solid = args.solid ?? false

        this.parentApp = args.parentApp ?? ''

        this.size = args.size ?? "w-2xl h-xl sm:w-7xl sm:h-5xl "

        this.widgets = args.widgets ?? []
    }

    toggleMinimize() {
        this.minimized = !this.minimized
    }

    
    toggleMaximize() {
        if (this.maximizable)
            this.maximized = !this.maximized
    }

    // registerChildren(child: App) {
    //     this.children.push(child)
    //     return child
    // }

    // registerWidget(widget: Widget) {
    //     this.widgets.push(widget)
    //     return widget
    // }

    getWidget(id: number){
        return this.widgets.find(widget => widget.id === id)
    }

  }
   