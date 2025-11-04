"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerDocumentation = void 0;
const swagger_1 = require("@nestjs/swagger");
const BaseDocumentation_1 = require("../classes/BaseDocumentation");
class SwaggerDocumentation extends BaseDocumentation_1.BaseDocumentation {
    app;
    constructor(app) {
        super(app);
        this.app = app;
    }
    async build() {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Auth App')
            .setDescription('Documentación del API para el taller 4 - Autenticación y entidades')
            .setVersion('1.0')
            .setTermsOfService('https://example.com/terms')
            .setLicense('MIT', 'https://example.com/license')
            .addServer('http://localhost:3000')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(this.app, config);
        swagger_1.SwaggerModule.setup('api', this.app, document);
    }
}
exports.SwaggerDocumentation = SwaggerDocumentation;
//# sourceMappingURL=buildDocumentation.js.map