import { INestApplication } from '@nestjs/common';
import { IDocumentation } from '../interfaces/IDocumentation';
export declare abstract class BaseDocumentation implements IDocumentation {
    protected readonly app: INestApplication;
    constructor(app: INestApplication);
    abstract build(): Promise<void>;
}
