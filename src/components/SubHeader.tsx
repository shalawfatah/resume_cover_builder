export default function SubHeader({ text }: { text: string }) {
  return (
    <div>
      <h3 className="text-[14pt] uppercase font-bold mb-[10px] uppercase text-[#333] border-b border-[#ddd] pb-[5px]">
        {text}
      </h3>
    </div>
  );
}
