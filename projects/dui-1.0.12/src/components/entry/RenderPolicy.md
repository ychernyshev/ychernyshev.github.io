# RenderPolicy.md

## Принцип
Жоден компонент не рендериться без цілі, контексту і права.

## 🎯 Мотивації рендерингу
- `AccessLevel`: Який рівень доступу має користувач?
- `SceneContext`: Який режим (перегляд / редагування / обговорення)?
- `RenderFlags`: Чи ввімкнено/вимкнено рендерінг в Dispatcher?
- `RenderTarget`: Де компонент рендериться? (Main, Sidebar, Modal)
- `Mode`: Active / Passive / Hidden

## ⚙️ Компоненти

### EntriesList
- `Mode`: Passive
- `Render`: Якщо `RenderFlags.entriesList = true`
- `Notes`: Може бути hidden (`style=none`), або логічно вимкнений

### EditEntry
- `Mode`: Active
- `Access`: Якщо `AccessLevel ≥ edit`
- `Render`: При `SceneContext = 'discussion'` або `'entry-edit'`

### ShowEntry
- `Mode`: Passive
- `Access`: Якщо `AccessLevel ≥ view`
- `Render`: При `SceneContext = 'entry-view'`

## 🧩 Особливі ситуації
- `SilentComponents`: Рендеряться для логіки, не видимі
- `RenderBlock`: Тимчасова заборона рендеру з причини

## 🔐 Приклад Dispatcher-політики
```js
dispatcher.renderPolicy = {
  entriesList: false,
  showEntry: false,
  editEntry: true
};
```

## Ідеологія

Нічого не виводиться без причини. Кожен рендер — це наслідок логіки, режиму, ролі.