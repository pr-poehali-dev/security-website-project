import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
