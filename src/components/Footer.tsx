const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://cdn.poehali.dev/files/d53d6283-21ca-427e-830b-79c7cb8bf18e.jpg" alt="КРИСТАЛЛ" className="h-16 w-auto" />
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
  );
};

export default Footer;
