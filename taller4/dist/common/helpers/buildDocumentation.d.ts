import { INestApplication } from '@nestjs/common';
import { BaseDocumentation } from '../classes/BaseDocumentation';
export declare class SwaggerDocumentation extends BaseDocumentation {
    protected readonly app: INestApplication;
    constructor(app: INestApplication);
    build(): Promise<void>;
}
