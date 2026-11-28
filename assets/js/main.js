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
    "hero.eyebrow": "Libre y de código abierto · Windows · Linux · macOS",
    "hero.title": "Mira qué ocupa tu disco.<br>Deja tu equipo limpio otra vez.",
    "hero.lead": "Rewind OS encuentra archivos temporales, cachés, restos de programas desinstalados y archivos grandes olvidados, y los quita con seguridad. También te dice qué ralentiza tu equipo. Una app pequeña y rápida, escrita en Rust.",
    "hero.download": "Descargar para Windows",
    "hero.other": "Otros sistemas",
    "hero.meta": "Instalador MSI o zip portable · x64 y ARM64",
    "stats.rust": "Rust, nativa, sin vista web",
    "stats.ask": "archivos borrados sin preguntar",
    "stats.engine": "motor para la app, la CLI y los asistentes",
    "stats.licence": "código abierto, sin anuncios ni cuenta",
    "features.title": "Todo lo que llena un disco o ralentiza un equipo, en un solo sitio",
    "f1.tag": "Analizador de disco",
    "f1.title": "Descubre qué ocupa espacio, carpeta a carpeta",
    "f1.body": "Analiza cualquier disco o carpeta y míralo como lista, como mapa de bloques y con sus archivos más grandes.",
    "f1.l3": "Archivos duplicados, conservando siempre una copia",
    "f1.l4": "Archivos grandes que nadie toca desde hace un año",
    "f2.tag": "Limpieza de basura",
    "f2.title": "Temporales y cachés, marcados según lo seguros que son",
    "f2.body": "Temporales, cachés, instaladores antiguos y la papelera, cada categoría marcada según lo segura que es.",
    "f2.l2": "Solo se borran del todo las cachés que se regeneran solas",
    "f2.l3": "Encoge los discos virtuales de WSL y Docker",
    "f2.l5": "Paquetes de drivers y kernels de Linux antiguos, conservando siempre el más nuevo",
    "f3.tag": "Programas",
    "f3.title": "Desinstala y recoge lo que los programas dejan atrás",
    "f3.body": "Desinstala programas con su propio desinstalador y luego recoge las carpetas que dejan atrás.",
    "f3.l1": "Las claves del registro se muestran, nunca se borran",
    "f3.l2": "APT, RPM, pacman, Flatpak y Snap en Linux",
    "f4.tag": "Inicio y Windows",
    "f4.title": "Un arranque más rápido y un Windows más tranquilo",
    "f4.body": "Activa y desactiva programas de inicio, tareas programadas y servicios, y aligera Windows con ajustes que puedes deshacer.",
    "f4.l1": "Lo que necesita el sistema nunca se desactiva",
    "f5.tag": "Velocidad",
    "f5.title": "Descubre qué ralentiza tu equipo",
    "f5.body": "Mira cuánto tarda en arrancar tu equipo, qué programas usan más procesador y memoria, y el plan de energía.",
    "f5.l1": "Desactiva ahí mismo un programa que retrasa el arranque",
    "f5.l3": "Los programas del propio sistema nunca se cierran",
    "f6.tag": "Salud",
    "f6.title": "Entérate de cuándo se desgasta un disco o la batería",
    "f6.body": "Salud, temperatura, desgaste y errores de cada disco, y un aviso en Inicio antes de que falle.",
    "f6.l2": "Consultarlo no cambia nada",
    "f6.l3": "Los dispositivos con problemas de driver, nombrados en Inicio",
    "f6.l4": "Cuánta carga guarda todavía la batería, en todos los sistemas",
    "safety.title": "La seguridad, lo primero",
    "safety.lead": "Nunca debe dejar un equipo sin arrancar ni borrar tus archivos.",
    "s1.title": "Pregunta antes de actuar",
    "s1.body": "No se borra nada sin confirmación. En la línea de comandos, cada cambio necesita <code>--yes</code>.",
    "s2.title": "Papelera por defecto",
    "s2.body": "Tus archivos van a la papelera, así que puedes recuperarlos. Solo se borran del todo las cachés que se regeneran solas.",
    "s3.title": "Informes honestos",
    "s3.body": "Siempre informa de los archivos que no pudo quitar, las categorías omitidas por falta de permisos y los análisis detenidos.",
    "s4.title": "Usuario normal por defecto",
    "s4.body": "Arranca sin permisos de administrador y solo ofrece reiniciarse con ellos cuando una tarea los necesita.",
    "tui.title": "La interfaz de terminal",
    "tui.body": "Aquí en la vista de disco: carpetas por tamaño, Intro abre una, <kbd>f</kbd> muestra los archivos más grandes, <kbd>1</kbd>–<kbd>0</kbd> o un clic cambian de vista.",
    "cli.title": "Todo lo que hace la app, desde la línea de comandos",
    "cli.body": "Cada función es también un comando que puedes automatizar con <code>rewind-os-cli</code>. <code>rewind-os-cli mcp</code> deja que los asistentes de IA usen las mismas herramientas, solo lectura por defecto, y <code>rewind-os-cli tui</code> abre vistas a pantalla completa para servidores y SSH.",
    "dl.title": "Descargar",
    "dl.lead": "Gratis, sin cuenta y sin anuncios. Comprueba tu descarga con",
    "dl.win": "Windows 10 y 11, x64 y ARM64: el instalador MSI o un zip portable.",
    "dl.linux": "x64 y ARM64: .deb, .rpm, Flatpak o tar.gz.",
    "dl.mac": "macOS 11 o posterior, Apple silicon e Intel. Arrastra la app del .dmg a Aplicaciones.",
    "dl.macunsigned": "Aún sin notarizar: la primera vez, haz Control-clic en la app y elige Abrir.",
    "dl.releases": "Ir a las versiones",
    "dl.apt.title": "O con tu gestor de paquetes, que lo mantiene al día",
    "dl.ps": "O desde PowerShell",
    "dl.term": "O desde una terminal",
    "dl.copy": "Copiar",
    "dl.copied": "Copiado",
    "dl.nodesktop": "En un equipo sin escritorio, omite los paquetes recomendados (<code>--no-install-recommends</code> con apt) para instalar solo lo que necesita <code>rewind-os-cli</code>.",
    "dl.unsigned": "Aún sin firma de código: si SmartScreen avisa, elige «Más información» y luego «Ejecutar de todas formas».",
    "dl.version": "Última versión: {v}.",
    "footer.licence": "Código abierto con licencia MIT o Apache-2.0.",
    "alt.overview": "Inicio de Rewind OS: almacenamiento usado, espacio libre, espacio recuperable, memoria y un indicador de uso por unidad",
    "alt.analyzer": "Analizador de disco: tamaño total, archivos, carpetas y tiempo de análisis sobre una lista de carpetas y un mapa de árbol",
    "alt.cleanup": "Limpieza: basura encontrada, seleccionada para limpiar y dónde está la basura como barra apilada",
    "alt.programs": "Programas instalados: número, tamaño declarado por los instaladores, los programas como tarjetas y los detalles del elegido con un botón de desinstalar",
    "alt.tui": "rewind-os-cli tui en la vista de disco: las carpetas de /usr/share por tamaño, con la tercera elegida",
    "alt.startup": "Programas de inicio: qué arranca con el sistema, desactivados, necesarios para el sistema, las entradas como tarjetas y los detalles de la elegida con su interruptor",
    "alt.speed": "Velocidad de arranque: el último arranque, el tiempo hasta que el escritorio estuvo listo, el paso más lento y lo que más tardó en arrancar, cada uno con su tipo y duración",
    "alt.disks": "Salud de los discos: un SSD sano y un disco duro que requiere atención, con temperatura, horas encendido, sectores dañados y los motivos"
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

  var MACOS = [
    [/macos-universal\.dmg$/, ".dmg (Apple silicon + Intel)", true]
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
        fill("macos", MACOS, data.assets);
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

  // Tabs: the systems, and Linux's distributions. Without this script every panel shows.
  function osGuess() {
    var p = ((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent || "").toLowerCase();
    if (p.indexOf("win") >= 0) return "windows";
    if (p.indexOf("mac") >= 0 || p.indexOf("iphone") >= 0 || p.indexOf("ipad") >= 0) return "macos";
    if (p.indexOf("linux") >= 0 || p.indexOf("x11") >= 0) return "linux";
    return "windows";
  }

  function tabs(list, first) {
    var group = list.getAttribute("data-tabs");
    var buttons = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(name, focus) {
      buttons.forEach(function (b) {
        var on = b.getAttribute("data-tab") === name;
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
        if (on && focus) b.focus();
      });
      document.querySelectorAll('[data-panel^="' + group + ':"]').forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-panel") !== group + ":" + name;
      });
    }
    buttons.forEach(function (b, i) {
      b.addEventListener("click", function () { select(b.getAttribute("data-tab")); });
      b.addEventListener("keydown", function (e) {
        var step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!step) return;
        e.preventDefault();
        var next = buttons[(i + step + buttons.length) % buttons.length];
        select(next.getAttribute("data-tab"), true);
      });
    });
    select(first);
  }

  document.documentElement.classList.add("js");
  var osList = document.querySelector('[data-tabs="os"]');
  // `#windows`, `#macos` or `#linux` opens that system's tab, to link to its instructions.
  var linked = (location.hash || "").slice(1);
  if (osList) tabs(osList, /^(windows|macos|linux)$/.test(linked) ? linked : osGuess());
  if (/^(windows|macos|linux)$/.test(linked)) {
    var section = document.getElementById("download");
    if (section) section.scrollIntoView();
  }
  var distroList = document.querySelector('[data-tabs="distro"]');
  if (distroList) tabs(distroList, "debian");

  // A copy button on each install block: the commands only, without prompts and comments.
  document.querySelectorAll(".download pre.terminal").forEach(function (pre) {
    if (!navigator.clipboard) return;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.setAttribute("data-i18n", "dl.copy");
    button.textContent = lang === "es" ? ES["dl.copy"] : "Copy";
    button.addEventListener("click", function () {
      var lines = [];
      pre.querySelector("code").innerText.split("\n").forEach(function (line) {
        if (/^\s*#/.test(line) || !line.trim()) return;
        lines.push(line.replace(/^\s*[$>]\s?/, ""));
      });
      navigator.clipboard.writeText(lines.join("\n")).then(function () {
        button.textContent = lang === "es" ? ES["dl.copied"] : "Copied";
        setTimeout(function () { button.textContent = lang === "es" ? ES["dl.copy"] : "Copy"; }, 1500);
      });
    });
    // Outside the scrolling block, so it stays put when a long line scrolls.
    var box = document.createElement("div");
    box.className = "term-box";
    pre.parentNode.insertBefore(box, pre);
    box.appendChild(pre);
    box.appendChild(button);
    // A hidden distribution's block hides its button too.
    new MutationObserver(function () { box.hidden = pre.hidden; }).observe(pre, { attributes: true, attributeFilter: ["hidden"] });
    box.hidden = pre.hidden;
  });
})();
