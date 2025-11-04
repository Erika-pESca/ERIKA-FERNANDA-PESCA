"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const buildDocumentation_1 = require("./common/helpers/buildDocumentation");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const documentation = new buildDocumentation_1.SwaggerDocumentation(app);
    await documentation.build();
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
    console.log(` Documentación disponible en http://localhost:${PORT}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map