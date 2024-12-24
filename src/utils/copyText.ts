export default async function CopyTextClipboard(text: string) {
  return await navigator.clipboard.writeText(text);
}
