import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
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

  return (
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
  );
};

export default ServicesSection;
