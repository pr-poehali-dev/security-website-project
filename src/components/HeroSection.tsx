import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
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
              <Button onClick={() => onNavigate('contact')} size="lg" className="bg-accent hover:bg-accent/90">
                Получить консультацию
              </Button>
              <Button onClick={() => onNavigate('services')} size="lg" variant="outline">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg flex items-center justify-center p-8">
              <img src="https://cdn.poehali.dev/files/d53d6283-21ca-427e-830b-79c7cb8bf18e.jpg" alt="КРИСТАЛЛ" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;