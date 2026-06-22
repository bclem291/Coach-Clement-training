import { X, Upload, Home } from "lucide-react";

type AdminProps = {
  onClose: () => void;
  images: { trainer: string; session: string; workspace: string; community: string };
  onUpload: (key: string, file: File) => void;
  onClear: (key: string) => void;
};

export default function AdminDashboard({ onClose, images, onUpload, onClear }: AdminProps) {
  const blocks = [
    { key: 'trainer', label: 'Trainer Portrait' },
    { key: 'session', label: 'Training Session' },
    { key: 'workspace', label: 'Brand Workspace' },
    { key: 'community', label: 'Community & Support' }
  ];

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col font-sans">
      <div className="bg-brand-navy text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-10">
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
          <Upload className="w-6 h-6 text-brand-red" /> Admin Dashboard
        </h1>
        <button onClick={onClose} className="bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/20 rounded-xl flex items-center gap-2 transition-all shadow-sm">
          <Home className="w-4 h-4" /> <span className="hidden sm:inline">Back to Site</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto w-full p-6 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-100">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-brand-navy mb-4">Manage Site Images</h2>
             <p className="text-gray-600 max-w-xl mx-auto">Upload images to replace the placeholders on the main page. Best dimensions are portrait or square (e.g., 4:5 aspect ratio).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blocks.map((b) => (
              <div key={b.key} className="bg-sky-50/50 border border-sky-100 rounded-2xl p-6 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-lg mb-6 text-brand-navy">{b.label}</h3>

                {images[b.key as keyof typeof images] ? (
                  <div className="relative aspect-[4/5] w-full mb-6 rounded-xl overflow-hidden border-4 border-white shadow-md">
                    <img src={images[b.key as keyof typeof images]} alt={b.label} className="w-full h-full object-cover" />
                    <button
                      onClick={() => onClear(b.key)}
                      className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-red-700 shadow-xl transition-all hover:scale-105 active:scale-95"
                      title="Remove Image"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="aspect-[4/5] w-full mb-6 border-2 border-dashed border-sky-200 rounded-xl flex items-center justify-center bg-white text-sky-400 flex-col gap-3 shadow-inner">
                     <Upload className="w-10 h-10 mb-2 opacity-50" />
                     <span className="text-sm font-semibold opacity-70">No image uploaded</span>
                  </div>
                )}

                <label className="mt-auto w-full group">
                  <div className="flex items-center justify-center gap-2 w-full bg-brand-navy group-hover:bg-blue-900 text-white py-3 rounded-xl cursor-pointer font-bold transition-all shadow-md active:scale-95">
                    <Upload className="w-4 h-4" />
                    {images[b.key as keyof typeof images] ? 'Change Image' : 'Upload Image'}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) onUpload(b.key, file);
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
