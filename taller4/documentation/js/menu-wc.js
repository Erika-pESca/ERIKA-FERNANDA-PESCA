'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">taller3 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' :
                                            'id="xs-controllers-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' :
                                        'id="xs-injectables-links-module-AuthModule-5b9a0cd5b2234b276794b77546860e828a91b4e142abb264a04e597955e6ee1cddecf8d0c627e45176424737dc89622057f33660814866e2e1288f88084d2b02"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriaModule.html" data-type="entity-link" >CategoriaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' : 'data-bs-target="#xs-controllers-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' :
                                            'id="xs-controllers-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' : 'data-bs-target="#xs-injectables-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' :
                                        'id="xs-injectables-links-module-CategoriaModule-229a0990ae1f76be39f54fc2c3bb608573fb27dc7bc25f1767e14a53f231c6c2c87d8eb15046e0f41894e39693bcbbacc03f9cdbadf314ed988fe8f48a0347eb"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacturacionModule.html" data-type="entity-link" >FacturacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' : 'data-bs-target="#xs-controllers-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' :
                                            'id="xs-controllers-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' }>
                                            <li class="link">
                                                <a href="controllers/FacturacionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' : 'data-bs-target="#xs-injectables-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' :
                                        'id="xs-injectables-links-module-FacturacionModule-b74e0e55d202d4e968ac1a154be5bbbc65e9fbd9aeecf8522dbe82c67d33792e0911ff6095f27927d7a95fc359a468b9efe08ffa900715c07f60eb3ef0603727"' }>
                                        <li class="link">
                                            <a href="injectables/FacturacionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacturacionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductoModule.html" data-type="entity-link" >ProductoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' : 'data-bs-target="#xs-controllers-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' :
                                            'id="xs-controllers-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' }>
                                            <li class="link">
                                                <a href="controllers/ProductoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' : 'data-bs-target="#xs-injectables-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' :
                                        'id="xs-injectables-links-module-ProductoModule-ad63e5db4e625a432c9a7b948616d7370dd3b3917127b8b614920ae0d67f298c6717e9bd6163ed3926ddbc8298cc31434cc8e502ddda9e034b24eb2068da98a8"' }>
                                        <li class="link">
                                            <a href="injectables/ProductoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProveedorModule.html" data-type="entity-link" >ProveedorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' : 'data-bs-target="#xs-controllers-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' :
                                            'id="xs-controllers-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' }>
                                            <li class="link">
                                                <a href="controllers/ProveedorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProveedorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' : 'data-bs-target="#xs-injectables-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' :
                                        'id="xs-injectables-links-module-ProveedorModule-f52a0270c1eb75d39b64241f06b66e093324c3d72d98c36c4432bb192c0586f9718aaa32f2a9729b02a2274710f8e209e2915cd874cbe2a3ce625a103c09e80a"' }>
                                        <li class="link">
                                            <a href="injectables/ProveedorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProveedorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link" >UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' : 'data-bs-target="#xs-controllers-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' :
                                            'id="xs-controllers-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' }>
                                            <li class="link">
                                                <a href="controllers/UsuarioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' : 'data-bs-target="#xs-injectables-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' :
                                        'id="xs-injectables-links-module-UsuarioModule-37f8229f2259b1cf415e24dfccd3a1eb2c0b86c275046240cff38003f7bc0b315d6e938902ba76d8896cf350470705e47f7d83e53c2d1be3ae1dadd6ad19c4d4"' }>
                                        <li class="link">
                                            <a href="injectables/FacturacionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturacionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VentasRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VentaProductoModule.html" data-type="entity-link" >VentaProductoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' : 'data-bs-target="#xs-controllers-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' :
                                            'id="xs-controllers-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' }>
                                            <li class="link">
                                                <a href="controllers/VentaProductoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaProductoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' : 'data-bs-target="#xs-injectables-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' :
                                        'id="xs-injectables-links-module-VentaProductoModule-dffa20da5ec4e9beb300baf1013e2cdabf026d5f4cd06f7a854311765d42ba211438c7c99d90d5db40c32e03da2b2aa8edbc90636c375c7fdd3336168774f0dd"' }>
                                        <li class="link">
                                            <a href="injectables/VentaProductoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaProductoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VentasModule.html" data-type="entity-link" >VentasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' : 'data-bs-target="#xs-controllers-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' :
                                            'id="xs-controllers-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' }>
                                            <li class="link">
                                                <a href="controllers/VentasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' : 'data-bs-target="#xs-injectables-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' :
                                        'id="xs-injectables-links-module-VentasModule-bce0a29ea32c321b16c32ef8f4d7999c355f71728cea6764a6e55aab9d17dbea4af3bd869bca9f7b3c6621bbd13075ccc95b159b26f81ba7c1abb219b448ef0d"' }>
                                        <li class="link">
                                            <a href="injectables/VentasRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VentasService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriaController.html" data-type="entity-link" >CategoriaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FacturacionController.html" data-type="entity-link" >FacturacionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductoController.html" data-type="entity-link" >ProductoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProveedorController.html" data-type="entity-link" >ProveedorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuarioController.html" data-type="entity-link" >UsuarioController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VentaProductoController.html" data-type="entity-link" >VentaProductoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VentasController.html" data-type="entity-link" >VentasController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Categoria.html" data-type="entity-link" >Categoria</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Facturacion.html" data-type="entity-link" >Facturacion</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Producto.html" data-type="entity-link" >Producto</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Proveedor.html" data-type="entity-link" >Proveedor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Usuario.html" data-type="entity-link" >Usuario</a>
                                </li>
                                <li class="link">
                                    <a href="entities/VentaProducto.html" data-type="entity-link" >VentaProducto</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Ventas.html" data-type="entity-link" >Ventas</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseDocumentation.html" data-type="entity-link" >BaseDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoriaDto.html" data-type="entity-link" >CreateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacturacionDto.html" data-type="entity-link" >CreateFacturacionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductoDto.html" data-type="entity-link" >CreateProductoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateVentaDto.html" data-type="entity-link" >CreateVentaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultResponse.html" data-type="entity-link" >DefaultResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultSuccessResponse.html" data-type="entity-link" >DefaultSuccessResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerDocumentation.html" data-type="entity-link" >SwaggerDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoriaDto.html" data-type="entity-link" >UpdateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacturacionDto.html" data-type="entity-link" >UpdateFacturacionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductoDto.html" data-type="entity-link" >UpdateProductoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateVentaDto.html" data-type="entity-link" >UpdateVentaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VentaProducto.html" data-type="entity-link" >VentaProducto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriaService.html" data-type="entity-link" >CategoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacturacionRepository.html" data-type="entity-link" >FacturacionRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacturacionService.html" data-type="entity-link" >FacturacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductoService.html" data-type="entity-link" >ProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProveedorService.html" data-type="entity-link" >ProveedorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioRepository.html" data-type="entity-link" >UsuarioRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link" >UsuarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaProductoService.html" data-type="entity-link" >VentaProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentasRepository.html" data-type="entity-link" >VentasRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentasService.html" data-type="entity-link" >VentasService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IDefaultResponse.html" data-type="entity-link" >IDefaultResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDocumentation.html" data-type="entity-link" >IDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISuccessResponse.html" data-type="entity-link" >ISuccessResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});