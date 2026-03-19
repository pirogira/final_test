# Modern Next.js Landing

Современный лендинг на Next.js (App Router) с адаптивной версткой и анимациями.

## Технологический стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Запуск проекта

1. Установите Node.js LTS (рекомендуется 20+).
2. Установите зависимости:

```bash
npm install
```

3. Создайте файл `.env.local` на основе `.env.example` и заполните значения:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

4. Запустите dev-сервер:

```bash
npm run dev
```

5. Откройте приложение: `http://localhost:3000`

## GitHub Pages

- Проект переведен в статический режим (`output: "export"`).
- При пуше в `main` деплой запускается автоматически через GitHub Actions.
- Workflow: `.github/workflows/deploy-gh-pages.yml`
- Для репозитория `final_test` сайт публикуется по адресу:
  `https://pirogira.github.io/final_test/`

## GitHub доступ

- Доступ для пользователя `dancha24` предоставлен.
