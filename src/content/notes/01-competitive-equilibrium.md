---
title: "Competitive equilibrium and surplus"
description: "Derive the equilibrium of a linear market, then measure the gains from trade with consumer and producer surplus."
date: 2026-06-10
draft: true
order: 1
---

A market clears when buyers and sellers face the same price and neither side wants to change behaviour. Before any algebra, the idea is simple: at a high price sellers offer more than buyers want; at a low price buyers want more than sellers offer; somewhere in between, plans are consistent. This note makes that point exact for the linear case used throughout the course, and then measures *how much* the market accomplishes.

## The linear market

Inverse demand and inverse supply are

$$
P = a - bQ \qquad \text{and} \qquad P = c + dQ,
$$

with $a > c \ge 0$, $b > 0$, $d > 0$. The intercept $a$ is the most any buyer is willing to pay; $c$ is the lowest price at which any seller is willing to produce.

## Equilibrium

Setting the two prices equal,

$$
a - bQ = c + dQ
\quad\Longrightarrow\quad
Q^* = \frac{a - c}{b + d},
\qquad
P^* = a - bQ^*.
$$

Since $a > c$, we have $Q^* > 0$: there are mutually beneficial trades, and the market finds them. (When $a = c$ the curves meet on the price axis and $Q^* = 0$ — the degenerate case shown as $0.00$ in [Tool 2](../../competitive_equilibrium.html).)

## Consumer surplus

A buyer who would have paid $P = a - bQ$ for the $Q$-th unit, but pays only $P^*$, gains the difference. Adding these gains over all units traded,

$$
CS = \int_0^{Q^*} \big[(a - bQ) - P^*\big]\, \mathrm{d}Q = \tfrac{1}{2}\,(a - P^*)\,Q^*,
$$

the area of the triangle between the demand curve and the price line.

## Producer surplus

Symmetrically, the seller of the $Q$-th unit would have accepted $c + dQ$ but receives $P^*$:

$$
PS = \int_0^{Q^*} \big[P^* - (c + dQ)\big]\, \mathrm{d}Q = \tfrac{1}{2}\,(P^* - c)\,Q^*.
$$

## Total surplus

$$
\begin{aligned}
TS &= CS + PS \\
   &= \tfrac{1}{2}(a - P^*)Q^* + \tfrac{1}{2}(P^* - c)Q^* \\
   &= \tfrac{1}{2}(a - c)\,Q^*.
\end{aligned}
$$

Notice that $P^*$ drops out: total surplus depends only on the gap between the curves and the quantity traded. The price decides how the pie is *divided*; the quantity decides how *large* the pie is. This is why every policy tool in the course — price controls, taxes, tariffs — works by changing $Q$, and why each distortion shows up as a deadweight-loss triangle.

---

**Try it yourself.** Open [Tool 2](../../competitive_equilibrium.html), set $a = 80$, $b = 0.8$, $c = 20$, $d = 1.2$, and verify: $Q^* = 30$, $P^* = 56$, $CS = 360$, $PS = 540$, $TS = 900$.
