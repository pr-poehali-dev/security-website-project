import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
                  Частное охранное предприятие «КРИСТАЛЛ» — надежный партнер в сфере безопасности с многолетним опытом работы на рынке охранных услуг.
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

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши клиенты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Нам доверяют ведущие компании России
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { name: 'ТЦ Метрополис', icon: 'Building2' },
              { name: 'Банк Столица', icon: 'Landmark' },
              { name: 'Завод Техмаш', icon: 'Factory' },
              { name: 'Логистика Групп', icon: 'Warehouse' },
              { name: 'Отель Премьер', icon: 'Hotel' },
              { name: 'Стройком', icon: 'HardHat' },
              { name: 'МедЦентр Плюс', icon: 'Hospital' },
              { name: 'Авто Трейд', icon: 'Car' }
            ].map((client, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Icon name={client.icon} size={32} className="text-primary" />
                  </div>
                  <p className="font-semibold text-gray-700">{client.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Отзывы клиентов</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей Петров',
                position: 'Директор ТЦ Метрополис',
                text: 'Сотрудничаем с КРИСТАЛЛ уже 3 года. Профессиональный подход, оперативное реагирование на любые ситуации. Особенно ценим круглосуточный мониторинг.',
                rating: 5
              },
              {
                name: 'Марина Сидорова',
                position: 'Управляющий Банк Столица',
                text: 'Высокий уровень безопасности, квалифицированные сотрудники. Система онлайн-мониторинга позволяет контролировать все объекты в режиме реального времени.',
                rating: 5
              },
              {
                name: 'Дмитрий Волков',
                position: 'Генеральный директор Завод Техмаш',
                text: 'Надежная охрана производственной территории. Быстрое реагирование группы, современное оборудование. Рекомендуем как проверенного партнера.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Успешные проекты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры нашей работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Охрана торгового центра',
                client: 'ТЦ Метрополис',
                description: 'Комплексная система безопасности для крупного торгового центра площадью 50 000 м²',
                results: ['60 камер видеонаблюдения', '24/7 физическая охрана', 'Система контроля доступа'],
                icon: 'Building2'
              },
              {
                title: 'Безопасность банковского офиса',
                client: 'Банк Столица',
                description: 'Многоуровневая система защиты для головного офиса банка',
                results: ['Тревожная кнопка', 'Интеграция с полицией', 'Инкассация'],
                icon: 'Landmark'
              },
              {
                title: 'Охрана производства',
                client: 'Завод Техмаш',
                description: 'Защита промышленного объекта с контролем пропускного режима',
                results: ['Периметральная охрана', 'Контроль въезда транспорта', 'Патрулирование'],
                icon: 'Factory'
              },
              {
                title: 'Безопасность мероприятия',
                client: 'Форум Digital 2024',
                description: 'Обеспечение безопасности бизнес-форума с 5000+ участников',
                results: ['Досмотр участников', 'Контроль входа', 'Оперативная группа'],
                icon: 'Users'
              }
            ].map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={project.icon} size={28} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
                      <p className="text-sm text-accent font-semibold">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Результаты:</p>
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0" />
                        <p className="text-sm text-gray-600">{result}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Частые вопросы</h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                Какие документы нужны для заключения договора?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Для заключения договора потребуются: копия паспорта руководителя, свидетельство о регистрации юридического лица (или ИП), ИНН организации. Мы подготовим все необходимые документы и согласуем условия в течение 1 рабочего дня.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                Как быстро вы можете начать охрану объекта?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                После подписания договора мы можем начать охрану объекта в течение 24 часов. В экстренных случаях возможен выезд группы реагирования в течение 2-3 часов для оценки объекта и начала работы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                Какое оборудование вы используете?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Мы используем современное оборудование ведущих производителей: IP-камеры высокого разрешения, системы контроля доступа (СКУД), охранно-пожарную сигнализацию, тревожные кнопки. Все оборудование интегрировано с нашей диспетчерской службой для круглосуточного мониторинга.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                Как осуществляется контроль работы охранников?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Контроль осуществляется через: систему электронных обходов (QR-метки на объекте), видеонаблюдение, регулярную связь с диспетчерской службой, выездные проверки старшего смены. Вы получаете ежемесячные отчеты о работе охраны с детализацией всех событий.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                Есть ли у вас лицензия на охранную деятельность?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Да, наша компания имеет все необходимые лицензии Росгвардии на осуществление охранной деятельности. Все сотрудники прошли специальную подготовку и имеют действующие удостоверения частного охранника. Копии лицензий и сертификатов предоставляются при заключении договора.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                Какова стоимость ваших услуг?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Стоимость зависит от типа объекта, площади, режима охраны и дополнительных услуг. Базовая стоимость физической охраны начинается от 150 руб/час. Техническая охрана с мониторингом — от 3000 руб/месяц. Для расчета точной стоимости оставьте заявку, и наш специалист проведет бесплатный выезд на объект.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-50">
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
                    <p className="text-gray-600">+7 </p>
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
                    <p className="text-gray-600">info@kristall-security.ru</p>
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
                    <p className="text-gray-600">г. Томск, ул. </p>
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
                <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                  <Icon name="ShieldCheck" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">КРИСТАЛЛ</span>
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
                <li>info@kristall-security.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© 2024 ЧОП "КРИСТАЛЛ". Все права защищены.</p>
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