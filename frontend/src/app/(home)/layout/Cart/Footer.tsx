export default function CartFooter() {
  return (
    <footer className="min-h-[100px] bg-brand-primary w-full flex flex-col p-5 gap-5">
      <div className="flex justify-between">
        <p className="text-white font-medium text-base">Valor total</p>
        <p className="text-white font-medium text-base">R$ 259,99</p>
      </div>
      <button className="bg-brand-secondary flex justify-center items-center hover:bg-transparent hover:text-brand-secondary hover:border-brand-secondary transition-colors border border-transparent rounded-md text-white font-medium text-xs px-5 py-2">
        Concluir compra
      </button>
    </footer>
  );
}
