import React, { useState } from 'react';
import { Sparkles, Wrench, Paintbrush, Hammer, ArrowRight, Phone, Mail, MapPin, Clock, Star, X, CarFront } from 'lucide-react';

// Privacy Policy Modal Component
const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Polityka Prywatności</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Zamknij"
          >
            <X className="h-6 w-6 text-slate-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] text-slate-300 space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">1. Administrator Danych</h3>
            <p>
              Administratorem danych osobowych jest AutoLakiernia z siedzibą przy ul. Prostej 1, 00-001 Lublin.
              W sprawach związanych z ochroną danych osobowych można kontaktować się pod adresem email: kontakt@autolakiernia.pl
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2. Zakres Przetwarzanych Danych</h3>
            <p className="mb-2">Przetwarzamy następujące dane osobowe:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Imię i nazwisko</li>
              <li>Adres email</li>
              <li>Numer telefonu</li>
              <li>Treść wiadomości</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">3. Cel Przetwarzania Danych</h3>
            <p className="mb-2">Twoje dane osobowe przetwarzamy w celu:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
              <li>Udzielenia informacji o naszych usługach</li>
              <li>Przygotowania wyceny usług</li>
              <li>Kontaktu w sprawach związanych z naprawami pojazdów</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">4. Podstawa Prawna</h3>
            <p>
              Przetwarzanie danych odbywa się na podstawie zgody (art. 6 ust. 1 lit. a RODO) wyrażonej poprzez wysłanie formularza kontaktowego
              oraz na podstawie prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO) polegającego na prowadzeniu
              korespondencji z klientami.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">5. Okres Przechowywania Danych</h3>
            <p>
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane,
              jednak nie dłużej niż przez 3 lata od ostatniego kontaktu, chyba że przepisy prawa wymagają dłuższego okresu przechowywania.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">6. Odbiorcy Danych</h3>
            <p>
              Twoje dane mogą być udostępniane następującym kategoriom odbiorców:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Dostawcom usług IT (hosting, poczta elektroniczna)</li>
              <li>Podmiotom świadczącym usługi księgowe i prawne</li>
              <li>Organom uprawnionym na podstawie przepisów prawa</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">7. Twoje Prawa</h3>
            <p className="mb-2">Przysługuje Ci prawo do:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">8. Pliki Cookies</h3>
            <p>
              Nasza strona internetowa wykorzystuje pliki cookies wyłącznie w celach technicznych, zapewniających prawidłowe
              funkcjonowanie strony. Nie wykorzystujemy cookies do śledzenia użytkowników ani do celów marketingowych.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">9. Bezpieczeństwo Danych</h3>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych osobowych,
              w szczególności zabezpieczamy dane przed ich udostępnieniem osobom nieupoważnionym, utratą czy uszkodzeniem.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">10. Kontakt</h3>
            <p>
              W sprawach dotyczących przetwarzania danych osobowych oraz realizacji swoich praw prosimy o kontakt:
            </p>
            <ul className="list-none space-y-1 ml-4 mt-2">
              <li>Email: kontakt@autolakiernia.pl</li>
              <li>Telefon: +48 123 456 789</li>
              <li>Adres: ul. Prosta 1, 00-001 Lublin</li>
            </ul>
          </section>

          <section className="pt-4 border-t border-white/10">
            <p className="text-sm text-slate-400">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-6 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all"
          >
            Rozumiem
          </button>
        </div>
      </div>
    </div>
  );
};

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
            <span className="text-xl font-bold text-white">ASO PZM Lublin</span>
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
          Najwyższa jakość, precyzja i doświadczenie. Zgłoś szkodę, a my zajmiemy się resztą. Przystępne ceny.
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
          <p className="text-slate-400 text-lg">Kompleksowa naprawa Twojego pojazdu</p>
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
          body: formDataToSend,
        }
      );
  
      alert("Dziękujemy za wiadomość! 🚗✨ Została zapisana w systemie.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Błąd przy wysyłaniu do Google Sheets:", error);
      alert("Nie udało się wysłać formularza. Prosimy spróbować za jakiś czas");
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
                <p className="text-slate-400">ul. Prusa 8<br />00-001 Lublin</p>
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
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
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
                <li>
                  <button 
                    onClick={() => setIsPrivacyOpen(true)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Polityka Prywatności
                  </button>
                </li>
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

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
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