import {
  ChevronDown,
  CircleArrowOutUpRight,
  CircleCheck,
  Clock3,
  Menu,
  Phone,
  Search,
  ShieldCheck
} from "lucide-react";
import Container from "@/components/ui/Container";

const serviceItems = [
  "Проверить готовность документов РВП",
  "Проверить готовность документов ВНЖ",
  "Проверка наличия российских прав (ФССП)",
  "Проверить действительность разрешения на работу и патента",
  "Узнать индивидуальный номер налогоплательщика (ИНН)",
  "Проверить наличие основания для запрета въезда в РФ",
  "Запись в миграционный центр Сахарово",
  "Наличие исполнительных производств"
];

export default function MigrationLanding() {
  return (
    <main className="bg-[#edf0f4] py-2 sm:py-4">
      <Container>
        <div className="overflow-hidden rounded-xl border border-[#d8deea] bg-white shadow-sm">
          <header className="border-b border-[#e6eaf1]">
            <div className="flex items-center justify-between px-3 py-2 sm:px-4">
              <div className="text-lg font-extrabold tracking-tight text-[#12439b]">
                МИГ<span className="text-[#e03a3e]">ГРАПРО</span>
              </div>
              <div className="hidden items-center gap-3 text-sm text-[#4c5c79] md:flex">
                <Search size={16} />
                <span>+7 (999) 888-88-88</span>
                <button className="rounded bg-[#dc1e26] px-3 py-1.5 text-xs font-semibold text-white">
                  Бесплатная консультация
                </button>
              </div>
              <button className="rounded p-2 text-[#133f8b] md:hidden">
                <Menu size={18} />
              </button>
            </div>

            <nav className="hidden border-t border-[#eef1f6] px-4 py-2 text-[0.78rem] font-medium text-[#4e5e79] md:flex md:items-center md:gap-6">
              <span className="inline-flex items-center gap-1">
                Услуги <ChevronDown size={14} />
              </span>
              <span>РВП</span>
              <span>ВНЖ</span>
              <span>Гражданство</span>
              <span>Разрешение на работу/виза в РФ</span>
              <span>Отзывы эмигрантов</span>
              <span>Информация</span>
            </nav>
          </header>

          <section className="p-3 sm:p-4 md:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <h1 className="max-w-xl text-[clamp(1.55rem,3.1vw,2.6rem)] font-extrabold leading-tight text-[#123b86]">
                  Миграционные услуги в Москве и Московской области
                </h1>

                <div className="overflow-hidden rounded-2xl bg-[#d7deea]">
                  <div className="h-[11.2rem] bg-[linear-gradient(135deg,#6076a1,#2f446f)] sm:h-[14rem] md:h-[17rem]" />
                </div>
              </div>

              <div className="space-y-3 rounded-2xl bg-[#eff3fa] p-4 md:p-5">
                <h2 className="text-[clamp(1.1rem,2vw,1.8rem)] font-extrabold leading-tight text-[#1e2b43]">
                  Помогаем иностранным гражданам в оформлении квоты на РВП, РВПО,
                  РВП, ВНЖ, гражданства РФ
                </h2>
                <p className="text-sm leading-relaxed text-[#5a6a87]">
                  А также организациям, привлекающим иностранных сотрудников в
                  России при оформлении визы для сотрудников по квоте и без квот.
                </p>
                <button className="rounded bg-[#dc1e26] px-5 py-2 text-sm font-semibold text-white">
                  Задать вопрос
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-2 text-[0.79rem] text-[#203154] sm:grid-cols-3">
              <p className="inline-flex items-center gap-2 rounded-lg bg-[#f4f7fc] px-3 py-2">
                <CircleCheck size={16} className="text-[#2d62bd]" /> Опытные
                специалисты
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-[#f4f7fc] px-3 py-2">
                <ShieldCheck size={16} className="text-[#2d62bd]" /> Комплексная
                юридическая поддержка
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-[#f4f7fc] px-3 py-2">
                <Clock3 size={16} className="text-[#2d62bd]" /> Гарантия
                правильности оформления
              </p>
            </div>
          </section>

          <section className="border-t border-[#e7ebf3] px-3 pb-5 pt-4 sm:px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-[#e3e8f1] p-4">
                <h3 className="text-[1.05rem] font-bold text-[#263550]">
                  Организациям
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64738e]">
                  Полный спектр правовой поддержки для компаний, нанимающих
                  иностранных специалистов в России, включая подготовку виз и
                  разрешительной документации.
                </p>
                <button className="mt-3 w-full rounded bg-[#2c62bc] py-2 text-sm font-semibold text-white">
                  Узнать подробнее
                </button>
              </article>
              <article className="rounded-xl border border-[#e3e8f1] p-4">
                <h3 className="text-[1.05rem] font-bold text-[#263550]">
                  Иностранным гражданам
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64738e]">
                  Консультации и помощь иностранным гражданам с процессом
                  получения РВП (разрешения на временное проживание), ВНЖ (вида
                  на жительство) и гражданства РФ.
                </p>
                <button className="mt-3 w-full rounded bg-[#2c62bc] py-2 text-sm font-semibold text-white">
                  Узнать подробнее
                </button>
              </article>
            </div>
          </section>

          <section className="border-t border-[#e7ebf3] px-3 pb-6 pt-4 sm:px-4 md:px-6">
            <h2 className="text-[clamp(1.2rem,2.4vw,2rem)] font-extrabold uppercase leading-tight text-[#232e42]">
              Государственные онлайн сервисы для иностранных граждан
            </h2>
            <p className="mt-2 text-xs text-[#7a879f]">
              Здесь вы можете получить необходимую информацию для оформления РВП,
              ВНЖ и Российского гражданства
            </p>

            <div className="mt-4 grid gap-0 overflow-hidden rounded-xl border border-[#e3e8f1] md:grid-cols-2">
              {serviceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[#edf1f6] px-4 py-3 text-sm text-[#3b4a67] last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-[#edf1f6]"
                >
                  <span>{item}</span>
                  <CircleArrowOutUpRight size={14} className="text-[#7d8ba2]" />
                </div>
              ))}
            </div>
          </section>

          <footer className="border-t border-[#e7ebf3] bg-[#f8f9fc] px-3 py-5 sm:px-4 md:px-6">
            <div className="grid gap-5 md:grid-cols-[1.2fr_2fr_1fr]">
              <div>
                <p className="text-lg font-extrabold text-[#12439b]">
                  МИГ<span className="text-[#e03a3e]">ГРАПРО</span>
                </p>
                <p className="mt-2 text-xs text-[#6b7891]">
                  Московская область, Одинцово, ул. Новослободская, д.4, к4
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#2b3b58]">
                  <Phone size={14} /> +7 (999) 888-88-88
                </p>
              </div>

              <div className="grid gap-2 text-xs text-[#51617e] sm:grid-cols-3">
                <p>Получить РВП в РФ</p>
                <p>Получить ВНЖ в РФ</p>
                <p>Гражданство РФ</p>
                <p>Получить РВП в Крыму</p>
                <p>Получить ВНЖ по браку</p>
                <p>Гражданство РФ в общих случаях</p>
                <p>Получить РВП по браку</p>
                <p>Получить ВНЖ по ребенку</p>
                <p>Гражданство РФ в упрощенном порядке</p>
              </div>

              <div className="flex items-end md:justify-end">
                <button className="w-full rounded bg-[#dc1e26] px-4 py-2 text-sm font-semibold text-white md:w-auto">
                  Помощь специалиста
                </button>
              </div>
            </div>
          </footer>
        </div>
      </Container>
    </main>
  );
}
