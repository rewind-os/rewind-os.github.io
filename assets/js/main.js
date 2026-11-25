// Rewind OS landing: English/Spanish text and direct download links from the latest release.
// The page works without this script: every link falls back to the releases page.
(function () {
  "use strict";

  var REPO = "rewind-os/rewind-os-app";

  var ES = {
    "nav.features": "Funciones",
    "nav.safety": "Seguridad",
    "nav.cli": "Línea de comandos",
    "nav.download": "Descargar",
    "hero.eyebrow": "Libre y de código abierto · Windows · Linux",
    "hero.title": "Mira qué ocupa tu disco.<br>Deja tu equipo limpio otra vez.",
    "hero.lead": "Rewind OS encuentra archivos temporales, cachés, restos de programas que desinstalaste, archivos grandes olvidados y programas que arrancan sin motivo, y los quita con seguridad. Una app pequeña, rápida y nativa, escrita solo en Rust.",
    "hero.download": "Descargar para Windows",
    "hero.other": "Otros sistemas",
    "hero.meta": "Instalador MSI o zip portable · x64 y ARM64",
    "stats.rust": "Rust, nativa, sin vista web",
    "stats.ask": "archivos borrados sin preguntar",
    "stats.engine": "motor para la app, la CLI y los asistentes",
    "stats.licence": "código abierto, sin anuncios ni cuenta",
    "features.title": "Todo lo que llena un disco, en un solo sitio",
    "f1.tag": "Analizador de disco",
    "f1.title": "Descubre qué ocupa espacio, carpeta a carpeta",
    "f1.body": "Analiza en paralelo cualquier unidad o carpeta y lo muestra como lista ordenada, mapa de árbol, archivos más grandes y tamaño por tipo de archivo. Abre cualquier cosa en el explorador o muévela a la papelera.",
    "f1.l1": "Los enlaces duros cuentan una vez, así las carpetas del sistema muestran su tamaño real",
    "f1.l2": "Nunca sigue enlaces simbólicos ni uniones",
    "f1.l3": "Archivos duplicados por contenido, conservando siempre una copia",
    "f2.tag": "Limpieza de basura",
    "f2.title": "Temporales y cachés, marcados según lo seguros que son",
    "f2.body": "Descargas de actualizaciones, informes de errores, cachés de navegadores y apps, cachés de gestores de paquetes, instaladores viejos y la papelera. Cada categoría dice si es segura, si se vuelve a generar y si necesita permisos de administrador.",
    "f2.l1": "Los archivos que un programa tiene abiertos se saltan y se informan",
    "f2.l2": "Solo se borran del todo las cachés que se regeneran solas",
    "f3.tag": "Programas",
    "f3.title": "Desinstala y recoge lo que los programas dejan atrás",
    "f3.body": "Los programas instalados con su icono, tamaño y fecha, cada uno con su propio desinstalador. Después, Rewind OS encuentra las carpetas a las que ya no se refiere ningún programa instalado y las manda a la papelera.",
    "f3.l1": "Las claves de registro de programas quitados se informan, nunca se borran",
    "f3.l2": "APT, RPM, pacman, Flatpak y Snap en Linux",
    "f4.tag": "Inicio y Windows",
    "f4.title": "Un arranque más rápido y un Windows más tranquilo",
    "f4.body": "Activa y desactiva los programas de inicio, las tareas programadas que se añaden ellos mismos y sus servicios. Aligera Windows quitando anuncios, sugerencias y seguimiento con una lista cerrada de ajustes documentados, todos reversibles.",
    "f4.l1": "Lo que el sistema necesita se puede activar, nunca desactivar",
    "f4.l2": "Los servicios pasan a iniciarse cuando hacen falta, nunca se deshabilitan",
    "safety.title": "La seguridad, lo primero",
    "safety.lead": "Un limpiador nunca debe dejar un equipo sin arrancar ni borrar archivos personales. Cada borrado pasa por una única protección, con pruebas para cada sitio que puede tocar.",
    "s1.title": "Pregunta antes de actuar",
    "s1.body": "No se borra nada sin confirmación. En la línea de comandos, cada cambio necesita <code>--yes</code>.",
    "s2.title": "Papelera por defecto",
    "s2.body": "Tus archivos van a la papelera, así que puedes recuperarlos. Solo se borran del todo las cachés que se regeneran solas.",
    "s3.title": "Informes honestos",
    "s3.body": "Siempre informa de los archivos que no pudo quitar, las categorías omitidas por falta de permisos y los análisis detenidos.",
    "s4.title": "Usuario normal por defecto",
    "s4.body": "Arranca sin permisos de administrador y solo ofrece reiniciarse con ellos cuando una tarea los necesita.",
    "cli.title": "Todo lo que hace la app, desde la línea de comandos",
    "cli.body": "Un mismo motor mueve la app de escritorio y <code>rewind-os-cli</code>, así que cada función es también un comando que puedes automatizar. Con <code>rewind-os-cli mcp</code>, los asistentes usan las mismas herramientas mediante el Model Context Protocol: solo lectura salvo que abras más, una opción cada vez.",
    "dl.title": "Descargar",
    "dl.lead": "Gratis, sin cuenta y sin anuncios. Comprueba tu descarga con",
    "dl.win": "Windows 10 y 11, x64 y ARM64. Instálala con el MSI (menú Inicio, desinstalar desde Configuración) o usa el zip portable sin instalar.",
    "dl.linux": "x64 y ARM64: un .deb para Debian y Ubuntu, un .rpm para Fedora y openSUSE, un paquete Flatpak o un tar.gz.",
    "dl.mac": "El motor ya funciona en macOS y se comprueba en cada cambio. Las descargas llegarán pronto; mientras, compílala con Rust.",
    "dl.releases": "Ir a las versiones",
    "dl.build": "Compilar el código",
    "dl.unsigned": "Las versiones aún no están firmadas, así que Windows SmartScreen puede avisar la primera vez: elige «Más información» y luego «Ejecutar de todas formas».",
    "dl.version": "Última versión: {v}.",
    "footer.licence": "Código abierto con licencia MIT o Apache-2.0.",
    "alt.overview": "Inicio de Rewind OS: almacenamiento usado, espacio libre, espacio recuperable, memoria y un indicador de uso por unidad",
    "alt.analyzer": "Analizador de disco: tamaño total, archivos, carpetas y tiempo de análisis sobre una lista de carpetas y un mapa de árbol",
    "alt.cleanup": "Limpieza: basura encontrada, seleccionada para limpiar y dónde está la basura como barra apilada",
    "alt.programs": "Programas instalados: número, tamaño declarado por los instaladores, los programas como tarjetas y los detalles del elegido con un botón de desinstalar",
    "alt.startup": "Programas de inicio: qué arranca con el sistema, desactivados, necesarios para el sistema, las entradas como tarjetas y los detalles de la elegida con su interruptor"
  };

  var english = {};
  var lang = "en";
  var version = null;

  function stored() {
    try { return window.localStorage.getItem("lang"); } catch (e) { return null; }
  }
  function store(value) {
    try { window.localStorage.setItem("lang", value); } catch (e) { /* private mode */ }
  }

  function apply(next) {
    lang = next;
    document.documentElement.lang = next;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in english)) english[key] = el.innerHTML;
      el.innerHTML = next === "es" && ES[key] ? ES[key] : english[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (!(key in english)) english[key] = el.getAttribute("alt");
      el.setAttribute("alt", next === "es" && ES[key] ? ES[key] : english[key]);
    });
    var button = document.getElementById("lang");
    if (button) {
      button.textContent = next === "es" ? "EN" : "ES";
      button.setAttribute("aria-label", next === "es" ? "English" : "Español");
    }
    showVersion();
  }

  function showVersion() {
    var el = document.getElementById("dl-version");
    if (!el || !version) return;
    el.textContent = lang === "es" ? ES["dl.version"].replace("{v}", version) : "Latest version: " + version + ".";
  }

  // Direct links to the files of the latest release.
  var WINDOWS = [
    [/windows-x64\.msi$/, "MSI x64", true],
    [/windows-arm64\.msi$/, "MSI ARM64"],
    [/windows-x64-portable\.zip$/, "Portable x64"],
    [/windows-arm64-portable\.zip$/, "Portable ARM64"]
  ];
  var LINUX = [
    [/_amd64\.deb$/, ".deb x64"],
    [/\.x86_64\.rpm$/, ".rpm x64"],
    [/linux-x64\.flatpak$/, "Flatpak x64"],
    [/linux-x64\.tar\.gz$/, "tar.gz x64"],
    [/_arm64\.deb$/, ".deb ARM64"],
    [/\.aarch64\.rpm$/, ".rpm ARM64"],
    [/linux-arm64\.flatpak$/, "Flatpak ARM64"],
    [/linux-arm64\.tar\.gz$/, "tar.gz ARM64"]
  ];

  function fill(os, rules, assets) {
    var box = document.querySelector('.dl-links[data-os="' + os + '"]');
    if (!box) return;
    var links = [];
    rules.forEach(function (rule) {
      var asset = assets.find(function (a) { return rule[0].test(a.name); });
      if (!asset) return;
      var a = document.createElement("a");
      a.className = rule[2] ? "btn primary" : "btn";
      a.href = asset.browser_download_url;
      a.textContent = rule[1];
      links.push(a);
    });
    if (links.length) box.replaceChildren.apply(box, links);
  }

  function release() {
    if (!window.fetch) return;
    fetch("https://api.github.com/repos/" + REPO + "/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !Array.isArray(data.assets)) return;
        version = data.tag_name || null;
        var msi = data.assets.find(function (a) { return /windows-x64\.msi$/.test(a.name); });
        var main = document.getElementById("download-main");
        if (msi && main) main.href = msi.browser_download_url;
        fill("windows", WINDOWS, data.assets);
        fill("linux", LINUX, data.assets);
        showVersion();
      })
      .catch(function () { /* offline or rate-limited: the releases page links stay */ });
  }

  var initial = stored() || ((navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en");
  if (initial === "es") apply("es");
  var toggle = document.getElementById("lang");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = lang === "es" ? "en" : "es";
      store(next);
      apply(next);
    });
  }
  release();
})();
