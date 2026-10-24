---
layout: post
title: "An Apple-Picking Model of AI R&D"
date: 2026-04-07
description: "In this note we describe a simple apple-picking model of AI R&D, to help measure the contribution that autonomous agents are making."
tags:
  - AI R&D
  - economics
  - forecasting
external_url: https://tecunningham.github.io/posts/2026-03-13-apple-picking-ai.html
---

*Tom Cunningham, Manish Shetty*

Many people are talking about how AI is autonomously able to contribute to frontier R&D, yet it’s only picking low-hanging fruit: Andrej Karpathy, Terence Tao, Nathan Lambert, Ryan Greenblatt.

In this note we describe a simple apple-picking model of AI R&D, to help measure the contribution that autonomous agents are making.

The model takes the metaphor literally: an AI agent helping you to optimize an algorithm is like a robot helping you pick apples. It will take care of all the apples up to a certain height, and it may find apples you haven’t found yet, but there will still be apples out of its reach.

The model implies that agents can push the frontier forward, but the returns will sharply diminish. It also implies we can measure an agent’s ability with a human-equivalent time horizon, e.g. as of March 2026 agents seem to be able to find optimizations on frontier algorithms worth about 1 week of professional human labor, yet those effects are not additive. You can’t get two weeks labor by running an agent twice.


- The agent will make quicker progress than the human at first, but eventually get overtaken (tortoise-hare dynamics)
- The agent will be able to accumulate more apples (leave fewer unpicked) if they start from a stronger human starting point

The apple-picking model implies a different pattern: for each model generation, agents will autonomously advance the frontier, but they will then quickly hit diminishing returns. When the marginal returns to human and agent expenditure are equalized, then we will return to investment in human optimization.

[Read the full note on tecunningham.github.io →]({{ page.external_url }})
