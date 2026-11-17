---
title: "Uncrumple: working backwards from a crumpled sheet to the forces that made it"
date: 2026-11-04
---

For Meta's AI developer hackathon, my team and I built **Uncrumple**, a tool that predicts the forces that crumpled a thin sheet from just two photos.

Thin sheets bend much more easily than they stretch, which is why they crumple instead of deforming smoothly. Knowing which forces caused a crumple matters for things like crash safety, airbags and packaging.

We trained a neural network on physics simulations, then built a camera pipeline so it works on real photos: SAM 3.1 finds the sheet, VGGT lifts it into 3D, and the model predicts the forces. We check each prediction by re-simulating it.

- [Try the demo](https://uncrumple-demo.vercel.app)
- [Code on GitHub](https://github.com/NickArmstrong04/uncrumple)

<!-- TODO: add the YouTube demo video here once we have the URL. -->
