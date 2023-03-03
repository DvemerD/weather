const ChangeCssRootVariables = (theme) => {
    const root = document.querySelector(':root');

    const components = [
        'form-bgr', 'form-title-color',
        'form-btn-bgr', 'form-subtitle-color', 'weather-search-title', 'weather-search-content', 'weather-search-text',
        'weather-search-degree', 'weather-search-temp-name', 'weather-search-btn',
        'weather-search-form-bgr', 'weather-list-item-bgr',
        'weather-list-text', 'weather-list-degree', 'weather-list-temp-name',
        'weather-item-add', 'weather-item-add-line', 'circle-bgr-first',
        'circle-bgr-second', 'weather-info-header', 'burger-menu',
        'logo-text', 'header-bgr', 'header-title', 'toggle-name', 'toggle-boll',
        'menu-header-bgr', 'menu-list-text-color', 'menu-list-bgr', 'button-back-bgr',
        'spinner-second-circle', 'spinner-first-circle', 'body-bgr'
    ];

    components.forEach(component => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        )
    })
}

export default ChangeCssRootVariables;