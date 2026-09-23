/**
 * TRIFFEN STREETWEAR — CORE JAVASCRIPT
 * Gerenciamento de Tema, Catálogo Dinâmico, Galeria com Zoom Lupa, Seletor de Tamanhos e Checkout WhatsApp.
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeManager();
    
    // Se estiver na página de produto
    if (document.querySelector('.page-product') || document.getElementById('main-product-img')) {
        initProductPage();
    }
});

/* ==========================================================================
   1. GERENCIAMENTO DE TEMA (DARK / LIGHT MODE COM LOCALSTORAGE)
   ========================================================================== */
function initThemeManager() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Recupera tema salvo ou usa escuro como padrão
    const savedTheme = localStorage.getItem('triffen-theme') || 'dark-mode';
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            const newTheme = isDark ? 'light-mode' : 'dark-mode';
            
            body.classList.replace(isDark ? 'dark-mode' : 'light-mode', newTheme);
            localStorage.setItem('triffen-theme', newTheme);
        });
    }
}

/* ==========================================================================
   2. PÁGINA DE PRODUTO DINÂMICA
   ========================================================================== */
function initProductPage() {
    // 2.1 Obter ID do produto pela URL (ex: produto.html?id=bege)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'bege';
    const product = getProductById(productId);

    if (!product) return;

    // Estado da seleção
    let currentImageIndex = 0;
    let selectedSize = product.sizes && product.sizes.length > 2 ? product.sizes[2].size : product.sizes[0].size; // Padrão "G" ou primeiro

    // 2.2 Preenchimento dos dados básicos no DOM
    document.title = `${product.name} | TRIFFEN Official`;

    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name.toUpperCase();

    const badgeEl = document.getElementById('product-badge');
    if (badgeEl) badgeEl.textContent = product.badge || product.category;

    const categoryEl = document.getElementById('product-category');
    if (categoryEl) categoryEl.textContent = product.category;

    const titleEl = document.getElementById('product-title');
    if (titleEl) titleEl.textContent = product.name;

    const priceEl = document.getElementById('product-price');
    if (priceEl) priceEl.textContent = product.priceFormatted;

    const installmentsEl = document.getElementById('product-installments');
    if (installmentsEl) installmentsEl.textContent = product.installments;

    const pixTextEl = document.getElementById('product-pix-text');
    if (pixTextEl) pixTextEl.textContent = product.pixDiscount;

    const descEl = document.getElementById('product-description-text');
    if (descEl) descEl.textContent = product.description;

    const shippingInfoEl = document.getElementById('product-shipping-info');
    if (shippingInfoEl) shippingInfoEl.textContent = product.shippingInfo;

    // Lista de Detalhes Técnicos
    const detailsList = document.getElementById('product-details-list');
    if (detailsList && product.details) {
        detailsList.innerHTML = product.details.map(d => `<li>${d}</li>`).join('');
    }

    // Lista de Cuidados
    const careList = document.getElementById('product-care-list');
    if (careList && product.care) {
        careList.innerHTML = product.care.map(c => `<li>${c}</li>`).join('');
    }

    // 2.3 Galeria de Imagens e Miniaturas
    const mainImg = document.getElementById('main-product-img');
    const thumbsContainer = document.getElementById('product-thumbnails');
    const zoomResult = document.getElementById('zoom-result');

    function updateGalleryImage(index) {
        currentImageIndex = index;
        const imgData = product.images[index];
        if (!imgData) return;

        mainImg.style.opacity = '0.3';
        setTimeout(() => {
            mainImg.src = imgData.src;
            mainImg.alt = imgData.alt || product.name;
            if (zoomResult) {
                zoomResult.style.backgroundImage = `url('${imgData.src}')`;
            }
            mainImg.style.opacity = '1';
        }, 150);

        // Atualiza estado ativo das miniaturas
        if (thumbsContainer) {
            const allThumbs = thumbsContainer.querySelectorAll('.thumb-btn');
            allThumbs.forEach((btn, i) => {
                btn.classList.toggle('is-active', i === index);
            });
        }
    }

    if (thumbsContainer && product.images && product.images.length > 0) {
        thumbsContainer.innerHTML = '';
        product.images.forEach((img, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `thumb-btn ${idx === 0 ? 'is-active' : ''}`;
            btn.setAttribute('aria-label', `Ver foto ${idx + 1} de ${product.name}`);
            btn.innerHTML = `<img src="${img.src}" alt="${img.alt || ''}">`;
            
            btn.addEventListener('click', () => updateGalleryImage(idx));
            btn.addEventListener('mouseenter', () => updateGalleryImage(idx));
            thumbsContainer.appendChild(btn);
        });

        // Configura imagem inicial
        updateGalleryImage(0);
    }

    // 2.4 Efeito Lupa / Hover Zoom de Alta Fidelidade
    initZoomMagnifier(mainImg, zoomResult);

    // 2.5 Seletor de Tamanhos
    const sizeGrid = document.getElementById('size-selector-grid');
    const selectedSizeLabel = document.getElementById('selected-size-label');
    const sizeStockFeedback = document.getElementById('size-stock-feedback');

    function updateSizeSelection(sizeObj) {
        selectedSize = sizeObj.size;
        if (selectedSizeLabel) selectedSizeLabel.textContent = selectedSize;
        if (sizeStockFeedback) {
            sizeStockFeedback.textContent = `Tamanho ${selectedSize}: ${sizeObj.stock || 'Disponível'}`;
        }

        if (sizeGrid) {
            const sizeBtns = sizeGrid.querySelectorAll('.size-btn');
            sizeBtns.forEach(btn => {
                const isActive = btn.dataset.size === selectedSize;
                btn.classList.toggle('is-selected', isActive);
                btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
            });
        }

        updateWhatsAppCTA();
    }

    if (sizeGrid && product.sizes) {
        sizeGrid.innerHTML = '';
        product.sizes.forEach(s => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `size-btn ${s.size === selectedSize ? 'is-selected' : ''}`;
            btn.dataset.size = s.size;
            btn.setAttribute('role', 'radio');
            btn.setAttribute('aria-checked', s.size === selectedSize ? 'true' : 'false');
            btn.textContent = s.size;

            btn.addEventListener('click', () => updateSizeSelection(s));
            sizeGrid.appendChild(btn);
        });

        const initialSizeObj = product.sizes.find(s => s.size === selectedSize) || product.sizes[0];
        updateSizeSelection(initialSizeObj);
    }

    // 2.6 Gerador de Link WhatsApp Inteligente
    function updateWhatsAppCTA() {
        const buyBtn = document.getElementById('product-buy-cta');
        if (!buyBtn) return;

        const rawMessage = `Olá, Triffen! 👋\n\nQuero garantir a *${product.name}* no tamanho *${selectedSize}* (${product.priceFormatted}).\n\nComo posso prosseguir com o pagamento e envio?`;
        const encoded = encodeURIComponent(rawMessage);
        buyBtn.href = `https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=${encoded}`;
    }

    // 2.7 Simulador de Frete por CEP
    initShippingSimulator();

    // 2.8 Modais: Tabela de Medidas & Lightbox
    initModals(product);

    // 2.9 Produtos Relacionados (Os outros 2 modelos)
    initRelatedProducts(product.id);
}

/* ==========================================================================
   3. MOTOR DO ZOOM LUPA (HOVER MAGNIFIER)
   ========================================================================== */
function initZoomMagnifier(mainImg, zoomResult) {
    const zoomContainer = document.getElementById('zoom-container');
    const zoomLens = document.getElementById('zoom-lens');
    if (!zoomContainer || !mainImg || !zoomLens || !zoomResult) return;

    const ZOOM_LEVEL = 2.4; // Fator de ampliação dos detalhes

    function moveLens(e) {
        const rect = zoomContainer.getBoundingClientRect();
        
        // Posição do cursor relativa ao contêiner
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        // Limites da lente
        const lensWidth = zoomLens.offsetWidth;
        const lensHeight = zoomLens.offsetHeight;

        let lensX = x - (lensWidth / 2);
        let lensY = y - (lensHeight / 2);

        // Previne que a lente saia das bordas
        if (lensX < 0) lensX = 0;
        if (lensY < 0) lensY = 0;
        if (lensX > rect.width - lensWidth) lensX = rect.width - lensWidth;
        if (lensY > rect.height - lensHeight) lensY = rect.height - lensHeight;

        zoomLens.style.left = `${lensX}px`;
        zoomLens.style.top = `${lensY}px`;

        // Calcula a porcentagem para mover o background do zoomResult
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        zoomResult.style.backgroundSize = `${rect.width * ZOOM_LEVEL}px ${rect.height * ZOOM_LEVEL}px`;
        zoomResult.style.backgroundPosition = `${percentX}% ${percentY}%`;
    }

    zoomContainer.addEventListener('mouseenter', (e) => {
        // Desativa em telas touch / mobile menores que 768px
        if (window.innerWidth <= 768) return;
        
        zoomResult.style.backgroundImage = `url('${mainImg.src}')`;
        zoomContainer.classList.add('is-active');
        moveLens(e);
    });

    zoomContainer.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        moveLens(e);
    });

    zoomContainer.addEventListener('mouseleave', () => {
        zoomContainer.classList.remove('is-active');
    });
}

/* ==========================================================================
   4. SIMULADOR DE FRETE (INTERATIVIDADE CEP)
   ========================================================================== */
function initShippingSimulator() {
    const cepInput = document.getElementById('cep-input');
    const calcBtn = document.getElementById('calc-shipping-btn');
    const resultsContainer = document.getElementById('shipping-results');

    if (!cepInput || !calcBtn || !resultsContainer) return;

    // Máscara automática de CEP (00000-000)
    cepInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 8) val = val.slice(0, 8);
        if (val.length > 5) {
            val = val.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = val;
    });

    function calculateShipping() {
        const rawCep = cepInput.value.replace(/\D/g, '');
        if (rawCep.length !== 8) {
            resultsContainer.innerHTML = `<p style="color: #ff5555; font-size: 0.85rem; padding: 0.4rem 0;">Por favor, digite um CEP válido com 8 dígitos.</p>`;
            resultsContainer.style.display = 'block';
            return;
        }

        resultsContainer.innerHTML = `<p style="font-size: 0.85rem; opacity: 0.7;">Calculando prazos e tarifas...</p>`;
        resultsContainer.style.display = 'block';

        setTimeout(() => {
            resultsContainer.innerHTML = `
                <div class="shipping-result-row">
                    <div>
                        <span class="shipping-result-name">SEDEX Expresso</span>
                        <span class="shipping-result-days">Chega em 1 a 2 dias úteis</span>
                    </div>
                    <span class="shipping-result-price">R$ 22,90</span>
                </div>
                <div class="shipping-result-row">
                    <div>
                        <span class="shipping-result-name">PAC Econômico</span>
                        <span class="shipping-result-days">Chega em 4 a 6 dias úteis</span>
                    </div>
                    <span class="shipping-result-price">R$ 14,90</span>
                </div>
                <div class="shipping-result-row" style="border: 1px solid rgba(0, 201, 167, 0.4);">
                    <div>
                        <span class="shipping-result-name">Frete Grátis Triffen</span>
                        <span class="shipping-result-days">Adicione mais itens (compras acima de R$ 299)</span>
                    </div>
                    <span class="shipping-result-free">GRÁTIS</span>
                </div>
            `;
        }, 350);
    }

    calcBtn.addEventListener('click', calculateShipping);
    cepInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            calculateShipping();
        }
    });
}

/* ==========================================================================
   5. MODAIS: TABELA DE MEDIDAS & LIGHTBOX FULLSCREEN
   ========================================================================== */
function initModals(product) {
    // 5.1 Modal Tabela de Medidas
    const sizeModal = document.getElementById('size-modal');
    const openSizeBtn = document.getElementById('open-size-modal-btn');
    const closeSizeBtn = document.getElementById('close-size-modal-btn');
    const tableBody = document.getElementById('size-table-body');

    if (tableBody && typeof TRIFFEN_SIZE_CHART !== 'undefined') {
        tableBody.innerHTML = TRIFFEN_SIZE_CHART.rows.map(row => `
            <tr>
                <td><strong>${row.size}</strong></td>
                <td>${row.chest}</td>
                <td>${row.length}</td>
                <td>${row.sleeve}</td>
                <td>${row.shoulder}</td>
            </tr>
        `).join('');
    }

    function openModal() {
        if (sizeModal) {
            sizeModal.classList.add('is-active');
            sizeModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (sizeModal) {
            sizeModal.classList.remove('is-active');
            sizeModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (openSizeBtn) openSizeBtn.addEventListener('click', openModal);
    if (closeSizeBtn) closeSizeBtn.addEventListener('click', closeModal);
    if (sizeModal) {
        sizeModal.addEventListener('click', (e) => {
            if (e.target === sizeModal) closeModal();
        });
    }

    // 5.2 Modal Lightbox para Imagem em Tela Cheia
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close-btn');
    const zoomContainer = document.getElementById('zoom-container');

    function openLightbox(imgSrc) {
        if (lightbox && lightboxImg) {
            lightboxImg.src = imgSrc;
            lightbox.classList.add('is-active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('is-active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (zoomContainer) {
        zoomContainer.addEventListener('click', () => {
            const mainImg = document.getElementById('main-product-img');
            if (mainImg) openLightbox(mainImg.src);
        });
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Fechar modais ao pressionar tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeLightbox();
        }
    });
}

/* ==========================================================================
   6. PRODUTOS RELACIONADOS (OUTROS MODELOS)
   ========================================================================== */
function initRelatedProducts(currentProductId) {
    const container = document.getElementById('related-products-grid');
    if (!container || typeof getAllProducts !== 'function') return;

    const otherProducts = getAllProducts().filter(p => p.id !== currentProductId);

    container.innerHTML = otherProducts.map(p => `
        <article class="product-card">
            <a class="product-card__link" href="produto.html?id=${p.id}" aria-label="Ver detalhes da ${p.name}">
                <div class="product-card__media">
                    <span class="product-card__tag">${p.badge || 'COLEÇÃO'}</span>
                    <img src="${p.images[0].src}" alt="${p.name}" class="product-card__img product-card__img--flat" loading="lazy">
                    <img src="${p.images[1] ? p.images[1].src : p.images[0].src}" alt="Modelo vestindo ${p.name}" class="product-card__img product-card__img--model" loading="lazy">
                </div>
                <div class="product-card__info">
                    <span class="product-card__category">${p.category}</span>
                    <h3 class="product-card__name">${p.name}</h3>
                    <div class="product-card__pricing">
                        <p class="product-card__price">${p.priceFormatted}</p>
                        <span class="product-card__installments">${p.installments}</span>
                    </div>
                    <span class="product-card__cta">VER PEÇA &amp; DETALHES &rarr;</span>
                </div>
            </a>
        </article>
    `).join('');
}