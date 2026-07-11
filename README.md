# remotion-videos

Programmatic video templates and renders using [Remotion](https://www.remotion.dev/).

## Quick Start

```bash
cd D:\\hermes\\remotion-videos
npm install
npm start        # Open Remotion Studio
npm run build    # Render out/video.mp4
```

## Project Structure

```
remotion-videos/
├── src/
│   ├── index.ts      # registerRoot
│   ├── Root.tsx      # Composition definitions
│   └── HelloVideo.tsx # Sample video component
├── package.json
├── tsconfig.json
└── out/              # Rendered videos
```

## Add a New Video

1. Create a component in `src/`.
2. Register it in `src/Root.tsx` with a `<Composition ... />`.
3. Update `npm run build` to target the new composition ID.
