import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const AdminPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token === 'mock-token-for-simplicity') {
      setIsLoggedIn(true);
      fetchImages();
    }
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/projects/images');
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error('Failed to fetch images', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        setIsLoggedIn(true);
        fetchImages();
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Connection error');
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setMessage('');
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Authorization': localStorage.getItem('adminToken') || '',
        },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Image uploaded successfully! Path: ' + data.imageUrl);
        setFile(null);
        fetchImages();
      } else {
        setMessage('Upload failed: ' + data.message);
      }
    } catch (err) {
      setMessage('Upload error');
    } finally {
      setUploading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-white mb-6 text-center neon-text-green" style={{fontFamily: "'Orbitron', sans-serif"}}>Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white neon-text-green" style={{fontFamily: "'Orbitron', sans-serif"}}>Image Manager</h1>
          <button 
            onClick={() => { localStorage.removeItem('adminToken'); setIsLoggedIn(false); }}
            className="text-gray-400 hover:text-white underline"
          >
            Logout
          </button>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Upload New Project Image</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer relative">
              <input 
                type="file" 
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
              />
              <p className="text-gray-400">
                {file ? `Selected: ${file.name}` : 'Drag & drop or click to select image'}
              </p>
            </div>
            {message && <p className={`text-sm ${message.includes('success') ? 'text-emerald-400' : 'text-red-400'}`}>{message}</p>}
            <button 
              disabled={!file || uploading}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 group relative">
              <img src={img} alt="Project" className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                <p className="text-[10px] text-white break-all text-center">{img}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-400 text-sm">
            <strong>Tip:</strong> After uploading, copy the image path (e.g., <code>/images/projects/image-name.jpg</code>) and use it in your <code>constants.tsx</code> file to update the project data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
