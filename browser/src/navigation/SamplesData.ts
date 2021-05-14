export class RoutingGroup {
    public name: string;
    // public path: string;
    public components: RoutingComponent[];
}

export class RoutingComponent {
    public name: string;
    // public path: string;
    public routes: RoutingSample[];
}

export class RoutingSample {
    public name: string;
    public path: string;
    public component: any;
}