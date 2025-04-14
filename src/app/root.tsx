import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'My Remix App' }];
};

export default function App() {
  return (
    <div>
      <h1>Hello, React + TypeScript + Remix! 👋</h1>
      <p>Проект успешно настроен 🎉</p>
    </div>
  );
}
