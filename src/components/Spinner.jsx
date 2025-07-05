export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center w-[350px] h-[400px] bg-white rounded-2xl shadow-md">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-600 font-medium">Loading...</p>
    </div>
  );
}
