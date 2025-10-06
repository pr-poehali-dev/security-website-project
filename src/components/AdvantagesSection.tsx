import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
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
  );
};

export default AdvantagesSection;
