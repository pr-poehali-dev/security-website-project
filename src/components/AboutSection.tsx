import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
