// helpers/extractParagraphs.ts
type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
};

export function extractParagraphsFromLexicalRoot(root: { children: LexicalNode[] }): string[] {
  const paragraphs: string[] = [];

  function extractText(nodes: LexicalNode[]): string {
    let text = '';
    for (const node of nodes) {
      if (node.type === 'text' && node.text) {
        text += node.text;
      }
      if (node.children && node.children.length > 0) {
        text += extractText(node.children);
      }
    }
    return text;
  }

  for (const node of root.children) {
    if (node.type === 'paragraph' && node.children) {
      const paragraphText = extractText(node.children).trim();
      if (paragraphText) {
        paragraphs.push(paragraphText);
      }
    }
  }

  return paragraphs;
}
