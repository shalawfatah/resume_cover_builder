interface BtnProps {
  text: string;
}

export default function Btn({ text }: BtnProps) {
  return (
    <p className="bg-green-600 cursor-pointer text-white font-semibold text-center py-1 rounded-sm text-sm hover:bg-green-700 transition-all duration-300 m-2">
      {text}
    </p>
  );
}
