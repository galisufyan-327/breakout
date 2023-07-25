export const Tag = ({ text }: { text: string }) => {
  return (
    <p className="mr-4 break-words rounded-full border border-black p-3 text-center">
      {text}
    </p>
  );
};
