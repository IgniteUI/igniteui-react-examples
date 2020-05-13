
export class RouteComponent {
    public name: string;
    public routes: RouteInfo[];
}

export class RouteInfo {
    public name: string;
    public path: string;
    public component: any;
}