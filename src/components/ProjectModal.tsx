import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabase";

export function ProjectModal() {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openProjectModal', handler as EventListener);
    return () => window.removeEventListener('openProjectModal', handler as EventListener);
  }, []);

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [open]);

  function close() {
    setOpen(false);
  }

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    const f = formRef.current;
    const fd = new FormData(f);
    const name = (fd.get('name') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const service = (fd.get('service') || '').toString().trim();
    const desc = (fd.get('desc') || '').toString().trim();
    const deadline = (fd.get('deadline') || '').toString().trim();

    // Basic validation
    if (!name || !phone || !email || !service || !desc) {
      setStatus({ type: 'error', message: 'Please fill all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    // Build the message to store
    const storedMessage = `${desc}\n\nService: ${service}\nDeadline: ${deadline || 'N/A'}`;

    try {
      const { data, error } = await supabase.from('orx').insert([
        { nom: name, email, telephone: phone, message: storedMessage },
      ]);

      if (error) {
        console.error('Supabase insert error:', error);
        setStatus({ type: 'error', message: error.message || 'Failed to save submission.' });
        setLoading(false);
        return;
      }

      // Do not open the mail client automatically; submission is saved server-side.
      f.reset();

      // Close modal shortly after success so user sees confirmation
      setTimeout(() => {
        setLoading(false);
        close();
        setStatus({ type: 'idle', message: '' });
      }, 1400);
    } catch (err: any) {
      console.error(err);
      setStatus({ type: 'error', message: err?.message || 'An unexpected error occurred.' });
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.18 }}
        className="relative mx-4 w-full max-w-2xl rounded-2xl bg-gradient-to-br from-[#0b1020]/80 to-[#1b1236]/70 border border-white/6 p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Start a project</h3>
            <p className="text-sm text-muted-foreground">Tell us a bit and we will reach out.</p>
          </div>
          <button aria-label="Close" onClick={close} className="p-2 rounded-md bg-white/3 hover:bg-white/6">
            <svg className="h-5 w-5 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="name" required placeholder="Full name" className="w-full pl-3 pr-3 py-3 rounded-lg bg-white/3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input name="phone" required placeholder="Phone number" inputMode="tel" className="w-full pl-3 pr-3 py-3 rounded-lg bg-white/3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <input name="email" type="email" required placeholder="Email address" className="w-full pl-3 pr-3 py-3 rounded-lg bg-white/3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <div className="relative">
            <select name="service" required defaultValue="" className="w-full p-3 rounded-lg bg-white/6 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
              <option value="" disabled style={{color: '#9CA3AF'}}>Select a service</option>
              <option style={{color: '#0f172a'}}>Website Development</option>
              <option style={{color: '#0f172a'}}>AI Automation</option>
              <option style={{color: '#0f172a'}}>IT Support</option>
              <option style={{color: '#0f172a'}}>Cybersecurity</option>
              <option style={{color: '#0f172a'}}>Graphic Design</option>
              <option style={{color: '#0f172a'}}>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"/></svg>
            </div>
          </div>
          <textarea name="desc" rows={4} required placeholder="Project description" className="w-full p-3 rounded-lg bg-white/3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="deadline" type="date" className="w-full pl-3 pr-3 py-3 rounded-lg bg-white/3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button type="submit" disabled={loading} className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold disabled:opacity-60 flex items-center justify-center gap-2">
              {loading ? (
                <svg className="h-4 w-4 animate-spin text-black" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="3" stroke="currentColor" strokeOpacity="0.25" fill="none" />
                  <path d="M22 12a10 10 0 00-10-10" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              ) : null}
              <span>{loading ? 'Sending...' : 'Send'}</span>
            </button>
          </div>
        </form>

        {status.type !== 'idle' && (
          <div className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-rose-400'}`}>
            {status.message}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ProjectModal;
