---
layout: post
title: "Evidence on AI R&D Progress from NanoGPT"
date: 2026-04-21
description: "How much are AI agents accelerating AI R&D, and how is that changing over time? The NanoGPT speedrun leaderboard is one source of evidence: a public, cumulative record of pretraining optimizations contributed by humans and, recently, by agents."
tags:
  - AI R&D
  - evals
external_url: https://metr.org/notes/2026-04-21-ai-rd-nanogpt-progress/
---

We want to measure and understand how much AI agents can accelerate AI R&D and how this is changing over time. There's no single clean way to do this, but cumulative public leaderboards on tasks that map to real research are a useful kind of evidence. They give a long history of human contributions to compare against, and recently, agent contributions too.

The NanoGPT speedrun is one such leaderboard. The goal is to train a language model to a target validation loss on FineWeb using 8×H100 GPUs as fast as possible. It's a small-scale version of LLM pretraining with a public history of contributions, four of them credited to AI agents as of April 2026. The optimization activities map onto real pretraining research: architecture changes, writing kernels, improving optimizers. Some contributions, like the Muon optimizer, have already made their way into frontier-scale models like GLM-4.5 and Kimi K2.

With the help of Claude Code, I went through each of the 77 records submitted between May 2024 and March 2026, covering 36 contributors and a 31× cumulative speedup, and classified them along two dimensions: how innovative the contribution is, and where the underlying idea came from. The full note works through what can and can't be concluded from this data, including caveats around contamination, survivorship bias, scale-dependence between speedrun-scale and frontier-scale training, and how pretraining acceleration composes with the rest of the research loop.

[Read the full note on metr.org →]({{ page.external_url }})
