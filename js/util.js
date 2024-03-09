function irAPaginaHTMLRelativoAURLPrimaria(pagina) {
    const c = window.location.href.split("/");
    c.pop();
    c.push(`${pagina}.html`);
    return c.join('/');
}

