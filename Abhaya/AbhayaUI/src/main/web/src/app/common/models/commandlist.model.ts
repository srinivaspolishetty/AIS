import { PageModel } from './page.model';

export class Commandlist {
    public taskId: Number;
    public header: string;
    public randomCode: string;
    public smsStatus: string;
    public replyGatewayNumber: string;
    public payload: string;
    public imeiNumber: string;
    public commandName: string;
    public deviceResponse: string;
    public deviceResponseTime: string;
    public requestCommandName: string;
    public responseCommandName: string;
    public description: string;
    public deviceResponseStatus : string;
    public createdDate: string;
    public page: PageModel;
    public content: any;
}
