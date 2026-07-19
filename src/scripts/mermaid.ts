const MERMAID_CODE_SELECTOR = 'pre[data-language="mermaid"]';
const MERMAID_WRAPPER_SELECTOR = ".mermaid-diagram";

let mermaidModule: Promise<typeof import("mermaid")> | undefined;
let renderQueue = Promise.resolve();

function getTheme(): "dark" | "neutral" {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "neutral";
}

function createWrapper(source: string): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.className = "mermaid-diagram";
  wrapper.dataset.mermaidSource = source;
  wrapper.setAttribute("role", "img");
  wrapper.setAttribute("aria-label", "Mermaid 技术图");
  return wrapper;
}

function prepareWrappers(): HTMLDivElement[] {
  document
    .querySelectorAll<HTMLPreElement>(MERMAID_CODE_SELECTOR)
    .forEach((codeBlock) => {
      const source = codeBlock.textContent?.trim();
      if (!source) return;

      const wrapper = createWrapper(source);
      codeBlock.replaceWith(wrapper);
    });

  return Array.from(
    document.querySelectorAll<HTMLDivElement>(MERMAID_WRAPPER_SELECTOR),
  );
}

function showSourceFallback(wrapper: HTMLDivElement): void {
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = wrapper.dataset.mermaidSource ?? "";
  pre.append(code);
  wrapper.replaceChildren(pre);
  wrapper.classList.add("mermaid-diagram-error");
  wrapper.removeAttribute("role");
  wrapper.removeAttribute("aria-label");
}

async function renderMermaidDiagrams(): Promise<void> {
  const wrappers = prepareWrappers();
  if (wrappers.length === 0) return;

  const theme = getTheme();
  const wrappersToRender = wrappers.filter(
    (wrapper) =>
      wrapper.dataset.mermaidTheme !== theme || !wrapper.querySelector("svg"),
  );
  if (wrappersToRender.length === 0) return;

  mermaidModule ??= import("mermaid");
  const { default: mermaid } = await mermaidModule;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif',
    sequence: {
      useMaxWidth: true,
      wrap: true,
      actorMargin: 36,
      diagramMarginX: 24,
      diagramMarginY: 16,
      messageMargin: 40,
    },
  });

  const targets = wrappersToRender.map((wrapper) => {
    const target = document.createElement("div");
    target.className = "mermaid";
    target.textContent = wrapper.dataset.mermaidSource ?? "";
    wrapper.classList.remove("mermaid-diagram-error");
    wrapper.replaceChildren(target);
    return target;
  });

  try {
    await mermaid.run({ nodes: targets });
    wrappersToRender.forEach((wrapper) => {
      wrapper.dataset.mermaidTheme = theme;
    });
  } catch {
    wrappersToRender.forEach(showSourceFallback);
  }
}

function queueRender(): void {
  renderQueue = renderQueue
    .catch(() => undefined)
    .then(() => renderMermaidDiagrams());
}

let currentTheme = getTheme();
const themeObserver = new MutationObserver(() => {
  const nextTheme = getTheme();
  if (nextTheme === currentTheme) return;
  currentTheme = nextTheme;
  queueRender();
});

themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

document.addEventListener("astro:page-load", queueRender);
queueRender();
