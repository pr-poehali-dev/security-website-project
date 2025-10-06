import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/d53d6283-21ca-427e-830b-79c7cb8bf18e.jpg" alt="КРИСТАЛЛ" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('services')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => onNavigate('about')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => onNavigate('advantages')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => onNavigate('clients')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Клиенты
            </button>
            <button onClick={() => onNavigate('projects')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => onNavigate('faq')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Вопросы
            </button>
            <button onClick={() => onNavigate('contact')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <div className="hidden md:block">
            <Button onClick={() => onNavigate('contact')} className="bg-accent hover:bg-accent/90">
              Заказать звонок
            </Button>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Меню"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button onClick={() => handleNavigate('services')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => handleNavigate('about')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => handleNavigate('advantages')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => handleNavigate('clients')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Клиенты
            </button>
            <button onClick={() => handleNavigate('projects')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => handleNavigate('faq')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Вопросы
            </button>
            <button onClick={() => handleNavigate('contact')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => handleNavigate('contact')} className="w-full bg-accent hover:bg-accent/90 mt-4">
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;