---
layout: post
title: "Expenditure Horizon: Measuring Optimization Ability"
date: 2026-07-21
description: "A new way to measure how good AI agents are at open-ended optimization: find the dollar amount at which human and agent effort buy the same amount of progress. Applied to the NanoGPT speedrun."
tags:
  - AI R&D
  - evals
  - software optimization
external_url: https://metr.org/blog/2026-07-21-expenditure-horizon/
---

Most capability benchmarks are pass/fail: did the agent solve the task or not. Optimization problems don't fit that mold. There is always a little more speed to find, and the interesting question is how much progress an agent buys per dollar compared to a human doing the same work.

With Tom Cunningham, Vincent Cheng, and Nate Rush, we propose the *expenditure horizon*: the level of spending at which autonomous agent effort and human effort achieve the same progress on an optimization problem. Using the public history of the NanoGPT speedrun, we estimate that a marginal 1% speedup costs roughly \\$2,500 of human labor, then run frontier agents on the same problem and compare their returns to spend.

The agents' expenditure horizons range from \\$0 to about \\$3,300. Weaker models mostly chase noise and make no real improvements. Stronger models make modest but genuine contributions, yet fall behind human effort once spending passes about \\$10K. The takeaway is that autonomous optimization by agents currently has minimal effect on AI R&D progress in NanoGPT. The post also covers where the method breaks down: it measures autonomous work only, it works best when returns to labor are smooth, and horizons shrink on problems that earlier agents have already optimized.

[Read the full post on metr.org →]({{ page.external_url }})
