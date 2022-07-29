import Widget from "./Widget";

export default class App {
    id: number;
    // Component name
    name: string;

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
    subApps: App[];

    // children: App[];

   
    constructor(args) {
        this.id = args?.id
        this.name = args?.name

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
        this.subApps = args.subApps ?? []
    }

    toggleRunning(){
        this.running = !this.running
        this.minimized = false
        if (!this.running)
            this.subApps.forEach(app => app.running = false)
    }

    toggleMinimize() {
        this.minimized = !this.minimized
    }

    
    toggleMaximize() {
        if (this.maximizable)
            this.maximized = !this.maximized
    }

    getWidget(id: number){
        return this.widgets.find(widget => widget.id === id)
    }

    getSubApp(id: number){
        return this.subApps.find(app => app.id === id)
    }
}