import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Линия Жизни</h1>
                <p className="text-sm text-muted-foreground">Оздоровительный центр</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">О центре</button>
              <button onClick={() => scrollToSection("specialists")} className="hover:text-primary transition-colors">Специалисты</button>
              <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("reviews")} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Контакты</button>
            </nav>
            <a href="tel:89298300555" className="flex items-center gap-2 text-primary font-semibold">
              <Icon name="Phone" size={20} />
              <span className="hidden sm:inline">8 (929) 830-05-55</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Славянск-на-Кубани</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Ваше здоровье и <span className="text-primary">благополучие</span> — наша миссия
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Комплексный подход к оздоровлению: косметология, психология, диетология и фитооздоровление
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("specialists")}>
                Наши специалисты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">О нашем центре</h3>
            <p className="text-lg text-muted-foreground">
              Центр оздоровления "Линия Жизни" в Славянске-на-Кубани предлагает широкий спектр бытовых услуг 
              по оздоровлению и улучшению качества жизни. Мы используем натуральные методы и индивидуальный подход 
              к каждому клиенту.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Опытные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Высококвалифицированные специалисты с многолетним опытом работы</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Leaf" className="text-primary" size={24} />
                </div>
                <CardTitle>Натуральные методы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Используем природные средства и щадящие методики оздоровления</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Персональные программы для каждого клиента с учётом особенностей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h3>
            <p className="text-lg text-muted-foreground">Профессионалы с многолетним опытом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/photo_2025-12-14_18-22-02.png" 
                  alt="Панченко Анна Сергеевна" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Панченко Анна Сергеевна</CardTitle>
                <CardDescription className="text-base">Специалист по комплексному оздоровлению</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Косметолог — профессиональный уход и процедуры</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Психолог — работа с эмоциями и стрессом</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Сексолог — консультации по интимному здоровью</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Дефектолог и логопед — коррекция речи</span>
                  </div>
                  <Badge variant="outline" className="mt-4">Бытовые услуги </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={64} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Фролов Андрей Николаевич</CardTitle>
                <CardDescription className="text-base">Специалист по оздоровлению организма</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Специалист по оздоровлению — комплексные программы</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Диетолог — коррекция питания и веса</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Психолог — психологическая поддержка</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Фитооздоровитель — траволечение </span>
                  </div>
                  <Badge variant="outline" className="mt-4">Бытовые услуги </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground">Комплексный подход к вашему здоровью</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Sparkles" className="text-primary mb-2" size={32} />
                <CardTitle>Косметология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Профессиональный уход за кожей, омолаживающие процедуры</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Brain" className="text-primary mb-2" size={32} />
                <CardTitle>Психологическое консультирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Работа со стрессом, тревогой, семейные консультации</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Apple" className="text-primary mb-2" size={32} />
                <CardTitle>Диетология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Индивидуальные программы питания, коррекция веса</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Flower" className="text-primary mb-2" size={32} />
                <CardTitle>Фитооздоровление</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Траволечение, натуральные средства для здоровья</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="MessageCircle" className="text-primary mb-2" size={32} />
                <CardTitle>Логопедия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Коррекция речевых нарушений, занятия с детьми</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="HeartHandshake" className="text-primary mb-2" size={32} />
                <CardTitle>Сексология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Консультации по вопросам интимного здоровья</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Gift" className="text-primary" size={28} />
                  Специальное предложение для новых клиентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Скидка 20% на первую консультацию и пакетные программы!</p>
                <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
                  Записаться со скидкой
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h3>
            <p className="text-lg text-muted-foreground">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена М.</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Анна Сергеевна — настоящий профессионал! Помогла разобраться с эмоциональным состоянием 
                  и подобрала отличную программу по уходу за кожей. Результат превзошёл ожидания!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий К.</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Андрей Николаевич составил индивидуальную программу питания и фитооздоровления. 
                  За 2 месяца сбросил 12 кг и чувствую себя намного лучше. Спасибо!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ольга П.</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Привела сына к логопеду. Анна Сергеевна нашла подход к ребёнку с первого занятия. 
                  Речь заметно улучшилась! Очень благодарны центру 'Линия Жизни'."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Записаться на приём</h3>
              <p className="text-lg text-muted-foreground">Оставьте заявку и мы свяжемся с вами</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Славянск-на-Кубани</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <a href="tel:89298300555" className="text-primary hover:underline">
                        8 (929) 830-05-55
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Форма записи</CardTitle>
                </CardHeader>
                <CardContent>
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
                      <Textarea
                        placeholder="Сообщение (опционально)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">Линия Жизни</p>
                <p className="text-sm text-white/70">Оздоровительный центр</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/70">г. Славянск-на-Кубани</p>
              <a href="tel:89298300555" className="text-primary hover:underline">
                8 (929) 830-05-55
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm text-white/70">
            <p>© 2024 Линия Жизни. Все услуги являются бытовыми (не медицинскими)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;