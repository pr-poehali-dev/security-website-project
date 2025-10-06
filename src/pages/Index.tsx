import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Shield',
      title: 'Физическая охрана объектов',
      description: 'Профессиональная охрана зданий, территорий и персонала'
    },
    {
      icon: 'Truck',
      title: 'Охрана и сопровождение грузов',
      description: 'Безопасная транспортировка ценных грузов'
    },
    {
      icon: 'Camera',
      title: 'Техническая охрана',
      description: 'Установка и обслуживание систем видеонаблюдения'
    },
    {
      icon: 'Radio',
      title: 'Комплексная охрана',
      description: 'Полный спектр охранных услуг с мониторингом'
    },
    {
      icon: 'Users',
      title: 'Охрана мероприятий',
      description: 'Обеспечение безопасности на массовых мероприятиях'
    },
    {
      icon: 'AlertCircle',
      title: 'Оперативное реагирование',
      description: 'Быстрый выезд группы реагирования 24/7'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: '24/7',
      description: 'Круглосуточная диспетчерская служба'
    },
    {
      icon: 'Monitor',
      title: 'Онлайн-мониторинг',
      description: 'Контроль объектов в режиме реального времени'
    },
    {
      icon: 'Award',
      title: 'Лицензии',
      description: 'Все необходимые разрешения и сертификаты'
    },
    {
      icon: 'Zap',
      title: 'Быстрое реагирование',
      description: 'Выезд группы за 5-15 минут'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <Icon name="ShieldCheck" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-primary">КРИСТАЛЛ</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-semibold text-accent">Частное охранное предприятие</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Профессиональная охрана вашего бизнеса
              </h1>
              <p className="text-lg text-gray-600">
                Круглосуточная защита объектов с диспетчерской службой и онлайн-мониторингом в режиме реального времени
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-accent hover:bg-accent/90">
                  Получить консультацию
                </Button>
                <Button onClick={() => scrollToSection('services')} size="lg" variant="outline">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-accent/20 flex items-center justify-center">
                <Icon name="ShieldCheck" size={200} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр охранных услуг для бизнеса и частных лиц
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary rounded flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Частное охранное предприятие «СТРАЖ» — надежный партнер в сфере безопасности с многолетним опытом работы на рынке охранных услуг.
                </p>
                <p>
                  Наша миссия — обеспечение полной безопасности бизнеса и частных объектов через профессиональный подход, современные технологии и круглосуточный мониторинг.
                </p>
                <p>
                  Мы имеем все необходимые лицензии и сертификаты. Наша команда состоит из опытных специалистов с профильным образованием и регулярным повышением квалификации.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-gray-600">Охраняемых объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-sm text-gray-600">Сотрудников</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Icon name="FileCheck" size={32} className="text-accent mb-3" />
                  <h4 className="font-bold text-primary mb-2">Лицензии</h4>
                  <p className="text-sm text-gray-600">Все разрешительные документы</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Icon name="GraduationCap" size={32} className="text-accent mb-3" />
                  <h4 className="font-bold text-primary mb-2">Обучение</h4>
                  <p className="text-sm text-gray-600">Регулярная подготовка персонала</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Icon name="Headphones" size={32} className="text-accent mb-3" />
                  <h4 className="font-bold text-primary mb-2">Поддержка</h4>
                  <p className="text-sm text-gray-600">Диспетчерская служба 24/7</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Icon name="TrendingUp" size={32} className="text-accent mb-3" />
                  <h4 className="font-bold text-primary mb-2">Развитие</h4>
                  <p className="text-sm text-gray-600">Современные технологии</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-gray-600">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Круглосуточно</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-gray-600">info@strazh-security.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <span className="text-xl font-bold">СТРАЖ</span>
              </div>
              <p className="text-sm text-gray-300">
                Профессиональная охрана вашего бизнеса 24/7
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Физическая охрана</li>
                <li>Техническая охрана</li>
                <li>Охрана мероприятий</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@strazh-security.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© 2024 ЧОП "СТРАЖ". Все права защищены.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-white transition-colors">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;