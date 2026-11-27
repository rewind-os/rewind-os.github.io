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
    "hero.lead": "Rewind OS encuentra archivos temporales, cachés, restos de programas que desinstalaste, archivos grandes olvidados y programas que arrancan sin motivo, y los quita con seguridad. También muestra qué ralentiza tu equipo y si tus discos están fallando. Una app pequeña, rápida y nativa, escrita solo en Rust.",
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
    "f1.body": "Analiza en paralelo cualquier unidad o carpeta y lo muestra como lista ordenada, mapa de árbol, archivos más grandes y tamaño por tipo de archivo. Abre cualquier cosa en el explorador o muévela a la papelera.",
    "f1.l1": "Los enlaces duros cuentan una vez, así las carpetas del sistema muestran su tamaño real",
    "f1.l2": "Nunca sigue enlaces simbólicos ni uniones",
    "f1.l3": "Archivos duplicados por contenido, conservando siempre una copia",
    "f1.l4": "Archivos grandes que nadie ha cambiado en más de un año, sin los que necesitan los programas",
    "f2.tag": "Limpieza de basura",
    "f2.title": "Temporales y cachés, marcados según lo seguros que son",
    "f2.body": "Descargas de actualizaciones, informes de errores, cachés de navegadores y apps, cachés de gestores de paquetes, instaladores viejos y la papelera. Cada categoría dice si es segura, si se vuelve a generar y si necesita permisos de administrador.",
    "f2.l1": "Los archivos que un programa tiene abiertos se saltan y se informan",
    "f2.l2": "Solo se borran del todo las cachés que se regeneran solas",
    "f2.l3": "Compacta los discos virtuales de WSL y Docker Desktop, que nunca encogen solos",
    "f2.l4": "Borra los puntos de restauración antiguos de Windows y conserva siempre el más reciente de cada unidad",
    "f2.l5": "Quita los paquetes de drivers antiguos de Windows que no usa ningún dispositivo; la versión más nueva de cada driver se queda siempre",
    "f2.l6": "Quita los kernels de Linux antiguos con APT; el kernel en uso y el más nuevo se quedan siempre",
    "f3.tag": "Programas",
    "f3.title": "Desinstala y recoge lo que los programas dejan atrás",
    "f3.body": "Los programas instalados con su icono, tamaño y fecha, cada uno con su propio desinstalador. Después, Rewind OS encuentra las carpetas a las que ya no se refiere ningún programa instalado y las manda a la papelera.",
    "f3.l1": "Las claves de registro de programas quitados se informan, nunca se borran",
    "f3.l2": "APT, RPM, pacman, Flatpak y Snap en Linux",
    "f4.tag": "Inicio y Windows",
    "f4.title": "Un arranque más rápido y un Windows más tranquilo",
    "f4.body": "Activa y desactiva los programas de inicio, las tareas programadas que se añaden ellos mismos y sus servicios. En macOS, también los agentes de inicio y las apps que se abren al iniciar sesión; un elemento de inicio de sesión que desactivas se puede volver a activar tal como estaba. Aligera Windows quitando anuncios, sugerencias y seguimiento con una lista cerrada de ajustes documentados, todos reversibles.",
    "f4.l1": "Lo que el sistema necesita se puede activar, nunca desactivar",
    "f4.l2": "Los servicios pasan a iniciarse cuando hacen falta, nunca se deshabilitan",
    "f5.tag": "Velocidad",
    "f5.title": "Descubre qué ralentiza tu equipo",
    "f5.body": "Mira cuánto tarda el equipo en arrancar y qué lo hizo más lento, según los propios registros del sistema. Mira qué programas abiertos usan más procesador y memoria ahora mismo, y cierra uno. Cambia el plan de energía cuando el equipo ahorra energía a costa de la velocidad.",
    "f5.l1": "Un programa que retrasa el arranque se puede desactivar ahí mismo",
    "f5.l2": "A los programas se les pide cerrarse como al cerrar su ventana; forzarlo vuelve a preguntar",
    "f5.l3": "Nunca cierra los programas del sistema ni los de otras cuentas",
    "f6.tag": "Salud de los discos",
    "f6.title": "Entérate antes de que un disco falle",
    "f6.body": "Lo que cada disco dice de sí mismo: su salud, temperatura, desgaste, horas encendido y errores. Si uno falla o requiere atención, Inicio lo avisa lo primero, para que copies tus archivos a tiempo. Optimiza los discos como hace el sistema por su cuenta: TRIM en los SSD y desfragmentación de discos duros en Windows.",
    "f6.l1": "Un disco que dice estar bien también recibe un aviso si sus cifras dicen lo contrario",
    "f6.l2": "Leer no cambia nada; optimizar pregunta antes y no borra nada",
    "f6.l3": "En Windows, Inicio también nombra el dispositivo que ha dejado de funcionar por su driver y abre el Administrador de dispositivos",
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
    "tui.title": "La interfaz de terminal",
    "tui.body": "Aquí en la vista de disco: carpetas por tamaño, Intro abre una, <kbd>f</kbd> muestra los archivos más grandes, <kbd>1</kbd>–<kbd>0</kbd> o un clic cambian de vista.",
    "cli.title": "Todo lo que hace la app, desde la línea de comandos",
    "cli.body": "Un mismo motor mueve la app de escritorio y <code>rewind-os-cli</code>, así que cada función es también un comando que puedes automatizar. Con <code>rewind-os-cli mcp</code>, los asistentes usan las mismas herramientas mediante el Model Context Protocol: solo lectura salvo que abras más, una opción cada vez. En una terminal, una línea muestra cuánto lleva un análisis o una limpieza y el tiempo que va; Ctrl+C lo para y muestra lo hecho hasta entonces, marcado como parado. En un servidor o por SSH, <code>rewind-os-cli tui</code> abre vistas a pantalla completa que se manejan con el teclado o el ratón: Inicio, el disco por tamaño de carpeta, la limpieza, que siempre pregunta antes de limpiar, los programas de inicio para activarlos o desactivarlos, los programas instalados para desinstalarlos, los archivos duplicados, los restos de programas y las carpetas de compilación para elegirlos y quitarlos, nunca la última copia de un archivo, los programas en marcha para cerrarlos y las herramientas de mantenimiento del propio sistema.",
    "dl.title": "Descargar",
    "dl.lead": "Gratis, sin cuenta y sin anuncios. Comprueba tu descarga con",
    "dl.win": "Windows 10 y 11, x64 y ARM64. Instálala con el MSI (menú Inicio, <code>rewind-os-cli</code> en el PATH de las terminales nuevas, desinstalar desde Configuración) o usa el zip portable sin instalar.",
    "dl.linux": "x64 y ARM64: un .deb para Debian y Ubuntu, un .rpm para Fedora y openSUSE, un paquete Flatpak o un tar.gz.",
    "dl.mac": "macOS 11 o posterior, Apple Silicon e Intel en una sola app. Abre el .dmg y arrastra Rewind OS a Aplicaciones. Algunas herramientas aún son solo de Windows y Linux.",
    "dl.macunsigned": "En macOS la app aún no está firmada con una cuenta de desarrollador de Apple, así que la primera vez macOS pide confirmarla: haz clic con Control en la app y elige Abrir, o ve a Ajustes del Sistema, Privacidad y seguridad, Abrir igualmente.",
    "dl.releases": "Ir a las versiones",
    "dl.apt.title": "Linux: instálalo con tu gestor de paquetes",
    "dl.apt.body": "Añade el repositorio una vez; después las actualizaciones del sistema mantienen Rewind OS al día. Debian y Ubuntu usan apt, Fedora dnf y openSUSE zypper. En un equipo sin escritorio, omite los paquetes recomendados (<code>--no-install-recommends</code>, o <code>--setopt=install_weak_deps=False</code> con dnf) para instalar solo lo que necesita <code>rewind-os-cli</code>.",
    "dl.unsigned": "Las versiones aún no están firmadas, así que Windows SmartScreen puede avisar la primera vez: elige «Más información» y luego «Ejecutar de todas formas».",
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
})();
