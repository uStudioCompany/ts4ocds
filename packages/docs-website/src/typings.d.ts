declare module '*.svg' {
  const Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Icon;
}

declare module '*.md' {
  const Markdown: string;
  export default Markdown;
}
