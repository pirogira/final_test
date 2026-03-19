# Modern Next.js Landing

Современный лендинг на Next.js (App Router) с адаптивной версткой, анимациями и управлением контентом через Headless CMS.

## Технологический стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Sanity.io (Headless CMS)
- GROQ (`next-sanity`)

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

5. Откройте приложение:
- сайт: `http://localhost:3000`
- админка Sanity Studio: `http://localhost:3000/studio`

## CMS (Sanity) — управление Home

- В админке откройте документ `Home`.
- Заполните тексты, изображения и `Meta Description (SEO)`.
- Редактируйте порядок блоков в массиве `Modules` — порядок автоматически применяется на фронтенде.

## GitHub доступ

- Доступ для пользователя `dancha24` предоставлен.
