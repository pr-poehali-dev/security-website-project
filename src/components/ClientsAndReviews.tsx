import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ClientsAndReviews = () => {
  const clients = [
    { name: 'ТЦ Метрополис', icon: 'Building2' },
    { name: 'Банк Столица', icon: 'Landmark' },
    { name: 'Завод Техмаш', icon: 'Factory' },
    { name: 'Логистика Групп', icon: 'Warehouse' },
    { name: 'Отель Премьер', icon: 'Hotel' },
    { name: 'Стройком', icon: 'HardHat' },
    { name: 'МедЦентр Плюс', icon: 'Hospital' },
    { name: 'Авто Трейд', icon: 'Car' }
  ];

  const reviews = [
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
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Наши клиенты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Нам доверяют ведущие компании России
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {clients.map((client, index) => (
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
          {reviews.map((review, index) => (
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
  );
};

export default ClientsAndReviews;
