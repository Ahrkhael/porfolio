"use client";

type DownloadFileButtonProps = {
  title: string;
};

export default function DownloadFile({ title }: DownloadFileButtonProps) {
  const handleDownload = async () => {
    const response = await fetch("/api/download");

    if (!response.ok) {
      alert("Error downloading file");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "CV - Saborido Juan José.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-gray-300 text-slate-800 my-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition"
    >
      {title}
    </button>
  );
}
