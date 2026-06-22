import { useState, useRef } from 'react';
import { X, Upload, Trash2 } from 'lucide-react';

type AdminDashboardProps = {
  onClose: () => void;
  images: {
    trainer: string;
    session: string;
    workspace: string;
    community: string;
  };
  onUpload: (key: string, file: File) => void;
  onClear: (key: string) => void;
};

export default function AdminDashboard({ onClose, images, onUpload, onClear }: AdminDashboardProps) {
  const sections = [
    { key: 'trainer', label: 'Trainer Image (Square/Portrait)', desc: 'Image of Coach Clement' },
    { key: 'session', label: 'Session Image (Landscape/Square)', desc: 'Image of a coaching session' },
    { key: 'workspace', label: 'Workspace Image (Landscape)', desc: 'Image of the workspace/laptop' },
    { key: 'community', label: 'Community Image (Any)', desc: 'Image representing community or income' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Image Upload</h2>
            <p className="text-gray-500 text-sm">Upload custom images to display on the landing page</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map(({ key, label, desc }) => (
              <div key={key} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800">{label}</h3>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
                
                {images[key as keyof typeof images] ? (
                  <div className="relative group rounded-lg overflow-hidden border border-gray-200 bg-gray-100 aspect-video flex-shrink-0">
                    <img src={images[key as keyof typeof images]} alt={label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => onClear(key)}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                        title="Remove Image"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video">
                    <label className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg shrink-0 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors bg-white">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500 font-medium">Click to upload</span>
                      <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            onUpload(key, e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
}
