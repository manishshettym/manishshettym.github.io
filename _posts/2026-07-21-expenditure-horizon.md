---
layout: post
title: "Expenditure Horizon: Measuring Optimization Ability"
date: 2026-07-21
description: "We propose a measure of an AI agent’s optimization ability with an “expenditure horizon.” We give an empirical illustration from the NanoGPT speedrun."
tags:
  - AI R&D
  - evals
  - software optimization
external_url: https://metr.org/blog/2026-07-21-expenditure-horizon/
---

*Tom Cunningham, Manish Shetty, Vincent Cheng, Nate Rush*

We propose a measure of an AI agent’s optimization ability with an “expenditure horizon.” We give an empirical illustration from the NanoGPT speedrun.

One difficulty in measuring AI’s ability to accelerate AI R&D is accounting for token cost, experiment compute cost and human labor cost. If we can estimate performance as a function of cost for both humans and agents, we can measure the “expenditure horizon” as the point at which those curves cross: the budget at which humans become more cost-effective than AIs. We illustrate our method with data from the NanoGPT speedrun. We first estimate the returns to human effort in optimizing NanoGPT: on the margin, each 1% improvement costs very roughly \\$2,500 in human labor. We also report the status of preliminary agentic optimization runs against NanoGPT: after more than \\$10K of expenditure we estimate expenditure horizons of \\$0-\\$3K.

We define an agent’s “expenditure horizon” over an optimization problem as the dollar value at which the improvement to the goal metric is equal to the improvement by a human with the same budget.

This is a generalization of AI R&D benchmarks which use binary thresholds based on the average human time to achieve a certain score, e.g. RE-bench, MLE-bench, etc. Expenditure horizon differs from these reports in a few ways:

- Reporting a continuous score, instead of a binary score, gives a much more statistically precise measure of capability for each task, i.e. differences between models can be detected with fewer observations.
- Testing against frontier optimization problems, that have already been extensively optimized by humans, makes the outcome more interpretable for real-world usefulness.
- Reporting the scaling curve makes the outcome more relevant to real-world acceleration, e.g. see Noam Brown’s recent exhortation to report scaling curves in benchmarks.

[Read the full post on metr.org →]({{ page.external_url }})
