---
layout: post
title: "Production Functions and their Forms"
date: 2025-02-12
description: "Notes and intuitions on economic growth models, functional forms, and how they connect to forecasting AI progress. Part of a series on economics basics for AI forecasting."
tags:
  - economics
  - AI progress
  - forecasting
  - growth models
  - functional forms
---

I'm learning some basics in economic models, functional forms, and forecasting. Particularly, how they can be used to study AI progress today. My aim is to build intuition that carries over to work on AI evaluation, timelines, and capability forecasting. This is the first part of a series of posts on this topic.

Economic growth models formalize how quantities (output, capital, productivity) evolve over time. They rely on specific **functional forms**, equations that relate variables. Those choices drive extrapolation and forecasts. Similarly, AI progress is often modeled with chosen functional forms (e.g., scaling laws, S-curves, Cobb-Douglas). Understanding how economists choose and critique functional forms from the ground up is directly useful for critiquing and improving AI forecasting models.

---

## Production Functions

**Definition**: A production function is a function that describes the relationship between the inputs to a production process and the output of that process.

Consider a bakery that bakes bread. One can model it as:

- Labor (L): bakers working
- Capital (K): ovens, mixers, machines, workspace, etc.
- Output (Y): loaves of bread

A production function $Y = f(L, K)$ describes the relationship between the inputs and output. We will use this notation and simple example to illustrate concepts throughout this post. At the end, we should be able to translate this to models for AI progress with factors like compute, researchers, ideas, etc.

### Linear

The simplest production function is a linear one: $Y = a \cdot K + b \cdot L$. Each oven produces some fixed amount of bread. Each baker produces some fixed amount of bread. The total output is just the sum of the two.

A key property of a linear function is **perfect substitutability**. If you lose a baker, you can fully compensate by adding more ovens (read: an automated bread-baking machine). That is, the inputs are interchangeable. However, this is unrealistic for most situations: a bakery with only ovens is not very productive.

### Cobb-Douglas

A more realistic production function is the Cobb-Douglas form, developed by Charles Cobb and Paul Douglas in 1928.

It is a power function: $Y = A \cdot K^{\alpha} \cdot L^{1-\alpha}$, where:

- Y = total output (bread, GDP)
- A = total factor productivity (how good you are at combining inputs)
- $\alpha$ = capital's share of output

Some properties of this function:

1. **Constant returns to scale**: If you double *both* K and L, you exactly double the output. Here's a quick derivation:

    <div class="math-block">
    \[
    A \cdot (2K)^{\alpha} \cdot (2L)^{1-\alpha} = A \cdot 2^{\alpha} K^{\alpha} \cdot 2^{1-\alpha} L^{1-\alpha} \\
    = 2 \cdot A \cdot K^{\alpha} \cdot L^{1-\alpha} = 2Y
    \]
    </div>

    This feels intuitive: two identical bakeries produce twice as much bread as one.

2. **Diminishing returns to each input**: If you keep adding ovens but don't hire more bakers, each additional oven adds less and less output. This is because $\alpha < 1$, so $K^{\alpha}$ grows slower than $K$. [^1]

3. **Inputs are complementary**: Since the inputs are multiplied, both K and L must contribute. K=1000 and L=0 $\implies$ Y=0. Unlike the linear model, you cannot substitute one for another here.

> A quick pause here on how this relates to studying AI progress.
> If AI is purely "capital" (K), then Cobb-Douglas says that no matter how much AI you deploy, you'll hit diminishing returns unless you also increase human labor (L). **Unless you change the rules a bit, as we'll explore next**.


## Properties of Production Functions

In what follows, we'll explore two properties of production functions that could help growth circumvent the diminishing returns bottleneck.

### Returns to Scale

**Definition**: **Returns to scale** describes what happens when you scale up *all* inputs proportionally. Here are some versions of returns to scale:

- Constant (CRS): doubling all inputs doubles output. Cobb-Douglas has CRS.
- Increasing (IRS): doubling all inputs more than doubles output.
- Decreasing (DRS): doubling all inputs less than doubles output.

#### A case for unbounded growth with AI

Of these, the increasing returns case is the most consequential because it opens the door to a feedback loop for accelerating growth. **If you have increasing returns to accumulable inputs, you can have unbounded growth**. An accumulable input is one that you can invest in and grow, such as physical capital (factories, machines, etc.) or the talk-of-the-town: AI workers. Human labor, on the other hand, is not accumulable. [^2]

In standard Cobb-Douglas, the non-accumulable input (human labor L) acts as a bottleneck on growth as we discussed earlier. We get diminishing returns to capital alone, so growth settles to a steady rate that's governed by how fast technology improves (A).

However, one can argue that *AI makes labor accumulable*. If you model AI as a worker, you can just build more workers. Under this view, all inputs are accumulable and growth can accelerate without limit.

### Elasticity of substitution

**Definition**: Elasticity measures how sensitive one variable is to changes in another (ratio of their % changes).[^3] The form we care about is the **elasticity of substitution** $\sigma$: if the relative price of K vs. L changes, how much does the ratio K/L shift (holding output constant)? In other words, how easily can you swap one input for the other at constant output?

- $\sigma = 0$ (perfect complements): one input cannot substitute for the other.[^4]
- $\sigma = 1$ (unit elasticity): moderate substitution between inputs.
- $\sigma = \infty$ (perfect substitutes): inputs are freely interchangeable.

#### Interpreting elasticity of substitution for AI-human labor

Cobb-Douglas bakes in $\sigma = 1$. For AI, this is the assumption about how easily AI labor can replace human labor. If $\sigma$ is low, even very cheap AI can't displace humans because the inputs are complementary. If $\sigma$ is high, cheap AI rapidly takes over human tasks.

## Taking Stock

So far we've covered some basic building blocks: production functions and that the choice of their functional form encodes strong assumptions. We then explored Cobb-Douglas, a common functional form that is used to model AI progress. We then explored two properties that could help circumvent the diminishing returns bottleneck: returns to scale and elasticity of substitution ($\sigma$).

However, to forecast AI progress and takeoff, it turns out that deciding $\sigma$ is key. To let it vary, we would need a more flexible functional form. To see how growth feeds back on itself (e.g., AI producing better AI), we'll need dynamic production functions. We'll explore these ideas in the next post.


[^1]: For instance, if $\alpha = 0.3$, then for K in [2, 10, 100], we get nearly $1.2\times$, $2\times$, and $4\times$ increase in contribution to output, respectively.

[^2]: One can posit this particularly due to slow population growth and demographic transitions.

[^3]: Elasticity is just a unit-free way to ask "if I wiggle this thing, how much does that other thing move?" The classic example is price elasticity of demand: if coffee goes up 10% in price and you buy 20% less, the elasticity is 2. You're quite sensitive to price. Elasticity of substitution applies the same idea to two production inputs.

[^4]: Also called "Leontief" after Wassily Leontief, who won the Nobel Prize in Economics for his work on input-output models. Inputs in this context must be used in fixed proportions. A neat example is shoes: extra left shoes are worthless unless a matching right shoe exists.