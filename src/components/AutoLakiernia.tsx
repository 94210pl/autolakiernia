import React, { useState } from 'react';

import { Sparkles, Wrench, Paintbrush, Hammer, ArrowRight, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Sparkles className="h-5 w-5 text-slate-900" />
            </div>
            <span className="text-xl font-bold text-white">AutoLakiernia</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">
              Usługi
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-slate-300 hover:text-white transition-colors">
              Realizacje
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
              Kontakt
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Wycena
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Profesjonalne<br />Blacharstwo i Lakiernictwo
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Przywracamy blasku Twojemu pojazdowi. Najwyższa jakość, precyzja i doświadczenie.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
          >
            Zobacz Realizacje
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white rounded-xl font-semibold border border-white/10 hover:border-cyan-500/50 hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Skontaktuj Się
          </button>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Naprawy Powypadkowe",
      description: "Kompleksowe naprawy po kolizjach. Przywracamy pojazd do pierwotnego stanu z zachowaniem najwyższych standardów jakości.",
      gradient: "from-cyan-400 to-cyan-600",
      shadow: "shadow-cyan-500/30",
    },
    {
      icon: Paintbrush,
      title: "Lakierowanie",
      description: "Profesjonalne lakierowanie w kabinie lakierniczej. Dopasowanie koloru, trwałe wykończenie i perfekcyjny efekt końcowy.",
      gradient: "from-purple-400 to-purple-600",
      shadow: "shadow-purple-500/30",
    },
    {
      icon: Hammer,
      title: "Usuwanie Wgnieceń (PDR)",
      description: "Bezinwazyjna metoda usuwania wgnieceń bez konieczności lakierowania. Szybko, skutecznie, bez utraty wartości pojazdu.",
      gradient: "from-teal-400 to-teal-600",
      shadow: "shadow-teal-500/30",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nasze Usługi</h2>
          <p className="text-slate-400 text-lg">Kompleksowa oferta dla Twojego pojazdu</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg ${service.shadow}`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
const Portfolio = () => {
  const projects = [
    {
      before: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      title: "Naprawa Drzwi",
      category: "Blacharstwo + Lakierowanie",
    },
    {
      before: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      title: "Odnowa Zderzaka",
      category: "Naprawa Powypadkowa",
    },
    {
      before: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop",
      title: "Usunięcie Gradu",
      category: "PDR",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nasze Realizacje</h2>
          <p className="text-slate-400 text-lg">Zobacz efekty naszej pracy - przed i po</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105 shadow-xl"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative">
                  <img src={project.before} alt="Przed naprawą" className="w-full h-48 object-cover rounded-lg" />
                  <div className="absolute top-2 left-2">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">Przed</span>
                  </div>
                </div>
                <div className="relative">
                  <img src={project.after} alt="Po naprawie" className="w-full h-48 object-cover rounded-lg" />
                  <div className="absolute top-2 left-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-full">Po</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
*/


const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw9hyT9tzN7MvC0bKbE-2HiC5KdVVHjZy-OXkwXrtsk7HTAs6j92tPowuzgUADFUasT/exec",
        {
          method: "POST",
          body: formDataToSend, // 💥 to jest klucz
        }
      );
  
      alert("Dziękujemy za wiadomość! 🚗✨ Została zapisana w systemie.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Błąd przy wysyłaniu do Google Sheets:", error);
      alert("Nie udało się wysłać formularza 😭");
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skontaktuj Się</h2>
          <p className="text-slate-400 text-lg">Jesteśmy tu, aby pomóc</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Telefon</h3>
                <p className="text-slate-400">+48 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-slate-400">kontakt@autolakiernia.pl</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Adres</h3>
                <p className="text-slate-400">ul. Warsztatowa 15<br />00-001 Warszawa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Godziny Otwarcia</h3>
                <p className="text-slate-400">Pon - Pt: 8:00 - 18:00<br />Sobota: 9:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Imię i Nazwisko</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white"
                style={{
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white"
                style={{
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white"
                style={{
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Wiadomość</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none"
                style={{
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all"
            >
              Wyślij Wiadomość
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Sparkles className="h-5 w-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white">AutoLakiernia</span>
            </div>
            <p className="text-slate-400">Profesjonalne blacharstwo i lakiernictwo samochodowe. Twoje auto w najlepszych rękach.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Usługi</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors">Realizacje</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Zaufali Nam</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-400">500+ zadowolonych klientów</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-slate-400">
          <p>&copy; 2025 AutoLakiernia. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}