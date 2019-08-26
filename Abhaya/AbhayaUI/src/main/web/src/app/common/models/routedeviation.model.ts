import { PageModel } from './page.model';
export class RouteDeviation {
    public deviationId: Number;
    public createdDate: string;
    public deviationTime: string;
    public location: string;
    public page: PageModel;
    public content: any;
}
