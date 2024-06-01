import { useFormStatus } from 'react-dom';

export function FormButton({ children }: { children?: React.ReactNode; }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 bg-blue-600 text-white w-full rounded-md active:bg-green-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-800"
    >
      <div className="flex items-center justify-center gap-2">
        <div>{children}</div>
        {pending && (
          <div className="h-[20px] w-[20px] rounded-full border-[2px] border-white border-t-transparent animate-spin" />
        )}
      </div>
    </button>
  );
}
