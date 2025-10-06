import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProjectsSection = () => {
  const projects = [
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
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Успешные проекты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры нашей работы
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
  );
};

export default ProjectsSection;
