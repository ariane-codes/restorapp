# RestorApp

## Project Structure

```text
restorapp/
├── src/
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── brand/
│   │   │   │   └── [brand related assets]
│   │   │   └── img/
│   │   │       └── [other images]
│   │   ├── components/
│   │   │   └── [components used by multiple routes]
│   │   ├── firebase/
│   │   │   ├── firebase.client.ts
│   │   │   └── firebase.server.ts
│   │   ├── models/
│   │   │   ├── categories.ts
│   │   │   ├── restaurant.ts
│   │   │   └── tags.ts
│   │   └── utils/
│   │       ├── apiUtils.ts
│   │       ├── authUtils.ts
│   │       └── formUtils.ts
│   ├── routes/
│   │   ├── login/
│   │   │   └── [login related route files]
│   │   ├── logout/
│   │   │   └── [logout server-side api]
│   │   ├── restaurants/
│   │   │   └── [restaurant related route files]
│   │   ├── signup/
│   │   │   └── [signup related route files]
│   │   ├── +layout.server.ts
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── theme
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   └── hooks.server.ts
├── static
└── tests
```
