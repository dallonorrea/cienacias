import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Menú</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:bg-gray-700 p-2 rounded">
          Consola
        </Link>
        <Link href="/tree" className="hover:bg-gray-700 p-2 rounded">
          Visualizar Árbol
        </Link>
        <Link href="/huffman" className="hover:bg-gray-700 p-2 rounded">
          Huffman
        </Link>
        <Link href="/trie" className="hover:bg-gray-700 p-2 rounded">
          Tries
        </Link>
      </nav>
    </div>
  );
}
